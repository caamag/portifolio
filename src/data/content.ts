import type { IconType } from "react-icons";

// Images
import Kanban from "../assets/Kanban-logo.png";
import Message from "../assets/conciex-messaging.png";
import Lumio from "../assets/logo-lumio.png";

// Tech icons
import { FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiZendesk,
  SiTypescript,
  SiNestjs,
  SiStorybook,
  SiFirebase,
  SiExpo,
  SiStyledcomponents,
  SiNextdotjs,
} from "react-icons/si";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

// UI icons
import {
  FiMonitor,
  FiLayers,
  FiShoppingBag,
  FiLink,
  FiGrid,
  FiTrendingUp,
  FiSearch,
  FiClipboard,
  FiPenTool,
  FiCode,
  FiCheckCircle,
  FiSend,
} from "react-icons/fi";

export const LINKS = {
  github: "https://github.com/caamag",
  linkedin: "https://www.linkedin.com/in/caio-lopes-programador/",
  whatsapp: "https://wa.me/5511966197683",
};

export const whatsappWithText = (text: string) =>
  `${LINKS.whatsapp}?text=${encodeURIComponent(text)}`;

export type Tech = { name: string; icon: IconType };

export const TECH = {
  html: { name: "HTML", icon: FaHtml5 },
  css: { name: "CSS", icon: FaCss3Alt },
  js: { name: "JavaScript", icon: IoLogoJavascript },
  ts: { name: "TypeScript", icon: SiTypescript },
  react: { name: "React", icon: RiReactjsFill },
  native: { name: "React Native", icon: SiExpo },
  next: { name: "Next.js", icon: SiNextdotjs },
  node: { name: "Node.js", icon: FaNodeJs },
  nest: { name: "NestJS", icon: SiNestjs },
  postgres: { name: "PostgreSQL", icon: BiLogoPostgresql },
  firebase: { name: "Firebase", icon: SiFirebase },
  tailwind: { name: "Tailwind", icon: RiTailwindCssFill },
  styled: { name: "Styled Components", icon: SiStyledcomponents },
  storybook: { name: "Storybook", icon: SiStorybook },
  zendesk: { name: "Zendesk", icon: SiZendesk },
  git: { name: "Git", icon: FaGitAlt },
} satisfies Record<string, Tech>;

export const STACK_GROUPS: { title: string; items: Tech[] }[] = [
  {
    title: "Front-end",
    items: [TECH.react, TECH.next, TECH.ts, TECH.js, TECH.tailwind, TECH.styled],
  },
  {
    title: "Back-end & dados",
    items: [TECH.node, TECH.nest, TECH.postgres, TECH.firebase],
  },
  {
    title: "Mobile, plataformas & ferramentas",
    items: [TECH.native, TECH.zendesk, TECH.storybook, TECH.git],
  },
];

export type Service = {
  icon: IconType;
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    icon: FiMonitor,
    title: "Sites & Landing Pages",
    description:
      "Páginas rápidas, responsivas e pensadas para converter visitantes em clientes.",
    bullets: ["Design moderno", "SEO técnico", "Alta performance"],
  },
  {
    icon: FiLayers,
    title: "Plataformas Web & SaaS",
    description:
      "Sistemas sob medida com painel, autenticação, dashboards e regras de negócio.",
    bullets: ["Front + back-end", "Escalável", "Painel administrativo"],
  },
  {
    icon: FiShoppingBag,
    title: "E-commerce",
    description:
      "Lojas virtuais com catálogo, carrinho e checkout fluido do início ao fim.",
    bullets: ["Catálogo e carrinho", "Fluxo de compra", "Integrações"],
  },
  {
    icon: FiLink,
    title: "Integrações & Zendesk Apps",
    description:
      "Apps para Zendesk, automações e integrações com APIs para otimizar operações.",
    bullets: ["Zendesk Apps", "Help Centers", "APIs e automações"],
  },
  {
    icon: FiGrid,
    title: "Design Systems",
    description:
      "Bibliotecas de componentes documentadas que mantêm seu produto consistente.",
    bullets: ["Design tokens", "Componentes", "Storybook"],
  },
  {
    icon: FiTrendingUp,
    title: "Evolução & Manutenção",
    description:
      "Melhorias contínuas, refatoração e otimização de performance de projetos existentes.",
    bullets: ["Refatoração", "Performance", "Suporte contínuo"],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  href: string;
  logo: string;
  logoHeight?: number;
  invertLogo?: boolean;
  glow: string;
  tech: Tech[];
};

export const PROJECTS: Project[] = [
  {
    title: "Plataforma de mensageria",
    category: "Plataforma SaaS",
    description:
      "Envio em massa, automações e mensagens individuais via WhatsApp, SMS e e-mail, com histórico e controle.",
    href: "https://conciex.com/produtos/conciex-messaging",
    logo: Message,
    logoHeight: 26,
    glow: "rgba(113, 126, 251, 0.35)",
    tech: [TECH.react, TECH.ts, TECH.zendesk],
  },
  {
    title: "Gestão de tarefas",
    category: "Plataforma SaaS",
    description:
      "Plataforma integrada com Zendesk para supervisores de operações gerirem as tarefas do time de suporte e atendimento.",
    href: "https://conciex.com/produtos/conciex-kanban",
    logo: Kanban,
    logoHeight: 24,
    glow: "rgba(102, 114, 250, 0.35)",
    tech: [TECH.react, TECH.ts, TECH.zendesk, TECH.tailwind],
  },
  {
    title: "Lumio — Design System",
    category: "Design System",
    description:
      "Design system criado do zero, com tokens de design, componentes reutilizáveis e documentação em Storybook.",
    href: "https://lumio-ui-website.vercel.app/",
    logo: Lumio,
    logoHeight: 44,
    invertLogo: true,
    glow: "rgba(34, 211, 238, 0.28)",
    tech: [TECH.react, TECH.ts, TECH.css, TECH.storybook],
  },
];

export const PROCESS: { icon: IconType; title: string; description: string }[] = [
  {
    icon: FiSearch,
    title: "Descoberta",
    description: "Entendo seu negócio, público e objetivos do projeto.",
  },
  {
    icon: FiClipboard,
    title: "Planejamento",
    description: "Defino escopo, arquitetura, tecnologias e cronograma.",
  },
  {
    icon: FiPenTool,
    title: "Design",
    description: "Estruturo layout e interface com foco em experiência e conversão.",
  },
  {
    icon: FiCode,
    title: "Desenvolvimento",
    description: "Código limpo, escalável e com entregas parciais para validação.",
  },
  {
    icon: FiCheckCircle,
    title: "Testes",
    description: "Revisão de bugs, performance e compatibilidade entre dispositivos.",
  },
  {
    icon: FiSend,
    title: "Entrega",
    description: "Publicação em produção e suporte para evoluir o projeto.",
  },
];
