import type { JSX, ReactNode } from "react";
import { Navbar } from "tempest-react-sdk";

import { ContactButton } from "@/components";
import { BRAND_NAME, LOGO_SRC, NAV_ITEMS, type NavItem } from "@/core";

/**
 * Props do {@link SiteHeader}.
 *
 * Attributes:
 *     navItems (NavItem[]): Âncoras das seções da página.
 *     homeHref (string): Destino do clique na marca.
 *     actions (ReactNode): Ação à direita; padrão é o CTA de contato.
 */
interface SiteHeaderProps {
  navItems?: NavItem[];
  homeHref?: string;
  actions?: ReactNode;
}

/**
 * Barra superior fixa: marca, âncoras das seções e ação principal.
 *
 * Os links de seção somem abaixo de 860px (regra em `landing.css`); a ação
 * fica. Os padrões montam o cabeçalho da landing; o portfólio do fundador
 * passa as próprias seções e leva a marca de volta à landing.
 *
 * Args:
 *     props (SiteHeaderProps): Navegação, destino da marca e ação.
 *
 * Returns:
 *     O `Navbar` do SDK montado com a marca.
 */
export function SiteHeader({
  navItems = NAV_ITEMS,
  homeHref = "#inicio",
  actions = <ContactButton size="sm" />,
}: SiteHeaderProps): JSX.Element {
  return (
    <Navbar
      className="site-header"
      logo={
        <a href={homeHref} className="brand" aria-label={`${BRAND_NAME} — início`}>
          <img src={LOGO_SRC} alt="" width={40} height={40} />
          <span>{BRAND_NAME}</span>
        </a>
      }
      nav={
        <nav aria-label="Seções" className="site-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      }
      actions={actions}
    />
  );
}
