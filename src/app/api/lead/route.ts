import { NextRequest, NextResponse } from "next/server";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface LeadPayload {
  projeto: string;
  ambientes: string[];
  cidade: string;
  investimento: string;
  prazo: string;
}

// ─── Labels legíveis ──────────────────────────────────────────────────────────

const PROJETO_LABELS: Record<string, string> = {
  completo:     "Projeto executivo completo",
  planta:       "Tem planta, sem detalhamento",
  "sem-projeto": "Sem projeto",
  pesquisa:     "Fase de pesquisa",
};

const AMBIENTE_LABELS: Record<string, string> = {
  cozinha:   "Cozinha",
  quarto:    "Quarto / Suíte",
  closet:    "Closet / Guarda-roupa",
  home:      "Home Office",
  sala:      "Sala de Estar / Jantar",
  gourmet:   "Área Gourmet",
  banheiro:  "Banheiro",
  comercial: "Comercial / Escritório",
};

const INVESTIMENTO_LABELS: Record<string, string> = {
  ate10:      "Até R$ 10.000",
  "10a20":    "R$ 10.000 – R$ 20.000",
  "20a35":    "R$ 20.000 – R$ 35.000",
  "35a60":    "R$ 35.000 – R$ 60.000",
  acima60:    "Acima de R$ 60.000",
  indefinido: "Indefinido",
};

const PRAZO_LABELS: Record<string, string> = {
  urgente: "Urgente (até 1 mês)",
  ate3m:   "Breve (1 a 3 meses)",
  ate6m:   "Tranquilo (3 a 6 meses)",
  mais6m:  "Planejando (mais de 6 meses)",
};

// ─── Helpers Monday ───────────────────────────────────────────────────────────

function buildItemName(payload: LeadPayload): string {
  const ambientesStr = payload.ambientes
    .slice(0, 2)
    .map(a => AMBIENTE_LABELS[a] ?? a)
    .join(" + ");
  const cidade = payload.cidade.trim() || "—";
  return `Lead — ${ambientesStr || "Site"} · ${cidade}`;
}

function buildNoteText(payload: LeadPayload): string {
  const linhas = [
    "🌐 *Lead gerado pelo formulário do site*",
    "",
    `📋 Projeto existente: ${PROJETO_LABELS[payload.projeto] ?? payload.projeto}`,
    `🏠 Ambientes: ${payload.ambientes.map(a => AMBIENTE_LABELS[a] ?? a).join(", ")}`,
    `📍 Localidade: ${payload.cidade}`,
    `💰 Investimento pretendido: ${INVESTIMENTO_LABELS[payload.investimento] ?? payload.investimento}`,
    `📅 Prazo estimado: ${PRAZO_LABELS[payload.prazo] ?? payload.prazo}`,
  ];
  return linhas.join("\n");
}

// Mapeia faixa de investimento para valor numérico central (para coluna de orçamento)
function investimentoToNumber(value: string): number | null {
  const map: Record<string, number> = {
    ate10:      5000,
    "10a20":    15000,
    "20a35":    27500,
    "35a60":    47500,
    acima60:    70000,
    indefinido: 0,
  };
  return map[value] ?? null;
}

// ─── Mutation Monday.com (GraphQL) ────────────────────────────────────────────

async function createMondayLead(payload: LeadPayload): Promise<{ id: string }> {
  const token   = process.env.MONDAY_API_TOKEN;
  const boardId = process.env.MONDAY_BOARD_ID;
  const groupId = process.env.MONDAY_GROUP_ID; // "leads_site" após criação do grupo

  if (!token || !boardId) {
    throw new Error("Variáveis MONDAY_API_TOKEN e MONDAY_BOARD_ID não configuradas.");
  }

  const itemName    = buildItemName(payload);
  const noteText    = buildNoteText(payload);
  const orcamento   = investimentoToNumber(payload.investimento);
  const hoje        = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  // Monta os valores das colunas.
  // Os IDs abaixo são os padrões mais comuns — ajuste conforme os IDs reais do seu board.
  // Para descobrir os IDs: monday.com → board → Integração → API → inspecionar colunas.
  const columnValues: Record<string, unknown> = {
    // Status principal
    status: { label: "Em análise" },
    // Data do primeiro contato
    date4: { date: hoje },
    // Localidade / cidade
    location: { address: payload.cidade },
    // Fase do pipeline
    pipeline_stage: { label: "Diagnóstico e 1ª Visita" },
  };

  // Orçamento numérico (só adiciona se tiver valor)
  if (orcamento) {
    columnValues["numbers"] = orcamento;
  }

  const mutation = `
    mutation CreateLead($boardId: ID!, $groupId: String, $itemName: String!, $columnValues: JSON!) {
      create_item(
        board_id: $boardId
        group_id: $groupId
        item_name: $itemName
        column_values: $columnValues
      ) {
        id
      }
    }
  `;

  const variables = {
    boardId,
    groupId: groupId ?? null,
    itemName,
    columnValues: JSON.stringify(columnValues),
  };

  const res = await fetch("https://api.monday.com/v2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      "API-Version": "2024-01",
    },
    body: JSON.stringify({ query: mutation, variables }),
  });

  const json = await res.json() as { data?: { create_item?: { id: string } }; errors?: unknown[] };

  if (json.errors) {
    throw new Error(`Monday API errors: ${JSON.stringify(json.errors)}`);
  }

  const itemId = json.data?.create_item?.id;
  if (!itemId) throw new Error("Monday não retornou item ID.");

  // Adiciona update/nota com todas as respostas
  const updateMutation = `
    mutation AddNote($itemId: ID!, $body: String!) {
      create_update(item_id: $itemId, body: $body) { id }
    }
  `;

  await fetch("https://api.monday.com/v2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      "API-Version": "2024-01",
    },
    body: JSON.stringify({
      query: updateMutation,
      variables: { itemId, body: noteText },
    }),
  });

  return { id: itemId };
}

// ─── Handler da rota ──────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json() as LeadPayload;

    // Validação mínima
    if (!payload.cidade || !payload.projeto || !payload.investimento || !payload.prazo) {
      return NextResponse.json(
        { error: "Dados incompletos." },
        { status: 400 }
      );
    }

    const result = await createMondayLead(payload);

    return NextResponse.json({ ok: true, monday_item_id: result.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erro desconhecido";
    console.error("[/api/lead]", message);

    // Retorna 200 mesmo em erro para não bloquear o fluxo do cliente —
    // ele ainda consegue ir ao WhatsApp. O erro fica apenas no log do servidor.
    return NextResponse.json({ ok: false, error: message }, { status: 200 });
  }
}
