<script setup lang="ts">
import { howIcons } from '~/data/shared'

const c = useContent()
</script>

<template>
  <section id="how" class="section section--tinted" aria-labelledby="how-title">
    <div class="wrap">
      <SectionHead id="how-title" :eyebrow="c.how.eyebrow" :title="c.how.title">
        {{ c.how.lead }}
      </SectionHead>
      <ol class="steps">
        <li v-for="(step, i) in c.how.steps" :key="step.title" v-reveal class="steps__item" :style="{ '--reveal-delay': `${i * 110}ms` }">
          <span class="steps__big" aria-hidden="true">{{ i + 1 }}</span>
          <span class="steps__n">
            <UIcon :name="howIcons[i]!" class="size-4" />
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;

  @include below(md) {
    grid-template-columns: minmax(0, 1fr);
  }

  &__item {
    @include card;

    position: relative;
    overflow: hidden;
    padding: 28px;
    border-radius: 24px;
    transition: transform 0.5s var(--ease-out), box-shadow 0.5s var(--ease-out);

    &:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
    }

    > :not(.steps__big) {
      position: relative;
    }

    &:last-child .steps__n {
      background: var(--accent-soft);
      color: var(--accent-text);
    }

    h3 {
      margin: 14px 0 8px;
      font-size: 20px;
    }

    p {
      color: var(--text-secondary);
      font-size: 15px;
    }
  }

  // A large, faint numeral in the corner, as on Apple's step-by-step pages
  &__big {
    position: absolute;
    top: -28px;
    right: 8px;
    color: transparent;
    font-size: 160px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.06em;
    -webkit-text-stroke: 1px var(--border-strong);
    pointer-events: none;
    user-select: none;
  }

  &__item:last-child &__big {
    -webkit-text-stroke-color: var(--accent-ring);
  }

  &__n {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 12px;
    border-radius: var(--round-pill);
    background: var(--surface-hover);
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
  }
}
</style>
