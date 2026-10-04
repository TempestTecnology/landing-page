import { createElement, type CSSProperties, type JSX, type ReactNode, useRef } from "react";
import { useIntersectionObserver } from "tempest-react-sdk";

/**
 * Props do {@link Reveal}.
 *
 * Attributes:
 *     children (ReactNode): Conteúdo que surge.
 *     as ("div" | "li" | "header"): Elemento renderizado — `li` dentro de lista.
 *     className (string): Classes extras do elemento.
 *     delay (number): Atraso da transição em ms, para escalonar irmãos.
 *     variant ("up" | "scale"): Sobe deslizando ou cresce no lugar.
 */
interface RevealProps {
  children: ReactNode;
  as?: "div" | "li" | "header";
  className?: string;
  delay?: number;
  variant?: "up" | "scale";
}

/**
 * Faz o conteúdo surgir quando entra na viewport.
 *
 * Observa o elemento com `useIntersectionObserver` do SDK em modo `once`:
 * depois de revelado, para de observar e não esconde de novo ao sair da tela.
 * A transição mora em `.reveal` (`landing.css`), que fica estática sob
 * `prefers-reduced-motion: reduce`. O `delay` vira a custom property
 * `--reveal-delay`, único valor dinâmico do estilo. Browser sem
 * `IntersectionObserver` recebe o conteúdo já visível, para nada ficar
 * escondido por falta da API.
 *
 * Args:
 *     props (RevealProps): Conteúdo, elemento, atraso e variante.
 *
 * Returns:
 *     O elemento com `data-revealed` refletindo a visibilidade.
 */
export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  variant = "up",
}: RevealProps): JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const entry: IntersectionObserverEntry | null = useIntersectionObserver(ref, {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -8% 0px",
  });
  const revealed: boolean =
    typeof IntersectionObserver === "undefined" || entry?.isIntersecting === true;
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  return createElement(
    as,
    {
      ref,
      className: ["reveal", `reveal--${variant}`, className].filter(Boolean).join(" "),
      style,
      "data-revealed": revealed ? "true" : "false",
    },
    children,
  );
}
