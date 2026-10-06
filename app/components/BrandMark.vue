<script setup lang="ts">
import { site } from '~/data/site'

withDefaults(defineProps<{ size?: number }>(), { size: 32 })
const c = useContent()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink class="brand" :to="localePath('/')" :aria-label="c.common.homeAria">
    <span class="brand__mark" :style="{ width: `${size}px`, height: `${size}px` }">
      <RigMark />
    </span>
    <span class="brand__name">{{ site.name }}</span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text-primary);
  font-size: 18px;
  font-weight: 650;
  letter-spacing: -0.03em;
  white-space: nowrap;

  @include coarse-pointer {
    min-height: 44px;
  }

  &__mark {
    display: block;
    flex: none;
  }
}
</style>
