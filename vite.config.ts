import { createViteConfig, tempestCsp } from "tempest-react-sdk/vite";

/**
 * Páginas do site: a landing e o portfólio do fundador em `/mauricio/`.
 *
 * Cada uma é um HTML de entrada próprio, então o GitHub Pages serve as duas
 * direto, sem fallback de SPA. Caminhos relativos à raiz do projeto.
 */
const PAGES: Record<string, string> = {
  main: "index.html",
  mauricio: "mauricio/index.html",
};

export default createViteConfig({
  plugins: [
    tempestCsp({
      directives: {
        "style-src": ["https://fonts.googleapis.com"],
        "font-src": ["https://fonts.gstatic.com"],
      },
    }),
  ],
  overrides: {
    build: {
      rolldownOptions: {
        input: PAGES,
      },
    },
  },
});
