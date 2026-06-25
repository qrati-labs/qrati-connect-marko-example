import { defineConfig } from "vite";
import markoRun from "@marko/run/vite";
import cloudflare from "@marko/run-adapter-cloudflare";

export default defineConfig({
  plugins: [markoRun({ adapter: cloudflare() })],
});
