/**
 * E-mail de contato da TEMPEST, exibido como link na página.
 */
export const CONTACT_EMAIL: string = "tempest.technology.contact@gmail.com";

/**
 * Link `mailto:` para o {@link CONTACT_EMAIL}.
 */
export const CONTACT_MAILTO: string = `mailto:${CONTACT_EMAIL}`;

/**
 * Destino dos CTAs "Fale com a TEMPEST".
 *
 * Vem de `VITE_CONTACT_URL` (WhatsApp, `mailto:` ou formulário). Sem a variável,
 * cai no e-mail de contato, para o botão nunca apontar para lugar nenhum.
 */
export const CONTACT_HREF: string = import.meta.env.VITE_CONTACT_URL || CONTACT_MAILTO;

/**
 * Indica se o destino de contato sai da página, para abrir em nova aba.
 */
export const CONTACT_IS_EXTERNAL: boolean = /^https?:\/\//.test(CONTACT_HREF);

export const BRAND_NAME: string = "TEMPEST";

/**
 * Caminho do logo em `public/`, prefixado com o `base` do Vite.
 *
 * No GitHub Pages o site vive em `/<repo>/`, então `"/logo.png"` absoluto
 * apontaria para a raiz do domínio e daria 404.
 */
export const LOGO_SRC: string = `${import.meta.env.BASE_URL}logo.png`;
