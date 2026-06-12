import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/projects";

export function PortfolioHighlight() {
  const [p1, p2, p3, p4, p5, p6] = featuredProjects;

  return (
    <section
      id="portfolio"
      className="section-pad"
      style={{ backgroundColor: "var(--color-gray-900)" }}
      aria-labelledby="portfolio-heading"
    >
      <div className="container-pd">
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
              Portfólio Selecionado
            </p>
            <h2
              id="portfolio-heading"
              className="text-display-lg"
              style={{ color: "var(--color-white)" }}
            >
              Cada ambiente,
              <br />
              <em>uma assinatura.</em>
            </h2>
          </div>
          <Link
            href="/projetos"
            id="portfolio-ver-todos"
            className="btn btn-ghost"
            aria-label="Ver portfólio completo"
            style={{ alignSelf: "flex-end" }}
          >
            Ver portfólio completo
          </Link>
        </div>

        {/* Masonry Grid — desktop */}
        <div
          className="portfolio-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 0.65fr",
            gridTemplateRows: "380px 380px",
            gap: "3px",
          }}
        >
          {[p1, p2, p3, p4, p5, p6].map((project, i) => {
            // Layout assimétrico: células especiais
            const isWide = i === 0 || i === 3;
            const gridColumn =
              i === 0
                ? "1 / 2"
                : i === 1
                ? "2 / 3"
                : i === 2
                ? "3 / 4"
                : i === 3
                ? "1 / 2"
                : i === 4
                ? "2 / 3"
                : "3 / 4";
            const gridRow =
              i <= 2 ? "1 / 2" : "2 / 3";

            return (
              <Link
                key={project.slug}
                href={`/projetos/${project.slug}`}
                className="portfolio-card"
                id={`portfolio-card-${project.id}`}
                aria-label={`Ver projeto: ${project.title}`}
                style={{
                  gridColumn,
                  gridRow,
                  display: "block",
                  textDecoration: "none",
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "var(--color-gray-700)",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
                  }}
                />
                <div className="overlay">
                  <span className="text-eyebrow" style={{ marginBottom: "0.5rem" }}>
                    {project.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.4rem",
                      fontWeight: 300,
                      color: "var(--color-white)",
                      marginBottom: "1rem",
                    }}
                  >
                    {project.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--color-gold)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    Ver projeto →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile: scroll horizontal */}
        <div
          className="portfolio-scroll mobile-only"
          style={{ gap: "0.75rem" }}
          aria-label="Portfólio — deslize para ver mais"
        >
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projetos/${project.slug}`}
              className="portfolio-card"
              aria-label={`Ver projeto: ${project.title}`}
              style={{
                width: "78vw",
                height: "260px",
                display: "block",
                textDecoration: "none",
                position: "relative",
                flexShrink: 0,
                backgroundColor: "var(--color-gray-700)",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="78vw"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay" style={{ opacity: 1, background: "linear-gradient(to top, rgba(13,13,13,0.9), transparent)" }}>
                <span className="text-eyebrow" style={{ marginBottom: "0.25rem" }}>
                  {project.category}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 300,
                    color: "var(--color-white)",
                  }}
                >
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .portfolio-grid { display: none !important; }
          .mobile-only { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </section>
  );
}
