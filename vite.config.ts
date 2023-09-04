/** @type {import('vite').UserConfig} */

import * as path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import viteImagemin from "vite-plugin-imagemin";

import config from "./config.js";
import postcss from "./postcss.config.js";

const { imagemin, port } = config;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin(imagemin),
    createHtmlPlugin({
      minify: true,
      entry: "/src/main.tsx",
    }),
  ],
  css: {
    postcss,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // TODO: API Proxy
    port,
  },
});
