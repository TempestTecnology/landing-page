import type { JSX } from "react";
import { Card, Container, Grid, Timeline } from "tempest-react-sdk";

import { Reveal, SectionHeading } from "@/components";
import { BRAND_NAME, MILESTONES } from "@/core";

/**
 * Seção "Tecnologia que cresce com você": história em texto e `Timeline`.
 *
 * O `Timeline` do `tempest-react-sdk@0.73.0` não aplica a cor do `marker`:
 * procura `styles["marker-primary"]`, mas o CSS module só exporta a chave
 * camelCase (`markerPrimary`), então o marcador sai transparente. A cor vem de
 * `.about__timeline` em `landing.css` até a correção chegar no SDK.
 *
 * Returns:
 *     A seção sobre a empresa.
 */
export function About(): JSX.Element {
  return (
    <section id="sobre" className="section section--tint" aria-labelledby="sobre-title">
      <Container size="xl">
        <Grid columns={{ mobile: 1, desktop: 2 }} gap={10} className="about">
          <div>
            <SectionHeading
              id="sobre-title"
              eyebrow="Nossa história"
              title="Tecnologia que cresce com você"
            />
            <Reveal delay={100} className="prose">
              <p>
                A {BRAND_NAME} nasceu em <strong>2020</strong>, a partir da ideia de utilizar
                tecnologia e automação para resolver problemas cotidianos.
              </p>
              <p>
                Em <strong>24 de julho de 2025</strong>, essa ideia tornou-se oficialmente uma
                empresa.
              </p>
              <p>
                Hoje, seguimos com o mesmo propósito:{" "}
                <strong>
                  usar tecnologia para transformar desafios reais em soluções acessíveis, eficientes
                  e inovadoras.
                </strong>
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Card elevation="raised" className="about__timeline">
              <Timeline items={MILESTONES} />
            </Card>
          </Reveal>
        </Grid>
      </Container>
    </section>
  );
}
