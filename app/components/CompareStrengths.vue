<script setup lang="ts">
import { extraIcons, strengthShots } from '~/data/shared'
import { site } from '~/data/site'

const c = useContent()
</script>

<template>
  <section id="strengths" class="section" aria-labelledby="strengths-title">
    <div class="wrap">
      <SectionHead id="strengths-title" :level="1" :eyebrow="c.compare.eyebrow" :title="c.compare.title">
        {{ c.compare.lead }}
      </SectionHead>
      <div v-reveal class="intro">
        <div class="intro__actions">
          <UButton :to="site.links.download" external target="_blank" size="xl" icon="i-lucide-arrow-down-to-line" :label="c.cta.download" />
          <UButton to="#compare" size="xl" color="neutral" variant="outline" icon="i-lucide-table-2" :label="c.compare.actions.table" />
        </div>
        <p class="intro__note">
          <UIcon name="i-lucide-check" class="intro__note-icon" /> {{ c.cta.lead }}
        </p>
      </div>

      <div class="only">
        <header v-reveal class="only__head">
          <span class="eyebrow eyebrow--accent">{{ c.compare.strengths.eyebrow }}</span>
          <h2>{{ c.compare.strengths.title }}</h2>
          <p>{{ c.compare.strengths.lead }}</p>
        </header>

        <article v-for="(item, i) in c.compare.strengths.items" :key="item.title" v-reveal class="strength" :class="{ 'strength--flip': i % 2 === 1 }">
          <div class="strength__text">
            <span class="strength__num">0{{ i + 1 }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
            <p class="strength__others">
              <UIcon name="i-lucide-scale" class="strength__others-icon" />
              <span>{{ item.others }}</span>
            </p>
          </div>
          <ScreenShot :id="strengthShots[i]!" class="strength__shot" />
        </article>
      </div>

      <div v-reveal class="extras">
        <h2 class="extras__title">{{ c.compare.extras.title }}</h2>
        <ul>
          <li v-for="(item, i) in c.compare.extras.items" :key="item.title">
            <span class="icon-tile"><UIcon :name="extraIcons[i]!" /></span>
            <b>{{ item.title }}</b>
            <span>{{ item.body }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.intro {
  display: grid;
  justify-items: center;
  gap: 14px;
  margin: -24px 0 96px;

  @include below(sm) {
    margin-bottom: 64px;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }

  &__note {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    max-width: 560px;
    margin: 0;
    color: var(--text-muted);
    font-size: 14px;
    text-align: left;
  }

  &__note-icon {
    flex: none;
    width: 16px;
    height: 16px;
    margin-top: 3px;
    color: var(--safe-text);
  }
}

.only {
  display: grid;
  gap: 72px;

  @include below(md) {
    gap: 48px;
  }

  &__head {
    max-width: 640px;
    margin: 0 auto;
    text-align: center;

    h2 {
      margin: 14px 0 12px;
      font-size: clamp(26px, 3.4vw, 38px);
      line-height: 1.12;
      letter-spacing: -0.03em;
    }

    p {
      margin: 0;
      color: var(--text-secondary);
    }
  }
}

.strength {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: 48px;
  align-items: center;

  @include below(lg) {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }

  &--flip &__text {
    order: 2;

    @include below(lg) {
      order: 0;
    }
  }

  &__num {
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: 13px;
    letter-spacing: 0.1em;
  }

  h3 {
    margin: 8px 0 12px;
    font-size: clamp(22px, 2.6vw, 28px);
    line-height: 1.18;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 16px;
  }

  // After `p` above, and as specific, so it wins
  p#{&}__others {
    display: flex;
    gap: 10px;
    margin-top: 18px;
    padding: 12px 14px;
    border-radius: var(--round-md);
    background: var(--surface-sunken);
    color: var(--text-muted);
    font-size: 14px;
  }

  &__others-icon {
    flex: none;
    width: 16px;
    height: 16px;
    margin-top: 3px;
  }
}

.extras {
  margin-top: 96px;

  @include below(sm) {
    margin-top: 64px;
  }

  &__title {
    margin: 0 0 24px;
    font-size: 22px;
    letter-spacing: -0.01em;
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style: none;

    @include below(xl) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include below(sm) {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  li {
    @include card;

    display: grid;
    align-content: start;
    gap: 8px;
    padding: 22px;
    font-size: 15px;

    b {
      margin-top: 6px;
      color: var(--text-primary);
      font-weight: 600;
    }

    .icon-tile {
      margin-bottom: 4px;
    }

    span:last-child {
      color: var(--text-secondary);
    }
  }
}
</style>
