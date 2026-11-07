import { ArrowUpRight, FileDown } from "lucide-react";
import type { JSX } from "react";
import { Button, Container } from "tempest-react-sdk";

import { Reveal } from "@/components";
import {
  FOUNDER_LINKS,
  FOUNDER_NAME,
  FOUNDER_PHOTO_SRC,
  FOUNDER_ROLE,
  FOUNDER_TAGLINE,
} from "@/core";
import { FOUNDER_PDF_NAME } from "@/sections/founder/constants";
import { printAsPdf } from "@/utils";

/**
 * Primeira dobra do portfólio do fundador: foto, nome, cargo, resumo, links
 * e exportação em PDF.
 *
 * Reaproveita o visual do hero da landing (`tone-inverse`, tempestade e anéis)
 * com a foto no lugar do logo.
 *
 * Returns:
 *     A seção hero do fundador.
 */
export function FounderHero(): JSX.Element {
  return (
    <section id="inicio" className="hero tone-inverse" aria-labelledby="hero-title">
      <div className="hero__storm" aria-hidden />
      <Container size="xl" className="hero__inner">
        <div className="hero__copy">
          <Reveal>
            <span className="eyebrow eyebrow--inverse">{FOUNDER_ROLE}</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 id="hero-title">{FOUNDER_NAME}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="hero__lead founder-hero__lead">{FOUNDER_TAGLINE}</p>
          </Reveal>
          <Reveal delay={300} className="hero__actions">
            <Button
              size="lg"
              variant="primary"
              pill
              leftIcon={<FileDown size={18} aria-hidden />}
              onClick={() => printAsPdf(FOUNDER_PDF_NAME)}
            >
              Exportar portfólio em PDF
            </Button>
          </Reveal>
          <Reveal delay={400}>
            <ul className="founder-links" aria-label="Contatos">
              {FOUNDER_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="hero__secondary"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label} <ArrowUpRight size={16} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal variant="scale" delay={200} className="hero__visual">
          <div className="hero__emblem">
            <span className="hero__ring hero__ring--outer" aria-hidden />
            <span className="hero__ring hero__ring--inner" aria-hidden />
            <img
              src={FOUNDER_PHOTO_SRC}
              alt={`Foto de ${FOUNDER_NAME}`}
              width={303}
              height={303}
              className="founder-photo"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
