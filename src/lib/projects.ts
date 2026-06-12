export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  details: string;
  image: string;
  images: string[];
  featured: boolean;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "showroom-leo-sob-medida",
    title: "Showroom Leo Sob Medida",
    category: "Corporativo",
    categorySlug: "corporativo",
    description:
      "Estações de trabalho modulares em MDF carvalho com bancos estofados em couro preto, compartimentos ocultos, bordas arredondadas e porta laptop integrado.",
    details:
      "Projeto executivo completo para o showroom da maior rede de marcenaria do Brasil. Cada estação foi projetada para combinar funcionalidade máxima com estética impecável.",
    image: "/portfolio/showroom-leo.jpg",
    images: ["/portfolio/showroom-leo.jpg", "/portfolio/showroom-leo-2.jpg"],
    featured: true,
    tags: ["Corporativo", "MDF Carvalho", "Couro", "Modular"],
  },
  {
    id: "2",
    slug: "closet-luxo-gaveta-iluminada",
    title: "Closet de Luxo",
    category: "Residencial",
    categorySlug: "residencial",
    description:
      "Sistema em cinza fendi com gaveta iluminada para joias (LED embutido), bancada estofada, espelhos e puxadores em bronze escovado.",
    details:
      "Um closet concebido como joia arquitetônica. A gaveta de joias com iluminação LED cria um momento dramático e funcional ao mesmo tempo.",
    image: "/portfolio/closet-luxo.jpg",
    images: ["/portfolio/closet-luxo.jpg", "/portfolio/closet-luxo-2.jpg"],
    featured: true,
    tags: ["Residencial", "Closet", "LED", "Bronze"],
  },
  {
    id: "3",
    slug: "cozinha-dark-luxury",
    title: "Cozinha Dark Luxury",
    category: "Residencial",
    categorySlug: "residencial",
    description:
      "Armários em preto fosco, painel de teto ripado em madeira, ilha em mármore branco e adega de vidro com retroiluminação.",
    details:
      "A fusão perfeita entre o rigor contemporâneo e o calor da madeira. O painel ripado no teto cria uma textura que contrasta com o preto fosco dos armários.",
    image: "/portfolio/cozinha-dark.jpg",
    images: ["/portfolio/cozinha-dark.jpg", "/portfolio/cozinha-dark-2.jpg"],
    featured: true,
    tags: ["Residencial", "Cozinha", "Mármore", "Dark Luxury"],
  },
  {
    id: "4",
    slug: "biblioteca-monumental",
    title: "Biblioteca Monumental",
    category: "Residencial",
    categorySlug: "residencial",
    description:
      "Estante em madeira escura com iluminação embutida em cada prateleira e integração com sofá curvo.",
    details:
      "Uma biblioteca que é, antes de tudo, uma declaração de identidade. Iluminação em cada prateleira e integração perfeita com o sofá curvo criam um ambiente único.",
    image: "/portfolio/biblioteca.jpg",
    images: ["/portfolio/biblioteca.jpg", "/portfolio/biblioteca-2.jpg"],
    featured: true,
    tags: ["Residencial", "Biblioteca", "Iluminação", "Madeira"],
  },
  {
    id: "5",
    slug: "cozinha-classica-bicolor",
    title: "Cozinha Clássica Bicolor",
    category: "Residencial",
    categorySlug: "residencial",
    description:
      "Armários superiores em branco off-white com vidro, inferiores em madeira natural, bancada e island em mármore com veia.",
    details:
      "O equilíbrio atemporal entre o branco puro e o calor da madeira. O mármore com veia confere personalidade e sofisticação ao ambiente.",
    image: "/portfolio/cozinha-classica.jpg",
    images: [
      "/portfolio/cozinha-classica.jpg",
      "/portfolio/cozinha-classica-2.jpg",
    ],
    featured: true,
    tags: ["Residencial", "Cozinha", "Clássico", "Mármore"],
  },
  {
    id: "6",
    slug: "quarto-cabeceira-ripada",
    title: "Quarto — Cabeceira Ripada",
    category: "Residencial",
    categorySlug: "residencial",
    description:
      "Cabeceira ripada em MDF branco com iluminação indireta LED quente e integração total com a parede.",
    details:
      "A cabeceira ripada cria uma textura sofisticada que, com a iluminação indireta LED quente, transforma o quarto em um refúgio de alto padrão.",
    image: "/portfolio/quarto-cabeceira.jpg",
    images: [
      "/portfolio/quarto-cabeceira.jpg",
      "/portfolio/quarto-cabeceira-2.jpg",
    ],
    featured: true,
    tags: ["Residencial", "Quarto", "LED", "Ripado"],
  },
  {
    id: "7",
    slug: "adega-planejada",
    title: "Adega Planejada",
    category: "Residencial",
    categorySlug: "residencial",
    description:
      "Estrutura em madeira clara com porta-taças invertido, nicho para garrafas deitadas e iluminação interna.",
    details:
      "Uma adega que transforma o ritual do vinho em experiência estética. Iluminação interna e acabamentos premium tornam cada garrafa uma exposição.",
    image: "/portfolio/adega.jpg",
    images: ["/portfolio/adega.jpg"],
    featured: false,
    tags: ["Residencial", "Adega", "Madeira Clara", "Iluminação"],
  },
  {
    id: "8",
    slug: "buffet-nichos-iluminados",
    title: "Buffet com Nichos Iluminados",
    category: "Residencial",
    categorySlug: "residencial",
    description:
      "Estrutura em metal preto com fundo em madeira e retroiluminação frontal em MDF branco.",
    details:
      "O detalhamento milimétrico define este buffet. A combinação de metal preto, madeira e retroiluminação cria um objeto que é mobiliário e obra de arte.",
    image: "/portfolio/buffet.jpg",
    images: ["/portfolio/buffet.jpg"],
    featured: false,
    tags: ["Residencial", "Buffet", "Metal", "Retroiluminação"],
  },
  {
    id: "9",
    slug: "escritorio-comercial",
    title: "Escritório Comercial",
    category: "Corporativo",
    categorySlug: "corporativo",
    description:
      "Mesa de reunião em madeira maciça com tampo bicolor (carvalho + preto) e paredes de vidro.",
    details:
      "Um escritório que projeta autoridade e sofisticação. A mesa de reunião bicolor é a peça central de um ambiente que equilibra design e funcionalidade.",
    image: "/portfolio/escritorio.jpg",
    images: ["/portfolio/escritorio.jpg"],
    featured: false,
    tags: ["Corporativo", "Escritório", "Madeira Maciça", "Vidro"],
  },
  {
    id: "10",
    slug: "escola-marcenaria",
    title: "Escola da Marcenaria",
    category: "Educacional",
    categorySlug: "educacional",
    description:
      "Mesa hexagonal amarela, armário modular, parede verde musgo — projeto temático e funcional para ambiente educacional.",
    details:
      "Um projeto que vai além do convencional: a marcenaria como cenário de aprendizado. Cores vibrantes e formas geométricas estimulam a criatividade.",
    image: "/portfolio/escola.jpg",
    images: ["/portfolio/escola.jpg"],
    featured: false,
    tags: ["Educacional", "Escola da Marcenaria", "Colorido", "Modular"],
  },
];

export const projectCategories = [
  { label: "Todos", slug: "todos" },
  { label: "Residencial", slug: "residencial" },
  { label: "Corporativo", slug: "corporativo" },
  { label: "Educacional", slug: "educacional" },
];

export const featuredProjects = projects.filter((p) => p.featured);
