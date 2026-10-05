---
name: github-actions
description: Author and maintain GitHub Actions workflows for this repo (Nuxt 4 + pnpm landing page) — ubuntu runner, pnpm + Node from .nvmrc with the pnpm store cache, SHA-pinned actions resolved live, least-privilege permissions, concurrency cancel, timeouts and secrets by name. Use whenever the user wants to write or change a workflow, tune CI runtime/caching, pin or bump actions, or add a deploy pipeline.
---

# /github-actions — workflow best practices for this repo

Two workflows: `.github/workflows/ci.yml` (PR gate) runs the same commands a contributor runs
locally — `pnpm install --frozen-lockfile`, `pnpm typecheck`, `pnpm build`, plus the Pages-style
`pnpm generate` — and `.github/workflows/pages.yml` deploys `main` to GitHub Pages.
To change *what* is checked, see `/ci-maintenance`.

## Non-negotiables

1. **`runs-on: ubuntu-latest`.** The site has no platform-specific build; Linux is the cheapest runner.
2. **Least privilege.** `permissions: contents: read` at the top. Give a single job a wider scope only
   if it really needs it (e.g. `pages: write` for a deploy job); never `write-all`.
3. **`concurrency` with `cancel-in-progress`**, keyed on the workflow and the ref.
4. **`timeout-minutes` on every job.**
5. **Pin every action to a full commit SHA** with a `# vX.Y.Z` comment. Resolve it live (below) — a
   guessed SHA fails the run.
6. **No new third-party action without the user's approval.**
7. **Secrets by name only** (`${{ secrets.NAME }}`). Never echo them or transform them in logs.
8. **Toolchain from the repo:** Node from `.nvmrc` (`node-version-file`), pnpm from the
   `packageManager` field in `package.json` (`pnpm/action-setup` reads it). Never hard-code a second version.

## Pin an action to a real SHA

```bash
tag=$(gh api repos/actions/checkout/releases/latest --jq .tag_name)
gh api repos/actions/checkout/git/ref/tags/$tag --jq '.object.type + " " + .object.sha'
# type "commit" → pin that sha
# type "tag"    → annotated tag; deref it and pin the COMMIT sha:
gh api repos/actions/checkout/git/tags/<tag-object-sha> --jq .object.sha
```

## Fast enough

- `actions/setup-node` with `cache: pnpm` caches the pnpm store; always `pnpm install --frozen-lockfile`.
- `pnpm-workspace.yaml` lists the dependencies allowed to run install scripts (`allowBuilds`). A new
  dependency with a build script fails the install until it is added there — that is intended.

## Verify before you push

```bash
ruby -ryaml -e 'YAML.load_file(".github/workflows/ci.yml"); puts "yaml ok"'
command -v actionlint >/dev/null && actionlint || echo "(install actionlint to lint)"
gh workflow run CI && gh run watch      # after the branch is pushed
```

## Deploy — GitHub Pages (`.github/workflows/pages.yml`)

- Runs on every push to `main`, on demand, and daily at 05:17 UTC (a leftover from the template;
  this site bakes in no GitHub numbers, so the daily run only redeploys the same content).
- `pnpm generate` with `NITRO_PRESET=github_pages` prerenders every language
  into `.output/public` (with `.nojekyll` and `404.html`).
- `actions/configure-pages` supplies the base path and origin: `/<repo>/` on `<org>.github.io`,
  `/` once a custom domain is set — never hard-code them. They feed `NUXT_APP_BASE_URL` and
  `NUXT_PUBLIC_I18N_BASE_URL` (origin only; the i18n module adds the base path itself).
- Least privilege: the build job only reads; `pages: write` + `id-token: write` live on the
  deploy job alone. `concurrency: pages` without cancel, so a deploy is never cut off.
- Prerequisite (one-time, repo admin): Settings → Pages → Source: **GitHub Actions**. Without it
  `configure-pages` fails with "Get Pages site failed".
- Anything new that must work on Pages has to be static: no server routes at request time, and
  every asset path must go through `app.baseURL` (see `asset()` in `app/app.vue`).

Reproduce the deploy build locally:

```bash
NITRO_PRESET=github_pages NUXT_APP_BASE_URL=/rig-one-landing-page/ \
NUXT_PUBLIC_I18N_BASE_URL=https://monoone-dev.github.io pnpm generate
```
