import type { JSX } from "react";

import {
  BRAND_NAME,
  CONTACT_EMAIL,
  FEATURED_PROJECTS,
  GITHUB_PROFILE_URL,
  LOGO_SRC,
  OTHER_PROJECTS,
  type ProjectItem,
  SITE_URL,
} from "@/core";

/**
 * Props do {@link PrintProject}.
 *
 * Attributes:
 *     project (ProjectItem): Projeto impresso.
 */
interface PrintProjectProps {
  project: ProjectItem;
}

/**
 * Bloco de um projeto no PDF, com o link por extenso — papel não tem hover.
 *
 * Args:
 *     props (PrintProjectProps): Projeto impresso.
 *
 * Returns:
 *     O artigo do projeto.
 */
export function PrintProject({ project }: PrintProjectProps): JSX.Element {
  const { name, category, summary, stack, link } = project;

  return (
    <article className="print-project">
      <header>
        <h3>{name}</h3>
        <span>{category}</span>
      </header>
      <p>{summary}</p>
      <p className="print-project__stack">{stack.join(" · ")}</p>
      {link && (
        <p className="print-project__link">
          {link.label}: <a href={link.href}>{link.href}</a>
        </p>
      )}
    </article>
  );
}

/**
 * Documento do portfólio em PDF.
 *
 * Fica oculto na tela e é a única coisa visível sob `@media print`
 * (`portfolio.css`), então o "Salvar como PDF" do navegador gera um documento
 * próprio em vez da landing page fatiada em folhas. Os links seguem clicáveis
 * no PDF e vêm escritos por extenso para quem imprime em papel. O endereço do
 * site aparece no cabeçalho e no rodapé.
 *
 * Returns:
 *     O documento de impressão.
 */
export function PortfolioPrint(): JSX.Element {
  return (
    <div className="portfolio-print" aria-hidden>
      <header className="portfolio-print__header">
        <img src={LOGO_SRC} alt="" width={48} height={48} />
        <div>
          <h1>{BRAND_NAME} — Portfólio de projetos</h1>
          <p>
            <a href={SITE_URL}>{SITE_URL}</a>
          </p>
        </div>
      </header>

      <p className="portfolio-print__intro">
        Tecnologia sob medida para transformar desafios reais em soluções acessíveis, eficientes e
        inovadoras.
      </p>

      <h2>Projetos em destaque</h2>
      <div className="portfolio-print__grid">
        {FEATURED_PROJECTS.map((project) => (
          <PrintProject key={project.id} project={project} />
        ))}
      </div>

      <h2>Outros projetos</h2>
      <div className="portfolio-print__grid">
        {OTHER_PROJECTS.map((project) => (
          <PrintProject key={project.id} project={project} />
        ))}
      </div>

      <footer className="portfolio-print__footer">
        <p>
          Site: <a href={SITE_URL}>{SITE_URL}</a>
        </p>
        <p>
          GitHub: <a href={GITHUB_PROFILE_URL}>{GITHUB_PROFILE_URL}</a>
        </p>
        <p>
          Contato: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </footer>
    </div>
  );
}
