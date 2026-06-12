import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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

// ─── Mutation Monday.com (GraphQL) ────────────────────────────────────────────

async function createMondayLead(payload: LeadPayload): Promise<{ id: string }> {
  const token   = process.env.MONDAY_API_TOKEN;
  const boardId = process.env.MONDAY_BOARD_ID;
  const groupId = process.env.MONDAY_GROUP_ID; // "leads_site" após criação do grupo

  if (!token || !boardId) {
    throw new Error("Variáveis MONDAY_API_TOKEN e MONDAY_BOARD_ID não configuradas.");
  }

  const itemName = buildItemName(payload);
  const noteText = buildNoteText(payload);

  const mutation = `
    mutation CreateLead($boardId: ID!, $groupId: String, $itemName: String!) {
      create_item(
        board_id: $boardId
        group_id: $groupId
        item_name: $itemName
      ) {
        id
      }
    }
  `;

  const variables = {
    boardId,
    groupId: groupId ?? null,
    itemName,
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

// ─── Supabase ─────────────────────────────────────────────────────────────────

async function saveToSupabase(payload: LeadPayload, mondayItemId: string | null) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn("[/api/lead] SUPABASE_URL ou SUPABASE_SERVICE_KEY não configurados.");
    return;
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { error } = await supabase.from("leads").insert({
    projeto:        payload.projeto,
    ambientes:      payload.ambientes,
    cidade:         payload.cidade,
    investimento:   payload.investimento,
    prazo:          payload.prazo,
    monday_item_id: mondayItemId,
  });

  if (error) {
    console.error("[/api/lead] Supabase insert error:", error.message);
  }
}

// ─── Handler da rota ──────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json() as LeadPayload;

    if (!payload.cidade || !payload.projeto || !payload.investimento || !payload.prazo) {
      return NextResponse.json({ error: "Dados incompletos." }, { status: 400 });
    }

    // Executa Monday e Supabase em paralelo — falha de um não bloqueia o outro
    const [mondayResult] = await Promise.allSettled([
      createMondayLead(payload),
    ]);

    const mondayItemId = mondayResult.status === "fulfilled" ? mondayResult.value.id : null;

    if (mondayResult.status === "rejected") {
      console.error("[/api/lead] Monday error:", mondayResult.reason);
    }

    // Salva no Supabase (com o ID do Monday se disponível)
    await saveToSupabase(payload, mondayItemId);

    return NextResponse.json({ ok: true, monday_item_id: mondayItemId });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erro desconhecido";
    console.error("[/api/lead]", message);
    return NextResponse.json({ ok: false, error: message }, { status: 200 });
  }
}
