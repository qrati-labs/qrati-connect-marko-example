import { defineConfig } from "vite";
import markoRun from "@marko/run/vite";
import staticAdapter from "@marko/run-adapter-static";

export default defineConfig({
  plugins: [markoRun({ adapter: staticAdapter() })],
});
