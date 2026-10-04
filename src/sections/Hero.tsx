import { ChevronDown } from "lucide-react";
import type { JSX } from "react";
import { Container } from "tempest-react-sdk";

import { ContactButton, Reveal } from "@/components";
import { BRAND_NAME, LOGO_SRC } from "@/core";

/**
 * Primeira dobra: promessa, subtítulo e CTA sobre o navy da marca.
 *
 * A seção é `tone-inverse`, que redefine os tokens `--tempest-primary*` para
 * branco — o `Button` primário do SDK vira branco com texto navy sem
 * nenhuma variante nova.
 *
 * Returns:
 *     A seção hero.
 */
export function Hero(): JSX.Element {
  return (
    <section id="inicio" className="hero tone-inverse" aria-labelledby="hero-title">
      <div className="hero__storm" aria-hidden />
      <Container size="xl" className="hero__inner">
        <div className="hero__copy">
          <Reveal>
            <span className="eyebrow eyebrow--inverse">Tecnologia sob medida</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 id="hero-title">
              Transformamos problemas em <em>soluções digitais</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="hero__lead">
              Tecnologia sob medida para simplificar processos, automatizar tarefas e fazer seu
              negócio evoluir.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="hero__text">
              Na {BRAND_NAME}, transformamos necessidades reais em sistemas e soluções digitais
              desenvolvidos de acordo com o que o seu negócio realmente precisa.
            </p>
          </Reveal>
          <Reveal delay={400} className="hero__actions">
            <ContactButton />
            <a href="#solucoes" className="hero__secondary">
              Ver o que fazemos <ChevronDown size={16} aria-hidden />
            </a>
          </Reveal>
        </div>
        <Reveal variant="scale" delay={200} className="hero__visual">
          <div className="hero__emblem" aria-hidden>
            <span className="hero__ring hero__ring--outer" />
            <span className="hero__ring hero__ring--inner" />
            <img src={LOGO_SRC} alt="" width={303} height={303} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
