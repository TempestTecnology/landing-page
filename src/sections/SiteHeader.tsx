import type { JSX } from "react";
import { Navbar } from "tempest-react-sdk";

import { ContactButton } from "@/components";
import { BRAND_NAME, LOGO_SRC, NAV_ITEMS } from "@/core";

/**
 * Barra superior fixa: marca, âncoras das seções e CTA.
 *
 * Os links de seção somem abaixo de 860px (regra em `landing.css`); o CTA fica.
 *
 * Returns:
 *     O `Navbar` do SDK montado com a marca.
 */
export function SiteHeader(): JSX.Element {
  return (
    <Navbar
      className="site-header"
      logo={
        <a href="#inicio" className="brand" aria-label={`${BRAND_NAME} — início`}>
          <img src={LOGO_SRC} alt="" width={40} height={40} />
          <span>{BRAND_NAME}</span>
        </a>
      }
      nav={
        <nav aria-label="Seções" className="site-nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      }
      actions={<ContactButton size="sm" />}
    />
  );
}
