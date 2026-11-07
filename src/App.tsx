import type { JSX } from "react";
import { AppProviders } from "tempest-react-sdk";

import { BRAND_NAME } from "@/core";
import {
  About,
  FinalCta,
  Hero,
  PortfolioPrint,
  Problem,
  Process,
  Projects,
  Purpose,
  Services,
  SiteFooter,
  SiteHeader,
} from "@/sections";

/**
 * Raiz da landing page.
 *
 * `AppProviders` monta error boundary e tema; o tema é fixo em claro e sem
 * persistência porque a identidade da marca (navy sobre branco) não tem
 * variante escura.
 *
 * Returns:
 *     A página inteira, seção por seção.
 */
export function App(): JSX.Element {
  return (
    <AppProviders
      theme={{ defaultTheme: "light", storageKey: null }}
      errorBoundary={{ fallback: <p>Algo deu errado. Recarregue a página.</p> }}
    >
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Projects
          eyebrow="Portfólio"
          title="Projetos que já entregamos"
          pdfFileName={`Portfolio-${BRAND_NAME}`}
          exportLabel="Exportar portfólio em PDF"
        />
        <Purpose />
        <Process />
        <About />
        <FinalCta />
      </main>
      <SiteFooter />
      <PortfolioPrint />
    </AppProviders>
  );
}
