# rig-one-landing-page

The page people land on before they download [RigOne](https://github.com/monoone-dev/rig-one):
a native macOS control room for coding agents.

One static page, no build step. `index.html` carries the whole site and `icon.svg` is the app
icon exactly as it ships — the same file the bundle rasterises, so the page cannot drift from
the icon in the Dock.

## Why static, and what comes next

Its two siblings — `monoone-landing-page` and `index-one-landing-page` — are Nuxt applications
with i18n, server routes and their own agent control plane. This page starts as one file so the
rename has somewhere to point on day one. Moving it onto the family stack is its own task, not
a condition of shipping the name.

## Run it

Open `index.html`. That is the whole of it.

## Licence

AGPL-3.0-only, the same as the application.
