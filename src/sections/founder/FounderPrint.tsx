import type { JSX } from "react";

import {
  BRAND_NAME,
  type CareerItem,
  FEATURED_PROJECTS,
  FOUNDER_BIO,
  FOUNDER_EDUCATION,
  FOUNDER_EXPERIENCE,
  FOUNDER_LINKS,
  FOUNDER_NAME,
  FOUNDER_PAGE_URL,
  FOUNDER_PHOTO_SRC,
  FOUNDER_ROLE,
  FOUNDER_SKILLS,
  OTHER_PROJECTS,
  SITE_URL,
} from "@/core";
import { PrintProject } from "@/sections/PortfolioPrint";

/**
 * Props do {@link PrintCareer}.
 *
 * Attributes:
 *     items (CareerItem[]): Experiências ou formações.
 */
interface PrintCareerProps {
  items: CareerItem[];
}

/**
 * Lista de carreira no PDF: cargo, organização, período e descrição.
 *
 * Args:
 *     props (PrintCareerProps): Itens impressos.
 *
 * Returns:
 *     A lista de itens.
 */
function PrintCareer({ items }: PrintCareerProps): JSX.Element {
  return (
    <div className="print-career">
      {items.map((item) => (
        <article key={item.id} className="print-career__item">
          <header>
            <h3>
              {item.role} <span>· {item.organization}</span>
            </h3>
            <span className="print-career__period">{item.period}</span>
          </header>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

/**
 * Documento em PDF do portfólio do fundador — um currículo de uma ou duas
 * folhas.
 *
 * Mesmo mecanismo do `PortfolioPrint`: oculto na tela, único conteúdo sob
 * `@media print`. Traz o endereço desta página e o do site da TEMPEST, e os
 * links de contato por extenso. Telefone e endereço residencial do currículo
 * ficam de fora de propósito, porque a página é pública.
 *
 * Returns:
 *     O documento de impressão do fundador.
 */
export function FounderPrint(): JSX.Element {
  return (
    <div className="portfolio-print" aria-hidden>
      <header className="portfolio-print__header">
        <img src={FOUNDER_PHOTO_SRC} alt="" width={64} height={64} className="print-photo" />
        <div>
          <h1>{FOUNDER_NAME}</h1>
          <p className="print-role">{FOUNDER_ROLE}</p>
          <p>
            <a href={FOUNDER_PAGE_URL}>{FOUNDER_PAGE_URL}</a>
          </p>
        </div>
      </header>

      <ul className="print-contacts">
        {FOUNDER_LINKS.map((link) => (
          <li key={link.id}>
            {link.label}: <a href={link.href}>{link.display}</a>
          </li>
        ))}
      </ul>

      <h2>Sobre</h2>
      {FOUNDER_BIO.map((paragraph) => (
        <p key={paragraph.slice(0, 24)} className="print-paragraph">
          {paragraph}
        </p>
      ))}

      <h2>Competências</h2>
      <dl className="print-skills">
        {FOUNDER_SKILLS.map((group) => (
          <div key={group.id}>
            <dt>{group.title}</dt>
            <dd>{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>

      <h2>Experiência</h2>
      <PrintCareer items={FOUNDER_EXPERIENCE} />

      <h2>Formação</h2>
      <PrintCareer items={FOUNDER_EDUCATION} />

      <h2>Projetos</h2>
      <div className="portfolio-print__grid">
        {[...FEATURED_PROJECTS, ...OTHER_PROJECTS].map((project) => (
          <PrintProject key={project.id} project={project} />
        ))}
      </div>

      <footer className="portfolio-print__footer">
        <p>
          Portfólio: <a href={FOUNDER_PAGE_URL}>{FOUNDER_PAGE_URL}</a>
        </p>
        <p>
          {BRAND_NAME}: <a href={SITE_URL}>{SITE_URL}</a>
        </p>
      </footer>
    </div>
  );
}
