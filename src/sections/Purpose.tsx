import type { JSX } from "react";
import { Container, Grid } from "tempest-react-sdk";

import { Reveal, SectionHeading } from "@/components";
import { PILLARS } from "@/core";

/**
 * Seção "Tecnologia com propósito" e os cinco pilares.
 *
 * Returns:
 *     A seção de propósito, em fundo navy.
 */
export function Purpose(): JSX.Element {
  return (
    <section
      id="proposito"
      className="section tone-inverse purpose"
      aria-labelledby="proposito-title"
    >
      <Container size="xl">
        <Grid columns={{ mobile: 1, desktop: "5fr 7fr" }} gap={10}>
          <div>
            <SectionHeading
              id="proposito-title"
              eyebrow="Propósito"
              title="Tecnologia com propósito"
            />
            <Reveal delay={100} className="prose prose--inverse">
              <p className="purpose__quote">
                A tecnologia deve resolver problemas, não criar novos.
              </p>
              <p>Por isso, buscamos desenvolver soluções que sejam:</p>
            </Reveal>
          </div>
          <ul className="pillars">
            {PILLARS.map(({ id, icon: Icon, title, description }, index) => (
              <Reveal as="li" key={id} className="pillar" delay={index * 90}>
                <span className="icon-badge icon-badge--inverse">
                  <Icon size={22} aria-hidden />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Grid>
      </Container>
    </section>
  );
}
