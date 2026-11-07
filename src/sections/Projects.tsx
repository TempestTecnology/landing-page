import { ArrowUpRight, ExternalLink, FileDown } from "lucide-react";
import type { JSX } from "react";
import { Badge, Button, Card, Container, Grid } from "tempest-react-sdk";

import { Reveal, SectionHeading } from "@/components";
import {
  BRAND_NAME,
  FEATURED_PROJECTS,
  GITHUB_PROFILE_URL,
  OTHER_PROJECTS,
  type ProjectItem,
} from "@/core";

/**
 * Nome sugerido para o arquivo PDF, via `document.title` durante a impressão.
 */
const PDF_TITLE: string = `Portfolio-${BRAND_NAME}`;

/**
 * Abre o diálogo de impressão com o portfólio pronto para "Salvar como PDF".
 *
 * O layout do PDF é o `PortfolioPrint`, que só aparece sob `@media print`
 * (`portfolio.css`). O navegador usa o `document.title` como nome padrão do
 * arquivo, então o título é trocado durante a impressão e restaurado no
 * `afterprint`.
 */
function exportPortfolio(): void {
  const previousTitle: string = document.title;
  document.title = PDF_TITLE;
  window.addEventListener(
    "afterprint",
    () => {
      document.title = previousTitle;
    },
    { once: true },
  );
  window.print();
}

/**
 * Props do {@link ProjectCard}.
 *
 * Attributes:
 *     project (ProjectItem): Projeto exibido.
 *     compact (boolean): Card menor, para a lista de outros projetos.
 */
interface ProjectCardProps {
  project: ProjectItem;
  compact?: boolean;
}

/**
 * Card de um projeto: ícone, categoria, descrição, stack e link público.
 *
 * Args:
 *     props (ProjectCardProps): Projeto e densidade.
 *
 * Returns:
 *     O card do projeto.
 */
function ProjectCard({ project, compact = false }: ProjectCardProps): JSX.Element {
  const { icon: Icon, name, category, summary, stack, link } = project;

  return (
    <Card
      elevation="flat"
      className={["project-card", compact && "project-card--compact"].filter(Boolean).join(" ")}
    >
      <div className="project-card__head">
        <span className="icon-badge">
          <Icon size={compact ? 20 : 24} aria-hidden />
        </span>
        <Badge variant="primary" size="sm">
          {category}
        </Badge>
      </div>
      <h3>{name}</h3>
      <p>{summary}</p>
      <ul className="project-card__stack" aria-label={`Tecnologias de ${name}`}>
        {stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {link && (
        <a
          className="project-card__link"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
          <ExternalLink size={14} aria-hidden />
        </a>
      )}
    </Card>
  );
}

/**
 * Seção "Projetos": destaques, outros projetos, link do GitHub e exportação
 * do portfólio em PDF.
 *
 * Returns:
 *     A seção de projetos.
 */
export function Projects(): JSX.Element {
  return (
    <section id="projetos" className="section" aria-labelledby="projetos-title">
      <Container size="xl">
        <div className="projects__top">
          <SectionHeading
            id="projetos-title"
            eyebrow="Portfólio"
            title="Projetos que já entregamos"
          />
          <Reveal delay={100} className="projects__actions">
            <Button
              variant="primary"
              pill
              leftIcon={<FileDown size={18} aria-hidden />}
              onClick={exportPortfolio}
            >
              Exportar portfólio em PDF
            </Button>
          </Reveal>
        </div>

        <Grid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap={5} className="projects">
          {FEATURED_PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </Grid>

        <Reveal as="header" className="projects__subheading">
          <h3>Outros projetos</h3>
        </Reveal>
        <Grid columns={{ mobile: 1, tablet: 2, desktop: 4 }} gap={4} className="projects">
          {OTHER_PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={(index % 4) * 80}>
              <ProjectCard project={project} compact />
            </Reveal>
          ))}
        </Grid>

        <Reveal className="projects__github">
          <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer">
            Ver todos os repositórios no GitHub
            <ArrowUpRight size={18} aria-hidden />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
