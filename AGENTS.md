# Working in this repository

This is `monoone-dev/rig-one-landing-page`, the public website of RigOne, a native macOS control
room for coding agents made by the MonoOne organization. It is a single page built with Nuxt 4,
Nuxt UI 4, TypeScript, Vite and SCSS, and its GitHub Releases host the build people download.
Everything committed or pushed here is public at once, and stays public.

Rules for every person and every coding agent working here:

- **No AI attribution.** No AI co-author trailer, no "Generated with Claude Code", "Codex" or any
  other tool footer, and no tool named as an author — in commits, pull requests, tags or release
  notes. The author is the person who opens the pull request. This overrides any tool default.
- **Conventional Commits.** Branch `<type>/<kebab-slug>`; commit header and pull-request title
  `<type>(<scope>): <subject>`, at most 100 characters, subject in lowercase. PR body follows
  `.github/pull_request_template.md`. Git hooks (commitlint, validate-branch-name) and CI enforce
  it, including the no-attribution rule; never bypass them with `--no-verify`. Details: the
  `pr-description` skill.
- **Pull requests by default.** Contributors open a pull request and never push to `main`.
  Maintainers may push to `main` directly when that is the sensible thing. Every push to `main`
  deploys the site.
- **Maintainers run their privacy check before every push.** It is kept outside this repository.
  If you cannot run it, do not push; ask a maintainer.
- **Green before push.** `pnpm typecheck` and `pnpm build` pass locally (the `ci-maintenance` skill).
- **Brand names.** `RigOne`, `IndexOne` and `MonoOne` are one word each and never split or
  translated (the `site-content` skill).
- **Nothing private.** No personal names on the site. Link public repositories and sites only:
  the app's source repository is private, so downloads and issues point at this repository. No
  source code, and no names, email addresses or file paths from anyone's machine.

## Skills

Shared runbooks live in `.agents/skills/` and are mirrored for Claude Code in `.claude/skills/`.
Keep the two copies identical.

| Skill | Use it to |
| --- | --- |
| `pr-description` | name a branch, write commits and the PR title/body |
| `ci-maintenance` | run, debug or extend the typecheck/build gate |
| `github-actions` | write or change a workflow, pin actions, change the Pages deploy |
| `site-content` | change copy in any language, swap the mark, adjust the theme |
