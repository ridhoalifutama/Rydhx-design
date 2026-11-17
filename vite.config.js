import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  build: {
    rollupOptions: {
      input: fileURLToPath(new URL("./rydhx-design-system.html", import.meta.url)),
    },
  },
});
