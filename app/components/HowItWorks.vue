<script setup lang="ts">
import { howIcons } from '~/data/shared'

// Warp's numbered row: three columns between the rails, a mono number and title, the words below.
const c = useContent()
</script>

<template>
  <section id="how" class="section section--ruled-top" aria-labelledby="how-title">
    <div class="wrap">
      <SectionHead id="how-title" :eyebrow="c.how.eyebrow" :title="c.how.title">
        {{ c.how.lead }}
      </SectionHead>
      <ol class="steps">
        <li v-for="(step, i) in c.how.steps" :key="step.title" class="steps__item">
          <span class="steps__top">
            <span class="steps__n">{{ String(i + 1).padStart(2, '0') }}</span>
            <UIcon :name="howIcons[i]!" class="steps__icon" />
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
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  list-style: none;

  @include below(md) {
    grid-template-columns: minmax(0, 1fr);
  }

  &__item {
    padding: 28px 28px 36px 0;

    & + & {
      padding-left: 28px;
      border-left: 1px solid var(--border);

      @include below(md) {
        padding-left: 0;
        border-top: 1px solid var(--border);
        border-left: 0;
      }
    }

    h3 {
      margin: 28px 0 10px;
      font-family: var(--font-mono);
      font-size: 18px;
      font-weight: 450;
      letter-spacing: -0.02em;
    }

    p {
      color: var(--text-secondary);
      font-size: 14.5px;
      line-height: 1.6;
    }
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__n {
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: 13px;
  }

  &__icon {
    width: 18px;
    height: 18px;
    color: var(--text-muted);
  }
}
</style>
