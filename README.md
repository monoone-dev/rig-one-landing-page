<p align="center">
  <img src="app/assets/brand/rig-one-icon.svg" alt="RigOne" width="128" height="128">
</p>

# RigOne

**A native macOS IDE for coding agents.** Define an agent once, place it on a canvas, connect the
steps, and run the graph against a project on your Mac — Claude Code, Codex and OpenCode as
first-class peers, in parallel, with checks RigOne runs itself. Then review every line a step
changed, comment on it, preview the app, see what every task cost, and keep several projects open
side by side.

[Download for macOS](https://github.com/monoone-dev/rig-one-landing-page/releases/latest) ·
[Website](https://rig-one.io/) ·
[Documentation](https://rig-one.io/docs/) ·
[Changelog](https://rig-one.io/changelog/) ·
[Support](#support)

macOS 13+ · Apple Silicon · signed and notarized · free · in nine languages

![Two projects side by side: client-website, where Ship a feature waits for an answer from Second opinion, and docs-site, with a new Auto task being written](public/screenshots/projects.webp)

## Contents

- [This repository](#this-repository)
- [What RigOne does](#what-rigone-does)
- [Screens](#screens)
- [Install](#install)
- [Built to fail honestly](#built-to-fail-honestly)
- [Where your data lives](#where-your-data-lives)
- [Updating](#updating)
- [Uninstall](#uninstall)
- [Working on the website](#working-on-the-website)
- [Support](#support)
- [Authors and license](#authors-and-license)

## This repository

RigOne's public home. The app's source code is not public and is not here.

| Path | What it is |
| --- | --- |
| [Releases](https://github.com/monoone-dev/rig-one-landing-page/releases) | The signed, notarized DMG of every release, with its notes and `SHA256SUMS.txt` |
| [`release-notes/`](release-notes/) | The same release notes, as Markdown — the website's changelog is built from them |
| [`docs/user-guide.md`](docs/user-guide.md) | The documentation — the website's docs pages are built from it, one per `##` section |
| [`public/screenshots/`](public/screenshots/) | Screens of the shipped app, shown on the website and below |
| [`app/`](app/), [`i18n/`](i18n/), [`modules/`](modules/), [`public/`](public/), [`server/`](server/) | The website — Nuxt, statically generated |
| [Issues](https://github.com/monoone-dev/rig-one-landing-page/issues) | Bug reports, ideas and questions |

## What RigOne does

1. **Write an agent** — one job, one instruction. Pick Claude Code, Codex or OpenCode, the model, the effort
   and what it may touch: file access from *look only* upwards, web access, a timeout, tool
   servers and skills.
2. **Put agents in a row** — that row is a workflow, saved as a graph. An arrow means "runs
   after"; steps that do not depend on each other run at the same time. A step can be an agent, a
   check or a checkpoint where you decide.
3. **Run it and watch** — point the graph at a folder on your Mac and set how many agents may work
   at once. What every agent said reads in the middle, the plan on the right, and the question that
   stopped the run is pinned where you will answer it.

Each step works in its own copy of your code. When the run ends, what the agents changed waits on
its own branch in your project: **a workflow pushes nothing, and nothing reaches your own branch
until you take it** — only Auto pushes and opens a pull request, when you allow it. When a step
finishes, RigOne runs the checks itself instead of asking the agent whether it worked, re-runs a red
check without the change to tell old failures from new ones, and lets a review by the other vendor
send the work back.

**Review a step like in an IDE.** Open a step and read what it changed as files, hunks and lines.
Click a line to comment on it and send the comments to the agent — a finished step carries on in
its own folder. RigOne keeps a version of the step's files after every turn, shows which functions
changed and where they are used, starts the app from the step's folder for a preview, opens a file
at its line in your editor, and says what the step cost.

**Several projects at once.** Each project opens as a tab, and up to three sit side by side, each
with its own tasks, runs and questions. Your tabs and panes come back after a restart.

**Auto** goes one step further: hand the Lead a goal in a sentence, and it picks the roles and
skills it needs, builds ordinary workflows for each part and keeps going until checks and reviews
prove the work. Every decision that waits for you — a question, an approval, a design review of
the tester's screenshots — sits in one list, **Needs you**, and macOS tells you when one arrives.
**Pause Auto** and **Resume** hold a whole goal, and up to three goals work in one folder at a time.

**Overview** shows a project on one page — a summary of what needs your attention, then tabs for its score,
repository, agents, workflows, knowledge and automation — and **Generate project setup** drafts a rig from the
repository for you to review. **Score** has
an agent read the project and rate out of 100 how easily agents move through it, weakest areas first, each with
recommendations and a button that starts a fix.

**Remote access** pairs your phone or tablet: answer what waits in Needs you, start an Auto goal,
message the Lead or stop work from anywhere, with Face ID or Touch ID on every session.

**Boards** are shared boards for people and agents — Kanban or sprints with a backlog — encrypted
and signed on your Mac before anything leaves it. Plan epics, features, user stories, tasks and
bugs that nest inside each other; every card shows what its work cost and the tokens it used, and a
feature or epic adds up everything under it. Start an item as a workflow or an Auto goal, and its
progress and the agents' replies show on the board for every member. Boards and Remote access are
the only parts of RigOne that need an account (MonoOne).

**Analytics** shows what your agents spent: every task carries its spend beside the model, and the
Analytics screen adds up spend, tokens, tasks and agent time over 7, 30 or 90 days or your own
dates — per day, per app, model, effort, person and project, with the most expensive tasks first.
It is worked out on your Mac from your own runs.

Also included: project-scoped knowledge (notes you approve and skills), named context sets from
text, Markdown, images and PDFs, a shared versioned plan across steps, a Lab that drafts test
cases from your own code to evaluate an agent, Linear triggers, model gateways and local models,
live plan limits for both vendors, a Health check, updates for the agent apps themselves, and run
evidence — receipts, handoffs, full answers and a diagnostic bundle — that outlives the terminal.
The interface speaks English, Polish, German, Spanish, French, Italian, Portuguese, Chinese and
Japanese, in a Surface, Minimalist, Studio, Linen or Feather look, light or dark.

The full feature list is on the [website](https://rig-one.io/features/),
and where RigOne is ahead of and behind Orca, Paseo, Superset, Conductor, Nimbalyst, the ChatGPT app and
Cursor Cloud Agents is [here](https://rig-one.io/compare/).

## Screens

| | |
| --- | --- |
| ![The Fix step: the changed lines of validate.ts and its test, with a comment on line 15 waiting to be sent to the agent](public/screenshots/review.webp) | ![The Fix step: changed functions with their uses, the app running from the step with Open preview, and three saved versions](public/screenshots/review-tools-light.webp) |
| **Review** — every changed line of a step; comment on a line and the agent picks it up. | **Preview and versions** — start the app from the step, go back to any version of its files. |
| ![Overview of client-website: the Summary tab with six tiles and Needs your attention](public/screenshots/project.webp) | ![The canvas of Ship a feature: Reproduce, then Fix, then Tests pass and Second opinion side by side](public/screenshots/canvas-light.webp) |
| **Overview** — the whole project on one page: a summary, then score, repository, agents, workflows, knowledge and automation. | **Canvas** — steps joined by arrows that mean "runs after"; independent steps run at the same time. |
| ![The Agents screen: Scout, Builder, Needle and Second opinion, each with its access, model and effort](public/screenshots/agents-light.webp) | ![The Knowledge screen: suggested notes waiting for Keep or Discard, notes in context and skills](public/screenshots/knowledge.webp) |
| **Agents** — the whole role on one screen: instructions, agent app, model and effort, file and web access, timeout. | **Knowledge** — notes an agent suggests wait for you; approved notes go into every prompt. |
| ![Settings → Appearance: the Surface, Minimalist, Studio, Linen and Feather themes, and Light & dark](public/screenshots/settings.webp) | ![Settings → Remote access: allow remote access, paired devices and what your phone can do](public/screenshots/settings-remote-light.webp) |
| **Settings** — Surface, Minimalist, Studio, Linen or Feather, an accent colour, light or dark, and a Health check. | **Remote access** — pair a phone or tablet and follow your work from anywhere. |
| ![A shared board: epics, features, stories, tasks and bugs, each card with its kind, its ID and what it cost](public/screenshots/boards.webp) | ![The Analytics screen: spend, tokens, tasks and agent time, spend per day and usage per app, model and project](public/screenshots/analytics-light.webp) |
| **Boards** — epics down to bugs, sprints, and the cost of every card. | **Analytics** — where the money and tokens go, by day, app, model, person and project. |

Every screen is in `public/screenshots/` in dark (`<screen>.webp`) and light (`<screen>-light.webp`).

## Install

You need a Mac with Apple Silicon and macOS 13 or later, and at least one agent app installed and
signed in: **Claude Code**, **Codex** or **OpenCode**. Runs use your own plan with each vendor.

1. Download `RigOne_<version>_aarch64.dmg` from the
   [latest release](https://github.com/monoone-dev/rig-one-landing-page/releases/latest).
2. Open the DMG and drag **RigOne** into **Applications**.
3. Open it from Applications.

The disk image and the application inside it are signed with Apple Developer ID, notarized and
stapled. If macOS says the app "cannot be opened" or "is damaged", don't work around it: delete
the file, download it again, and [open an issue](https://github.com/monoone-dev/rig-one-landing-page/issues/new)
if it happens again.

<details>
<summary>Verify a download (optional)</summary>

```bash
shasum -a 256 ~/Downloads/RigOne_<version>_aarch64.dmg
spctl --assess --type open --context context:primary-signature -v ~/Downloads/RigOne_<version>_aarch64.dmg
```

The checksum must match the one in the release notes (each release also carries
`SHA256SUMS.txt` — run `shasum -a 256 -c SHA256SUMS.txt` in the download folder). `spctl` must
answer `accepted` and `source=Notarized Developer ID`.

</details>

**Permissions.** macOS asks for each one the first time it is needed: the folders you work in,
sending events to other applications, the microphone if a workflow drives an app that records, and
notifications for decisions that wait for you.
Details: [Getting started](https://rig-one.io/docs/getting-started/).

## Built to fail honestly

RigOne treats orchestration failures as product failures, not terminal noise:

| RigOne refuses to… | Instead |
| --- | --- |
| Combine two steps that changed one file differently | Does not start the next step, and keeps both copies |
| Leave processes behind after Stop or a timeout | Ends the whole process group, then verifies it is dead |
| Put prompts or secrets on a command line | Sends them through stdin; child environments are rebuilt from an allowlist unless YOLO gives full access |
| Crash on a vendor event it does not know | Records it and carries on |
| Count a green exit code as a pass when no tests ran | Shows "nothing ran" as its own outcome |
| Treat its database as the truth | Keeps files as the truth; the SQLite index can be deleted and rebuilt |

RigOne itself runs on your Mac and works in your folders. The agents it starts are Claude Code,
Codex or OpenCode, so what they read goes to their providers exactly as when you run them in a
terminal. Boards sends the MonoOne server only encrypted tasks, comments and activity. In Auto,
**Full access** (on by default) runs steps with the same access as the agent app in your terminal;
switch it to **In its own copy** to keep them fenced in their copies. More:
[Safety model](https://rig-one.io/docs/safety-model/).

## Where your data lives

| What | Where |
| --- | --- |
| Your library: agents, workflows, skills, notes, triggers, context sets, settings | `~/.rig-one/` |
| A project's own notes and its run history (plain files, safe to commit) | `.rig-one/` inside the project folder |
| The work of a run | A branch in your project's own Git repository |
| Access keys for model gateways | `~/.rig-one/env` |
| Board keys | The macOS Keychain |

## Updating

RigOne updates itself: **Settings → About** checks for, downloads and installs new versions, each
verified against RigOne's signing key, and waits for running work to finish. From a version before
1.13.3, download the new DMG once from the
[latest release](https://github.com/monoone-dev/rig-one-landing-page/releases/latest) and replace
the app. Your library and project folders stay put.

## Uninstall

1. Quit RigOne and move `/Applications/RigOne.app` to the Trash. Your library stays.
2. To remove your data too, delete `~/.rig-one/` and the `.rig-one/` folders inside your projects —
   **this permanently deletes your agents, workflows, notes and run history.** Branches that runs
   left in your repositories are ordinary Git branches; delete them with Git.

## Working on the website

The website is a [Nuxt](https://nuxt.com) 4 app in TypeScript with [Nuxt UI](https://ui.nuxt.com),
[Nuxt i18n](https://i18n.nuxtjs.org) and SCSS, generated to static HTML so every word is in the
served markup. It is published in English (`/`), Polish (`/pl/`), Spanish (`/es/`), Italian
(`/it/`), French (`/fr/`), Portuguese (`/pt/`), German (`/de/`), Simplified Chinese (`/zh/`) and
Japanese (`/ja/`); the first visit follows the browser's language and the choice is kept in a
first-party cookie. The colour mode follows the system until the visitor picks one. Same stack and
same structure as [`index-one-landing-page`](https://github.com/monoone-dev/index-one-landing-page),
so the MonoOne sites stay one family.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm test         # every language file matches en.ts (keys, placeholders, plurals)
pnpm typecheck
pnpm generate     # static output in .output/public
```

| Path | What it holds |
| --- | --- |
| `i18n/content/` | All page copy, one typed file per language (`en.ts` is the source; `types.ts` keeps the others complete) |
| `app/data/` | What doesn't get translated: links, icons, the screenshots, the compared products and their yes/no values |
| `app/components/` | One component per section; `RigMark.vue` is the logo, `ScreensSection.vue` the screenshots |
| `app/pages/` | Home, features, docs, compare and changelog (the layout of SurfaceOne's changelog template: a versions list, a timeline and each release's package) |
| `app/assets/scss/` | Fonts, colour tokens (SurfaceOne's Airy surfaces in light and dark, the violet taken from the mark), base and Markdown styles |
| `app/composables/usePageSeo.ts` | Meta tags, Open Graph and JSON-LD; `hreflang` and canonical come from Nuxt i18n |
| `modules/markdown.ts` | Splits `docs/user-guide.md` into grouped docs pages and renders it and `release-notes/*.md` into the pages at build time; takes each note's title and package apart |
| `server/routes/` | `sitemap.xml` (every language as an alternate) and `robots.txt` |
| `public/` | Static files served as they are: favicon, app icons, Open Graph image, web manifest, `screenshots/` |

The site makes no third-party requests: fonts and icons are bundled, and there is no analytics.
CI ([`ci.yml`](.github/workflows/ci.yml)) tests, typechecks and builds the site and checks branch names,
commits and PR titles; [`pages.yml`](.github/workflows/pages.yml) deploys `main` to GitHub Pages
and serves it at `rig-one.io` (the Pages custom domain; `NUXT_APP_BASE_URL` follows the Pages
base path, so the site also builds under a sub-path). `pnpm install` also
wires git hooks that check branch names and commit messages
([Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), no AI attribution).
Runbooks for people and coding agents are in [`AGENTS.md`](AGENTS.md) and `.agents/skills/`.

**A release** adds `release-notes/v<version>.md` — `# RigOne <version> — <title>`, then
`*Released on YYYY-MM-DD.*`, then the notes, ending with a `## The package` section that names
`RigOne_<version>_aarch64.dmg` and gives its SHA-256 in a code block — and the GitHub release with
the DMG and `SHA256SUMS.txt`. The changelog page shows the package and its checksum apart from the
notes, and it, the "version is out" badge, the sitemap and the structured data pick up the new
version on the next deploy. **New screenshots** go to `public/screenshots/<screen>.webp` (dark) and `<screen>-light.webp`
(light), rendered at twice their size from the app's real frontend with demo data — no real names,
paths or accounts on screen — with their alt text in every `i18n/content/` file.

## Support

- **Docs first:** [the documentation](https://rig-one.io/docs/).
- **Bug or idea:** [open an issue](https://github.com/monoone-dev/rig-one-landing-page/issues/new)
  with your RigOne version, macOS version and what you expected.
- **Security issue:** don't put the details in a public issue. Open an issue that only says you have
  a security report, and a maintainer will arrange a private channel.

> Issues are public. Never paste API keys, private code or prompts, and don't attach the diagnostic
> bundle before reading it — it can contain file paths that include your macOS user name.

## Authors and license

<a href="https://monoone.dev"><img src="https://monoone.dev/favicon.svg" alt="MonoOne" width="20" height="20" align="absmiddle"></a>
RigOne is made by **[MonoOne](https://monoone.dev)** ([GitHub](https://github.com/monoone-dev)),
the same house as [IndexOne](https://github.com/monoone-dev/index-one-landing-page).

- This repository — the website, the documentation and the release notes — is licensed under the
  [GNU AGPL-3.0](LICENSE), the same licence as the application.
- Fonts in `app/assets/fonts/` are under the SIL Open Font License 1.1; each family's licence sits
  next to it.
- The RigOne name and logo belong to MonoOne.

This section describes the licensing; it is not legal advice.
