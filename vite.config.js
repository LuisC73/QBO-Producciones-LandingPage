import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@emailjs/browser": path.resolve(__dirname, "node_modules", "@emailjs/browser"),
    },
  },
  build: {
    outDir: "dist/public", // Establece el directorio de salida personalizado
  },
});
