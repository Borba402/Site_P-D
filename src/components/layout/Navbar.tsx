"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/parceiros", label: "Parcerias" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        role="banner"
      >
        <div
          className="container-pd"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBlock: "1.25rem",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Pinheiro & Design — Página Inicial"
            style={{ display: "flex", alignItems: "center", transition: "opacity var(--transition-base)" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Image
              src="/logo/Logomarca P&D.png"
              alt="Pinheiro & Design"
              width={220}
              height={68}
              priority
              style={{ height: "54px", width: "auto" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Navegação principal" className="desktop-nav">
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2.5rem",
                listStyle: "none",
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link-desktop"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contato"
                  className="btn btn-outline"
                  id="navbar-cta"
                  aria-label="Solicitar orçamento"
                  style={{ padding: "0.7rem 1.75rem", fontSize: "0.65rem", letterSpacing: "0.18em" }}
                >
                  Solicitar Orçamento
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            id="hamburger-btn"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "24px",
                  height: "1px",
                  backgroundColor: "var(--color-gold)",
                  transition: "all var(--transition-base)",
                  transformOrigin: "center",
                  transform:
                    menuOpen
                      ? i === 0
                        ? "translateY(6px) rotate(45deg)"
                        : i === 2
                        ? "translateY(-6px) rotate(-45deg)"
                        : "scaleX(0)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navegação"
        aria-modal="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          backgroundColor: "var(--color-black)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2.5rem",
          padding: "2rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Image
            src="/logo/Logo.png"
            alt="Pinheiro & Design"
            width={60}
            height={60}
            style={{ opacity: 0.6 }}
          />
        </div>
        <nav aria-label="Menu mobile">
          <ul
            style={{
              listStyle: "none",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ animationDelay: `${i * 80}ms` }}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="nav-link-mobile"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/contato"
          className="btn btn-outline"
          onClick={() => setMenuOpen(false)}
          style={{ fontSize: "0.7rem", marginTop: "1rem" }}
        >
          Solicitar Orçamento
        </Link>
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-gray-400)",
            }}
          >
            Barueri, SP · Marcenaria 4.0
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
