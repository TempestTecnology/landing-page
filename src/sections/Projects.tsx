import { ArrowUpRight, ExternalLink, FileDown } from "lucide-react";
import type { JSX, ReactNode } from "react";
import { Badge, Button, Card, Container, Grid } from "tempest-react-sdk";

import { Reveal, SectionHeading } from "@/components";
import { FEATURED_PROJECTS, GITHUB_PROFILE_URL, OTHER_PROJECTS, type ProjectItem } from "@/core";
import { printAsPdf } from "@/utils";

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
 * Props do {@link Projects}.
 *
 * Attributes:
 *     eyebrow (string): Rótulo acima do título.
 *     title (ReactNode): Título da seção.
 *     pdfFileName (string): Nome sugerido para o PDF exportado.
 *     exportLabel (string): Texto do botão de exportação.
 *     tint (boolean): Fundo azul-claro, para alternar com a seção vizinha.
 */
interface ProjectsProps {
  eyebrow: string;
  title: ReactNode;
  pdfFileName: string;
  exportLabel: string;
  tint?: boolean;
}

/**
 * Seção "Projetos": destaques, outros projetos, link do GitHub e exportação
 * do portfólio em PDF.
 *
 * Serve à landing da empresa e ao portfólio do fundador; cada página tem o
 * próprio documento de impressão, então o botão só abre o diálogo.
 *
 * Args:
 *     props (ProjectsProps): Textos da seção e nome do PDF.
 *
 * Returns:
 *     A seção de projetos.
 */
export function Projects({
  eyebrow,
  title,
  pdfFileName,
  exportLabel,
  tint = false,
}: ProjectsProps): JSX.Element {
  return (
    <section
      id="projetos"
      className={["section", tint && "section--tint"].filter(Boolean).join(" ")}
      aria-labelledby="projetos-title"
    >
      <Container size="xl">
        <div className="projects__top">
          <SectionHeading id="projetos-title" eyebrow={eyebrow} title={title} />
          <Reveal delay={100} className="projects__actions">
            <Button
              variant="primary"
              pill
              leftIcon={<FileDown size={18} aria-hidden />}
              onClick={() => printAsPdf(pdfFileName)}
            >
              {exportLabel}
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
