# Marko stylesheet deployment subpath

- **Scope/base:** `qrati-connect-marko-example`, `origin/main` at `88cf0d13cab1f8d63834f6a27b39411be43f910e`.
- **Finding:** `[P2] Marko example requests its stylesheet outside its deployment route.`
- **Trigger/impact:** visitors load the example at `/connect/marko-example`; the layout instead requests `/styles.css`. That root request does not enter the app's prefixed Worker route, so the app's `public/styles.css` is not resolved through its static asset binding and page styling is omitted.
- **Evidence:** `vite.config.ts:6` configures `/connect/marko-example/` as the base; `src/routes/+layout.marko:9` hardcoded `/styles.css`; `src/worker.ts:10-18` rewrites only requests whose path starts with `/connect/marko-example` before `ASSETS.fetch`. Vite's configuration docs define `base` as the public base path in development and production: https://vite.dev/config/shared-options.html#base. Live HTTP verification was unavailable: all tested `qrati.com` routes returned HTTP 403.
- **Root cause/fix:** stylesheet URL bypassed the app's subpath. It now requests `/connect/marko-example/styles.css`, which the worker maps to the root static asset `/styles.css`.
- **Issue:** https://github.com/qrati-labs/qrati-connect-marko-example/issues/7
- **Regression test:** `src/worker.test.ts` verifies a prefixed stylesheet request is passed to the static asset binding as `/styles.css`. Intended command: `node --experimental-strip-types --test src/worker.test.ts` (**NOT RUN BY BUGHUNTER**).
- **Verification/limitations:** `git diff --check` passed. Unit tests, builds, and live route checks were not run; live checks were blocked by HTTP 403. Confidence high from the configured path transformation; deployed behavior remains unverified.
- **PR/checks:** pending at report authoring.
- **Timing:** pending timer ledger completion; no durations estimated.
