import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import pwa from "@vite-pwa/astro";

export default defineConfig({
  // SSR bleibt aktiv
  output: "server",

  // Explizit auf Vercel Serverless pinnen (stabiler als "auto")
  adapter: vercel(),

  integrations: [
    pwa({
      // Service Worker automatisch aktualisieren
      registerType: "autoUpdate",

      // Nutzt dein bestehendes manifest.json (wenn vorhanden)
      // oder lässt Vite-PWA eins generieren, je nach Setup
      manifest: true,

      // Workbox Precache: etwas breiter gefasst, damit offline keine Assets fehlen
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg,json,txt,woff,woff2,ttf,map}"
        ]
      }
    })
  ]
});