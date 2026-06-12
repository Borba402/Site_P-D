const steps = [
  {
    number: "01",
    label: "Briefing",
    text: "Entendemos seu espaço, estilo e necessidades.",
  },
  {
    number: "02",
    label: "Projeto",
    text: "Desenvolvemos o projeto executivo com detalhamento técnico completo.",
  },
  {
    number: "03",
    label: "Aprovação",
    text: "Você valida cada detalhe antes de irmos à produção.",
  },
  {
    number: "04",
    label: "Produção",
    text: "Fabricação com tecnologia 4.0 e materiais premium da Leo.",
  },
  {
    number: "05",
    label: "Entrega",
    text: "Instalação por nossa equipe técnica especializada.",
  },
  {
    number: "06",
    label: "Conferência",
    text: "Vistoria final com checklist e garantia de qualidade.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="processo"
      className="section-pad"
      style={{ backgroundColor: "var(--color-black)" }}
      aria-labelledby="process-heading"
    >
      <div className="container-pd">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
            Como Funciona
          </p>
          <h2
            id="process-heading"
            className="text-display-lg"
            style={{ color: "var(--color-white)" }}
          >
            Do projeto à entrega,
            <br />
            <em>sem surpresas.</em>
          </h2>
        </div>

        {/* Desktop timeline horizontal */}
        <div className="timeline-desktop" style={{ position: "relative" }}>
          {/* Linha dourada */}
          <div className="timeline-line" aria-hidden="true" />

          <ol
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "0",
              listStyle: "none",
              position: "relative",
            }}
            aria-label="Etapas do processo"
          >
            {steps.map((step, i) => (
              <li
                key={step.number}
                id={`step-${step.number}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "4rem",
                  paddingInline: "0.75rem",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                {/* Dot */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "17px",
                    height: "17px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-black)",
                    border: "2px solid var(--color-gold)",
                    zIndex: 1,
                  }}
                />

                {/* Número */}
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 300,
                    color: "rgba(201,169,110,0.18)",
                    lineHeight: 1,
                    marginBottom: "1rem",
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-white)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.label}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "var(--color-gray-400)",
                  }}
                >
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile timeline vertical */}
        <ol
          className="timeline-mobile"
          style={{
            listStyle: "none",
            display: "none",
            flexDirection: "column",
            gap: "0",
            position: "relative",
          }}
          aria-label="Etapas do processo"
        >
          {/* Linha vertical */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "20px",
              top: "0",
              bottom: "0",
              width: "1px",
              background:
                "linear-gradient(to bottom, var(--color-gold), transparent)",
            }}
          />

          {steps.map((step) => (
            <li
              key={step.number}
              id={`step-mobile-${step.number}`}
              style={{
                display: "flex",
                gap: "1.75rem",
                paddingBottom: "2.5rem",
                paddingLeft: "3.5rem",
                position: "relative",
              }}
            >
              {/* Dot */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "4px",
                  width: "17px",
                  height: "17px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-black)",
                  border: "2px solid var(--color-gold)",
                }}
              />
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      fontWeight: 300,
                      color: "rgba(201,169,110,0.3)",
                    }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--color-white)",
                    }}
                  >
                    {step.label}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "var(--color-gray-400)",
                  }}
                >
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .timeline-desktop { display: none !important; }
          .timeline-mobile { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
