import type { JSX } from "react";
import { Container } from "tempest-react-sdk";

import { ContactButton, ContactEmail, Reveal } from "@/components";

/**
 * Chamada final "Seu próximo desafio pode ser nossa próxima solução".
 *
 * Além do CTA, mostra o e-mail de contato como link `mailto:`, para quem
 * prefere copiar o endereço ou escrever de outro cliente de e-mail.
 *
 * Returns:
 *     A seção de contato.
 */
export function FinalCta(): JSX.Element {
  return (
    <section id="contato" className="final-cta tone-inverse" aria-labelledby="contato-title">
      <div className="hero__storm" aria-hidden />
      <Container size="md" className="final-cta__inner">
        <Reveal>
          <h2 id="contato-title">Seu próximo desafio pode ser nossa próxima solução.</h2>
        </Reveal>
        <Reveal delay={120}>
          <p>Conte-nos o que você precisa resolver.</p>
        </Reveal>
        <Reveal delay={240}>
          <ContactButton />
        </Reveal>
        <Reveal delay={320}>
          <ContactEmail />
        </Reveal>
      </Container>
    </section>
  );
}
