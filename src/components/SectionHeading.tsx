import type { JSX, ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

/**
 * Props do {@link SectionHeading}.
 *
 * Attributes:
 *     id (string): `id` do `<h2>`, usado como `aria-labelledby` da seção.
 *     eyebrow (string): Rótulo curto acima do título.
 *     title (ReactNode): Título da seção.
 *     align ("start" | "center"): Alinhamento do bloco.
 */
interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  align?: "start" | "center";
}

/**
 * Cabeçalho padrão de seção: eyebrow + `<h2>`, surgindo ao entrar na tela.
 *
 * Args:
 *     props (SectionHeadingProps): Textos e alinhamento.
 *
 * Returns:
 *     O cabeçalho da seção.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  align = "start",
}: SectionHeadingProps): JSX.Element {
  return (
    <Reveal as="header" className={`section-heading section-heading--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
    </Reveal>
  );
}
