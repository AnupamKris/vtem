import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components";
import AutoImport from "unplugin-auto-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("ion-icon"),
        },
      },
    }),
    AutoImport({
      dirs: [],
      imports: ["vue"],
    }),
    Components({
      dirs: ["src/components"],
    }),
  ],
});
