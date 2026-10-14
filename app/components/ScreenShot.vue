<script setup lang="ts">
import type { ScreenId } from '~~/i18n/content/types'
import { screens } from '~/data/shared'

// One screenshot of the shipped app in a window frame, as IndexOne shows its screens. The frame
// takes the screenshot's own light or dark surface, so it reads the same in either site mode.
const props = withDefaults(defineProps<{ id: ScreenId, eager?: boolean }>(), { eager: false })
const c = useContent()
const { asset } = useSiteUrl()
const theme = computed(() => screens.find(s => s.id === props.id)?.theme ?? 'dark')
</script>

<template>
  <figure class="shot" :data-theme="theme">
    <div class="shot__chrome" aria-hidden="true">
      <span /><span /><span />
    </div>
    <img
      :src="asset(`screenshots/${id}.webp`)"
      :alt="c.screens.items[id].alt"
      width="1512"
      height="950"
      :loading="eager ? 'eager' : 'lazy'"
      decoding="async"
    >
  </figure>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.shot {
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--border);
  border-radius: var(--round-lg);
  background: #18181b;
  box-shadow: var(--shadow-lg);

  &[data-theme='light'] {
    background: #f4f4f5;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  &__chrome {
    display: flex;
    gap: 7px;
    padding: 11px 14px;
    border-bottom: 1px solid rgb(127 127 127 / 0.18);

    span {
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: rgb(127 127 127 / 0.35);
    }

    @include below(xs) {
      gap: 5px;
      padding: 8px 10px;

      span {
        width: 8px;
        height: 8px;
      }
    }
  }
}
</style>
