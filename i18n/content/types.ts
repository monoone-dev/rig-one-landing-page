// The shape of every language file. `en.ts` is the source; TypeScript refuses a language file
// that misses a key, so no section can silently fall back to English.

export interface PageMeta {
  title: string
  description: string
}

export interface SubPageMeta extends PageMeta {
  breadcrumb: string
}

export interface Card {
  title: string
  body: string
}

export type DifferentiatorId = 'graph' | 'peers' | 'parallel' | 'checks' | 'branches' | 'evidence'

export type FeatureId =
  | 'canvas' | 'parallel' | 'run' | 'auto' | 'agents' | 'knowledge'
  | 'checks' | 'branches' | 'boards' | 'triggers' | 'lab' | 'evidence'

/** The app screenshots in public/screenshots/<id>.webp, in the order of `screens` in app/data/shared.ts. */
export type ScreenId = 'run' | 'agents' | 'workflows' | 'settings'

export type HonestId = 'scopes' | 'cancel' | 'timeouts' | 'secrets' | 'env' | 'unknown' | 'green' | 'files'

export type ComparisonRowId = 'local' | 'mix' | 'graph' | 'isolated' | 'checks' | 'budget' | 'boards' | 'platforms' | 'price'

/** RigOne, then the four named products — in the order of `competitors` in app/data/shared.ts. */
export type ComparisonCells = [string, string, string, string, string]

export interface SiteContent {
  meta: {
    home: PageMeta
    features: SubPageMeta
    docs: SubPageMeta
    compare: SubPageMeta
    changelog: SubPageMeta
    ogImageAlt: string
  }
  common: {
    skipToContent: string
    homeAria: string
    primaryNav: string
    footerNav: string
    language: string
    englishOnly: string
  }
  nav: {
    features: string
    docs: string
    compare: string
    faq: string
    changelog: string
    github: string
    issues: string
    download: string
  }
  theme: {
    label: string
    light: string
    dark: string
    system: string
  }
  hero: {
    badgePlatform: string
    badgeAgents: string
    /** `{version}` is replaced with the latest release tag. */
    badgeRelease: string
    titleStrong: string
    titleSoft: string
    sub: string
    download: string
    docsCta: string
    note: string
    illustrationLabel: string
  }
  trust: {
    aria: string
    items: [string, string, string, string]
  }
  unique: {
    eyebrow: string
    title: string
    lead: string
    items: Record<DifferentiatorId, Card & { link: string }>
    seeAll: string
  }
  how: {
    eyebrow: string
    title: string
    lead: string
    steps: [Card, Card, Card]
  }
  screens: {
    eyebrow: string
    title: string
    lead: string
    /** Label of the tab list. */
    label: string
    /** `tab` names the button, `alt` describes the picture. */
    items: Record<ScreenId, Card & { tab: string, alt: string }>
  }
  honest: {
    eyebrow: string
    title: string
    lead: string
    items: Record<HonestId, Card>
  }
  features: {
    eyebrow: string
    title: string
    lead: string
    items: Record<FeatureId, Card & { eyebrow: string, points: string[] }>
  }
  compare: {
    eyebrow: string
    title: string
    lead: string
    caption: string
    capability: string
    /** What each product is, shown under its name (the names are in `competitors`, not translated). */
    examples: [string, string, string, string]
    labels: { yes: string, partial: string, no: string, unknown: string }
    notStated: string
    rows: Record<ComparisonRowId, { criterion: string, cells: ComparisonCells }>
    /** `{issues}` is replaced with the issue tracker URL. */
    footnoteHtml: string
  }
  faq: {
    eyebrow: string
    title: string
    /** `{docs}` and `{issues}` are replaced with links. */
    leadHtml: string
    items: { question: string, answer: string }[]
  }
  cta: {
    title: string
    lead: string
    download: string
    docs: string
    compare: string
    note: string
  }
  changelog: {
    eyebrow: string
    title: string
    lead: string
    download: string
    github: string
    latest: string
    englishNote: string
    /** Heading of the list of versions beside the releases. */
    versions: string
    /** Label of the filter, then its three choices. */
    show: string
    all: string
    featureReleases: string
    patchReleases: string
    /** Shown before the number of releases listed, e.g. "Releases: 12". */
    count: string
    empty: string
    showOlder: string
    package: string
    copyChecksum: string
    copied: string
  }
  docs: {
    eyebrow: string
    title: string
    lead: string
    onThisPage: string
    englishNote: string
    /** `{issues}` is replaced with the issue tracker URL. */
    helpHtml: string
  }
  footer: {
    tagline: string
    /** `{year}`, `{org}` and `{license}` are replaced. */
    legalHtml: string
  }
}
