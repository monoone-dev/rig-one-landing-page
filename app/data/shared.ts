// What does not get translated: ids, icons, link targets and the comparison's yes/no values.
import type { ComparisonGroupId, ComparisonRowId, CompetitorId, DifferentiatorId, FeatureId, HonestId, ScreenId, Verdict } from '~~/i18n/content/types'

export type Support = 'yes' | 'partial' | 'no' | 'unknown' | 'info'

export const trustIcons = ['i-lucide-laptop', 'i-lucide-git-compare-arrows', 'i-lucide-git-branch', 'i-lucide-badge-check'] as const

export const differentiators: { id: DifferentiatorId, icon: string, to: string }[] = [
  { id: 'ide', icon: 'i-lucide-file-diff', to: '/features#review' },
  { id: 'projects', icon: 'i-lucide-columns-2', to: '/features#projects' },
  { id: 'graph', icon: 'i-lucide-workflow', to: '/features#canvas' },
  { id: 'peers', icon: 'i-lucide-users', to: '/features#agents' },
  { id: 'parallel', icon: 'i-lucide-split', to: '/features#parallel' },
  { id: 'checks', icon: 'i-lucide-list-checks', to: '/features#checks' },
  { id: 'branches', icon: 'i-lucide-git-branch', to: '/features#branches' },
  { id: 'evidence', icon: 'i-lucide-receipt-text', to: '/features#evidence' },
]

/** `shot` puts a screenshot beside the feature on the features page, as IndexOne does. */
export const features: { id: FeatureId, icon: string, shot?: ScreenId }[] = [
  { id: 'canvas', icon: 'i-lucide-workflow', shot: 'canvas' },
  { id: 'parallel', icon: 'i-lucide-split' },
  { id: 'run', icon: 'i-lucide-radio', shot: 'run' },
  { id: 'review', icon: 'i-lucide-file-diff', shot: 'review' },
  { id: 'preview', icon: 'i-lucide-app-window', shot: 'review-tools' },
  { id: 'projects', icon: 'i-lucide-columns-2', shot: 'projects' },
  { id: 'auto', icon: 'i-lucide-sparkles' },
  { id: 'agents', icon: 'i-lucide-users', shot: 'agents' },
  { id: 'rig', icon: 'i-lucide-sliders-horizontal', shot: 'project' },
  { id: 'knowledge', icon: 'i-lucide-book-open', shot: 'knowledge' },
  { id: 'checks', icon: 'i-lucide-list-checks' },
  { id: 'branches', icon: 'i-lucide-git-branch' },
  { id: 'boards', icon: 'i-lucide-square-kanban' },
  { id: 'remote', icon: 'i-lucide-smartphone' },
  { id: 'triggers', icon: 'i-lucide-alarm-clock' },
  { id: 'lab', icon: 'i-lucide-flask-conical' },
  { id: 'evidence', icon: 'i-lucide-receipt-text' },
]

/**
 * Screenshots of the app, rendered from its real frontend with demo data (no real names, paths or
 * accounts): `<id>.webp` in dark mode and `<id>-light.webp` in light mode, both in
 * public/screenshots/, at twice the listed size for sharp screens.
 */
export const screens: { id: ScreenId, icon: string, width: number, height: number }[] = [
  { id: 'run', icon: 'i-lucide-play', width: 1512, height: 1080 },
  { id: 'review', icon: 'i-lucide-file-diff', width: 1512, height: 1080 },
  { id: 'projects', icon: 'i-lucide-columns-2', width: 1512, height: 1080 },
  { id: 'review-tools', icon: 'i-lucide-app-window', width: 1512, height: 1080 },
  { id: 'canvas', icon: 'i-lucide-git-fork', width: 1512, height: 950 },
  { id: 'project', icon: 'i-lucide-sliders-horizontal', width: 1512, height: 950 },
  { id: 'agents', icon: 'i-lucide-users', width: 1512, height: 950 },
  { id: 'knowledge', icon: 'i-lucide-book-open', width: 1512, height: 950 },
  { id: 'settings', icon: 'i-lucide-settings', width: 1512, height: 950 },
]

/** The screens the home page offers as tabs; the rest appear beside their feature. */
export const screenTabs: ScreenId[] = ['run', 'review', 'projects', 'canvas', 'project', 'agents', 'knowledge', 'settings']

/** Icons of the four review cards in the IDE section, in the order of `ide.review`. */
export const ideIcons = ['i-lucide-message-square-text', 'i-lucide-history', 'i-lucide-app-window', 'i-lucide-square-arrow-out-up-right'] as const

export const honest: HonestId[] = ['scopes', 'cancel', 'timeouts', 'secrets', 'env', 'unknown', 'green', 'files']

export const howIcons = ['i-lucide-pen-line', 'i-lucide-workflow', 'i-lucide-play'] as const

/**
 * The products RigOne is compared with, after RigOne itself. Facts come from each product's public
 * documentation, README and pricing (see the footnote); re-check them when `comparisonCheckedOn`
 * moves. Left out on purpose: Vibe Kanban (its company shut down; community-maintained since) and
 * Crystal (replaced by Nimbalyst). The Codex app is now Codex inside the ChatGPT desktop app.
 */
export const competitors: { id: CompetitorId, name: string, url: string }[] = [
  { id: 'orca', name: 'Orca', url: 'https://onorca.dev' },
  { id: 'paseo', name: 'Paseo', url: 'https://paseo.sh' },
  { id: 'superset', name: 'Superset', url: 'https://superset.sh' },
  { id: 'conductor', name: 'Conductor', url: 'https://conductor.build' },
  { id: 'nimbalyst', name: 'Nimbalyst', url: 'https://nimbalyst.com' },
  { id: 'chatgpt', name: 'ChatGPT app (Codex)', url: 'https://learn.chatgpt.com/docs/app' },
  { id: 'cursor', name: 'Cursor Cloud Agents', url: 'https://cursor.com/docs/cloud-agent' },
]

export const comparisonCheckedOn = '2026-10'

type Values = [Support, Support, Support, Support, Support, Support, Support, Support]

/**
 * Column order: RigOne, then `competitors`. `verdict` judges RigOne against the strongest of the
 * others: `ahead` only when no other product documents the same thing publicly.
 */
export const comparison: { group: ComparisonGroupId, rows: { id: ComparisonRowId, verdict: Verdict, values: Values }[] }[] = [
  {
    group: 'where',
    rows: [
      { id: 'platforms', verdict: 'behind', values: ['partial', 'yes', 'yes', 'partial', 'partial', 'yes', 'yes', 'yes'] },
      { id: 'local', verdict: 'level', values: ['yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'partial'] },
      { id: 'remote', verdict: 'behind', values: ['partial', 'partial', 'yes', 'partial', 'partial', 'yes', 'yes', 'yes'] },
      { id: 'source', verdict: 'behind', values: ['no', 'yes', 'yes', 'partial', 'no', 'yes', 'no', 'no'] },
    ],
  },
  {
    group: 'agents',
    rows: [
      { id: 'agents', verdict: 'behind', values: ['partial', 'yes', 'yes', 'yes', 'partial', 'partial', 'no', 'no'] },
      { id: 'mix', verdict: 'level', values: ['yes', 'partial', 'yes', 'partial', 'partial', 'partial', 'no', 'no'] },
    ],
  },
  {
    group: 'workflows',
    rows: [
      { id: 'graph', verdict: 'ahead', values: ['yes', 'partial', 'partial', 'no', 'no', 'no', 'no', 'no'] },
      { id: 'triggers', verdict: 'behind', values: ['partial', 'yes', 'yes', 'partial', 'unknown', 'unknown', 'yes', 'yes'] },
      { id: 'concurrency', verdict: 'ahead', values: ['yes', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'no'] },
      { id: 'spend', verdict: 'behind', values: ['partial', 'partial', 'partial', 'unknown', 'unknown', 'unknown', 'partial', 'yes'] },
    ],
  },
  {
    group: 'verify',
    rows: [
      { id: 'checks', verdict: 'ahead', values: ['yes', 'partial', 'partial', 'unknown', 'partial', 'unknown', 'unknown', 'partial'] },
    ],
  },
  {
    group: 'review',
    rows: [
      { id: 'review', verdict: 'level', values: ['yes', 'yes', 'partial', 'yes', 'partial', 'partial', 'yes', 'partial'] },
      { id: 'preview', verdict: 'level', values: ['yes', 'yes', 'yes', 'yes', 'unknown', 'yes', 'yes', 'yes'] },
      { id: 'editor', verdict: 'behind', values: ['no', 'yes', 'yes', 'no', 'unknown', 'yes', 'unknown', 'yes'] },
      { id: 'terminal', verdict: 'behind', values: ['no', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'partial'] },
      { id: 'prs', verdict: 'behind', values: ['partial', 'yes', 'yes', 'yes', 'yes', 'partial', 'partial', 'yes'] },
    ],
  },
  {
    group: 'team',
    rows: [
      { id: 'trackers', verdict: 'behind', values: ['partial', 'yes', 'partial', 'partial', 'yes', 'partial', 'yes', 'yes'] },
      { id: 'boards', verdict: 'level', values: ['yes', 'partial', 'partial', 'unknown', 'partial', 'yes', 'no', 'unknown'] },
    ],
  },
  {
    group: 'cost',
    rows: [
      { id: 'price', verdict: 'level', values: ['info', 'info', 'info', 'info', 'info', 'info', 'info', 'info'] },
    ],
  },
]
