// The shape of every language file. `en.ts` is the source; TypeScript refuses a language file
// that misses a key, so no section can silently fall back to English.

export interface PageMeta {
  title: string
  description: string
}

export interface SubPageMeta extends PageMeta {
  breadcrumb: string
}

export interface Problem {
  problem: string
  answer: string
}

export interface Strength {
  title: string
  body: string
  others: string
}

export interface Card {
  title: string
  body: string
}

export type DifferentiatorId = 'ide' | 'projects' | 'graph' | 'peers' | 'parallel' | 'checks' | 'branches' | 'evidence'

export type FeatureId =
  | 'canvas' | 'parallel' | 'run' | 'review' | 'preview' | 'projects' | 'auto' | 'agents' | 'rig'
  | 'knowledge' | 'checks' | 'branches' | 'boards' | 'remote' | 'triggers' | 'lab' | 'evidence'

/** The app screenshots in public/screenshots/<id>.webp, in the order of `screens` in app/data/shared.ts. */
export type ScreenId = 'run' | 'run-panel' | 'review' | 'review-tools' | 'projects' | 'canvas' | 'project' | 'agent-detail' | 'knowledge' | 'settings'
  | 'boards' | 'trigger-form' | 'lab' | 'settings-remote'

export type HonestId = 'scopes' | 'cancel' | 'timeouts' | 'secrets' | 'env' | 'unknown' | 'green' | 'files'

/** The products RigOne is compared with, in the order of `competitors` in app/data/shared.ts. */
export type CompetitorId = 'orca' | 'paseo' | 'superset' | 'conductor' | 'nimbalyst' | 'chatgpt' | 'cursor'

export type ComparisonGroupId = 'where' | 'agents' | 'workflows' | 'verify' | 'review' | 'team' | 'cost'

export type ComparisonRowId =
  | 'platforms' | 'local' | 'remote' | 'source' | 'agents' | 'mix' | 'graph' | 'triggers' | 'concurrency'
  | 'spend' | 'checks' | 'review' | 'editor' | 'terminal' | 'preview' | 'prs' | 'trackers' | 'boards' | 'price'

/** How RigOne stands on a row against the strongest of the other products. */
export type Verdict = 'ahead' | 'level' | 'behind'

/** RigOne, then the seven named products — in the order of `competitors` in app/data/shared.ts. */
export type ComparisonCells = [string, string, string, string, string, string, string, string]

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
    /** Opens a screenshot in the full-size preview. */
    enlarge: string
    actualSize: string
    fitToScreen: string
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
    /** Who RigOne is for, above the title. */
    audience: string
    titleStrong: string
    titleSoft: string
    sub: string
    /** Label of the problem → answer list. */
    problemsLabel: string
    problems: [Problem, Problem, Problem]
    download: string
    docsCta: string
    note: string
    /** Short true statements floating over the screenshot; decorative, hidden from screen readers. */
    chips: [string, string, string]
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
  /** The IDE section on the home page: a step's review, then several projects side by side. */
  ide: {
    eyebrow: string
    title: string
    lead: string
    /** What the review screen does, beside its screenshot. */
    review: [Card, Card, Card, Card]
    projects: Card & { points: [string, string, string] }
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
    /** The two buttons under the page title: download, and a jump to the table. */
    actions: { table: string }
    /** What RigOne does that the others do not, each beside a screenshot. */
    strengths: {
      eyebrow: string
      title: string
      lead: string
      /** `others` says what the other products offer instead. */
      items: [Strength, Strength, Strength]
    }
    /** Smaller reasons, where RigOne is level with the best but still worth knowing. */
    extras: { title: string, items: [Card, Card, Card, Card] }
    verdicts: Record<Verdict, string>
    /** Where another product fits better: RigOne's gaps, then who should pick what. */
    losses: { eyebrow: string, title: string, lead: string, items: Card[] }
    table: {
      title: string
      lead: string
      caption: string
      capability: string
      products: string
      rows: string
      all: string
      /** How a row's verdict is decided, under the filters. */
      note: string
    }
    labels: { yes: string, partial: string, no: string, unknown: string }
    notStated: string
    groups: Record<ComparisonGroupId, string>
    rows: Record<ComparisonRowId, { criterion: string, cells: ComparisonCells }>
    /** Who should pick which product. `kind` is shown under the product's name in the table. */
    picks: { title: string, lead: string, rigone: string, website: string }
    products: Record<CompetitorId, { kind: string, pick: string }>
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
    /** Link from the header to the tutorial section of the guide. */
    tutorial: string
    onThisPage: string
    /** Link to /docs/ itself, first in the navigation. */
    overview: string
    /** Placeholder and label of the field that filters the navigation. */
    search: string
    noMatches: string
    /** The button that opens the navigation on a phone. */
    menu: string
    /** `{minutes}` is replaced with the page's reading time. */
    readTime: string
    previous: string
    next: string
    /** Label of the previous / next links under a page. */
    pager: string
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
