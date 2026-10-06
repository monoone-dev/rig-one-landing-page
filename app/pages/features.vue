<script setup lang="ts">
import { features } from '~/data/shared'

const c = useContent()
const app = useSoftwareApplicationSchema()

usePageSeo({
  path: '/features',
  meta: () => c.value.meta.features,
  schema: () => [app({ featureList: features.map(f => c.value.features.items[f.id].title) })],
})
</script>

<template>
  <main id="main">
    <FeatureList />
    <HonestSection />
    <CtaSection />
  </main>
</template>
