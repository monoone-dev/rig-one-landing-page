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
        <li v-for="(step, i) in c.how.steps" :key="step.title" v-reveal class="steps__item">
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

    padding: 28px;

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
