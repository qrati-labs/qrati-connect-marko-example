# BugHunter report: Marko static asset delivery

- Run: `20261018T024338Z-634b6ecff9064f4bba6a2fc491884fe4`
- Repository: `qrati-labs/qrati-connect-marko-example`
- Scope: static, public-facing asset URL mapping for the Marko example (favicon, logo, robots.txt, sitemap.xml); excludes consent, theme handling, widget loading/mounting, and page content, which overlap existing open PRs.
- Base: `origin/main` at `f76b56a732c5b2a3c46a816718b771720fd024f5`
- Worktree: `/home/hermes/.hermes/cache/scratch/bh-20261018T024338Z-634b6ecf-marko`

## Result
No confirmed defect in this bounded asset-delivery path. The repository contains `public/robots.txt`, `public/sitemap.xml`, brand assets, and an explicit favicon route at `src/routes/favicon.png`; the layout references the logo-square asset using the deployment prefix `/connect/marko-example/qrati-logo-square.svg`. The worker strips `/connect/marko-example` before forwarding requests to the asset binding, so prefixed requests map to the origin asset paths. The generated runtime manifest/build output was not inspected, so actual deployed asset binding behavior remains unverified; no defect is asserted from that uncertainty.

## Evidence and limitations
- `src/routes/+layout.marko:5` references the prefixed logo favicon.
- `src/routes/favicon.png` and `src/routes/logo.svg` are explicit route sources; corresponding public assets are present.
- `public/robots.txt` and `public/sitemap.xml` exist.
- `src/worker.ts:10-18` removes the configured prefix before calling `env.ASSETS.fetch`.
- Inspected default-branch tree at the base SHA and the changed-file lists of open PRs #1–#3. Their changes concern cookie consent, embed theme cycle, and widget mount respectively; none modifies this report's static asset path scope.
- CodeGraph reported no index for this repository; source and route inventory were inspected directly.
- No issue created: no confirmed defect.
- No tests authored or run; this is report-only.

## Verification
`git diff --check` is the permitted patch-hygiene check. No tests, builds, lint, type checks, installs, or package-manager commands were run.

## Timing
All timestamps UTC; IST is UTC+05:30.
- Preflight (provided by scheduler): 02:43:38–02:44:00 UTC (08:13:38–08:14:00 IST), 22 seconds.
- Candidate selection, source mapping, and evidence review: 02:44:00–02:45:06 UTC (08:14:00–08:15:06 IST), 66 seconds.
- Report, tracker, PR creation, and final PR readback: 02:45:06–02:46:32 UTC (08:15:06–08:16:32 IST), 86 seconds.
- Total measured wall-clock: 02:43:38–02:46:32 UTC (08:13:38–08:16:32 IST), 2 minutes 54 seconds.

## Delivery
Issue: none (report-only). PR: https://github.com/qrati-labs/qrati-connect-marko-example/pull/4 (open; final head recorded by remote readback). GitGuardian and Cloudflare Workers Build checks were in progress at final readback; mergeability was unknown at that point.
