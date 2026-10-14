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
        'width': 1512,
        'height': 950,
        'caption': c.value.screens.items[s.id].alt,
      })),
    }),
  ],
})
</script>

<template>
  <main id="main">
    <HeroSection />
    <TrustStrip />
    <UniqueSection />
    <HowItWorks />
    <ScreensSection />
    <HonestSection />
    <CtaSection />
  </main>
</template>
