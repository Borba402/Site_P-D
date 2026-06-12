import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Sobre — Pinheiro & Design",
  description:
    "Conheça Danilo Pinheiro e Wellington Lima, a equipe por trás da Pinheiro & Design. 9+ anos de experiência em marcenaria de alto padrão em Barueri, SP.",
};

export default function SobrePage() {
  return (
    <>
      {/* Hero Sobre */}
      <section
        style={{
          paddingTop: "clamp(7rem, 15vw, 12rem)",
          paddingBottom: "clamp(4rem, 8vw, 7rem)",
          backgroundColor: "var(--color-black)",
        }}
        aria-labelledby="sobre-heading"
      >
        <div className="container-pd">
          <p className="text-eyebrow" style={{ marginBottom: "1.5rem" }}>
            Nossa história
          </p>
          <h1
            id="sobre-heading"
            className="text-display-xl"
            style={{
              color: "var(--color-white)",
              maxWidth: "720px",
              marginBottom: "2rem",
            }}
          >
            Rigor técnico e
            <br />
            <em>paixão pelo ofício.</em>
          </h1>
          <div
            style={{ width: "40px", height: "1px", backgroundColor: "var(--color-gold)", marginBottom: "2rem" }}
            aria-hidden="true"
          />
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 2,
              color: "var(--color-gray-400)",
              maxWidth: "620px",
            }}
          >
            A Pinheiro &amp; Design nasce da combinação rara entre domínio
            técnico e sensibilidade estética. Fundada por Danilo Pinheiro, a
            empresa especializa-se em Marcenaria 4.0 — integrando tecnologia
            digital à execução artesanal de alta precisão.
          </p>
        </div>
      </section>

      <div className="gold-line-full container-pd" aria-hidden="true" />

      {/* Seção Danilo */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-black)" }}
        aria-labelledby="danilo-heading"
      >
        <div className="container-pd">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "6rem",
              alignItems: "center",
            }}
          >
            <div>
              <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
                Fundador &amp; Diretor Técnico
              </p>
              <h2
                id="danilo-heading"
                className="text-display-md"
                style={{ color: "var(--color-white)", marginBottom: "2rem" }}
              >
                Danilo Pinheiro
              </h2>
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
                Com mais de 9 anos de experiência em projetos de marcenaria,
                Danilo construiu uma trajetória sólida que vai da bancada à
                gestão de projetos complexos. Sua formação contínua como{" "}
                <strong style={{ color: "var(--color-white)", fontWeight: 400 }}>
                  professor da Escola da Marcenaria do Grupo Leo
                </strong>{" "}
                reflete um compromisso com a excelência que permeia toda a
                operação da empresa.
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
                Seu método de trabalho combina rigor técnico com visão de
                design, garantindo que cada projeto reflita a identidade do
                cliente com precisão milimétrica.
              </p>
            </div>
            <div
              style={{
                height: "500px",
                backgroundColor: "var(--color-gray-700)",
                backgroundImage: `url('/portfolio/showroom-leo.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label="Danilo Pinheiro — Fundador e Diretor Técnico"
            />
          </div>
        </div>
      </section>

      {/* Seção Wellington */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-gray-900)" }}
        aria-labelledby="wellington-heading"
      >
        <div className="container-pd">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "6rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "500px",
                backgroundColor: "var(--color-gray-700)",
                backgroundImage: `url('/portfolio/cozinha-dark.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label="Wellington Lima — Gerente de Projetos"
            />
            <div>
              <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
                Gerente de Projetos
              </p>
              <h2
                id="wellington-heading"
                className="text-display-md"
                style={{ color: "var(--color-white)", marginBottom: "2rem" }}
              >
                Wellington Lima
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  lineHeight: 2,
                  color: "var(--color-gray-400)",
                }}
              >
                Wellington é o guardião da exatidão. Responsável pelo projeto
                executivo e detalhamento técnico, ele garante que a visão
                criativa de cada projeto se transforme em realidade
                milimétrica. Da medição inicial à conferência final no
                canteiro, sua presença assegura que nenhum detalhe escape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-black)" }}
        aria-labelledby="diferenciais-heading"
      >
        <div className="container-pd">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
              Nossos diferenciais
            </p>
            <h2
              id="diferenciais-heading"
              className="text-display-lg"
              style={{ color: "var(--color-white)" }}
            >
              O que nos distingue
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5px",
            }}
          >
            {[
              {
                title: "Marcenaria 4.0",
                text: "Software BIM/CAD, corte CNC e gestão digital integrados à execução artesanal.",
              },
              {
                title: "Projeto Executivo",
                text: "Memória de cálculo completa. Cada milímetro documentado antes da produção.",
              },
              {
                title: "Parceria Leo",
                text: "Acesso ao maior catálogo de materiais premium do Brasil — com visita à fábrica disponível.",
              },
              {
                title: "Conferência Final",
                text: "Checklist de qualidade com o cliente antes do encerramento de cada projeto.",
              },
            ].map((d) => (
              <div
                key={d.title}
                className="card-dark"
                style={{ padding: "2.5rem" }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "1px",
                    backgroundColor: "var(--color-gold)",
                    marginBottom: "1.5rem",
                  }}
                  aria-hidden="true"
                />
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-white)",
                    marginBottom: "1rem",
                  }}
                >
                  {d.title}
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
                  {d.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
