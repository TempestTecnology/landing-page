import type { JSX } from "react";
import { Card, Container, Grid } from "tempest-react-sdk";

import { Reveal, SectionHeading } from "@/components";
import { SERVICES } from "@/core";

/**
 * Grade "O que podemos desenvolver", um `Card` do SDK por serviço.
 *
 * Returns:
 *     A seção de soluções.
 */
export function Services(): JSX.Element {
  return (
    <section id="solucoes" className="section section--tint" aria-labelledby="solucoes-title">
      <Container size="xl">
        <SectionHeading id="solucoes-title" eyebrow="Soluções" title="O que podemos desenvolver" />
        <Grid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap={5} className="services">
          {SERVICES.map(({ id, icon: Icon, title, description }, index) => (
            <Reveal key={id} delay={(index % 3) * 100}>
              <Card elevation="flat" className="service-card">
                <span className="icon-badge">
                  <Icon size={24} aria-hidden />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
