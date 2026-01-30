import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import { VitePWA } from "@vite-pwa/astro";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: true,
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"]
      }
    })
  ]
});
