# BugHunter audit: Marko cookie-consent initialization

- **Run:** `20261016T075038Z-e76f4b5ab316453f9eb7dd907d795253`
- **Repository / reviewed base:** `qrati-connect-marko-example` / `f76b56a732c5b2a3c46a816718b771720fd024f5` (`origin/main`)
- **Selected workflow:** first-visit consent decision, consent UI initialization, GTM consent synchronization, and preferences reopening. Selected as a clean mature example repository with no open PRs; unrelated audits in other framework examples excluded only their own paths.
- **Scope:** `src/lib/cookieConsent.ts`, its Marko route call site, layout/worker GTM integration, relevant package scripts and tests. No product code change.

## Trace and findings

`src/routes/+page.marko` starts `initCookieConsent()` through a dynamic import while independently mounting the remote Qrati Connect embed. The library caches a session geo result in `sessionStorage`; failures default to requiring opt-in. It then initializes `vanilla-cookieconsent` in opt-in or opt-out mode and synchronizes Google consent on callbacks and after initialization. `syncGtm` only injects GTM when analytics is accepted and avoids adding a duplicate script by element ID. `showCookiePreferences()` waits for initialization before opening preferences. The worker rewrites the app path and substitutes a configured GTM placeholder in HTML responses.

**Confirmed defects:** none found in the bounded trace.

**Test gap (non-severity defect):** no tests exercise geo fetch success/error, cached decisions, consent mode selection, or GTM gating/duplicate prevention. This leaves the privacy-sensitive initialization contract without regression coverage. Recommendation: add browser-oriented tests with controllable storage/fetch and DOM when a test runner is introduced. This is a testability recommendation, not a claim that current runtime behavior is incorrect.

## Verification

- CodeGraph initialized in the isolated worktree and explored the consent symbols; fallback source inspection confirmed call site and surrounding path.
- `git diff --check origin/main`: passed (no source changes).
- Tests/build/typecheck: not run. `pnpm --version` returned `pnpm: command not found`; `node_modules` absent. `package.json` has build/dev/preview/start scripts only, no test script. Coverage unavailable.
- Reviewed source paths: `src/lib/cookieConsent.ts`, `src/routes/+page.marko`, `src/routes/+layout.marko`, `src/worker.ts`, `package.json`.
- External research: none; recommendations are reviewer judgment, no external-library behavior claims beyond observed application code.

## Timing

Elapsed wall time, UTC; measurement began at the injected preflight start (`2026-10-16T07:50:39Z`) and ended when the report/PR phase closed (`2026-10-16T07:54:37Z`). Preflight was measured by the provided script. Durations below are actual timer-recorded elapsed times. Unclassified time is the interval between marked phases; timing-table update after the snapshot is outside the measurement boundary.

| Phase | Start UTC | End UTC | Elapsed |
|---|---|---|---:|
| Preflight | 07:50:39Z | 07:51:51Z | 00:01:12 |
| Graph/scope | 07:52:55Z | 07:53:12Z | 00:00:17 |
| Source review | 07:53:13Z | 07:53:24Z | 00:00:11 |
| Research | not separately marked | not separately marked | included in gaps |
| Tests | 07:53:24Z | 07:53:43Z | 00:00:19 |
| Implementation | not separately marked | not separately marked | 00:00:00 (no code change) |
| Verification | not separately marked | not separately marked | 00:00:00 (verification included in report/PR phase) |
| Report/PR | 07:53:43Z | 07:54:37Z | 00:00:54 |
| **Total** | **07:50:39Z** | **07:54:37Z** | **00:03:58** |
| Unclassified intervals between marked phases | — | — | 00:01:04 |

## Delivery status

Report-only feature branch; no code change. PR [#1](https://github.com/qrati-labs/qrati-connect-marko-example/pull/1) is open and mergeable at head `1d91673ba3f933d3f2f8685d72f4cf8f9c1bd606`. GitGuardian passed; Workers Build was pending at last check.
