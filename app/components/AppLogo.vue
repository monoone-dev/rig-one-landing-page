<script setup lang="ts">
withDefaults(defineProps<{ wordmark?: boolean }>(), { wordmark: true })
</script>

<template>
  <span class="inline-flex items-center gap-2.5 text-highlighted">
    <RigMark class="size-7 shrink-0" />
    <span
      v-if="wordmark"
      class="wordmark text-lg"
    ><b>Rig</b><span>One</span></span>
    <span
      v-else
      class="sr-only"
    >RigOne</span>
  </span>
</template>
