<script setup lang="ts">
const { items, icon } = useLanguageMenu()
const c = useContent()

// A browser in another language opens "/" (prerendered in English) and moves to "/pl/" before
// hydration; hydration keeps the prerendered flag's SVG, so the button is drawn again once mounted.
const mounted = ref(false)
onMounted(() => { mounted.value = true })
</script>

<template>
  <UDropdownMenu :items="items" :content="{ align: 'end' }" :ui="{ content: 'min-w-44' }">
    <UButton :key="mounted ? icon : 'prerendered'" :icon="icon" color="neutral" variant="ghost" square :aria-label="c.common.language" />
  </UDropdownMenu>
</template>
