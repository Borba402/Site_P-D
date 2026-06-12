import Image from "next/image";

const team = [
  {
    id: "danilo",
    name: "Danilo Pinheiro",
    role: "Fundador · Diretor Técnico",
    credential: "Professor — Escola da Marcenaria · Grupo Leo",
    initials: "DP",
  },
  {
    id: "wellington",
    name: "Wellington Lima",
    role: "Gerente de Projetos",
    credential: "Projeto Executivo e Detalhamento Técnico",
    initials: "WL",
  },
];

export function TeamSection() {
  return (
    <section
      id="equipe"
      className="section-pad"
      style={{ backgroundColor: "var(--color-black)" }}
      aria-labelledby="team-heading"
    >
      <div className="container-pd">
        <div
          className="team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "center",
          }}
        >
          {/* Texto */}
          <div>
            <p className="text-eyebrow" style={{ marginBottom: "1.25rem" }}>
              Quem faz acontecer
            </p>
            <h2
              id="team-heading"
              className="text-display-lg"
              style={{ color: "var(--color-white)", marginBottom: "2rem" }}
            >
              Expertise que se vê
              <br />
              <em>no detalhe.</em>
            </h2>

            <div
              style={{
                width: "40px",
                height: "1px",
                backgroundColor: "var(--color-gold)",
                marginBottom: "2rem",
              }}
              aria-hidden="true"
            />

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                fontWeight: 300,
                lineHeight: 2,
                color: "var(--color-gray-400)",
                marginBottom: "1.5rem",
              }}
            >
              A Pinheiro &amp; Design nasce da combinação rara entre rigor
              técnico e paixão pelo ofício. Danilo Pinheiro, com mais de 9
              anos de experiência e formação contínua como professor da Escola
              da Marcenaria do Grupo Leo, lidera um time que trata cada projeto
              como uma obra singular.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                fontWeight: 300,
                lineHeight: 2,
                color: "var(--color-gray-400)",
                marginBottom: "3rem",
              }}
            >
              Wellington Lima garante que a visão criativa se torne realidade
              milimétrica — do projeto executivo à conferência final no
              canteiro.
            </p>

            {/* Cards equipe */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {team.map((member) => (
                <div
                  key={member.id}
                  id={`team-${member.id}`}
                  className="card-dark"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  {/* Avatar */}
                  <div
                    aria-hidden="true"
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      border: "1px solid var(--color-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 300,
                      color: "var(--color-gold)",
                      flexShrink: 0,
                    }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "var(--color-white)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {member.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.7rem",
                        fontWeight: 300,
                        color: "var(--color-gold)",
                        letterSpacing: "0.05em",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {member.role}
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
                      {member.credential}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Foto editorial */}
          <div
            style={{
              position: "relative",
              height: "580px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url('/portfolio/showroom-leo.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundColor: "var(--color-gray-700)",
              }}
              role="img"
              aria-label="Equipe Pinheiro & Design"
            />
            {/* Vinheta editorial */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(13,13,13,0.4) 100%)",
              }}
            />
            {/* Badge dourado */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
                backgroundColor: "rgba(13,13,13,0.88)",
                border: "1px solid rgba(201,169,110,0.3)",
                padding: "1rem 1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  marginBottom: "0.25rem",
                }}
              >
                Escola da Marcenaria
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 300,
                  color: "var(--color-white)",
                }}
              >
                Grupo Leo · Barueri, SP
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
