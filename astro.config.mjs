import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  server: { port: "https://ProWilliam.github.io"},
  integrations: [icon()],
  devToolbar: {
    enabled: false
  }
});