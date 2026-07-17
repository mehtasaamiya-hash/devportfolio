// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/
export default defineConfig({
  site: "https://mehtasaamiya-hash.github.io/devportfolio/",
  base: "/devportfolio/",

  vite: {
    plugins: [tailwindcss()],
  },
})