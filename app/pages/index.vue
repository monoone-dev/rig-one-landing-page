<script setup lang="ts">
import { differentiators } from '~/data/shared'

const c = useContent()
const app = useSoftwareApplicationSchema()

usePageSeo({
  path: '/',
  meta: () => c.value.meta.home,
  schema: () => [
    app({
      description: c.value.meta.home.description,
      featureList: differentiators.map(d => c.value.unique.items[d.id].title),
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
    <HonestSection />
    <CtaSection />
  </main>
</template>
