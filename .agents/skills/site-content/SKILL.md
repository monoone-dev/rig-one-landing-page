---
name: site-content
description: Change what the RigOne website says or shows — page copy in any of the nine languages, features, the "honest" list, the competitor comparison, the FAQ, the documentation, release notes, the mark, or the theme — following the content rules (no personal names, honest claims, nothing private, no third-party requests). Use whenever the user asks to change text on the site, add a feature or a language, replace the mark or tweak colors.
---

# /site-content — editing the site

## Where things live

| What | Where |
| --- | --- |
| All visible text, per language | `i18n/content/{en,pl,es,it,fr,pt,de,zh,ja}.ts` (typed by `types.ts`) |
| What is not translated: links, versions, icons, comparison values | `app/data/site.ts`, `app/data/shared.ts` |
| Pages | `app/pages/{index,features,docs,compare,changelog}.vue`; one component per section in `app/components/` |
| Documentation (English only) | `docs/user-guide.md`, rendered into `/docs/` by `modules/markdown.ts`; `##` headings become the table of contents |
| Changelog entries (English only) | `release-notes/vX.Y.Z.md`: `# Title`, then `*Released on YYYY-MM-DD.*`, then the notes. The newest one also drives the hero badge and the structured data |
| Header: desktop bar, tablet and phone menus | `app/components/AppHeader.vue` |
| Language and theme menus | `app/composables/useLanguageMenu.ts`, `useThemeMenu.ts`; buttons in `LanguageSelect.vue`, `ThemeMenu.vue`; flags in `app/data/site.ts` |
| Languages, default, browser detection, prerendered routes | `i18n` and `nitro.prerender` in `nuxt.config.ts` |
| SEO: title, description, Open Graph, JSON-LD | `app/composables/usePageSeo.ts` (+ `meta.*` in the content files); `hreflang` and canonical come from `@nuxtjs/i18n` in `app/app.vue` |
| Absolute URLs under the GitHub Pages sub-path | `app/composables/useSiteUrl.ts`, `server/utils/site.ts` |
| Sitemap and robots | `server/routes/sitemap.xml.ts`, `server/routes/robots.txt.ts`; page list in `server/utils/site.ts` |
| The RigOne mark | `app/components/RigMark.vue` (inline SVG); source file `app/assets/brand/rig-one-icon.svg`; favicons, app icons and `og-image.png` in `public/` |
| Colours (light and dark), fonts, base and Markdown styles | `app/assets/scss/_tokens.scss`, `_fonts.scss`, `_base.scss`, `_markdown.scss`; Nuxt UI colours in `app/app.config.ts` |
| Hero drawing of the Run screen | `app/components/RunIllustration.vue` (English, like the app) |

## Content rules

- **Brand names.** `RigOne`, `IndexOne` and `MonoOne` — one word, never translated, never split.
  Loadout is RigOne's earlier name; mention it only where people need it (updating, the FAQ).
- **No personal names.** No people, authors, founders or team members — on the page, in alt text or
  in metadata. Authorship is MonoOne.
- **Nothing private.** The app's source repository is private: never link it. Downloads, release
  notes and issues point at this repository. No internal paths, no private repository names, no
  screenshots or examples taken from someone's machine.
- **Claims must be true of the shipped app.** Describe what the released build does today. Every item
  of the "honest" list must be verifiable in the shipped build.
- **Competitor facts** come from public documentation, with the month they were checked
  (`comparisonCheckedOn` in `app/data/shared.ts` and the footnote). Compare kinds of tool, name
  examples, and mark what cannot be verified as "Not stated" instead of guessing.
- Short sentences, no marketing superlatives. In-app labels (Run, Look only, `/run`) stay in English.
- **No third-party requests.** No analytics, no CDN fonts or scripts, no runtime `fetch`.

## Translations

- English (`en.ts`) is the source and the fallback; `types.ts` makes every other language fail the
  typecheck until it has every key. Change all nine files in the same change.
- Do not use `|`, `@`, `{` or `}` in copy except the existing placeholders (`{version}`, `{issues}`,
  `{docs}`, `{year}`, `{org}`, `{license}`).
- Chinese is Simplified (`zh` → `zh-CN`). Use gender-neutral phrasing (Polish: avoid `-łeś/-łaś`).
- The documentation and the release notes are English only; other languages show a one-line note.
- Adding a language: a content file, an entry in `locales` in `nuxt.config.ts` and in
  `sitemapLocales` in `server/utils/site.ts`, a flag in `flags` (`i-circle-flags-<country>`), and
  check that `@nuxt/ui/locale` has it (see `uiLocale` in `app/app.vue`).

## Add a feature, a reason or an "honest" item

1. Add its id to the union in `i18n/content/types.ts` and to `features`, `differentiators` or
   `honest` in `app/data/shared.ts` (with an `i-lucide-*` icon where there is one).
2. Add the copy to all nine content files — the typecheck lists the ones you missed.
3. Check the grids at phone, tablet and desktop width.

## The mark

`RigMark.vue` is the same drawing as `RigOneMark.vue` in `monoone-landing-page`, built from
`app/assets/brand/rig-one-icon.svg`. When the mark changes, copy it from there — do not redraw it by
eye — and regenerate `public/favicon.svg`, the PNG icons and `og-image.png` from the same file.
Keep every gradient id prefixed with `useId()` so two copies on a page do not collide.

## Verify

`pnpm typecheck && pnpm build`, then check the pages in light and dark mode at 375px and desktop
width, with no horizontal scroll — in every language (German and Polish words are the longest).
