import type { JSX } from "react";
import { Container } from "tempest-react-sdk";

import { ContactEmail } from "@/components";
import { BRAND_NAME, LOGO_SRC } from "@/core";

/**
 * Rodapé com a assinatura da marca e o e-mail de contato.
 *
 * Returns:
 *     O rodapé da página.
 */
export function SiteFooter(): JSX.Element {
  const year: number = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container size="xl" className="site-footer__inner">
        <div className="brand brand--footer">
          <img src={LOGO_SRC} alt="" width={36} height={36} />
          <span>{BRAND_NAME}</span>
        </div>
        <p className="site-footer__tagline">
          <strong>{BRAND_NAME}</strong> — tecnologia para transformar desafios em soluções.
        </p>
        <ContactEmail className="site-footer__email" iconSize={16} />
        <p className="site-footer__copy">
          © {year} {BRAND_NAME}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
