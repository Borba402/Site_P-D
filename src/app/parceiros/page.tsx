import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Parceiros — Pinheiro & Design",
  description:
    "Nossa parceria com o Grupo Leo (Leo Sob Medida e Escola da Marcenaria) garante materiais de altíssima qualidade e rigor técnico aos nossos projetos.",
};

export default function PartnersPage() {
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
            width: "35%",
            background:
              "linear-gradient(to left, rgba(201,169,110,0.03), transparent)",
          }}
        />
        <div className="container-pd" style={{ position: "relative", zIndex: 1 }}>
          <p className="text-eyebrow" style={{ marginBottom: "1.5rem" }}>
            Alianças Estratégicas
          </p>
          <h1
            className="text-display-xl"
            style={{ color: "var(--color-white)", maxWidth: "800px", marginBottom: "2rem" }}
          >
            Credibilidade
            <br />
            <em>que estrutura.</em>
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
            Nossa parceria oficial com o Grupo Leo traz o maior ecossistema de insumos do país para
            dentro do seu projeto, assegurando garantia de fabricação e qualificação profissional única.
          </p>
        </div>
      </section>

      {/* Parceria Leo Sob Medida */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-gray-900)" }}
        aria-labelledby="leo-sob-medida-heading"
      >
        <div className="container-pd">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(3rem, 7vw, 5rem)",
              alignItems: "center",
            }}
          >
            {/* Foto Ilustrativa Showroom Leo */}
            <div
              className="img-overlay img-overlay-dark"
              style={{
                aspectRatio: "4/3",
                border: "1px solid rgba(201,169,110,0.2)",
              }}
            >
              <Image
                src="/portfolio/showroom-leo.jpg"
                alt="Showroom da Leo Sob Medida"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>

            <div>
              <span className="text-eyebrow" style={{ marginBottom: "1rem", display: "inline-block" }}>
                Fornecedor Oficial
              </span>
              <h2
                id="leo-sob-medida-heading"
                className="text-display-md"
                style={{ color: "var(--color-white)", marginBottom: "1.5rem" }}
              >
                Parceria com a Fábrica
                <br />
                <em>Leo Sob Medida</em>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "var(--color-gray-400)",
                  marginBottom: "1.5rem",
                }}
              >
                A Leo Sob Medida (do Grupo Leo Madeiras) é a nossa grande parceira na industrialização de
                peças e fornecimento de chapas de alta densidade, ferragens e componentes de ponta. Essa
                integração nos dá acesso a uma das maiores e mais tecnológicas plantas produtivas de MDF do
                Brasil.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "var(--color-white)",
                  marginBottom: "2rem",
                }}
              >
                Para você, isso significa prazos estritamente garantidos, rastreabilidade de origem de cada
                placa de MDF, acabamentos sob controle térmico e de umidade impecáveis e centenas de opções
                de padrões de madeira e cores.
              </p>
              <div
                style={{
                  padding: "1.5rem",
                  borderLeft: "2px solid var(--color-gold)",
                  backgroundColor: "var(--color-black)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "var(--color-gray-400)",
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "var(--color-white)" }}>Visitas técnicas disponíveis:</strong>
                <br />
                Agendamos com arquitetos e clientes visitas monitoradas ao showroom e à fábrica da Leo Sob Medida para
                escolha conjunta dos padrões do projeto.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Escola da Marcenaria */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-black)" }}
        aria-labelledby="escola-marcenaria-heading"
      >
        <div className="container-pd">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(3rem, 7vw, 5rem)",
              alignItems: "center",
            }}
          >
            <div style={{ order: 2 }}>
              <span className="text-eyebrow" style={{ marginBottom: "1rem", display: "inline-block" }}>
                Qualidade Acadêmica
              </span>
              <h2
                id="escola-marcenaria-heading"
                className="text-display-md"
                style={{ color: "var(--color-white)", marginBottom: "1.5rem" }}
              >
                Danilo Pinheiro na
                <br />
                <em>Escola da Marcenaria</em>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "var(--color-gray-400)",
                  marginBottom: "1.5rem",
                }}
              >
                A Escola da Marcenaria é uma instituição de qualificação de alto padrão gerida pelo Grupo Leo.
                Nosso fundador e Diretor Técnico, Danilo Pinheiro, atua como professor dessa instituição de
                ensino de marcenaria de ponta.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "var(--color-white)",
                  marginBottom: "2rem",
                }}
              >
                O método técnico ensinado por ele a centenas de marceneiros em todo o país é o mesmo rigorosamente
                aplicado no dia a dia da Pinheiro & Design. Esse aval acadêmico comprova nossa maestria no
                desenvolvimento de soluções complexas de usinagem, fixação oculta e harmonia estrutural.
              </p>
            </div>

            <div
              style={{
                order: 1,
                padding: "3rem",
                backgroundColor: "var(--color-gray-900)",
                border: "1px solid rgba(201,169,110,0.15)",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "5rem",
                  fontWeight: 300,
                  color: "var(--color-gold)",
                  lineHeight: 1,
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                DP
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "var(--color-white)",
                  marginBottom: "0.5rem",
                }}
              >
                Danilo Pinheiro
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  marginBottom: "1.5rem",
                }}
              >
                Diretor Técnico &amp; Professor
              </p>
              <div
                style={{
                  width: "30px",
                  height: "1px",
                  backgroundColor: "var(--color-gold)",
                  margin: "0 auto 1.5rem",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "var(--color-gray-400)",
                  lineHeight: 1.6,
                }}
              >
                "Ensinar marcenaria sob medida me ensina a exigir do meu próprio time o nível máximo de
                detalhamento e excelência em cada encaixe."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fábrica Informações */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-gray-900)" }}
        aria-labelledby="factory-heading"
      >
        <div className="container-pd" style={{ maxWidth: "800px", textAlign: "center" }}>
          <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
            Logística e Infraestrutura
          </p>
          <h2
            id="factory-heading"
            className="text-display-lg"
            style={{ color: "var(--color-white)", marginBottom: "2rem" }}
          >
            Endereços e
            <br />
            <em>visitas monitoradas.</em>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2.5rem",
              textAlign: "left",
              marginTop: "3rem",
            }}
          >
            {/* Escritório */}
            <div style={{ backgroundColor: "var(--color-black)", padding: "2rem", border: "1px solid rgba(201,169,110,0.1)" }}>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  marginBottom: "1rem",
                }}
              >
                Escritório &amp; Depósito
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "var(--color-gray-400)",
                  lineHeight: 1.8,
                }}
              >
                Rua Mar Cáspio, 106
                <br />
                Parque Ribeiro de Lima
                <br />
                Barueri/SP — CEP 06405-015
              </p>
            </div>

            {/* Fábrica */}
            <div style={{ backgroundColor: "var(--color-black)", padding: "2rem", border: "1px solid rgba(201,169,110,0.1)" }}>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  marginBottom: "1rem",
                }}
              >
                Fábrica Parceira (Leo)
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "var(--color-gray-400)",
                  lineHeight: 1.8,
                }}
              >
                Rua Dr. Carlos Roberto
                <br />
                Presgrave de Melo, 21
                <br />
                Vila Iracema, Barueri/SP — CEP 06422-110
              </p>
            </div>
          </div>
          <div style={{ marginTop: "3rem" }}>
            <Link href="/contato?assunto=visita-fabrica" id="partners-visit-cta" className="btn btn-outline">
              Agendar visita à fábrica
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
