import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Code, Layers, MonitorSmartphone, Server, Wrench } from "lucide-react";

import { SITE_URL } from "@/core/projects";

/**
 * Experiência profissional ou formação, exibida numa linha do tempo.
 *
 * Attributes:
 *     id (string): Chave estável para o `key` do React.
 *     role (string): Cargo ou curso.
 *     organization (string): Empresa ou instituição.
 *     period (string): Período por extenso (`Mar/2024 – atual`).
 *     description (string): O que foi feito ali.
 *     current (boolean): Se ainda está em andamento, para destacar o marcador.
 */
export interface CareerItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  current: boolean;
}

/**
 * Grupo de competências técnicas.
 *
 * Attributes:
 *     id (string): Chave estável para o `key` do React.
 *     icon (LucideIcon): Ícone do grupo.
 *     title (string): Nome do grupo.
 *     items (string[]): Tecnologias do grupo.
 */
export interface SkillGroup {
  id: string;
  icon: LucideIcon;
  title: string;
  items: string[];
}

/**
 * Link de contato ou rede profissional.
 *
 * Attributes:
 *     id (string): Chave estável para o `key` do React.
 *     label (string): Nome da rede.
 *     href (string): URL absoluta (ou `mailto:`).
 *     display (string): Endereço legível, impresso no PDF.
 */
export interface SocialLink {
  id: string;
  label: string;
  href: string;
  display: string;
}

export const FOUNDER_NAME: string = "Mauricio Benjamin";

export const FOUNDER_ROLE: string = "CEO e Desenvolvedor Principal da TEMPEST";

export const FOUNDER_EMAIL: string = "mauriciobenjamin700@gmail.com";

/**
 * Caminho da página do fundador, prefixado com o `base` do Vite.
 */
export const FOUNDER_PATH: string = `${import.meta.env.BASE_URL}mauricio/`;

/**
 * Endereço público da página do fundador, impresso no PDF.
 */
export const FOUNDER_PAGE_URL: string = `${SITE_URL}mauricio/`;

/**
 * Foto do fundador em `public/`, prefixada com o `base` do Vite.
 */
export const FOUNDER_PHOTO_SRC: string = `${import.meta.env.BASE_URL}mauricio.jpg`;

export const FOUNDER_TAGLINE: string =
  "Desenvolvedor, pesquisador e educador. Construo soluções open source para tornar a inteligência artificial local, embarcada e acessível.";

export const FOUNDER_BIO: string[] = [
  "Fundei a TEMPEST para transformar problemas reais em soluções digitais. Como CEO, conduzo a estratégia e o relacionamento com clientes; como Desenvolvedor Principal, respondo pela arquitetura dos produtos — do banco de dados à API, à aplicação web e ao app mobile.",
  "Pesquiso IA local, IA embarcada e visão computacional: levar modelos para o aparelho de quem usa, com inferência otimizada e sem depender da nuvem. Sou bacharel em Sistemas de Informação e mestrando em Engenharia Elétrica pela UFPI.",
  "Mantenho os SDKs open source que formam a base dos projetos da TEMPEST e dou aulas de programação, porque formar gente é parte de fazer tecnologia que dure.",
];

export const FOUNDER_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mauriciobenjamin700/",
    display: "linkedin.com/in/mauriciobenjamin700",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/mauriciobenjamin700",
    display: "github.com/mauriciobenjamin700",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/mauriciobenjamin70/",
    display: "instagram.com/mauriciobenjamin70",
  },
  {
    id: "email",
    label: "E-mail",
    href: `mailto:${FOUNDER_EMAIL}`,
    display: FOUNDER_EMAIL,
  },
];

export const FOUNDER_SKILLS: SkillGroup[] = [
  {
    id: "linguagens",
    icon: Code,
    title: "Linguagens",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Dart"],
  },
  {
    id: "ia",
    icon: BrainCircuit,
    title: "IA e dados",
    items: [
      "PyTorch",
      "Ultralytics",
      "ONNX Runtime",
      "OpenCV",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend",
    items: ["FastAPI", "Django", "SQLAlchemy", "Pydantic", "Express", "RabbitMQ", "Redis"],
  },
  {
    id: "frontend",
    icon: MonitorSmartphone,
    title: "Web e mobile",
    items: ["React", "Next.js", "Redux", "Flutter", "PWA"],
  },
  {
    id: "dados",
    icon: Layers,
    title: "Bancos de dados",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    id: "devops",
    icon: Wrench,
    title: "DevOps e práticas",
    items: ["Docker", "Nginx", "Git", "GitHub Actions", "Pytest", "Scrum"],
  },
];

export const FOUNDER_EXPERIENCE: CareerItem[] = [
  {
    id: "tempest",
    role: "CEO e Desenvolvedor Principal",
    organization: "TEMPEST",
    period: "Jul/2025 – atual",
    description:
      "Lidero a empresa e a engenharia: estratégia, requisitos com clientes, arquitetura dos sistemas e manutenção dos SDKs open source da casa.",
    current: true,
  },
  {
    id: "senai",
    role: "Professor de Informática",
    organization: "SENAI Picos (PI)",
    period: "Abr/2026 – atual",
    description:
      "Formo alunos de Operador de Computador, Informática para Internet e Desenvolvimento de Sistemas: programação web, Python, PHP e bancos relacionais.",
    current: true,
  },
  {
    id: "retake",
    role: "Desenvolvedor de Software Full Stack",
    organization: "Retake Recuperadora de Crédito",
    period: "Mar/2025 – atual",
    description:
      "APIs de processamento de dados e relatórios com IA (FastAPI, LangChain, LangGraph), pagamentos com Stripe, chatbot com IA no WhatsApp e painéis em React e Next.js.",
    current: true,
  },
  {
    id: "andall",
    role: "Sócio e Diretor de Tecnologia (CTO)",
    organization: "And All Technology",
    period: "Mar/2024 – atual",
    description:
      "Lidero o time de desenvolvimento como Scrum Master e atuo em todas as etapas, do banco de dados às APIs e aos apps web e mobile — entre eles, o AloFãns.",
    current: true,
  },
  {
    id: "jomasio",
    role: "Professor de Informática",
    organization: "U.E. Jomasio dos Santos Barro",
    period: "Jun/2024 – atual",
    description:
      "Ensino técnico de informática, preparando os alunos para usar a tecnologia na resolução de problemas reais.",
    current: true,
  },
  {
    id: "ufpi-ic",
    role: "Pesquisador em Iniciação Científica",
    organization: "Universidade Federal do Piauí (UFPI)",
    period: "Set/2022 – Set/2025",
    description:
      "Pesquisa e desenvolvimento do FAMACHApp: coleta e processamento de imagens de caprinos e ovinos e treino dos modelos de visão computacional que apoiam o diagnóstico.",
    current: false,
  },
  {
    id: "monitoria",
    role: "Monitor acadêmico",
    organization: "UFPI — Algoritmos I e Metodologia Científica",
    period: "Mai/2023 – Fev/2024",
    description: "Aulas de reforço, correção de tarefas e apoio aos alunos e ao professor.",
    current: false,
  },
  {
    id: "freelancer",
    role: "Engenheiro de Software e Gerente de Projetos",
    organization: "Freelancer",
    period: "Desde Fev/2023",
    description:
      "Definição de requisitos, modelagem de sistemas e orientação de equipes, alinhando a solução entregue ao que o cliente precisa.",
    current: false,
  },
];

export const FOUNDER_EDUCATION: CareerItem[] = [
  {
    id: "mestrado",
    role: "Mestrado em Engenharia Elétrica",
    organization: "Universidade Federal do Piauí (UFPI)",
    period: "Mar/2026 – em andamento",
    description: "Pesquisa em IA local, IA embarcada e visão computacional.",
    current: true,
  },
  {
    id: "bacharelado",
    role: "Bacharelado em Sistemas de Informação",
    organization: "Universidade Federal do Piauí (UFPI)",
    period: "Mai/2021 – Nov/2025",
    description: "Graduação concluída.",
    current: false,
  },
  {
    id: "ada",
    role: "Formação em Análise de Dados",
    organization: "ADA Tech",
    period: "Jun/2023 – Mar/2024",
    description: "Formação concluída.",
    current: false,
  },
];
