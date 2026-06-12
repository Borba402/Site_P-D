const testimonials = [
  {
    id: "t1",
    quote:
      "Cada detalhe foi executado exatamente como o projeto previa. A conferência final junto ao Wellington foi a prova de que eles realmente se importam com o resultado.",
    author: "Cliente Residencial",
    project: "Closet e Cabeceira — Alphaville, SP",
  },
  {
    id: "t2",
    quote:
      "Trabalho em parceria com a Pinheiro & Design há mais de 2 anos. Nunca tive um prazo furado e a qualidade de execução está no nível do que projeto.",
    author: "Arquiteta Parceira B2B",
    project: "Múltiplos projetos residenciais",
  },
  {
    id: "t3",
    quote:
      "O projeto do showroom superou todas as expectativas. A integração com a fábrica da Leo tornou o processo muito mais ágil.",
    author: "Gerente Comercial",
    project: "Showroom Corporativo — Barueri, SP",
  },
];

const credentialBadges = [
  "9+ anos de experiência",
  "Parceiro oficial Leo Sob Medida",
  "Professor credenciado Escola da Marcenaria",
  "CNPJ 42.961.772/0001-30 · Empresa regularizada",
];

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="section-pad"
      style={{ backgroundColor: "var(--color-black)" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container-pd">
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
            O que dizem sobre nós
          </p>
          <h2
            id="testimonials-heading"
            className="text-display-lg"
            style={{ color: "var(--color-white)" }}
          >
            Confiança construída
            <br />
            <em>projeto a projeto.</em>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5px",
            marginBottom: "5rem",
          }}
        >
          {testimonials.map((t) => (
            <figure
              key={t.id}
              id={t.id}
              style={{
                backgroundColor: "var(--color-gray-900)",
                padding: "3rem",
                margin: 0,
                position: "relative",
                border: "1px solid rgba(201,169,110,0.08)",
              }}
            >
              {/* Aspas decorativas */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  left: "2.5rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "6rem",
                  lineHeight: 1,
                  color: "rgba(201,169,110,0.12)",
                  fontWeight: 300,
                  userSelect: "none",
                }}
              >
                &ldquo;
              </span>

              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  color: "var(--color-white)",
                  marginBottom: "2rem",
                  position: "relative",
                  zIndex: 1,
                  marginTop: "2rem",
                }}
              >
                {t.quote}
              </blockquote>

              <figcaption>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "var(--color-gold)",
                    letterSpacing: "0.05em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {t.author}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.65rem",
                    fontWeight: 300,
                    color: "var(--color-gray-400)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {t.project}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Selos de credibilidade */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem 2.5rem",
          }}
          aria-label="Selos de credibilidade"
        >
          {credentialBadges.map((badge) => (
            <div
              key={badge}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "6px",
                  height: "6px",
                  border: "1px solid var(--color-gold)",
                  transform: "rotate(45deg)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-gray-400)",
                }}
              >
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
