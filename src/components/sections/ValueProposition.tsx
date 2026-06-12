const pillars = [
  {
    id: "precisao",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="28" width="32" height="3" />
        <line x1="4" y1="8" x2="4" y2="31" />
        <line x1="12" y1="22" x2="12" y2="31" />
        <line x1="20" y1="15" x2="20" y2="31" />
        <line x1="28" y1="10" x2="28" y2="31" />
        <line x1="36" y1="18" x2="36" y2="31" />
        <polyline points="4,22 12,22 20,15 28,10 36,18" />
        <circle cx="4" cy="22" r="1.5" fill="#C9A96E" stroke="none" />
        <circle cx="12" cy="22" r="1.5" fill="#C9A96E" stroke="none" />
        <circle cx="20" cy="15" r="1.5" fill="#C9A96E" stroke="none" />
        <circle cx="28" cy="10" r="1.5" fill="#C9A96E" stroke="none" />
        <circle cx="36" cy="18" r="1.5" fill="#C9A96E" stroke="none" />
      </svg>
    ),
    title: "Projeto Executivo Completo",
    text: "Cada projeto sai com memória de cálculo, detalhamento técnico e acompanhamento de Wellington Lima, nosso Gerente de Projetos.",
  },
  {
    id: "tecnologia",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="34" height="24" rx="2" />
        <line x1="3" y1="16" x2="37" y2="16" />
        <line x1="14" y1="8" x2="14" y2="32" />
        <circle cx="8.5" cy="12" r="1.5" fill="#C9A96E" stroke="none" />
        <rect x="17" y="20" width="10" height="6" rx="1" />
        <line x1="22" y1="26" x2="22" y2="30" />
        <line x1="18" y1="30" x2="26" y2="30" />
      </svg>
    ),
    title: "Marcenaria 4.0",
    text: "Combinamos software de projeto BIM/CAD, corte CNC de precisão e acabamentos de última geração da Leo Sob Medida.",
  },
  {
    id: "experiencia",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="16" />
        <path d="M20 8 L22.4 15.6 L30.4 15.6 L24 20.4 L26.4 28 L20 23.2 L13.6 28 L16 20.4 L9.6 15.6 L17.6 15.6 Z" />
      </svg>
    ),
    title: "9+ Anos de Expertise",
    text: "Danilo Pinheiro é professor da Escola da Marcenaria do Grupo Leo. Seu método de trabalho é ensinado em todo o Brasil.",
  },
];

export function ValueProposition() {
  return (
    <section
      id="proposta-de-valor"
      className="section-pad"
      style={{ backgroundColor: "var(--color-black)" }}
      aria-labelledby="value-heading"
    >
      <div className="container-pd">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <p className="text-eyebrow" style={{ marginBottom: "1.25rem" }}>
            Por que escolher a Pinheiro &amp; Design
          </p>
          <h2
            id="value-heading"
            className="text-display-lg"
            style={{ color: "var(--color-white)" }}
          >
            Cada detalhe tem nome,
            <br />
            <em>medida e responsável.</em>
          </h2>
        </div>

        {/* 3 Pilares */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "0",
          }}
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              id={`pilar-${pillar.id}`}
              className="value-pillar"
              style={{
                padding: "3rem 3.5rem",
                borderLeft: i === 0 ? "none" : "1px solid rgba(201,169,110,0.12)",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                borderTop: "2px solid transparent",
                transition: "border-color var(--transition-base), background-color var(--transition-base)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderTopColor = "var(--color-gold)";
                el.style.backgroundColor = "rgba(201,169,110,0.04)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderTopColor = "transparent";
                el.style.backgroundColor = "transparent";
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "52px",
                  height: "52px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(201, 169, 110, 0.2)",
                  borderRadius: "2px",
                  padding: "0.5rem",
                  transition: "border-color var(--transition-base)",
                }}
              >
                {pillar.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-white)",
                    marginBottom: "1rem",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    lineHeight: 1.9,
                    color: "rgba(136, 136, 128, 0.9)",
                  }}
                >
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gold line bottom */}
        <div
          className="gold-line-full"
          style={{ marginTop: "4rem" }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
