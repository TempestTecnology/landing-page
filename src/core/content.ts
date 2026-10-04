import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Gauge,
  Globe,
  HandCoins,
  LayoutDashboard,
  MonitorSmartphone,
  Puzzle,
  Ruler,
  ShieldCheck,
  Sprout,
  Workflow,
} from "lucide-react";
import type { TimelineItem } from "tempest-react-sdk";

/**
 * Item de lista com ícone, título e descrição — serviço ou pilar.
 *
 * Attributes:
 *     id (string): Chave estável para o `key` do React.
 *     icon (LucideIcon): Componente do ícone.
 *     title (string): Título curto.
 *     description (string): Texto de apoio.
 */
export interface FeatureItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Etapa do processo de trabalho.
 *
 * Attributes:
 *     id (string): Chave estável para o `key` do React.
 *     number (string): Número exibido, com zero à esquerda.
 *     title (string): Verbo da etapa.
 *     description (string): O que acontece na etapa.
 */
export interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

/**
 * Link de navegação para uma seção da página.
 *
 * Attributes:
 *     href (string): Âncora da seção (`#id`).
 *     label (string): Texto do link.
 */
export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#proposito", label: "Propósito" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
];

export const SERVICES: FeatureItem[] = [
  {
    id: "gerenciamento",
    icon: LayoutDashboard,
    title: "Sistemas de gerenciamento",
    description:
      "Centralize informações, organize processos e tenha mais controle sobre sua operação.",
  },
  {
    id: "personalizados",
    icon: Puzzle,
    title: "Sistemas personalizados",
    description:
      "Funcionalidades desenvolvidas especificamente para as necessidades do seu negócio.",
  },
  {
    id: "plataformas-web",
    icon: Globe,
    title: "Plataformas web",
    description: "Soluções acessíveis pelo navegador, sem depender de instalações complexas.",
  },
  {
    id: "automacao",
    icon: Workflow,
    title: "Automação",
    description:
      "Reduza tarefas repetitivas e permita que sua equipe concentre esforços no que realmente importa.",
  },
  {
    id: "sites",
    icon: MonitorSmartphone,
    title: "Sites e presença digital",
    description:
      "Sites institucionais, blogs e soluções digitais para apresentar sua empresa ao mundo.",
  },
  {
    id: "analiticas",
    icon: BarChart3,
    title: "Soluções analíticas",
    description: "Transforme dados em informações úteis para acompanhar e compreender seu negócio.",
  },
];

export const PILLARS: FeatureItem[] = [
  {
    id: "sob-medida",
    icon: Ruler,
    title: "Sob medida",
    description: "Construídas de acordo com as necessidades reais do seu negócio.",
  },
  {
    id: "acessiveis",
    icon: HandCoins,
    title: "Acessíveis",
    description: "Buscamos entregar o maior valor possível dentro da realidade de cada projeto.",
  },
  {
    id: "eficientes",
    icon: Gauge,
    title: "Eficientes",
    description: "Tecnologia aplicada para simplificar processos e melhorar resultados.",
  },
  {
    id: "autonomas",
    icon: ShieldCheck,
    title: "Autônomas",
    description:
      "Priorizamos soluções que possam ser administradas e evoluídas com maior controle tecnológico.",
  },
  {
    id: "evolutivas",
    icon: Sprout,
    title: "Evolutivas",
    description:
      "Um sistema não precisa terminar na primeira versão. Ele pode crescer junto com o seu negócio.",
  },
];

export const STEPS: StepItem[] = [
  {
    id: "entendemos",
    number: "01",
    title: "Entendemos",
    description:
      "Conversamos sobre seu negócio, seus processos e os problemas que você precisa resolver.",
  },
  {
    id: "planejamos",
    number: "02",
    title: "Planejamos",
    description: "Avaliamos as possibilidades e definimos a solução mais adequada.",
  },
  {
    id: "desenvolvemos",
    number: "03",
    title: "Desenvolvemos",
    description: "Construímos a solução de forma progressiva, acompanhando cada etapa do projeto.",
  },
  {
    id: "entregamos",
    number: "04",
    title: "Entregamos",
    description: "Colocamos a solução em funcionamento e acompanhamos sua evolução.",
  },
  {
    id: "evoluimos",
    number: "05",
    title: "Evoluímos",
    description:
      "Oferecemos manutenção, melhorias e novas funcionalidades conforme suas necessidades mudam.",
  },
];

export const MILESTONES: TimelineItem[] = [
  {
    id: "2020",
    title: "A ideia nasce",
    description: "Tecnologia e automação para resolver problemas cotidianos.",
    meta: "2020",
    marker: "neutral",
  },
  {
    id: "2025",
    title: "TEMPEST vira empresa",
    description: "A ideia se torna oficialmente uma empresa.",
    meta: "24 de julho de 2025",
    marker: "primary",
  },
  {
    id: "hoje",
    title: "O mesmo propósito",
    description: "Transformar desafios reais em soluções acessíveis, eficientes e inovadoras.",
    meta: "Hoje",
    marker: "success",
  },
];
