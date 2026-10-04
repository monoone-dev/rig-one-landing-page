# rig-one-landing-page

The page people land on before they download [RigOne](https://github.com/monoone-dev/rig-one):
a native macOS control room for coding agents.

Same stack as the rest of the house — Nuxt 4, Nuxt UI, `@nuxtjs/i18n` across nine languages —
so `monoone-landing-page`, `index-one-landing-page` and this one stay one family rather than
three sites that happen to share a logo.

## Run it

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm generate     # static build in .output/public
```

## Where it is published

GitHub Pages, from `.github/workflows/pages.yml` on every push to `main`. The workflow sets
`NUXT_APP_BASE_URL` to the Pages sub-path, so the site works both at
`monoone-dev.github.io/rig-one-landing-page/` and at a custom domain later, with no code change.

## The mark

`app/components/RigMark.vue` carries the same geometry as the icon the application ships
(`docs/branding/rig-one-mark.svg` in `monoone-dev/rig-one`), scaled from the 1024 icon canvas
onto a 24 grid. One drawing, two places — the mark on this page cannot drift away from the one
in the Dock.

## Licence

AGPL-3.0-only, the same as the application.
