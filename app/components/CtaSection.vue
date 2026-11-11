<script setup lang="ts">
import { site } from '~/data/site'

// Warp's closing frame: a ruled panel on the dot grid, a left-aligned mono headline and the two
// buttons, the mark on the right.
const c = useContent()
const to = useLocalLink()
</script>

<template>
  <section class="section section--ruled-top cta" aria-labelledby="cta-title">
    <div class="wrap">
      <FigFrame :caption="`fig. 6 — ${c.nav.download.toLowerCase()}`">
        <div class="cta__inner">
          <div class="cta__text">
            <h2 id="cta-title">{{ c.cta.title }}</h2>
            <p>{{ c.cta.lead }}</p>
            <div class="cta__actions">
              <UButton :to="site.links.download" external target="_blank" size="lg" icon="i-simple-icons-apple" :label="c.cta.download" />
              <UButton :to="to('/docs')" size="lg" color="neutral" variant="outline" :label="c.cta.docs" />
            </div>
            <p class="cta__note">
              {{ c.cta.note }}
              <NuxtLink :to="to('/compare')">{{ c.cta.compare }} →</NuxtLink>
            </p>
          </div>
          <span class="cta__mark" aria-hidden="true"><RigMark /></span>
        </div>
      </FigFrame>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.cta {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 32px 8px;

    @include below(sm) {
      padding: 12px 4px;
    }
  }

  &__text {
    max-width: 640px;

    h2 {
      margin-bottom: 14px;
      font-family: var(--font-mono);
      font-size: clamp(30px, 4.4vw, 52px);
      font-weight: 450;
      line-height: 1.08;
      letter-spacing: -0.04em;
    }

    > p:not(.cta__note) {
      margin-bottom: 28px;
      color: var(--text-secondary);
      font-size: 16px;
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  &__note {
    margin-top: 20px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 12.5px;

    a {
      margin-left: 6px;
      color: var(--accent-text);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__mark {
    flex: none;
    width: 160px;
    height: 160px;

    @include below(md) {
      display: none;
    }
  }
}
</style>
