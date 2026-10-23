<script setup lang="ts">
import type { ScreenId } from '~~/i18n/content/types'
import { screens } from '~/data/shared'

// One screenshot of the shipped app in a window frame. As on IndexOne, every screen exists in the
// app's dark and light mode (`<id>.webp`, `<id>-light.webp`) and follows the site's colour mode.
const props = withDefaults(defineProps<{ id: ScreenId, eager?: boolean }>(), { eager: false })
const c = useContent()
const { asset } = useSiteUrl()
const shot = computed(() => screens.find(s => s.id === props.id)!)
</script>

<template>
  <figure class="shot">
    <div class="shot__chrome" aria-hidden="true">
      <span /><span /><span />
    </div>
    <ThemeImage
      :dark="asset(`screenshots/${id}.webp`)"
      :light="asset(`screenshots/${id}-light.webp`)"
      :width="shot.width"
      :height="shot.height"
      :alt="c.screens.items[id].alt"
      :eager="eager"
    />
  </figure>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.shot {
  overflow: hidden;
  margin: 0;
  border-radius: var(--round-xl);
  background: var(--surface-raised);
  box-shadow: var(--shadow-card), 0 0 0 1px var(--border);

  @include below(xs) {
    border-radius: var(--round-md);
  }

  &__chrome {
    display: flex;
    gap: 7px;
    padding: 11px 14px;
    border-bottom: 1px solid var(--border);

    span {
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: var(--surface-active);
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
