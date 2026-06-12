import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { OrcamentoWizard } from "@/components/ui/OrcamentoWizard";

export const metadata: Metadata = {
  title: "Solicitar Orçamento — Pinheiro & Design",
  description: "Responda 5 perguntas rápidas e receba um atendimento personalizado pelo WhatsApp.",
};

export default function OrcamentoPage() {
  return (
    <div style={{
      minHeight: "100svh",
      backgroundColor: "var(--color-black)",
      display: "flex",
      flexDirection: "column",
    }}>

      {/* Header minimalista */}
      <header style={{
        padding: "1.75rem clamp(1.5rem, 5vw, 5rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(201,169,110,0.08)",
      }}>
        <Link href="/" aria-label="Voltar para o site">
          <Image
            src="/logo/Logomarca P&D.png"
            alt="Pinheiro & Design"
            width={180}
            height={55}
            priority
            style={{ height: "44px", width: "auto" }}
          />
        </Link>

        <Link
          href="/"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-gray-400)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "color 300ms ease",
          }}
          onMouseEnter={undefined}
        >
          ← Voltar ao site
        </Link>
      </header>

      {/* Conteúdo central */}
      <main style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 5rem)",
      }}>
        <OrcamentoWizard />
      </main>

      {/* Footer minimalista */}
      <footer style={{
        padding: "1.5rem clamp(1.5rem, 5vw, 5rem)",
        borderTop: "1px solid rgba(201,169,110,0.08)",
        display: "flex",
        justifyContent: "center",
      }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(136,136,128,0.5)",
        }}>
          Pinheiro &amp; Design · Marcenaria 4.0 · Barueri, SP
        </p>
      </footer>
    </div>
  );
}
