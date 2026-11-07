import type { JSX } from "react";
import { AppProviders } from "tempest-react-sdk";

import { FOUNDER_EDUCATION, FOUNDER_EXPERIENCE } from "@/core";
import { Projects, SiteFooter, SiteHeader } from "@/sections";
import {
  CareerTimeline,
  FOUNDER_NAV_ITEMS,
  FOUNDER_PDF_NAME,
  FounderAbout,
  FounderHero,
  FounderPrint,
} from "@/sections/founder";

/**
 * Raiz do portfólio do fundador, servido em `/mauricio/`.
 *
 * É uma segunda entrada do Vite (`mauricio/index.html`), não uma rota de SPA:
 * o GitHub Pages serve o HTML direto, sem fallback de 404. A marca no
 * cabeçalho leva de volta à landing.
 *
 * Returns:
 *     A página inteira do portfólio.
 */
export function FounderApp(): JSX.Element {
  return (
    <AppProviders
      theme={{ defaultTheme: "light", storageKey: null }}
      errorBoundary={{ fallback: <p>Algo deu errado. Recarregue a página.</p> }}
    >
      <SiteHeader navItems={FOUNDER_NAV_ITEMS} homeHref={import.meta.env.BASE_URL} />
      <main>
        <FounderHero />
        <FounderAbout />
        <CareerTimeline
          id="experiencia"
          eyebrow="Experiência"
          title="Onde construo e ensino"
          items={FOUNDER_EXPERIENCE}
          tint
        />
        <Projects
          eyebrow="Portfólio"
          title="Projetos em que trabalhei"
          pdfFileName={FOUNDER_PDF_NAME}
          exportLabel="Exportar portfólio em PDF"
        />
        <CareerTimeline
          id="formacao"
          eyebrow="Formação"
          title="Formação acadêmica"
          items={FOUNDER_EDUCATION}
          tint
        />
      </main>
      <SiteFooter />
      <FounderPrint />
    </AppProviders>
  );
}
