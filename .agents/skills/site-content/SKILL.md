---
name: site-content
description: Change what the RigOne website says or shows — edit the hero, features, steps, the "honest" list or the download section, swap the mark, or adjust the Mono theme — following the content rules (no personal names, honest claims, nothing private). Use whenever the user asks to change text on the site, add a feature or a language, replace the mark or tweak colors.
---

# /site-content — editing the site

## Where things live

| What | Where |
| --- | --- |
| All visible text, per language | `i18n/locales/{en,pl,es,it,fr,pt,de,zh,ja}.json` |
| Links (download, issues, organization) and the lists of feature, step and "honest" keys | `app/data/site.ts` |
| Page layout (hero, features, how, honest, download) | `app/pages/index.vue` |
| Header: desktop bar, tablet and phone menus | `app/components/AppHeader.vue` |
| Language and theme menus (shared by the bar and the phone menu) | `app/composables/useLanguageMenu.ts`, `app/composables/useThemeMenu.ts`; buttons in `LanguageSwitcher.vue`, `ThemeMenu.vue`; flags in `app/data/site.ts` |
| Languages, default, browser detection, prerendered routes | `i18n` and `nitro.prerender` blocks in `nuxt.config.ts` |
| Page title, description, Open Graph image, favicon | `app/app.vue` (`meta.*` keys), `public/og-image.png`, `public/favicon.svg` |
| RigOne mark (theme-aware SVG) and wordmark | `app/components/RigMark.vue`, `app/components/AppLogo.vue`; colors in `--mark-*` in `app/assets/scss/main.scss` |
| Mono theme (grayscale, black/white primary) | `app/assets/css/main.css`, `app/app.config.ts` |
| Animations | `app/assets/scss/main.scss` (`.enter`, `.reveal`, hover rules) and `app/components/Reveal.vue` |

`app/data/site.ts` holds structure only; visible text never goes there.

## Content rules

- **No personal names.** No people, authors, founders or team members — on the page, in alt text or in metadata.
- **Nothing private.** The app's source repository is private: never link it. Downloads and issues
  point at this repository's releases and issues; the organization link goes to the public
  `github.com/monoone-dev` page. No internal paths and no private repository names.
- **Claims must be true.** Describe what the released app does today. The "honest" section lists
  what the app refuses to do quietly; keep every item verifiable in the shipped build.
- Short sentences, no marketing superlatives. Product names (RigOne, IndexOne, MonoOne, Claude,
  Codex, macOS) are never split or translated.

## Translations

- English (`en.json`) is the source, the default and the fallback. A missing key silently falls
  back to English, so add new text to all nine files in the same change.
- `pl` is nearly complete; `de`, `es`, `fr`, `it`, `ja`, `pt` and `zh` still miss whole sections
  and show them in English. Filling a gap is welcome; never widen it.
- If copy ever needs plurals, use vue-i18n choices: `zero | one | other`; Polish has four
  (`zero | one | few | many`); Chinese and Japanese take one message.
- Chinese is Simplified (`zh` → `zh-CN`); Traditional-Chinese browsers also land on it.
- Use gender-neutral phrasing (Polish: avoid `-łeś/-łaś` forms).
- Escape vue-i18n special characters (`@ { } | $`) as `{'@'}` if they ever appear in copy.
- Adding a language: a JSON file, an entry in `i18n.locales` and in `nitro.prerender.routes` in
  `nuxt.config.ts`, a flag in `flags` in `app/data/site.ts` (`i-circle-flags-<country>`), and check
  that `@nuxt/ui/locale` has it (Nuxt UI's own labels; see `uiLocale` in `app/app.vue`).

## Add a feature, step or "honest" item

1. Append its key to `features` (with a `i-lucide-*` icon), `steps` or `honest` in `app/data/site.ts`.
2. Add the matching `title` / `description` under `features.items`, `how.steps` or `honest.items`
   in every locale file.
3. Check the grid at phone, tablet and desktop width: the sections are laid out for the current counts.

## Header

Three layouts, same pattern as the other MonoOne sites:

- **Desktop (≥ 1024px)** — links in the bar, then flag, theme and GitHub buttons.
- **Tablet (640–1023px)** — links move into a menu button; flag, theme and GitHub stay in the bar.
- **Phone (< 640px)** — only the logo and one menu: links, then Language and Theme submenus, then GitHub.

A new header control goes into the bar *and* into the phone menu (build its items in a composable so
both share them). Theme offers Light, Dark and System; System (the default) follows the OS.

## The mark

`RigMark.vue` is the app icon's drawing scaled onto a 24 grid. Copy the geometry from the app's
icon when it changes; do not redraw it by eye. Keep the theme behavior: the mark's colors come
from `--mark-*`, and every gradient id is prefixed with `useId()` so two copies on a page do not collide.

## Verify

`pnpm typecheck && pnpm build`, then check the page in light and dark mode at 375px and desktop
width, with no horizontal scroll — in every language (German and Polish words are the longest).
