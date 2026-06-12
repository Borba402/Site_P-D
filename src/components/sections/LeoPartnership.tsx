import Link from "next/link";

export function LeoPartnership() {
  return (
    <section
      id="parceria-leo"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(5rem, 10vw, 9rem) 0",
      }}
      aria-labelledby="leo-heading"
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('/portfolio/cozinha-classica.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#111008",
        }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(13,13,13,0.82)",
        }}
      />
      {/* Gold side accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          background:
            "linear-gradient(to bottom, transparent, var(--color-gold), transparent)",
          opacity: 0.6,
        }}
      />

      <div
        className="container-pd"
        style={{ position: "relative", zIndex: 2, maxWidth: "800px" }}
      >
        <p className="text-eyebrow" style={{ marginBottom: "1.5rem" }}>
          Parceria Estratégica
        </p>
        <h2
          id="leo-heading"
          className="text-display-lg"
          style={{ color: "var(--color-white)", marginBottom: "2rem" }}
        >
          Acesso ao melhor
          <br />
          <em>da marcenaria nacional.</em>
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
            fontSize: "0.95rem",
            fontWeight: 300,
            lineHeight: 2,
            color: "rgba(245,240,232,0.75)",
            marginBottom: "1.5rem",
            maxWidth: "620px",
          }}
        >
          Nossa parceria com a <strong style={{ color: "var(--color-white)", fontWeight: 400 }}>Leo Sob Medida</strong> garante que
          você tenha acesso a centenas de chapas, revestimentos, ferragens e
          acabamentos premium — com a possibilidade de visitar a fábrica e
          escolher pessoalmente cada detalhe do seu projeto.
        </p>

        <address
          style={{
            fontStyle: "normal",
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "var(--color-gray-400)",
            marginBottom: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Rua Dr. Carlos Roberto Presgrave de Melo, 21 — Vila Iracema, Barueri/SP · 06422-110
        </address>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link
            href="/contato?assunto=visita-fabrica"
            id="leo-cta-visita"
            className="btn btn-outline"
            aria-label="Agendar visita à fábrica Leo Sob Medida"
          >
            Agendar visita à fábrica
          </Link>
          <Link
            href="/parceiros"
            id="leo-cta-parceiros"
            className="btn btn-ghost"
            aria-label="Conhecer nossos parceiros"
          >
            Conhecer parceiros
          </Link>
        </div>
      </div>
    </section>
  );
}
