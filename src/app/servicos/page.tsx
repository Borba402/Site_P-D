import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Serviços — Pinheiro & Design",
  description:
    "Conheça os segmentos de atendimento da Pinheiro & Design: Projetos Residenciais (B2C), Programa de Parcerias B2B e Projetos Corporativos.",
};

const servicesList = [
  {
    id: "residential",
    number: "01",
    badge: "Residencial (B2C)",
    title: "Projetos Residenciais sob Medida",
    description:
      "Transformamos ambientes residenciais em espaços de puro conforto e elegância. Desenvolvemos desde cozinhas gourmets e closets de luxo até dormitórios integrados e adegas personalizadas, cuidando de cada detalhe do briefing à conferência final.",
    features: [
      "Briefing aprofundado de estilo e necessidades",
      "Detalhamento milimétrico em software 3D",
      "Escolha de acabamentos premium do catálogo Leo Sob Medida",
      "Acompanhamento e entrega com montadores próprios",
    ],
  },
  {
    id: "b2b-partners",
    number: "02",
    badge: "Parceiro B2B",
    title: "Programa para Arquitetos e Designers",
    description:
      "Um braço operacional de altíssima confiabilidade para o seu escritório. Nós executamos a sua visão criativa com total fidelidade técnica. Assumimos a medição, o projeto executivo de marcenaria, a fabricação CNC e a montagem, permitindo que você foque no cliente final.",
    features: [
      "Medição técnica especializada no local",
      "Projeto executivo completo com memória de cálculo",
      "Montagem coordenada com cronograma de obra",
      "Conferência conjunta final antes da entrega ao cliente",
    ],
    link: "/b2b",
    linkText: "Conhecer Programa B2B",
  },
  {
    id: "corporate",
    number: "03",
    badge: "Corporativo",
    title: "Projetos Corporativos e Comerciais",
    description:
      "Soluções robustas e refinadas para escritórios, showrooms, consultórios e lojas. Unimos a durabilidade exigida pelo fluxo comercial à sofisticação de design necessária para valorizar a sua marca. Credibilidade atestada pela execução de projetos para as redes Leo Madeiras.",
    features: [
      "Móveis funcionais e estações de trabalho modulares",
      "Recepções e lobbies com forte impacto estético",
      "Rastreabilidade total de insumos e chapas",
      "Cronograma ágil de fabricação e montagem",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "clamp(7rem, 15vw, 12rem)",
          paddingBottom: "clamp(4rem, 8vw, 7rem)",
          backgroundColor: "var(--color-black)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "30%",
            background:
              "linear-gradient(to left, rgba(201,169,110,0.03), transparent)",
          }}
        />
        <div className="container-pd" style={{ position: "relative", zIndex: 1 }}>
          <p className="text-eyebrow" style={{ marginBottom: "1.5rem" }}>
            O que fazemos
          </p>
          <h1
            className="text-display-xl"
            style={{ color: "var(--color-white)", maxWidth: "800px", marginBottom: "2rem" }}
          >
            Serviços com
            <br />
            <em>precisão técnica.</em>
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
              maxWidth: "600px",
            }}
          >
            Atuamos em três frentes principais de marcenaria sob medida, trazendo a eficiência da
            indústria 4.0 aliada à sensibilidade do acabamento artesanal de alto padrão.
          </p>
        </div>
      </section>

      {/* Serviços Listados */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-gray-900)" }}
        aria-label="Lista de serviços"
      >
        <div className="container-pd">
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(4rem, 8vw, 7rem)" }}>
            {servicesList.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "clamp(2rem, 5vw, 4rem)",
                    alignItems: "start",
                    borderTop: "1px solid rgba(201,169,110,0.15)",
                    paddingTop: "3rem",
                  }}
                >
                  {/* Lado Esquerdo: Identificação e Título */}
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "2.5rem",
                          fontWeight: 300,
                          color: "var(--color-gold)",
                          lineHeight: 1,
                        }}
                        aria-hidden="true"
                      >
                        {service.number}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.6rem",
                          fontWeight: 600,
                          letterSpacing: "0.25em",
                          textTransform: "uppercase",
                          color: "var(--color-gray-400)",
                          border: "1px solid rgba(136,136,128,0.3)",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "100px",
                        }}
                      >
                        {service.badge}
                      </span>
                    </div>
                    <h2
                      className="text-display-md"
                      style={{
                        color: "var(--color-white)",
                        lineHeight: 1.2,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {service.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9rem",
                        fontWeight: 300,
                        lineHeight: 1.9,
                        color: "var(--color-gray-400)",
                        marginBottom: "2rem",
                      }}
                    >
                      {service.description}
                    </p>
                    {service.link && (
                      <Link
                        href={service.link}
                        id={`link-servico-${service.id}`}
                        className="btn btn-outline"
                        style={{ fontSize: "0.65rem", padding: "0.75rem 2rem" }}
                      >
                        {service.linkText}
                      </Link>
                    )}
                  </div>

                  {/* Lado Direito: Features/Diferenciais */}
                  <div
                    style={{
                      order: isEven ? 2 : 1,
                      backgroundColor: "var(--color-black)",
                      border: "1px solid rgba(201,169,110,0.1)",
                      padding: "2.5rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--color-gold)",
                        marginBottom: "2rem",
                      }}
                    >
                      O que está incluso
                    </h3>
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                      }}
                    >
                      {service.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          style={{
                            display: "flex",
                            alignItems: "start",
                            gap: "1rem",
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.85rem",
                            fontWeight: 300,
                            color: "var(--color-white)",
                            lineHeight: 1.5,
                          }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            stroke="var(--color-gold)"
                            strokeWidth="1.5"
                            style={{ marginTop: "0.2rem", flexShrink: 0 }}
                            aria-hidden="true"
                          >
                            <polyline points="3 7 6 10 11 4" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bloco Marcenaria 4.0 */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-black)" }}
        aria-labelledby="tech-heading"
      >
        <div className="container-pd" style={{ maxWidth: "900px", textAlign: "center" }}>
          <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
            Nossa Engenharia
          </p>
          <h2
            id="tech-heading"
            className="text-display-lg"
            style={{ color: "var(--color-white)", marginBottom: "2rem" }}
          >
            A tecnologia da
            <br />
            <em>Marcenaria 4.0</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 2,
              color: "var(--color-gray-400)",
              marginBottom: "3rem",
            }}
          >
            Utilizamos softwares avançados de projeto integrados diretamente com maquinários automatizados
            CNC. Isso significa que a medição coletada em sua obra é transmitida com precisão milimétrica
            para a linha de produção, eliminando retrabalhos, erros de corte e garantindo um encaixe perfeito
            no canteiro.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
              borderTop: "1px solid rgba(201,169,110,0.15)",
              paddingTop: "3rem",
            }}
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "var(--color-gold)",
                  marginBottom: "0.5rem",
                }}
              >
                0mm
              </span>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-gray-400)",
                }}
              >
                Margem de Erro
              </p>
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "var(--color-gold)",
                  marginBottom: "0.5rem",
                }}
              >
                3D CAD/BIM
              </span>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-gray-400)",
                }}
              >
                Detalhamento Integral
              </p>
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "var(--color-gold)",
                  marginBottom: "0.5rem",
                }}
              >
                CNC
              </span>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-gray-400)",
                }}
              >
                Usinagem Automatizada
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
