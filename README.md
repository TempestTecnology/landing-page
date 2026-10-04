# TEMPEST — Landing page

Landing page institucional da TEMPEST, em React 19 + Vite sobre o
[`tempest-react-sdk`](https://www.npmjs.com/package/tempest-react-sdk).

## Rodando

```bash
npm install
cp .env.example .env   # defina VITE_CONTACT_URL
npm run dev            # http://127.0.0.1:5173
npm run build          # gera dist/
```

## Configuração

| Variável | O que faz |
| --- | --- |
| `VITE_CONTACT_URL` | Destino dos botões "Fale com a TEMPEST" (WhatsApp, `mailto:` ou formulário). Vazia, os botões abrem `mailto:tempest.technology.contact@gmail.com`. |

## Deploy

Todo push na `main` publica no GitHub Pages pelo workflow
`.github/workflows/deploy.yml`: lint, build e deploy, em
<https://tempesttecnology.github.io/landing-page/>.

- O site vive sob `/landing-page/`, então o build roda com
  `--base` vindo do `base_path` do Pages. Com domínio próprio o `base_path`
  fica vazio e o site volta para a raiz, sem mudar nada no código.
- Asset de `public/` é referenciado com `import.meta.env.BASE_URL` (no TS) ou
  `%BASE_URL%` (no `index.html`) — caminho absoluto `/arquivo` dá 404 no Pages.
- `VITE_CONTACT_URL` vem da variável de repositório de mesmo nome
  (*Settings → Secrets and variables → Actions → Variables*). Sem ela, os
  botões abrem o e-mail.
- Para conferir o build de produção localmente sob o subpath:

```bash
npm run build -- --base /landing-page/
npx vite preview --base /landing-page/   # http://127.0.0.1:4173/landing-page/
```

## Estrutura

```text
src/
├── main.tsx            # fundação de CSS do SDK + tema da marca + App
├── App.tsx             # AppProviders (tema claro fixo) + seções
├── core/               # constantes e todo o conteúdo textual da página
├── components/         # ContactButton, ContactEmail, Reveal, SectionHeading
├── sections/           # uma seção da página por arquivo
└── styles/
    ├── brand.css       # tokens --tempest-* gerados por createTheme
    └── landing.css     # layout e identidade visual da página
```

## Paleta

A cor da marca é o navy `#03184b`, extraído do logo (`public/logo.png`).
`src/styles/brand.css` é a saída de `createTheme` do SDK; para regenerar:

```bash
node --import tempest-react-sdk/node-css-loader -e "import('tempest-react-sdk').then(({ createTheme }) => console.log(createTheme({ primary: '#03184b', radius: 'lg' }).css))"
```

Só o bloco `:root` é usado — a página não tem tema escuro.
