<script setup lang="ts">
import { site } from '~/data/site'

const c = useContent()
const to = useLocalLink()
</script>

<template>
  <section class="section cta" aria-labelledby="cta-title">
    <div class="wrap">
      <div v-reveal class="cta__card">
        <span class="cta__mark"><RigMark /></span>
        <h2 id="cta-title">{{ c.cta.title }}</h2>
        <p>{{ c.cta.lead }}</p>
        <div class="cta__actions">
          <UButton :to="site.links.download" external target="_blank" size="xl" icon="i-lucide-arrow-down-to-line" :label="c.cta.download" />
          <UButton :to="to('/docs')" size="xl" color="neutral" variant="outline" icon="i-lucide-book-open" :label="c.cta.docs" />
        </div>
        <p class="cta__note">
          {{ c.cta.note }}
          <NuxtLink :to="to('/compare')">{{ c.cta.compare }}</NuxtLink>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.cta {
  text-align: center;

  &__card {
    @include card;

    position: relative;
    overflow: hidden;
    padding: 72px 28px;
    border-radius: 28px;

    h2 {
      margin-bottom: 14px;
      font-size: clamp(28px, 4vw, 44px);
      line-height: 1.08;
    }

    > p:not(.cta__note) {
      max-width: 32em;
      margin: 0 auto 30px;
      color: var(--text-secondary);
      font-size: clamp(16px, 2vw, 18px);
    }
  }

  &__mark {
    display: block;
    width: 72px;
    height: 72px;
    margin: 0 auto 24px;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  &__note {
    margin-top: 22px;
    color: var(--text-muted);
    font-size: 13.5px;

    a {
      margin-left: 6px;
      color: var(--accent-text);
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}
</style>
