import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/projetos", label: "Portfólio" },
  { href: "/servicos", label: "Serviços" },
  { href: "/b2b", label: "Programa B2B" },
  { href: "/parceiros", label: "Parcerias" },
  { href: "/contato", label: "Contato" },
];

const socialLinks = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    href: "https://wa.me/5511913550385",
    label: "WhatsApp",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: "var(--color-black)",
        borderTop: "1px solid var(--color-gold)",
        borderTopColor: "rgba(201,169,110,0.3)",
      }}
    >
      <div className="container-pd" style={{ paddingBlock: "5rem 3rem" }}>
        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem 4rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(201,169,110,0.15)",
          }}
        >
          {/* Col 1 — Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" aria-label="Pinheiro & Design">
              <Image
                src="/logo/Logomarca P&D.png"
                alt="Pinheiro & Design"
                width={160}
                height={50}
                style={{ height: "38px", width: "auto", marginBottom: "1.5rem" }}
              />
            </Link>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                fontWeight: 300,
                lineHeight: 1.9,
                color: "var(--color-gray-400)",
                marginBottom: "1.5rem",
                maxWidth: "240px",
              }}
            >
              Marcenaria de alto padrão especializada em Marcenaria 4.0. Projeto
              preciso. Entrega impecável.
            </p>
            {/* Selos */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                "9+ anos de experiência",
                "Parceiro oficial Leo Sob Medida",
                "CNPJ 42.961.772/0001-30",
              ].map((selo) => (
                <span
                  key={selo}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-gray-400)",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-gold)",
                      flexShrink: 0,
                    }}
                  />
                  {selo}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 — Navegação */}
          <div>
            <h3
              className="text-eyebrow"
              style={{ marginBottom: "1.5rem", color: "var(--color-gold)" }}
            >
              Navegação
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contato */}
          <div>
            <h3
              className="text-eyebrow"
              style={{ marginBottom: "1.5rem", color: "var(--color-gold)" }}
            >
              Contato
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <address
                style={{
                  fontStyle: "normal",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "var(--color-gray-400)",
                }}
              >
                <strong style={{ color: "var(--color-white)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Escritório
                </strong>
                <br />
                Rua Mar Cáspio, 106
                <br />
                Parque Ribeiro de Lima
                <br />
                Barueri/SP · CEP 06405-015
              </address>
              <address
                style={{
                  fontStyle: "normal",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "var(--color-gray-400)",
                }}
              >
                <strong style={{ color: "var(--color-white)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Fábrica Parceira
                </strong>
                <br />
                Rua Dr. Carlos Roberto
                <br />
                Presgrave de Melo, 21
                <br />
                Vila Iracema, Barueri/SP
              </address>
            </div>
          </div>

          {/* Col 4 — Redes Sociais + Parceiros */}
          <div>
            <h3
              className="text-eyebrow"
              style={{ marginBottom: "1.5rem", color: "var(--color-gold)" }}
            >
              Redes Sociais
            </h3>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "2.5rem" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-btn"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <h3
              className="text-eyebrow"
              style={{ marginBottom: "1rem", color: "var(--color-gold)" }}
            >
              Parceiros
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 300,
                color: "var(--color-gray-400)",
                lineHeight: 1.7,
              }}
            >
              Leo Sob Medida
              <br />
              Escola da Marcenaria
              <br />
              Grupo Leo
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              fontWeight: 300,
              letterSpacing: "0.05em",
              color: "var(--color-gray-400)",
            }}
          >
            © {currentYear} Pinheiro &amp; Design Ltda · CNPJ 42.961.772/0001-30 · IE 206.708.007.119
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
            }}
          >
            Desenvolvido com precisão.
          </p>
        </div>
      </div>
    </footer>
  );
}
