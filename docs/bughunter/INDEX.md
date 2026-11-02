# BugHunter reports

| UTC | Scope | Result | Report |
|---|---|---|---|
| 2026-10-18 02:43 | Marko static asset delivery | No confirmed defect; report-only | [Report](reports/20261018T024338Z-marko-static-assets.md) |
# BugHunter audit index

- [2026-10-18 — Marko embed mount workflow](reports/20261018T003639Z-marko-embed-mount.md) — report-only; no confirmed defect in host-side initial widget mounting.
# BugHunter reports

- [20261017T235838Z — Marko embed/theme cycle](reports/20261017T235838Z-marko-embed-theme-cycle.md) — report-only; no confirmed defect. [PR](https://github.com/qrati-labs/qrati-connect-marko-example/pull/2)
- [2026-10-16T0753Z — Marko cookie consent](reports/2026-10-16T0753Z-marko-cookie-consent.md) — [PR #1](https://github.com/qrati-labs/qrati-connect-marko-example/pull/1)
# BugHunter audit index

| UTC | Workflow | Repository / base SHA | Outcome / severity | Tests and coverage | Research sources | PR / blocker |
|---|---|---|---|---|---|---|
| 2026-10-16 07:53 | Marko cookie-consent initialization (geo decision, persistence, GTM gating) | `qrati-connect-marko-example` / `f76b56a732c5b2a3c46a816718b771720fd024f5` | Report-only; no confirmed defect; test gap noted | No test runner/dependencies (`pnpm` absent); tests/build/typecheck not run; coverage unavailable | None (reviewer judgment) | [PR #1](https://github.com/qrati-labs/qrati-connect-marko-example/pull/1), open; Workers Build pending at last check; report: [2026-10-16T0753Z-marko-cookie-consent.md](reports/2026-10-16T0753Z-marko-cookie-consent.md); total 00:03:58 elapsed wall time (UTC 07:50:39–07:54:37), 00:01:04 unclassified |
# BugHunter reports

- [2026-10-22 — Marko stylesheet deployment subpath](reports/2026-10-22T163139Z-marko-stylesheet-subpath.md) — fix for [#7](https://github.com/qrati-labs/qrati-connect-marko-example/issues/7); [PR #8](https://github.com/qrati-labs/qrati-connect-marko-example/pull/8).
- [2026-10-21 — Marko FAQ disclosures](reports/2026-10-21T0415Z-marko-faq-disclosures.md) — report-only; no confirmed defect; total 00:01:53 (04:15:39–04:17:32 UTC; 09:45:39–10:47:32 IST).
