// Structure of the site: names, links and versions. Visible text lives in i18n/content/<code>.ts.

// The application's source repository is private, so the build people download, its release
// notes and the issue tracker all live in THIS repository — the arrangement IndexOne uses.
const repo = 'https://github.com/monoone-dev/rig-one-landing-page'

export const site = {
  name: 'RigOne',
  organization: 'MonoOne',
  organizationUrl: 'https://monoone.dev',
  organizationGithub: 'https://github.com/monoone-dev',
  description: 'A native macOS control room for coding agents: build a workflow for Claude Code and Codex on one canvas and run it against a project on your Mac.',
  ogImage: 'og-image.png',
  themeColor: '#6d28d9',
  minMacOS: '13',
  links: {
    repo,
    download: `${repo}/releases/latest`,
    releases: `${repo}/releases`,
    issues: `${repo}/issues`,
    newIssue: `${repo}/issues/new`,
    license: `${repo}/blob/main/LICENSE`,
  },
} as const

// Flag shown in the language picker (circle-flags icons: SVG, so they look the same on every OS)
export const flags: Record<string, string> = {
  en: 'i-circle-flags-gb',
  pl: 'i-circle-flags-pl',
  es: 'i-circle-flags-es',
  it: 'i-circle-flags-it',
  fr: 'i-circle-flags-fr',
  pt: 'i-circle-flags-br',
  de: 'i-circle-flags-de',
  zh: 'i-circle-flags-cn',
  ja: 'i-circle-flags-jp',
}
