import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pinheiro & Design — Marcenaria 4.0 · Barueri, SP",
  description:
    "Marcenaria de alto padrão especializada em projetos residenciais, corporativos e B2B. Projeto preciso, entrega impecável. Barueri, SP.",
  keywords: [
    "marcenaria alto padrão",
    "móveis planejados Barueri",
    "marcenaria 4.0",
    "móveis sob medida SP",
    "Pinheiro Design",
    "marcenaria B2B",
    "parceria arquitetos",
  ],
  openGraph: {
    title: "Pinheiro & Design — Marcenaria 4.0",
    description: "Projeto preciso. Entrega impecável. Marcenaria de alto padrão em Barueri, SP.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${montserrat.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
