<script setup lang="ts">
import { features, screens } from '~/data/shared'

const c = useContent()
const app = useSoftwareApplicationSchema()
const { absolute } = useSiteUrl()

usePageSeo({
  path: '/features',
  meta: () => c.value.meta.features,
  schema: () => [app({
    featureList: features.map(f => c.value.features.items[f.id].title),
    screenshot: features.flatMap(f => screens.filter(s => s.id === f.shot)).map(s => ({
      '@type': 'ImageObject',
      'url': absolute(`screenshots/${s.id}.webp`),
      'width': s.width,
      'height': s.height,
      'caption': c.value.screens.items[s.id].alt,
    })),
  })],
})
</script>

<template>
  <main id="main">
    <FeatureList />
    <HonestSection />
    <CtaSection />
  </main>
</template>
