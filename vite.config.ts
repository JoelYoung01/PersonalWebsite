/// <reference types="vitest" />
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  envDir: "./env",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  optimizeDeps: {
    include: ["fast-deep-equal"]
  },
  test: {
    globals: true,
    environment: "jsdom",
    deps: {
      inline: ["vuetify"]
    }
  }
});
