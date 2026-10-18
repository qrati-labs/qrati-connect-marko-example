# Marko embed mount workflow audit

- **Scope:** Initial mounting of the Qrati widget from `src/routes/+page.marko`: configuration inputs, host container selection, script creation, and async loading. Theme remount behavior is excluded; it is covered by existing PR #2.
- **Base:** `origin/main` at `f76b56a732c5b2a3c46a816718b771720fd024f5`.
- **Finding:** No confirmed defect in the bounded workflow.
- **Trace/evidence:** `src/routes/+page.marko` resolves `VITE_ORGANIZATION_ID` with an empty-string fallback and `VITE_CDN_URL` with the published jsDelivr embed URL fallback. `mount()` selects `#qrati-embed`, clears it, creates a script, and sets organization ID, router, and theme `data-*` attributes before appending it. On page startup, the script invokes `mount()`; the example README describes this integration. The route renders the expected target container before its inline script. This establishes the host-side setup path, but not behavior inside the remotely loaded script.
- **Impact/severity:** None established. Missing/invalid organization configuration and remote loader failure behavior were not verified against the CDN implementation; no failure is asserted without that evidence.
- **Disposition:** Report-only. No issue or source change warranted; no reproducible defect was established.
- **Tests:** None authored. Tests/build/lint/type-check/coverage were **NOT RUN BY BUGHUNTER**. No test command applies to this report-only outcome.
- **Verification/limitations:** CodeGraph reported no index for this checkout. Focused source and README review only; no browser or live-CDN validation. `git diff --check` only.
- **PR overlap:** Existing Marko PR #1 changes only BugHunter docs about consent initialization. PR #2 changes only BugHunter docs about theme cycling; the initial widget mount path audited here is distinct.
- **Timing (measured, UTC / IST):** Start 2026-10-18 00:36:39 UTC (06:06:39 IST); end 2026-10-18 00:38:10 UTC (06:08:10 IST); total 1m31s. Preflight candidate selection 00:36:39–00:37:09 (0m30s); isolated checkout verification and workflow mapping 00:37:09–00:38:10 (1m01s). No duration estimated.
- **PR/checks:** Pending publication and readback.
