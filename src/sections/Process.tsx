import type { JSX } from "react";
import { Container } from "tempest-react-sdk";

import { Reveal, SectionHeading } from "@/components";
import { STEPS } from "@/core";

/**
 * Seção "Como funciona": as cinco etapas em sequência.
 *
 * Horizontal com linha de conexão no desktop, vertical no mobile — a troca
 * mora em `landing.css`.
 *
 * Returns:
 *     A seção de processo.
 */
export function Process(): JSX.Element {
  return (
    <section id="como-funciona" className="section" aria-labelledby="processo-title">
      <Container size="xl">
        <SectionHeading
          id="processo-title"
          eyebrow="Processo"
          title="Como funciona"
          align="center"
        />
        <ol className="steps">
          {STEPS.map((step, index) => (
            <Reveal as="li" key={step.id} className="step" delay={index * 120}>
              <span className="step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
