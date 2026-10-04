import { createViteConfig, tempestCsp } from "tempest-react-sdk/vite";

export default createViteConfig({
  plugins: [
    tempestCsp({
      directives: {
        "style-src": ["https://fonts.googleapis.com"],
        "font-src": ["https://fonts.gstatic.com"],
      },
    }),
  ],
});
