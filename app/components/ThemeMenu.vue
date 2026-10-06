<script setup lang="ts">
const { items, icon } = useThemeMenu()
const c = useContent()
</script>

<template>
  <ClientOnly>
    <UDropdownMenu :items="items" :content="{ align: 'end' }" :ui="{ content: 'min-w-40' }">
      <UButton :icon="icon" color="neutral" variant="ghost" square :aria-label="c.theme.label" />
    </UDropdownMenu>

    <!-- Same footprint while the stored preference is unknown on the server -->
    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
