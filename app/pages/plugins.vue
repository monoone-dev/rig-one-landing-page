<script setup lang="ts">
const c = useContent()

usePageSeo({
  path: '/plugins',
  meta: () => c.value.meta.plugins,
})
</script>

<template>
  <main id="main">
    <PluginList />
    <CtaSection />
  </main>
</template>
