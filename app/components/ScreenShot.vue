<script setup lang="ts">
import type { ScreenId } from '~~/i18n/content/types'
import { screens } from '~/data/shared'

// One screenshot of the shipped app as a macOS window. The picture already holds the window's own
// title bar: the traffic lights and the Surface glass with the violet of the mark behind it. As on
// IndexOne, every screen exists in the app's dark and light mode (`<id>.webp`, `<id>-light.webp`)
// and follows the site's colour mode.
const props = withDefaults(defineProps<{ id: ScreenId, eager?: boolean }>(), { eager: false })
const c = useContent()
const { asset } = useSiteUrl()
const shot = computed(() => screens.find(s => s.id === props.id)!)
const preview = useImagePreview()
const sources = computed(() => ({ dark: asset(`screenshots/${props.id}.webp`), light: asset(`screenshots/${props.id}-light.webp`) }))

function enlarge() {
  preview.open({ ...sources.value, width: shot.value.width, height: shot.value.height, alt: c.value.screens.items[props.id].alt })
}
</script>

<template>
  <figure class="shot">
    <button type="button" class="shot__open" aria-haspopup="dialog" :title="c.common.enlarge" @click="enlarge">
      <ThemeImage
        :dark="sources.dark"
        :light="sources.light"
        :width="shot.width"
        :height="shot.height"
        :alt="c.screens.items[id].alt"
        :eager="eager"
      />
    </button>
  </figure>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

// A macOS window: rounded corners, a hairline edge with a lit top, and a deep soft shadow
.shot {
  position: relative;
  overflow: hidden;
  margin: 0;
  border-radius: 14px;
  background: var(--surface-raised);
  box-shadow: var(--shadow-card), 0 0 0 1px var(--border-strong);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0.5px 0 rgb(255 255 255 / 0.35), inset 0 0 0 0.5px rgb(255 255 255 / 0.08);
    pointer-events: none;
  }

  @include below(xs) {
    border-radius: 8px;
  }

  // The whole picture opens it full size (ImagePreview.vue)
  &__open {
    display: block;
    width: 100%;
    padding: 0;
    border: 0;
    background: none;
    cursor: zoom-in;

    &:focus-visible {
      outline: 2px solid var(--ui-primary);
      outline-offset: -2px;
      border-radius: inherit;
    }
  }
}
</style>
