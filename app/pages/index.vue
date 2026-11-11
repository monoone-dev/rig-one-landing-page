<script setup lang="ts">
import { differentiators, screens } from '~/data/shared'

const c = useContent()
const app = useSoftwareApplicationSchema()
const { absolute } = useSiteUrl()

usePageSeo({
  path: '/',
  meta: () => c.value.meta.home,
  schema: () => [
    app({
      description: c.value.meta.home.description,
      featureList: differentiators.map(d => c.value.unique.items[d.id].title),
      screenshot: screens.map(s => ({
        '@type': 'ImageObject',
        'url': absolute(`screenshots/${s.id}.webp`),
        'width': s.width,
        'height': s.height,
        'caption': c.value.screens.items[s.id].alt,
      })),
    }),
  ],
})
</script>

<template>
  <main id="main" class="home">
    <!-- Warp's blueprint: column rails run the full height of the page behind every section -->
    <div class="home__rails" aria-hidden="true"><i /><i /><i /><i /><i /></div>
    <HeroSection />
    <TrustStrip />
    <UniqueSection />
    <IdeSection />
    <HowItWorks />
    <ScreensSection />
    <HonestSection />
    <CtaSection />
  </main>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.home {
  position: relative;
  background-image: radial-gradient(var(--dot) 1px, transparent 1px);
  background-size: 24px 24px;

  &__rails {
    position: absolute;
    inset: 0;
    left: 50%;
    width: min(100%, var(--maxw));
    transform: translateX(-50%);
    border-right: 1px solid var(--border-subtle);
    border-left: 1px solid var(--border-subtle);
    pointer-events: none;

    i {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 1px;
      background: var(--border-subtle);

      @for $n from 1 through 5 {
        &:nth-child(#{$n}) {
          left: calc(100% / 6 * #{$n});
        }
      }

      @include below(md) {
        display: none;
      }
    }
  }
}
</style>
