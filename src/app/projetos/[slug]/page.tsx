import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Pinheiro & Design`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjetoPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter(
    (p) => p.slug !== slug && p.categorySlug === project.categorySlug
  ).slice(0, 3);

  return (
    <>
      {/* Hero do projeto */}
      <section
        style={{
          position: "relative",
          height: "70vh",
          minHeight: "480px",
          overflow: "hidden",
        }}
        aria-label={project.title}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.75) 100%)",
          }}
        />
        <div
          className="container-pd"
          style={{
            position: "absolute",
            bottom: "3rem",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
          }}
        >
          <span className="text-eyebrow" style={{ marginBottom: "0.75rem", display: "block" }}>
            {project.category}
          </span>
          <h1
            className="text-display-xl"
            style={{ color: "var(--color-white)" }}
          >
            {project.title}
          </h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-black)" }}
      >
        <div className="container-pd">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "6rem",
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  color: "var(--color-white)",
                  marginBottom: "2rem",
                }}
              >
                {project.description}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  lineHeight: 2,
                  color: "var(--color-gray-400)",
                }}
              >
                {project.details}
              </p>
            </div>

            {/* Sidebar */}
            <div>
              <div
                className="card-dark"
                style={{ padding: "2rem" }}
              >
                <h3
                  className="text-eyebrow"
                  style={{ marginBottom: "1.5rem" }}
                >
                  Detalhes do Projeto
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.6rem",
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--color-gray-400)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Categoria
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.85rem",
                        fontWeight: 300,
                        color: "var(--color-white)",
                      }}
                    >
                      {project.category}
                    </p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      backgroundColor: "rgba(201,169,110,0.12)",
                    }}
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.6rem",
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--color-gray-400)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Tags
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.6rem",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--color-gold)",
                            border: "1px solid rgba(201,169,110,0.25)",
                            padding: "0.2rem 0.6rem",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <Link
                    href="/contato"
                    id={`proj-${project.id}-cta`}
                    className="btn btn-outline"
                    style={{ width: "100%", justifyContent: "center" }}
                    aria-label="Solicitar projeto similar"
                  >
                    Projeto similar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos relacionados */}
      {related.length > 0 && (
        <section
          className="section-pad"
          style={{ backgroundColor: "var(--color-gray-900)", paddingTop: "4rem" }}
          aria-labelledby="related-heading"
        >
          <div className="container-pd">
            <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
              Continue explorando
            </p>
            <h2
              id="related-heading"
              className="text-display-md"
              style={{ color: "var(--color-white)", marginBottom: "3rem" }}
            >
              Projetos relacionados
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "3px",
              }}
            >
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projetos/${p.slug}`}
                  className="portfolio-card"
                  aria-label={`Ver projeto: ${p.title}`}
                  style={{
                    display: "block",
                    height: "280px",
                    textDecoration: "none",
                    position: "relative",
                    backgroundColor: "var(--color-gray-700)",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="33vw"
                    style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
                  />
                  <div className="overlay">
                    <span className="text-eyebrow" style={{ marginBottom: "0.4rem" }}>{p.category}</span>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.3rem",
                        fontWeight: 300,
                        color: "var(--color-white)",
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
