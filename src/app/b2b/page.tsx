import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Programa B2B — Pinheiro & Design",
  description:
    "Arquitetos, designers e consultores: você fecha o projeto, nós executamos. Conheça o programa de parcerias B2B da Pinheiro & Design.",
};

const benefits = [
  {
    id: "b1",
    number: "01",
    title: "Você faz o projeto",
    text: "Mantenha a relação com seu cliente. A Pinheiro & Design opera nos bastidores, como seu parceiro técnico e operacional.",
  },
  {
    id: "b2",
    number: "02",
    title: "Nós medimos",
    text: "Wellington Lima realiza a medição técnica do espaço com instrumentos de precisão e documentação completa.",
  },
  {
    id: "b3",
    number: "03",
    title: "Projeto executivo",
    text: "Desenvolvemos o projeto executivo com memória de cálculo e detalhamento técnico para aprovação.",
  },
  {
    id: "b4",
    number: "04",
    title: "Produção premium",
    text: "Fabricação com tecnologia CNC e materiais selecionados do catálogo Leo Sob Medida.",
  },
  {
    id: "b5",
    number: "05",
    title: "Entrega e montagem",
    text: "Nossa equipe técnica instala com a precisão que o projeto exige. Sem surpresas.",
  },
  {
    id: "b6",
    number: "06",
    title: "Conferência junto com você",
    text: "Vistoria final com checklist. Você valida antes de apresentar ao seu cliente.",
  },
];

export default function B2BPage() {
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
        {/* Decoração dourada */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "35%",
            background:
              "linear-gradient(to left, rgba(201,169,110,0.04), transparent)",
          }}
        />
        <div className="container-pd" style={{ position: "relative", zIndex: 1 }}>
          <p className="text-eyebrow" style={{ marginBottom: "1.5rem" }}>
            Para Arquitetos &amp; Designers
          </p>
          <h1
            className="text-display-xl"
            style={{ color: "var(--color-white)", maxWidth: "750px", marginBottom: "2rem" }}
          >
            Seu projeto.
            <br />
            <em>Nossa execução.</em>
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
              maxWidth: "580px",
              marginBottom: "3rem",
            }}
          >
            Você tem a visão criativa e o relacionamento com o cliente. Nós
            temos a capacidade técnica e operacional para transformar seu
            projeto em realidade — com precisão milimétrica e respeito total
            ao seu design.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link href="/contato?assunto=parceria-b2b" id="b2b-cta-principal" className="btn btn-outline">
              Quero ser parceiro
            </Link>
            <Link href="/projetos" id="b2b-cta-portfolio" className="btn btn-ghost">
              Ver portfólio
            </Link>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-gray-900)" }}
        aria-labelledby="b2b-process-heading"
      >
        <div className="container-pd">
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
              Como funciona
            </p>
            <h2
              id="b2b-process-heading"
              className="text-display-lg"
              style={{ color: "var(--color-white)" }}
            >
              Marcenaria que respeita
              <br />
              <em>o projeto do arquiteto.</em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5px",
            }}
          >
            {benefits.map((b) => (
              <div
                key={b.id}
                id={b.id}
                className="card-dark"
                style={{ padding: "2.5rem" }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 300,
                    color: "rgba(201,169,110,0.2)",
                    marginBottom: "1rem",
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {b.number}
                </span>
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
                  {b.title}
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
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposta */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-black)" }}
        aria-labelledby="b2b-propostas-heading"
      >
        <div className="container-pd" style={{ maxWidth: "800px" }}>
          <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
            Nossa proposta
          </p>
          <h2
            id="b2b-propostas-heading"
            className="text-display-lg"
            style={{ color: "var(--color-white)", marginBottom: "2rem" }}
          >
            Você fecha o projeto.
            <br />
            <em>Nós garantimos a entrega.</em>
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
            Nossa parceria é construída na confiança. Você apresenta o projeto
            ao seu cliente, nós cuidamos de tudo operacionalmente — com
            sigilo, profissionalismo e entrega impecável. A relação com o
            cliente final é sempre sua.
          </p>
          <Link
            href="/contato?assunto=parceria-b2b"
            id="b2b-cta-contato"
            className="btn btn-outline"
            style={{ fontSize: "0.7rem" }}
          >
            Iniciar conversa
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
