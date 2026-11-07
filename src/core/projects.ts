import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Bot,
  Bus,
  Code,
  Gamepad2,
  Map,
  Megaphone,
  MessageCircle,
  ScanEye,
  ScanSearch,
  School,
  Server,
  Terminal,
} from "lucide-react";

/**
 * Link público de um projeto (site, documentação ou repositório).
 *
 * Attributes:
 *     href (string): URL absoluta.
 *     label (string): Texto do link.
 */
export interface ProjectLink {
  href: string;
  label: string;
}

/**
 * Projeto do portfólio.
 *
 * Projeto de repositório privado não tem `link`: o card mostra só a descrição,
 * para não apontar o visitante para um 404 do GitHub.
 *
 * Attributes:
 *     id (string): Chave estável para o `key` do React.
 *     icon (LucideIcon): Ícone do card.
 *     name (string): Nome do projeto.
 *     category (string): Tipo do projeto (produto, SDK, ferramenta...).
 *     summary (string): O que o projeto faz, em uma ou duas frases.
 *     stack (string[]): Tecnologias principais.
 *     link (ProjectLink | undefined): Link público, quando existe.
 */
export interface ProjectItem {
  id: string;
  icon: LucideIcon;
  name: string;
  category: string;
  summary: string;
  stack: string[];
  link?: ProjectLink;
}

/**
 * Perfil do GitHub com todos os repositórios públicos.
 */
export const GITHUB_PROFILE_URL: string = "https://github.com/mauriciobenjamin700";

/**
 * Endereço público do site, impresso no PDF do portfólio.
 */
export const SITE_URL: string = "https://tempesttecnology.github.io/landing-page/";

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "famachapp",
    icon: ScanEye,
    name: "FAMACHApp",
    category: "Visão computacional",
    summary:
      "Diagnóstico de anemia em ovinos e caprinos pelo método FAMACHA: o app fotografa a mucosa ocular, detecta e classifica o grau e recomenda ou não a vermifugação — tudo no aparelho, offline.",
    stack: ["Flutter", "ONNX", "Python", "PWA"],
  },
  {
    id: "alofans",
    icon: Megaphone,
    name: "AloFãns",
    category: "Plataforma",
    summary:
      "Plataforma onde fãs enviam mensagens para artistas em eventos e compram produtos digitais, com painel para produtores, notificações em tempo real e app instalável.",
    stack: ["React", "FastAPI", "PostgreSQL", "RabbitMQ", "Web Push"],
  },
  {
    id: "buscar",
    icon: Bus,
    name: "BusCar",
    category: "Mobilidade",
    summary:
      "Centraliza rotas e linhas de transporte alternativo entre municípios, mostra vagas disponíveis e organiza viagens compartilhadas para eventos, com app e painel administrativo.",
    stack: ["Flutter", "React", "FastAPI", "Mapas"],
  },
  {
    id: "tempest-fastapi-sdk",
    icon: Server,
    name: "Tempest FastAPI SDK",
    category: "SDK open source",
    summary:
      "Fundação dos backends da TEMPEST: camadas, banco, autenticação, filas, cache, e-mail, uploads e muito mais, publicada no PyPI.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "PyPI"],
    link: {
      href: "https://mauriciobenjamin700.github.io/tempest-fastapi-sdk/",
      label: "Documentação",
    },
  },
  {
    id: "tempest-react-sdk",
    icon: Atom,
    name: "Tempest React SDK",
    category: "SDK open source",
    summary:
      "Componentes, hooks e integrações reutilizáveis que dão a mesma base a todo frontend da TEMPEST — inclusive a este site. Publicado no npm.",
    stack: ["React", "TypeScript", "Vite", "npm"],
    link: {
      href: "https://mauriciobenjamin700.github.io/tempest-react-sdk/",
      label: "Documentação",
    },
  },
  {
    id: "ort-vision-sdk",
    icon: ScanSearch,
    name: "ORT Vision SDK",
    category: "SDK open source",
    summary:
      "Classificação, detecção e segmentação sobre ONNX Runtime, com a mesma API em Python e no navegador.",
    stack: ["Python", "TypeScript", "ONNX Runtime"],
    link: {
      href: "https://mauriciobenjamin700.github.io/ort-vision-sdk/",
      label: "Documentação",
    },
  },
];

export const OTHER_PROJECTS: ProjectItem[] = [
  {
    id: "tempestweb",
    icon: Code,
    name: "tempestweb",
    category: "Framework",
    summary:
      "Aplicações web em Python tipado, rodando no navegador (WASM), no servidor ou transpiladas para JavaScript.",
    stack: ["Python", "WASM", "PWA"],
    link: { href: "https://mauriciobenjamin700.github.io/tempestweb/", label: "Documentação" },
  },
  {
    id: "tempest-cli",
    icon: Terminal,
    name: "Tempest CLI",
    category: "Ferramenta",
    summary: "Portão de qualidade para projetos Python: lint, tipagem e testes em um só comando.",
    stack: ["Python", "ruff", "mypy", "pytest"],
    link: { href: "https://mauriciobenjamin700.github.io/tempest-cli/", label: "Documentação" },
  },
  {
    id: "tempest-zap-api",
    icon: MessageCircle,
    name: "Tempest Zap API",
    category: "Integração",
    summary:
      "Serviço para enviar e receber mensagens de WhatsApp via REST e WebSocket, com histórico e webhooks.",
    stack: ["TypeScript", "Express", "PostgreSQL"],
  },
  {
    id: "smeif",
    icon: School,
    name: "SMEIF",
    category: "Educação",
    summary:
      "Monitoramento de alunos de escolas públicas, para os pais acompanharem o desempenho dos filhos em tempo real.",
    stack: ["Python", "JavaScript", "Docker"],
  },
  {
    id: "cangaco",
    icon: Map,
    name: "Pelos Caminhos do Cangaço",
    category: "Cultura",
    summary: "Mapa interativo para a exposição sobre o cangaço no Nordeste brasileiro.",
    stack: ["Web", "Mapas"],
  },
  {
    id: "bot-ds-github",
    icon: Bot,
    name: "Bot de PRs no Discord",
    category: "Automação",
    summary:
      "Acompanha os Pull Requests do GitHub direto no Discord, para squads que revisam código.",
    stack: ["JavaScript", "Discord", "GitHub"],
    link: { href: "https://github.com/mauriciobenjamin700/bot-ds-github", label: "Repositório" },
  },
  {
    id: "batalha-naval",
    icon: Gamepad2,
    name: "Batalha Naval educativa",
    category: "Educação",
    summary:
      "Jogo de terminal para dois jogadores, feito como material para quem aprende a programar.",
    stack: ["TypeScript", "Node.js"],
    link: {
      href: "https://github.com/mauriciobenjamin700/educational-battleship-game",
      label: "Repositório",
    },
  },
];
