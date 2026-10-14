// What does not get translated: ids, icons, link targets and the comparison's yes/no values.
import type { ComparisonRowId, DifferentiatorId, FeatureId, HonestId, ScreenId } from '~~/i18n/content/types'

export type Support = 'yes' | 'partial' | 'no' | 'unknown' | 'info'

export const trustIcons = ['i-lucide-laptop', 'i-lucide-git-compare-arrows', 'i-lucide-git-branch', 'i-lucide-badge-check'] as const

export const differentiators: { id: DifferentiatorId, icon: string, to: string }[] = [
  { id: 'graph', icon: 'i-lucide-workflow', to: '/features#canvas' },
  { id: 'peers', icon: 'i-lucide-users', to: '/features#agents' },
  { id: 'parallel', icon: 'i-lucide-split', to: '/features#parallel' },
  { id: 'checks', icon: 'i-lucide-list-checks', to: '/features#checks' },
  { id: 'branches', icon: 'i-lucide-git-branch', to: '/features#branches' },
  { id: 'evidence', icon: 'i-lucide-receipt-text', to: '/features#evidence' },
]

/** `shot` puts a screenshot beside the feature on the features page, as IndexOne does. */
export const features: { id: FeatureId, icon: string, shot?: ScreenId }[] = [
  { id: 'canvas', icon: 'i-lucide-workflow', shot: 'workflows' },
  { id: 'parallel', icon: 'i-lucide-split' },
  { id: 'run', icon: 'i-lucide-radio', shot: 'run' },
  { id: 'auto', icon: 'i-lucide-sparkles' },
  { id: 'agents', icon: 'i-lucide-users', shot: 'agents' },
  { id: 'knowledge', icon: 'i-lucide-book-open' },
  { id: 'checks', icon: 'i-lucide-list-checks' },
  { id: 'branches', icon: 'i-lucide-git-branch' },
  { id: 'boards', icon: 'i-lucide-square-kanban' },
  { id: 'triggers', icon: 'i-lucide-alarm-clock' },
  { id: 'lab', icon: 'i-lucide-flask-conical' },
  { id: 'evidence', icon: 'i-lucide-receipt-text' },
]

/**
 * Screenshots of the app, rendered from its real frontend with demo data: `<id>.webp` in dark mode
 * and `<id>-light.webp` in light mode, both in public/screenshots/.
 */
export const screens: { id: ScreenId, icon: string, width: number, height: number }[] = [
  { id: 'run', icon: 'i-lucide-play', width: 1512, height: 950 },
  { id: 'agents', icon: 'i-lucide-users', width: 1512, height: 950 },
  { id: 'workflows', icon: 'i-lucide-workflow', width: 1512, height: 950 },
  { id: 'settings', icon: 'i-lucide-settings', width: 1512, height: 950 },
]

export const honest: HonestId[] = ['scopes', 'cancel', 'timeouts', 'secrets', 'env', 'unknown', 'green', 'files']

export const howIcons = ['i-lucide-pen-line', 'i-lucide-workflow', 'i-lucide-play'] as const

/**
 * The products RigOne is compared with, after RigOne itself. Facts come from each product's public
 * documentation and pricing (see the footnote); re-check them when `comparisonCheckedOn` moves.
 * Left out on purpose: Vibe Kanban (sunsetting) and Crystal (replaced by Nimbalyst).
 */
export const competitors = ['Superset', 'Conductor', 'Nimbalyst', 'OpenAI Codex app', 'Cursor Cloud Agents'] as const

export const comparisonCheckedOn = '2026-10'

/** Column order: RigOne, then `competitors`. */
export const comparison: { id: ComparisonRowId, values: [Support, Support, Support, Support, Support, Support] }[] = [
  { id: 'local', values: ['yes', 'yes', 'yes', 'yes', 'yes', 'no'] },
  { id: 'mix', values: ['yes', 'partial', 'partial', 'partial', 'no', 'no'] },
  { id: 'graph', values: ['yes', 'partial', 'no', 'partial', 'partial', 'unknown'] },
  { id: 'isolated', values: ['yes', 'yes', 'yes', 'yes', 'yes', 'yes'] },
  { id: 'checks', values: ['yes', 'partial', 'partial', 'unknown', 'partial', 'no'] },
  { id: 'budget', values: ['yes', 'unknown', 'unknown', 'unknown', 'partial', 'partial'] },
  { id: 'boards', values: ['yes', 'partial', 'partial', 'partial', 'partial', 'partial'] },
  { id: 'platforms', values: ['info', 'info', 'info', 'info', 'info', 'info'] },
  { id: 'price', values: ['info', 'info', 'info', 'info', 'info', 'info'] },
]
