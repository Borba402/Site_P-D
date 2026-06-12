"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    el.style.animation = "ken-burns 16s ease-out forwards";
  }, []);

  return (
    <section
      id="hero"
      role="banner"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "640px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('/portfolio/biblioteca.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundColor: "#1a1008",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Overlay — gradiente cinematográfico em duas camadas */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg, rgba(13,13,13,0.68) 0%, rgba(13,13,13,0.38) 45%, rgba(13,13,13,0.80) 100%)",
          zIndex: 1,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 60%, transparent 30%, rgba(13,13,13,0.45) 100%)",
          zIndex: 1,
        }}
      />

      {/* Linha dourada lateral com animação */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "clamp(1.5rem, 5vw, 5rem)",
          top: "50%",
          transform: "translateY(-50%)",
          width: "1px",
          height: "180px",
          background: "linear-gradient(to bottom, transparent, var(--color-gold), transparent)",
          zIndex: 2,
          animation: "pulse-line 4s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div
        className="container-pd"
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          maxWidth: "920px",
        }}
      >
        {/* Eyebrow — pill com border */}
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid rgba(201, 169, 110, 0.5)",
              borderRadius: "100px",
              padding: "0.45rem 1.4rem",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(13, 13, 13, 0.35)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "var(--color-gold)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.62rem",
                fontWeight: 500,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
              }}
            >
              Marcenaria 4.0 &middot; Barueri, SP
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-display-xl animate-fade-up delay-200"
          style={{
            color: "var(--color-white)",
            marginBottom: "1.75rem",
            fontStyle: "italic",
            textShadow: "0 2px 32px rgba(0,0,0,0.6)",
          }}
        >
          Projetos que definem
          <br />
          <span style={{ fontStyle: "normal" }}>espaços únicos.</span>
        </h1>

        {/* Subtítulo */}
        <p
          className="animate-fade-up delay-400"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "rgba(245,240,232,0.88)",
            maxWidth: "540px",
            margin: "0 auto 3.25rem",
          }}
        >
          Da concepção à entrega final, cada projeto é desenvolvido com
          precisão técnica e sensibilidade estética.
        </p>

        {/* CTAs — hierarquia clara: primário sólido, secundário ghost */}
        <div
          className="animate-fade-up delay-600"
          style={{
            display: "flex",
            gap: "2.25rem",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/projetos"
            id="hero-cta-projetos"
            className="btn btn-solid"
            aria-label="Conheça nossos projetos"
          >
            Conheça nossos projetos
          </Link>
          <Link
            href="/contato"
            id="hero-cta-contato"
            className="btn btn-ghost"
            aria-label="Fale com nossa equipe"
          >
            Fale com nossa equipe
          </Link>
        </div>
      </div>

      {/* Scroll indicator com bounce */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.6rem",
          opacity: 0.7,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.55rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "44px",
            background: "linear-gradient(to bottom, var(--color-gold), transparent)",
            animation: "scroll-bounce 2.2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
