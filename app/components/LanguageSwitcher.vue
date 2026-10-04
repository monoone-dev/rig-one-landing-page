<script setup lang="ts">
const { t } = useI18n()
const { items, icon } = useLanguageMenu()
</script>

<template>
  <UDropdownMenu
    :items="items"
    :content="{ align: 'end' }"
    :ui="{ content: 'min-w-44' }"
  >
    <UButton
      :icon="icon"
      color="neutral"
      variant="ghost"
      square
      :aria-label="t('nav.language')"
      class="language-switcher"
    />
  </UDropdownMenu>
</template>
