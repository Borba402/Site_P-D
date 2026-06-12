import Link from "next/link";

const services = [
  {
    id: "b2c",
    badge: "B2C",
    badgeColor: "var(--color-gray-400)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 34 L6 14 L18 4 L30 14 L30 34 Z" />
        <rect x="13" y="22" width="10" height="12" />
        <path d="M12 14 h12 v8 h-12 Z" />
      </svg>
    ),
    title: "Projetos Residenciais",
    text: "Do briefing à entrega, cuidamos de todo o processo para que seu projeto saia exatamente como você imaginou — com precisão técnica e atenção a cada detalhe.",
    cta: null,
  },
  {
    id: "b2b-parceiros",
    badge: "B2B Parceiros",
    badgeColor: "var(--color-gold)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 26 C2 20 8 16 14 18 C16 12 22 10 26 14 C30 10 36 14 34 20 C36 24 32 28 28 26 C26 30 20 32 16 28 C12 32 4 30 2 26 Z" />
        <path d="M14 18 C14 18 18 22 22 18" />
      </svg>
    ),
    title: "Programa B2B",
    text: "Arquitetos, designers e consultores: você fecha o projeto, nós executamos. Medição técnica, produção, entrega e montagem — da nossa conta. Você mantém a relação com o cliente.",
    cta: { label: "Saiba mais", href: "/b2b" },
  },
  {
    id: "corporativo",
    badge: "Corporativo",
    badgeColor: "var(--color-gray-400)",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="12" width="28" height="22" />
        <path d="M4 12 L18 4 L32 12" />
        <rect x="14" y="20" width="8" height="14" />
        <rect x="7" y="16" width="6" height="6" />
        <rect x="23" y="16" width="6" height="6" />
      </svg>
    ),
    title: "Projetos Corporativos",
    text: "Showrooms, lojas e escritórios. Já executamos projetos para as Lojas Leo Madeiras e showrooms da Leo Sob Medida em Barueri.",
    cta: null,
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="section-pad"
      style={{ backgroundColor: "var(--color-gray-900)" }}
      aria-labelledby="services-heading"
    >
      <div className="container-pd">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
            Como podemos atendê-lo
          </p>
          <h2
            id="services-heading"
            className="text-display-lg"
            style={{ color: "var(--color-white)" }}
          >
            Seu projeto,
            <br />
            <em>nossa execução.</em>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5px",
          }}
        >
          {services.map((service, i) => (
            <article
              key={service.id}
              id={`service-${service.id}`}
              className="card-dark"
              style={{
                padding: "3rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                border: "none",
                borderTop: i === 1 ? "2px solid var(--color-gold)" : "2px solid transparent",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Badge */}
              <span
                style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.55rem",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: service.badgeColor,
                  border: `1px solid ${service.badgeColor}`,
                  padding: "0.25rem 0.75rem",
                  opacity: 0.8,
                }}
              >
                {service.badge}
              </span>

              {/* Ícone */}
              <div aria-hidden="true">{service.icon}</div>

              {/* Conteúdo */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.6rem",
                    fontWeight: 300,
                    color: "var(--color-white)",
                    marginBottom: "1rem",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    lineHeight: 1.9,
                    color: "var(--color-gray-400)",
                  }}
                >
                  {service.text}
                </p>
              </div>

              {service.cta && (
                <Link
                  href={service.cta.href}
                  id={`service-${service.id}-cta`}
                  className="btn btn-ghost"
                  aria-label={`${service.cta.label} — ${service.title}`}
                  style={{ marginTop: "auto", paddingInline: 0 }}
                >
                  {service.cta.label}
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
