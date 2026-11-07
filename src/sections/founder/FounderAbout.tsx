import type { JSX } from "react";
import { Card, Container, Grid } from "tempest-react-sdk";

import { Reveal, SectionHeading } from "@/components";
import { FOUNDER_BIO, FOUNDER_SKILLS } from "@/core";

/**
 * Seção "Sobre": bio em texto e grade de competências técnicas.
 *
 * Returns:
 *     A seção sobre o fundador.
 */
export function FounderAbout(): JSX.Element {
  return (
    <section id="sobre" className="section" aria-labelledby="sobre-title">
      <Container size="xl">
        <Grid columns={{ mobile: 1, desktop: 2 }} gap={10} className="founder-about">
          <div>
            <SectionHeading id="sobre-title" eyebrow="Sobre" title="Tecnologia com propósito" />
            <Reveal delay={100} className="prose">
              {FOUNDER_BIO.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
          <div className="founder-skills">
            {FOUNDER_SKILLS.map(({ id, icon: Icon, title, items }, index) => (
              <Reveal key={id} delay={(index % 2) * 100}>
                <Card elevation="flat" className="founder-skill">
                  <div className="founder-skill__head">
                    <span className="icon-badge">
                      <Icon size={20} aria-hidden />
                    </span>
                    <h3>{title}</h3>
                  </div>
                  <ul className="project-card__stack" aria-label={title}>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Grid>
      </Container>
    </section>
  );
}
