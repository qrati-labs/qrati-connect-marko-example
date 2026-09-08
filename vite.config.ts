import { defineConfig } from "vite";
import markoRun from "@marko/run/vite";
import staticAdapter from "@marko/run-adapter-static";

export default defineConfig({
  base: '/connect/marko-example/',
  plugins: [markoRun({ adapter: staticAdapter() })],
});
