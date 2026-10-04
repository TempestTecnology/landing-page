import { Mail } from "lucide-react";
import type { JSX } from "react";

import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/core";

/**
 * Props do {@link ContactEmail}.
 *
 * Attributes:
 *     className (string): Classes extras do link.
 *     iconSize (number): Tamanho do ícone de envelope, em px.
 */
interface ContactEmailProps {
  className?: string;
  iconSize?: number;
}

/**
 * Link `mailto:` com o e-mail de contato da TEMPEST.
 *
 * O endereço é longo para telas de 320–375px, então ganha um `<wbr>` antes do
 * `@`: quando não cabe, quebra em "usuário" / "@domínio" em vez de cortar no
 * meio de uma palavra.
 *
 * Args:
 *     props (ContactEmailProps): Classes extras e tamanho do ícone.
 *
 * Returns:
 *     O link de e-mail.
 */
export function ContactEmail({ className, iconSize = 18 }: ContactEmailProps): JSX.Element {
  const [user, domain] = CONTACT_EMAIL.split("@");

  return (
    <a className={["contact-email", className].filter(Boolean).join(" ")} href={CONTACT_MAILTO}>
      <Mail size={iconSize} aria-hidden />
      <span>
        {user}
        <wbr />@{domain}
      </span>
    </a>
  );
}
