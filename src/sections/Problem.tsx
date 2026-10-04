import type { JSX } from "react";
import { Container, Grid } from "tempest-react-sdk";

import { Reveal, SectionHeading } from "@/components";

/**
 * Seção "Seu problema não precisa virar mais um sistema complicado".
 *
 * Returns:
 *     A seção de abordagem.
 */
export function Problem(): JSX.Element {
  return (
    <section className="section" aria-labelledby="problema-title">
      <Container size="xl">
        <Grid columns={{ mobile: 1, desktop: 2 }} gap={10} className="problem">
          <SectionHeading
            id="problema-title"
            eyebrow="Nossa abordagem"
            title="Seu problema não precisa virar mais um sistema complicado"
          />
          <Reveal delay={150} className="prose">
            <p>Cada negócio possui desafios diferentes.</p>
            <p>Por isso, não acreditamos em soluções genéricas para todos.</p>
            <p>
              Entendemos o seu processo, identificamos oportunidades de melhoria e desenvolvemos uma
              solução adequada à sua realidade.
            </p>
            <p className="callout">Do problema à solução, construímos junto com você.</p>
          </Reveal>
        </Grid>
      </Container>
    </section>
  );
}
