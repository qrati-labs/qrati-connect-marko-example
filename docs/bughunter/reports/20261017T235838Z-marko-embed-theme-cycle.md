# Marko embed/theme cycle audit

- Run: `20261017T235838Z-32612ad45089400e90d1b9cb649eef30`
- Scope: Marko example's single-page embed initialization and host-theme toggle (`src/routes/+page.marko`, lines 1–8); base `origin/main` at `f76b56a732c5b2a3c46a816718b771720fd024f5`.
- Disposition: Report-only; no confirmed defect, issue, source change, or regression test.
- PR: pending

## Trace and evidence

The page renders a stable `#qrati-embed` container and a theme button. Its client script reads `VITE_ORGANIZATION_ID` and `VITE_CDN_URL` (falling back to the published embed URL), and `mount()` sets host theme state, clears the container, then appends a script configured with organization, hash router, and theme data attributes. Initial mounting and button-triggered theme changes both use this path. Cookie-consent initialization is a separate dynamic import and is outside the selected workflow; the open PR #1 changes consent initialization only, so it does not overlap this embed/theme workflow.

The inspected path does not establish a reproducible failure: no local implementation of the external CDN embed's script-discovery or reinitialization contract is present, and the externally hosted script/runtime was not exercised. Therefore it cannot be proven from this repository whether reinserting the script after each theme change causes a visible issue. This uncertainty is not filed as a defect. Review was limited to the single-page example and did not validate the external runtime, deployed configuration, or browser behavior.

## Tests and verification

No tests authored. Tests/builds/lint/type-check/install were not run by BugHunter. `git diff --check` is the only permitted patch-hygiene check and is recorded at completion.

## Timing

- Preflight (provided): 2026-10-17 23:58:39 UTC.
- Audit and delivery work: 2026-10-17 23:58:39–2026-10-18 00:00:15 UTC (96 seconds; 2026-10-18 05:28:39–05:30:15 IST).
- Total including provided preflight: 2026-10-17 23:58:39–2026-10-18 00:00:15 UTC (96 seconds; 2026-10-18 05:28:39–05:30:15 IST).
- Phase timing detail was not independently recorded; no phase durations are estimated or backfilled.
