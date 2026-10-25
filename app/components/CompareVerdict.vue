<script setup lang="ts">
import type { Verdict } from '~~/i18n/content/types'
import { comparison } from '~/data/shared'

defineProps<{ level?: 1 | 2 }>()

const c = useContent()
const order: Verdict[] = ['ahead', 'level', 'behind']
const rows = comparison.flatMap(g => g.rows)
const tally = order.map(verdict => ({ verdict, count: rows.filter(r => r.verdict === verdict).length }))
</script>

<template>
  <section id="verdict" class="section" aria-labelledby="verdict-title">
    <div class="wrap">
      <SectionHead id="verdict-title" :level="level" :eyebrow="c.compare.eyebrow" :title="c.compare.title">
        {{ c.compare.lead }}
      </SectionHead>

      <div v-reveal class="tally">
        <p class="tally__title">{{ c.compare.tally.title }}</p>
        <div class="tally__bar" aria-hidden="true">
          <span v-for="t in tally" :key="t.verdict" :class="`tally__seg tally__seg--${t.verdict}`" :style="{ flexGrow: t.count }" />
        </div>
        <ul class="tally__counts">
          <li v-for="t in tally" :key="t.verdict" :class="`tally__count tally__count--${t.verdict}`">
            <b>{{ t.count }}</b> {{ c.compare.verdicts[t.verdict] }}
          </li>
        </ul>
        <p class="tally__note">{{ c.compare.tally.note }}</p>
      </div>

      <div class="lists">
        <div v-reveal class="list list--wins">
          <h2 class="list__title">
            <UIcon name="i-lucide-trending-up" class="list__icon" /> {{ c.compare.wins.title }}
          </h2>
          <ul>
            <li v-for="item in c.compare.wins.items" :key="item.title">
              <b>{{ item.title }}</b>
              <span>{{ item.body }}</span>
            </li>
          </ul>
        </div>
        <div v-reveal class="list list--losses">
          <h2 class="list__title">
            <UIcon name="i-lucide-trending-down" class="list__icon" /> {{ c.compare.losses.title }}
          </h2>
          <ul>
            <li v-for="item in c.compare.losses.items" :key="item.title">
              <b>{{ item.title }}</b>
              <span>{{ item.body }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.tally {
  @include card;

  max-width: 960px;
  margin: 0 auto 32px;
  padding: 24px 28px;

  @include below(sm) {
    padding: 20px;
  }

  &__title {
    margin: 0 0 14px;
    color: var(--text-primary);
    font-weight: 600;
  }

  &__bar {
    display: flex;
    gap: 3px;
    height: 10px;
    overflow: hidden;
    border-radius: var(--round-pill);
  }

  &__seg {
    flex-basis: 0;

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

  &__counts {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 28px;
    margin: 16px 0 0;
    padding: 0;
    list-style: none;
  }

  &__count {
    display: flex;
    gap: 8px;
    align-items: baseline;
    color: var(--text-secondary);
    font-size: 15px;

    b {
      font-size: 28px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }

    &--ahead b {
      color: var(--safe-text);
    }

    &--level b {
      color: var(--text-primary);
    }

    &--behind b {
      color: var(--warn-text);
    }
  }

  &__note {
    margin: 12px 0 0;
    color: var(--text-muted);
    font-size: 13px;
  }
}

.lists {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  max-width: 960px;
  margin: 0 auto;

  @include below(md) {
    grid-template-columns: minmax(0, 1fr);
  }
}

.list {
  @include card;

  padding: 24px 28px 8px;
  border-top: 3px solid transparent;

  @include below(sm) {
    padding: 20px 20px 4px;
  }

  &--wins {
    border-top-color: var(--safe-text);
  }

  &--losses {
    border-top-color: var(--warn-text);
  }

  &__title {
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 0 0 6px;
    font-size: 20px;
    letter-spacing: -0.01em;
  }

  &__icon {
    flex: none;
    width: 20px;
    height: 20px;
  }

  &--wins &__icon {
    color: var(--safe-text);
  }

  &--losses &__icon {
    color: var(--warn-text);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: grid;
    gap: 4px;
    padding: 14px 0;
    border-top: 1px solid var(--border-subtle);
    font-size: 15px;

    &:first-child {
      border-top: 0;
    }

    b {
      color: var(--text-primary);
      font-weight: 600;
    }

    span {
      color: var(--text-secondary);
    }
  }
}
</style>
