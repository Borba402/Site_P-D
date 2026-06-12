"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// ─── Tipos ───────────────────────────────────────────────────────────────────

interface Answers {
  projeto: string;
  ambientes: string[];
  cidade: string;
  investimento: string;
  prazo: string;
}

// ─── Dados das perguntas ──────────────────────────────────────────────────────

const STEP_PROJETO = {
  key: "projeto" as const,
  eyebrow: "Pergunta 1 de 5",
  title: "Você já possui projeto de interiores?",
  subtitle: "Isso nos ajuda a entender em qual etapa você está.",
  type: "single" as const,
  options: [
    { value: "completo", label: "Sim, projeto completo", desc: "Tenho planta + especificações técnicas" },
    { value: "planta", label: "Tenho planta, sem detalhes", desc: "Planta baixa sem detalhamento executivo" },
    { value: "sem-projeto", label: "Ainda não tenho projeto", desc: "Quero iniciar do zero com a equipe" },
    { value: "pesquisa", label: "Estou pesquisando", desc: "Na fase de referências e orçamentos" },
  ],
};

const STEP_AMBIENTES = {
  key: "ambientes" as const,
  eyebrow: "Pergunta 2 de 5",
  title: "Quais ambientes deseja mobiliár?",
  subtitle: "Selecione todos que se aplicam.",
  type: "multi" as const,
  options: [
    { value: "cozinha",   label: "Cozinha",                icon: "🍳" },
    { value: "quarto",    label: "Quarto / Suíte",          icon: "🛏️" },
    { value: "closet",    label: "Closet / Guarda-roupa",   icon: "👗" },
    { value: "home",      label: "Home Office",             icon: "💻" },
    { value: "sala",      label: "Sala de Estar / Jantar",  icon: "🛋️" },
    { value: "gourmet",   label: "Área Gourmet",            icon: "🍷" },
    { value: "banheiro",  label: "Banheiro",                icon: "🚿" },
    { value: "comercial", label: "Comercial / Escritório",  icon: "🏢" },
  ],
};

const STEP_CIDADE = {
  key: "cidade" as const,
  eyebrow: "Pergunta 3 de 5",
  title: "Qual a sua cidade?",
  subtitle: "Para verificar nossa área de atendimento.",
  type: "text" as const,
  placeholder: "Ex: São Paulo, Barueri, Alphaville…",
};

const STEP_INVESTIMENTO = {
  key: "investimento" as const,
  eyebrow: "Pergunta 4 de 5",
  title: "Qual a sua pretensão de investimento?",
  subtitle: "Trabalharemos a melhor solução dentro da sua realidade.",
  type: "single" as const,
  options: [
    { value: "ate10",    label: "Até R$ 10.000",           desc: "Projetos pontuais ou de menor escala" },
    { value: "10a20",    label: "R$ 10.000 – R$ 20.000",   desc: "Reforma de ambiente único" },
    { value: "20a35",    label: "R$ 20.000 – R$ 35.000",   desc: "Dois ou mais ambientes integrados" },
    { value: "35a60",    label: "R$ 35.000 – R$ 60.000",   desc: "Projetos de médio porte" },
    { value: "acima60",  label: "Acima de R$ 60.000",      desc: "Projetos completos de alto padrão" },
    { value: "indefinido", label: "Ainda não definido",    desc: "Quero entender as possibilidades" },
  ],
};

const STEP_PRAZO = {
  key: "prazo" as const,
  eyebrow: "Pergunta 5 de 5",
  title: "Qual o prazo estimado para início?",
  subtitle: "Nos ajuda a organizar a agenda da equipe para você.",
  type: "single" as const,
  options: [
    { value: "urgente", label: "Urgente",         desc: "Preciso iniciar em até 1 mês" },
    { value: "ate3m",   label: "Breve",           desc: "Entre 1 e 3 meses" },
    { value: "ate6m",   label: "Tranquilo",       desc: "De 3 a 6 meses" },
    { value: "mais6m",  label: "Estou planejando", desc: "Mais de 6 meses" },
  ],
};

const STEPS = [STEP_PROJETO, STEP_AMBIENTES, STEP_CIDADE, STEP_INVESTIMENTO, STEP_PRAZO];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildWhatsAppMessage(answers: Answers): string {
  const labelProjeto = STEP_PROJETO.options.find(o => o.value === answers.projeto)?.label ?? answers.projeto;
  const labelsAmbientes = answers.ambientes
    .map(v => STEP_AMBIENTES.options.find(o => o.value === v)?.label ?? v)
    .join(", ");
  const labelInvest = STEP_INVESTIMENTO.options.find(o => o.value === answers.investimento)?.label ?? answers.investimento;
  const labelPrazo = STEP_PRAZO.options.find(o => o.value === answers.prazo)?.label ?? answers.prazo;

  const msg = [
    "Olá, Pinheiro & Design! Tenho interesse em um projeto. 👋",
    "",
    `📋 *Projeto existente:* ${labelProjeto}`,
    `🏠 *Ambientes desejados:* ${labelsAmbientes}`,
    `📍 *Localidade:* ${answers.cidade}`,
    `💰 *Investimento pretendido:* ${labelInvest}`,
    `📅 *Prazo estimado:* ${labelPrazo}`,
    "",
    "Aguardo o contato para conversarmos melhor! 😊",
  ].join("\n");

  return `https://wa.me/5511913550385?text=${encodeURIComponent(msg)}`;
}

// ─── Animações ────────────────────────────────────────────────────────────────

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

// ─── Componente principal ─────────────────────────────────────────────────────

export function OrcamentoWizard() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState<Answers>({
    projeto: "",
    ambientes: [],
    cidade: "",
    investimento: "",
    prazo: "",
  });

  const totalSteps = STEPS.length;
  const currentStep = STEPS[step];
  const progress = ((step) / totalSteps) * 100;

  function goNext() {
    setDir(1);
    if (step < totalSteps - 1) {
      setStep(s => s + 1);
    } else {
      setDone(true);
    }
  }

  function goBack() {
    setDir(-1);
    setStep(s => s - 1);
  }

  function canAdvance(): boolean {
    if (!currentStep) return false;
    const key = currentStep.key;
    if (key === "ambientes") return answers.ambientes.length > 0;
    if (key === "cidade")    return answers.cidade.trim().length >= 2;
    return answers[key as keyof Answers] !== "";
  }

  function toggleMulti(value: string) {
    setAnswers(prev => ({
      ...prev,
      ambientes: prev.ambientes.includes(value)
        ? prev.ambientes.filter(v => v !== value)
        : [...prev.ambientes, value],
    }));
  }

  function setSingle(key: keyof Answers, value: string) {
    setAnswers(prev => ({ ...prev, [key]: value }));
  }

  // ── Tela final ──────────────────────────────────────────────────────────────
  if (done) {
    const whatsUrl = buildWhatsAppMessage(answers);
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "2rem",
          maxWidth: "540px",
          margin: "0 auto",
        }}
      >
        {/* Ícone de check */}
        <div style={{
          width: "72px",
          height: "72px",
          border: "1px solid rgba(201,169,110,0.4)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <div>
          <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>Tudo certo!</p>
          <h2 className="text-display-lg" style={{ color: "var(--color-white)", marginBottom: "1rem" }}>
            Suas respostas<br /><em>estão prontas.</em>
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.9rem",
            fontWeight: 300,
            lineHeight: 1.85,
            color: "rgba(245,240,232,0.7)",
          }}>
            Clique abaixo para abrir o WhatsApp. Suas respostas serão enviadas automaticamente para nossa equipe continuar o atendimento.
          </p>
        </div>

        <a
          href={whatsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            textDecoration: "none",
            backgroundColor: "#25D366",
            color: "#fff",
            padding: "1rem 2.5rem",
            transition: "background-color 300ms ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1ebd5a")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#25D366")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Falar com nossa equipe
        </a>

        <button
          onClick={() => { setStep(0); setDone(false); setAnswers({ projeto: "", ambientes: [], cidade: "", investimento: "", prazo: "" }); }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-gray-400)",
            background: "none",
            border: "none",
            cursor: "pointer",
            transition: "color 300ms ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--color-white)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--color-gray-400)")}
        >
          Refazer o formulário
        </button>
      </motion.div>
    );
  }

  // ── Wizard ─────────────────────────────────────────────────────────────────
  return (
    <div style={{ width: "100%", maxWidth: "680px", margin: "0 auto" }}>

      {/* Progress bar */}
      <div style={{ marginBottom: "3rem" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.75rem",
        }}>
          <span style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
          }}>
            {step + 1} / {totalSteps}
          </span>
          {step > 0 && (
            <button
              onClick={goBack}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-gray-400)",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "color 300ms ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-white)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-gray-400)")}
            >
              ← Voltar
            </button>
          )}
        </div>

        {/* Barra de progresso */}
        <div style={{
          width: "100%",
          height: "2px",
          backgroundColor: "rgba(201,169,110,0.15)",
          borderRadius: "2px",
          overflow: "hidden",
        }}>
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg, var(--color-gold-dark), var(--color-gold))",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>

      {/* Conteúdo da pergunta */}
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={step}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
              {currentStep.eyebrow}
            </p>
            <h2
              className="text-display-md"
              style={{ color: "var(--color-white)", marginBottom: "0.75rem" }}
            >
              {currentStep.title}
            </h2>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              fontWeight: 300,
              color: "rgba(245,240,232,0.6)",
              lineHeight: 1.7,
            }}>
              {currentStep.subtitle ?? ""}
            </p>
          </div>

          {/* Opções */}
          {currentStep.type === "single" && "options" in currentStep && (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0.875rem",
            }}>
              {currentStep.options.map(opt => {
                const selected = answers[currentStep.key as keyof Answers] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setSingle(currentStep.key as keyof Answers, opt.value);
                    }}
                    style={{
                      textAlign: "left",
                      padding: "1.25rem 1.5rem",
                      border: selected
                        ? "1px solid var(--color-gold)"
                        : "1px solid rgba(201,169,110,0.18)",
                      backgroundColor: selected
                        ? "rgba(201,169,110,0.08)"
                        : "rgba(26,26,26,0.6)",
                      cursor: "pointer",
                      transition: "all 250ms ease",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.35rem",
                    }}
                    onMouseEnter={e => {
                      if (!selected) e.currentTarget.style.borderColor = "rgba(201,169,110,0.45)";
                    }}
                    onMouseLeave={e => {
                      if (!selected) e.currentTarget.style.borderColor = "rgba(201,169,110,0.18)";
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: selected ? "var(--color-gold)" : "var(--color-white)",
                      letterSpacing: "0.03em",
                    }}>
                      {opt.label}
                    </span>
                    {"desc" in opt && (
                      <span style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.75rem",
                        fontWeight: 300,
                        color: selected ? "rgba(201,169,110,0.75)" : "rgba(245,240,232,0.45)",
                        lineHeight: 1.5,
                      }}>
                        {opt.desc}
                      </span>
                    )}
                    {selected && (
                      <span style={{
                        marginTop: "0.25rem",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "flex-end",
                        flexShrink: 0,
                      }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="2 6 5 9 10 3" />
                        </svg>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {currentStep.type === "multi" && "options" in currentStep && (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "0.75rem",
            }}>
              {currentStep.options.map(opt => {
                const selected = answers.ambientes.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    onClick={() => toggleMulti(opt.value)}
                    style={{
                      padding: "1rem 1.25rem",
                      border: selected
                        ? "1px solid var(--color-gold)"
                        : "1px solid rgba(201,169,110,0.18)",
                      backgroundColor: selected
                        ? "rgba(201,169,110,0.08)"
                        : "rgba(26,26,26,0.6)",
                      cursor: "pointer",
                      transition: "all 250ms ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                    onMouseEnter={e => {
                      if (!selected) e.currentTarget.style.borderColor = "rgba(201,169,110,0.45)";
                    }}
                    onMouseLeave={e => {
                      if (!selected) e.currentTarget.style.borderColor = "rgba(201,169,110,0.18)";
                    }}
                  >
                    <span style={{ fontSize: "1.2rem", lineHeight: 1 }}>{"icon" in opt ? opt.icon : ""}</span>
                    <span style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: selected ? "var(--color-gold)" : "var(--color-white)",
                      textAlign: "left",
                      lineHeight: 1.3,
                    }}>
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {currentStep.type === "text" && (
            <div>
              <input
                type="text"
                value={answers.cidade}
                onChange={e => setAnswers(prev => ({ ...prev, cidade: e.target.value }))}
                onKeyDown={e => { if (e.key === "Enter" && canAdvance()) goNext(); }}
                placeholder={"placeholder" in currentStep ? currentStep.placeholder : ""}
                autoFocus
                style={{
                  width: "100%",
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.1rem",
                  fontWeight: 300,
                  color: "var(--color-white)",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(201,169,110,0.4)",
                  padding: "1rem 0",
                  outline: "none",
                  letterSpacing: "0.03em",
                  caretColor: "var(--color-gold)",
                }}
                onFocus={e => (e.currentTarget.style.borderBottomColor = "var(--color-gold)")}
                onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(201,169,110,0.4)")}
              />
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                color: "rgba(245,240,232,0.35)",
                marginTop: "0.75rem",
              }}>
                Pressione Enter ou clique em Continuar
              </p>
            </div>
          )}

          {/* Botão Continuar */}
          <div style={{ marginTop: "2.5rem" }}>
            <button
              onClick={goNext}
              disabled={!canAdvance()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                backgroundColor: canAdvance() ? "var(--color-gold)" : "rgba(201,169,110,0.2)",
                color: canAdvance() ? "var(--color-black)" : "rgba(201,169,110,0.4)",
                border: "none",
                padding: "1rem 2.25rem",
                cursor: canAdvance() ? "pointer" : "not-allowed",
                transition: "all 250ms ease",
              }}
              onMouseEnter={e => {
                if (canAdvance()) e.currentTarget.style.backgroundColor = "var(--color-gold-light)";
              }}
              onMouseLeave={e => {
                if (canAdvance()) e.currentTarget.style.backgroundColor = "var(--color-gold)";
              }}
            >
              {step < totalSteps - 1 ? "Continuar" : "Ver resumo"}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="8" x2="14" y2="8" />
                <polyline points="9 3 14 8 9 13" />
              </svg>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
