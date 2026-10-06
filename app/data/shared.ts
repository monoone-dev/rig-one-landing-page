// What does not get translated: ids, icons, link targets and the comparison's yes/no values.
import type { ComparisonRowId, DifferentiatorId, FeatureId, HonestId } from '~~/i18n/content/types'

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

export const features: { id: FeatureId, icon: string }[] = [
  { id: 'canvas', icon: 'i-lucide-workflow' },
  { id: 'parallel', icon: 'i-lucide-split' },
  { id: 'run', icon: 'i-lucide-radio' },
  { id: 'agents', icon: 'i-lucide-users' },
  { id: 'knowledge', icon: 'i-lucide-book-open' },
  { id: 'checks', icon: 'i-lucide-list-checks' },
  { id: 'branches', icon: 'i-lucide-git-branch' },
  { id: 'triggers', icon: 'i-lucide-alarm-clock' },
  { id: 'lab', icon: 'i-lucide-flask-conical' },
  { id: 'evidence', icon: 'i-lucide-receipt-text' },
]

export const honest: HonestId[] = ['scopes', 'cancel', 'timeouts', 'secrets', 'env', 'unknown', 'green', 'files']

export const howIcons = ['i-lucide-pen-line', 'i-lucide-workflow', 'i-lucide-play'] as const

/** Column order of the comparison: RigOne first, then the four kinds of alternative. */
export const comparisonCheckedOn = '2026-10'

export const comparison: { id: ComparisonRowId, values: [Support, Support, Support, Support, Support] }[] = [
  { id: 'local', values: ['yes', 'yes', 'yes', 'yes', 'no'] },
  { id: 'mix', values: ['yes', 'no', 'partial', 'partial', 'no'] },
  { id: 'graph', values: ['yes', 'partial', 'unknown', 'no', 'no'] },
  { id: 'isolated', values: ['yes', 'partial', 'yes', 'yes', 'yes'] },
  { id: 'checks', values: ['yes', 'partial', 'unknown', 'no', 'partial'] },
  { id: 'budget', values: ['yes', 'partial', 'unknown', 'no', 'partial'] },
  { id: 'platforms', values: ['info', 'info', 'info', 'info', 'info'] },
  { id: 'price', values: ['info', 'info', 'info', 'info', 'info'] },
]
