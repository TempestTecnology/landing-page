import { ArrowRight } from "lucide-react";
import type { JSX } from "react";
import { Button, type ButtonSize, type ButtonVariant } from "tempest-react-sdk";

import { BRAND_NAME, CONTACT_HREF, CONTACT_IS_EXTERNAL } from "@/core";

/**
 * Props do {@link ContactButton}.
 *
 * Attributes:
 *     size (ButtonSize): Tamanho do botão do SDK.
 *     variant (ButtonVariant): Variante do botão do SDK.
 */
interface ContactButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

/**
 * Leva o visitante ao canal de contato configurado.
 *
 * Destino externo (`https://`) abre em nova aba com `noopener`; âncora ou
 * `mailto:` navega na própria aba.
 */
function openContact(): void {
  if (CONTACT_IS_EXTERNAL) {
    window.open(CONTACT_HREF, "_blank", "noopener,noreferrer");
    return;
  }
  window.location.assign(CONTACT_HREF);
}

/**
 * CTA "Fale com a TEMPEST", sempre apontando para `CONTACT_HREF`.
 *
 * O `Button` do SDK renderiza só `<button>` (sem `href`), então a navegação
 * acontece no `onClick` em vez de um `<a>` envolvendo o botão, que seria
 * elemento interativo aninhado em interativo.
 *
 * Args:
 *     props (ContactButtonProps): Tamanho e variante do botão.
 *
 * Returns:
 *     O botão de contato.
 */
export function ContactButton({
  size = "lg",
  variant = "primary",
}: ContactButtonProps): JSX.Element {
  return (
    <Button
      size={size}
      variant={variant}
      pill
      rightIcon={<ArrowRight size={18} aria-hidden />}
      onClick={openContact}
    >
      Fale com a {BRAND_NAME}
    </Button>
  );
}
