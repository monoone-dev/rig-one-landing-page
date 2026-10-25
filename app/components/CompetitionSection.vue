<script setup lang="ts">
import type { CompetitorId, Verdict } from '~~/i18n/content/types'
import { comparison, competitors, type Support } from '~/data/shared'
import { site } from '~/data/site'

const c = useContent()
const label = computed<Record<Support, string>>(() => ({ ...c.value.compare.labels, info: '' }))
const icon: Partial<Record<Support, string>> = { yes: 'i-lucide-check', partial: 'i-lucide-circle-dashed', no: 'i-lucide-minus', unknown: 'i-lucide-circle-help' }
const footnote = computed(() => fill(c.value.compare.footnoteHtml, { issues: site.links.issues }))

// Filters live in the page only: the prerendered table shows every product and every row.
const hidden = ref(new Set<CompetitorId>())
const verdictFilter = ref<Verdict | 'all'>('all')
const verdicts: Verdict[] = ['ahead', 'level', 'behind']
const counts = Object.fromEntries(verdicts.map(v => [v, comparison.flatMap(g => g.rows).filter(r => r.verdict === v).length])) as Record<Verdict, number>

function toggle(id: CompetitorId) {
  const next = new Set(hidden.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  hidden.value = next
}

/** Indexes into a row's values: RigOne (0), then the products still shown. */
const columns = computed(() => [0, ...competitors.flatMap((p, i) => hidden.value.has(p.id) ? [] : [i + 1])])
const groups = computed(() => comparison
  .map(g => ({ ...g, rows: g.rows.filter(r => verdictFilter.value === 'all' || r.verdict === verdictFilter.value) }))
  .filter(g => g.rows.length))
</script>

<template>
  <section id="compare" class="section section--tinted" aria-labelledby="compare-title">
    <div class="wrap wrap--table">
      <SectionHead id="compare-title" :eyebrow="c.compare.eyebrow" :title="c.compare.table.title">
        {{ c.compare.table.lead }}
      </SectionHead>

      <div v-reveal class="filters">
        <div class="filters__group" role="group" :aria-label="c.compare.table.products">
          <span class="filters__label">{{ c.compare.table.products }}</span>
          <button
            v-for="p in competitors"
            :key="p.id"
            type="button"
            class="chip chip--product"
            :aria-pressed="!hidden.has(p.id)"
            @click="toggle(p.id)"
          >
            {{ p.name }}
          </button>
        </div>
        <div class="filters__group" role="group" :aria-label="c.compare.table.rows">
          <span class="filters__label">{{ c.compare.table.rows }}</span>
          <button type="button" class="chip" :aria-pressed="verdictFilter === 'all'" @click="verdictFilter = 'all'">
            {{ c.compare.table.all }}
          </button>
          <button
            v-for="v in verdicts"
            :key="v"
            type="button"
            :class="`chip chip--${v}`"
            :aria-pressed="verdictFilter === v"
            @click="verdictFilter = v"
          >
            <span :class="`dot dot--${v}`" aria-hidden="true" />
            {{ c.compare.verdicts[v] }} · {{ counts[v] }}
          </button>
        </div>
        <p class="filters__note">{{ c.compare.table.note }}</p>
      </div>

      <div v-reveal class="compare">
        <div class="compare__scroll" tabindex="0" role="region" aria-labelledby="compare-title">
          <table :style="{ minWidth: `${360 + (columns.length - 1) * 140}px` }">
            <caption class="sr-only">{{ c.compare.table.caption }}</caption>
            <thead>
              <tr>
                <th scope="col" class="compare__criterion">{{ c.compare.table.capability }}</th>
                <th v-for="i in columns" :key="i" scope="col" :class="{ compare__us: i === 0 }">
                  <template v-if="i === 0">{{ site.name }}</template>
                  <template v-else>
                    {{ competitors[i - 1]!.name }}
                    <span class="compare__kind">{{ c.compare.products[competitors[i - 1]!.id].kind }}</span>
                  </template>
                </th>
              </tr>
            </thead>
            <tbody v-for="g in groups" :key="g.group">
              <tr class="compare__group">
                <th scope="colgroup" :colspan="columns.length + 1">{{ c.compare.groups[g.group] }}</th>
              </tr>
              <tr v-for="row in g.rows" :key="row.id">
                <th scope="row" class="compare__criterion">
                  {{ c.compare.rows[row.id].criterion }}
                  <span :class="`verdict verdict--${row.verdict}`">
                    <span :class="`dot dot--${row.verdict}`" aria-hidden="true" />{{ c.compare.verdicts[row.verdict] }}
                  </span>
                </th>
                <td v-for="i in columns" :key="i" :class="{ compare__us: i === 0 }">
                  <span class="mark" :class="`mark--${row.values[i]}`">
                    <UIcon v-if="icon[row.values[i]!]" :name="icon[row.values[i]!]!" class="mark__icon" />
                    <span v-if="label[row.values[i]!]" class="sr-only">{{ label[row.values[i]!] }}</span>
                    <span v-if="c.compare.rows[row.id].cells[i] || row.values[i] === 'unknown'" class="mark__note">
                      {{ c.compare.rows[row.id].cells[i] || c.compare.notStated }}
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul class="compare__legend">
          <li v-for="(name, key) in c.compare.labels" :key="key" class="mark" :class="`mark--${key}`">
            <UIcon :name="icon[key]!" class="mark__icon" /> {{ name }}
          </li>
        </ul>
        <!-- eslint-disable-next-line vue/no-v-html -- our own copy, see i18n/content -->
        <p class="compare__foot" v-html="footnote" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

// Eight products fit side by side on a wide screen without scrolling
.wrap--table {
  max-width: 1440px;
}

.filters {
  display: grid;
  gap: 12px;
  margin: 0 0 20px;

  &__group {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }

  &__note {
    margin: 4px 0 0;
    color: var(--text-muted);
    font-size: 13px;
  }

  &__label {
    min-width: 84px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    @include below(sm) {
      flex-basis: 100%;
    }
  }
}

.chip {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  min-height: 34px;
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: var(--round-pill);
  background: var(--surface-raised);
  color: var(--text-muted);
  font: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: var(--border-strong);
  }

  &[aria-pressed='true'] {
    border-color: var(--accent);
    background: var(--accent-soft);
    color: var(--text-primary);
  }

  &--product:not([aria-pressed='true']) {
    text-decoration: line-through;
  }
}

.dot {
  display: inline-block;
  flex: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;

  &--ahead {
    background: var(--safe-text);
  }

  &--level {
    background: var(--border-strong);
  }

  &--behind {
    background: var(--warn-text);
  }
}

.verdict {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  margin-top: 6px;
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 500;

  &--ahead {
    color: var(--safe-text);
  }

  &--behind {
    color: var(--warn-text);
  }
}

.compare {
  @include card;

  overflow: hidden;

  &__scroll {
    // Contains the absolutely positioned .sr-only labels; without it WebKit lets them escape the
    // scroller and widen the page on phones.
    position: relative;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
  }

  th,
  td {
    padding: 14px 16px;
    border-top: 1px solid var(--border-subtle);
    font-size: 14px;
    text-align: left;
    vertical-align: top;
  }

  thead th {
    border-top: 0;
    border-bottom: 1px solid var(--border);
    color: var(--text-primary);
    font-weight: 600;
  }

  &__kind {
    display: block;
    margin-top: 2px;
    color: var(--text-muted);
    font-size: 12px;
    font-weight: 500;
  }

  &__group th {
    padding: 22px 16px 8px;
    border-top: 1px solid var(--border);
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  tbody:first-of-type .compare__group th {
    border-top: 0;
  }

  // The capability column stays in view while the products scroll past on narrow screens
  &__criterion {
    position: sticky;
    left: 0;
    z-index: 1;
    width: 200px;
    min-width: 170px;
    background: var(--surface-raised);
    color: var(--text-primary);
    font-weight: 600;
    box-shadow: 1px 0 0 var(--border-subtle);

    @include below(sm) {
      width: 140px;
      min-width: 140px;
    }

    .verdict {
      display: flex;
    }
  }

  &__us {
    background: var(--accent-soft);
  }

  thead &__us {
    color: var(--accent-text);
  }

  &__legend {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 22px;
    margin: 0;
    padding: 14px 22px;
    border-top: 1px solid var(--border);
    list-style: none;
    font-size: 13px;
  }

  &__foot {
    margin: 0;
    padding: 0 22px 16px;
    color: var(--text-muted);
    font-size: 13px;

    :deep(a) {
      color: var(--accent-text);
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}

.mark {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  color: var(--text-secondary);

  &__icon {
    flex: none;
    width: 18px;
    height: 18px;
    margin-top: 1px;
  }

  &--yes &__icon {
    color: var(--safe-text);
  }

  &--partial &__icon {
    color: var(--warn-text);
  }

  &--no &__icon,
  &--unknown &__icon {
    color: var(--text-muted);
  }

  &__note {
    font-size: 13px;
    line-height: 1.45;
  }
}
</style>
