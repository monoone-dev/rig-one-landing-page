<script setup lang="ts">
import { honest } from '~/data/shared'

// Warp's "layers" figure: one ruled row per item, a mono index on the left, the words beside it.
const c = useContent()
</script>

<template>
  <section id="honest" class="section section--ruled-top" aria-labelledby="honest-title">
    <div class="wrap">
      <SectionHead id="honest-title" :eyebrow="c.honest.eyebrow" :title="c.honest.title">
        {{ c.honest.lead }}
      </SectionHead>
      <FigFrame :caption="`fig. 5 — ${c.honest.eyebrow}`">
        <ol class="honest">
          <li v-for="(id, i) in honest" :key="id" class="honest__item">
            <span class="honest__n">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="honest__text"><b>{{ c.honest.items[id].title }}</b> {{ c.honest.items[id].body }}</span>
            <UIcon name="i-lucide-shield-check" class="honest__icon" />
          </li>
        </ol>
      </FigFrame>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.honest {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;

  &__item {
    display: grid;
    grid-template-columns: 64px minmax(0, 1fr) auto;
    align-items: center;
    gap: 16px;
    padding: 14px 18px;
    border: 1px solid var(--border-subtle);
    border-radius: var(--round-md);
    background: color-mix(in oklch, var(--accent) calc(var(--i, 0) * 1%), var(--surface-raised));
    color: var(--text-secondary);
    font-size: 14.5px;
    line-height: 1.5;
    transition: border-color 0.15s, background-color 0.15s;

    &:hover {
      border-color: var(--accent);
      background: var(--accent-soft);
    }

    @include below(sm) {
      grid-template-columns: 36px minmax(0, 1fr);
      padding: 12px;
    }
  }

  &__n {
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: 12.5px;
  }

  &__text b {
    font-family: var(--font-mono);
    font-weight: 500;
  }

  &__icon {
    width: 16px;
    height: 16px;
    color: var(--safe-text);

    @include below(sm) {
      display: none;
    }
  }
}
</style>
