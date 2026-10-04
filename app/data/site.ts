// Structure of the page: links, icons and which translation keys to use.
// All visible text lives in i18n/locales/<code>.json.

export const site = {
  name: 'RigOne',
  url: 'https://monoone.dev',
  github: 'https://github.com/monoone-dev/rig-one',
  download: 'https://github.com/monoone-dev/rig-one/releases/latest',
  issues: 'https://github.com/monoone-dev/rig-one/issues',
  house: 'https://github.com/monoone-dev'
}

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
  ja: 'i-circle-flags-jp'
}

/** What the app does. One icon, one sentence — same shape as the house. */
export const features = [
  { key: 'canvas', icon: 'i-lucide-workflow' },
  { key: 'parallel', icon: 'i-lucide-split' },
  { key: 'watch', icon: 'i-lucide-radio' },
  { key: 'agents', icon: 'i-lucide-users' },
  { key: 'context', icon: 'i-lucide-book-open' },
  { key: 'evidence', icon: 'i-lucide-receipt' }
]

/** How a run happens, in three steps. */
export const steps = ['write', 'arrange', 'run']

/** What the app refuses to do quietly. The honest half of the pitch. */
export const honest = ['scopes', 'cancel', 'secrets', 'green']
