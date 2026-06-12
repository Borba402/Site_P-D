import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, projectCategories } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfólio — Pinheiro & Design",
  description:
    "Galeria completa de projetos residenciais, corporativos e educacionais executados pela Pinheiro & Design em Barueri, SP.",
};

export default function ProjetosPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "clamp(7rem, 15vw, 12rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          backgroundColor: "var(--color-black)",
        }}
      >
        <div className="container-pd">
          <p className="text-eyebrow" style={{ marginBottom: "1.5rem" }}>
            Portfólio
          </p>
          <h1
            className="text-display-xl"
            style={{ color: "var(--color-white)", maxWidth: "700px" }}
          >
            Cada ambiente,
            <br />
            <em>uma assinatura.</em>
          </h1>
        </div>
      </section>

      {/* Galeria */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-black)", paddingTop: "2rem" }}
        aria-label="Galeria de projetos"
      >
        <div className="container-pd">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
              gap: "3px",
            }}
          >
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projetos/${project.slug}`}
                id={`proj-${project.id}`}
                className="portfolio-card"
                aria-label={`Ver projeto: ${project.title}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  position: "relative",
                  height: "340px",
                  backgroundColor: "var(--color-gray-700)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }}
                />
                <div className="overlay">
                  <span className="text-eyebrow" style={{ marginBottom: "0.5rem" }}>
                    {project.category}
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      fontWeight: 300,
                      color: "var(--color-white)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {project.title}
                  </h2>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--color-gold)",
                    }}
                  >
                    Ver projeto →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
