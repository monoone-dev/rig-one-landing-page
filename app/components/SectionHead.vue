<script setup lang="ts">
withDefaults(defineProps<{
  id: string
  eyebrow: string
  title: string
  level?: 1 | 2
  align?: 'center' | 'left'
}>(), { level: 2, align: 'center' })
</script>

<template>
  <header v-reveal class="section-head" :class="{ 'section-head--page': level === 1, 'section-head--left': align === 'left' }">
    <span class="eyebrow eyebrow--accent">{{ eyebrow }}</span>
    <component :is="`h${level}`" :id="id">{{ title }}</component>
    <p v-if="$slots.default"><slot /></p>
  </header>
</template>
