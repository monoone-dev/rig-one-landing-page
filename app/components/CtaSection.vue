<script setup lang="ts">
import { site } from '~/data/site'

// SurfaceOne closes on a dark band; here it is near-black in both colour modes, with the mark
// lit by a slow violet glow behind it.
const c = useContent()
const to = useLocalLink()
</script>

<template>
  <section class="section cta" aria-labelledby="cta-title">
    <div class="wrap">
      <div v-reveal class="cta__card">
        <div class="cta__glow" aria-hidden="true" />
        <span class="cta__mark"><RigMark /></span>
        <h2 id="cta-title">{{ c.cta.title }}</h2>
        <p>{{ c.cta.lead }}</p>
        <div class="cta__actions">
          <UButton :to="site.links.download" external target="_blank" size="xl" icon="i-lucide-arrow-down-to-line" :label="c.cta.download" class="cta__primary" />
          <UButton :to="to('/docs')" size="xl" color="neutral" variant="outline" icon="i-lucide-book-open" :label="c.cta.docs" class="cta__secondary" />
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
    position: relative;
    overflow: hidden;
    isolation: isolate;
    padding: 96px 28px;
    border-radius: 32px;
    background: linear-gradient(180deg, #1a1a1d 0%, #0b0b0c 70%);
    box-shadow: 0 0 0 1px rgb(255 255 255 / 0.1), 0 40px 80px -40px rgb(0 0 0 / 0.5);
    color: #f5f5f7;

    @include below(sm) {
      padding: 64px 22px;
      border-radius: 24px;
    }

    h2 {
      margin-bottom: 16px;
      color: #f5f5f7;
      font-size: clamp(32px, 5vw, 56px);
      line-height: 1.04;
      letter-spacing: -0.04em;
    }

    > p:not(.cta__note) {
      max-width: 32em;
      margin: 0 auto 34px;
      color: #a1a1a6;
      font-size: clamp(16px, 2vw, 19px);
    }
  }

  &__glow {
    position: absolute;
    inset: -40% 10% auto;
    z-index: -1;
    height: 140%;
    background:
      radial-gradient(40% 40% at 50% 30%, oklch(58.5% 0.26 283 / 0.45), transparent),
      radial-gradient(30% 30% at 70% 60%, oklch(70% 0.16 250 / 0.25), transparent);
    filter: blur(20px);
    animation: glow 12s ease-in-out infinite alternate;

    @include reduced-motion {
      animation: none;
    }
  }

  &__mark {
    display: block;
    width: 84px;
    height: 84px;
    margin: 0 auto 28px;
    filter: drop-shadow(0 12px 30px oklch(58.5% 0.26 283 / 0.55));
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  // On the dark band the buttons are the mark's violet and a quiet white outline in both modes
  &__primary {
    background: oklch(58.5% 0.26 283);
    color: #fff;

    &:hover {
      background: oklch(51.4% 0.28 281);
    }
  }

  &__secondary {
    background: rgb(255 255 255 / 0.06);
    box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.18);
    color: #f5f5f7;

    &:hover {
      background: rgb(255 255 255 / 0.12);
    }
  }

  &__note {
    margin-top: 24px;
    color: #a1a1a6;
    font-size: 13.5px;

    a {
      margin-left: 6px;
      color: oklch(83% 0.108 300);
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}

@keyframes glow {
  from {
    transform: translateX(-6%) scale(1);
  }

  to {
    transform: translateX(6%) scale(1.1);
  }
}
</style>
