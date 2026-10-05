---
name: ci-maintenance
description: Run, understand, debug and extend this repo's CI gate — `pnpm typecheck` and `pnpm build` (plus the Pages-style `pnpm generate` in CI), run locally and in GitHub Actions. How to reproduce a red run with the exact CI commands, the known gotchas (TypeScript pinned to 5.x for vue-tsc, pnpm allowBuilds, Nuxt type generation) and how to add a new check without the local and cloud gates drifting. Use whenever the user wants to run/fix CI, triage a failing check, or add a lint/test/check to the pipeline.
---

# /ci-maintenance — run, debug and extend the gate

"Green" means these three commands pass, in this order, on a clean checkout:

```bash
pnpm install --frozen-lockfile   # also runs `nuxt prepare` (postinstall) → generates .nuxt types
pnpm typecheck                   # nuxt typecheck → vue-tsc over the app
pnpm build                       # nuxt build → .output/
```

`.github/workflows/ci.yml` runs exactly these on every PR, on `main` and on demand, then the same
`pnpm generate` the Pages deploy runs, so a prerender failure shows up before merge. On a PR a
second job, `Conventional Commits`, checks the branch name, the commits and the PR title
(commitlint + validate-branch-name; see `/pr-description`). Run them locally
before every push and before `gh pr create`; never claim green from a run you did not see finish.

## Reproduce a red run

1. Read the failing step, not the summary: `gh run list --workflow CI -L 5`, then
   `gh run view <run-id> --log-failed`.
2. Run the same command locally from a clean state: `rm -rf .nuxt node_modules/.cache && pnpm install --frozen-lockfile`.
3. Classify: real failure (types, build) vs environment (lockfile out of date, blocked install
   script, cold cache) vs flake (re-run once before "fixing").

## Gotchas

- **TypeScript stays on 5.x.** `vue-tsc` does not support TypeScript 7 yet; upgrading breaks
  `pnpm typecheck` with `ERR_PACKAGE_PATH_NOT_EXPORTED`.
- **Install scripts are allow-listed** in `pnpm-workspace.yaml` (`allowBuilds`). A new dependency with
  a build script fails the install until it is added there.
- **Lockfile drift** fails `--frozen-lockfile`: commit `pnpm-lock.yaml` with every dependency change.
- **Nuxt types are generated.** A missing `#imports` / auto-import type usually means `.nuxt` is
  stale — run `pnpm nuxt prepare`.
- **Static only.** The site is prerendered for GitHub Pages; there is no `server/` directory and
  nothing may need a server at request time.

## Add a check

1. Add it as a `package.json` script first (e.g. `"lint": "eslint ."`) so it runs the same locally.
2. Add one `- run: pnpm <script>` step to `ci.yml`, ordered cheap-before-expensive
   (lint → typecheck → build).
3. Prove it RED before GREEN: introduce a temporary violation, see the step fail, remove it.
4. New dev dependency or new action → ask the user first. Follow `/github-actions` for the workflow.
