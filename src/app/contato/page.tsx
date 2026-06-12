import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contato — Pinheiro & Design",
  description:
    "Entre em contato com a Pinheiro & Design. Solicite orçamento para seu projeto residencial, corporativo ou parceria B2B em Barueri, SP.",
};

export default function ContatoPage() {
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
            Fale conosco
          </p>
          <h1
            className="text-display-xl"
            style={{ color: "var(--color-white)", maxWidth: "600px" }}
          >
            Vamos construir
            <br />
            <em>algo juntos.</em>
          </h1>
        </div>
      </section>

      {/* Form + Info */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-black)", paddingTop: "2rem" }}
        aria-labelledby="contato-form-heading"
      >
        <div className="container-pd">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "6rem",
              alignItems: "start",
            }}
          >
            {/* Formulário */}
            <div>
              <h2
                id="contato-form-heading"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  marginBottom: "2.5rem",
                }}
              >
                Formulário de contato
              </h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div style={{ paddingTop: "4rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                {/* Endereço principal */}
                <div>
                  <h3 className="text-eyebrow" style={{ marginBottom: "1rem" }}>
                    Escritório
                  </h3>
                  <address
                    style={{
                      fontStyle: "normal",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      fontWeight: 300,
                      lineHeight: 2,
                      color: "var(--color-gray-400)",
                    }}
                  >
                    Rua Mar Cáspio, 106
                    <br />
                    Parque Ribeiro de Lima
                    <br />
                    Barueri/SP · CEP 06405-015
                  </address>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    background: "linear-gradient(to right, var(--color-gold), transparent)",
                    opacity: 0.3,
                  }}
                  aria-hidden="true"
                />

                {/* Fábrica parceira */}
                <div>
                  <h3 className="text-eyebrow" style={{ marginBottom: "1rem" }}>
                    Fábrica Parceira — Leo Sob Medida
                  </h3>
                  <address
                    style={{
                      fontStyle: "normal",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      fontWeight: 300,
                      lineHeight: 2,
                      color: "var(--color-gray-400)",
                    }}
                  >
                    Rua Dr. Carlos Roberto
                    <br />
                    Presgrave de Melo, 21
                    <br />
                    Vila Iracema, Barueri/SP
                    <br />
                    CEP 06422-110
                  </address>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      color: "var(--color-gold)",
                      marginTop: "0.75rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Visitas técnicas disponíveis
                  </p>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    background: "linear-gradient(to right, var(--color-gold), transparent)",
                    opacity: 0.3,
                  }}
                  aria-hidden="true"
                />

                {/* CNPJ */}
                <div>
                  <h3 className="text-eyebrow" style={{ marginBottom: "1rem" }}>
                    Dados Empresariais
                  </h3>
                  <dl
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    {[
                      { label: "Razão Social", value: "Pinheiro & Design Ltda" },
                      { label: "CNPJ", value: "42.961.772/0001-30" },
                      { label: "IE", value: "206.708.007.119" },
                    ].map((item) => (
                      <div key={item.label} style={{ display: "flex", gap: "0.75rem" }}>
                        <dt
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.7rem",
                            fontWeight: 500,
                            color: "var(--color-gray-400)",
                            minWidth: "90px",
                          }}
                        >
                          {item.label}:
                        </dt>
                        <dd
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.7rem",
                            fontWeight: 300,
                            color: "var(--color-white)",
                          }}
                        >
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
