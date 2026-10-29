<script setup lang="ts">
// A screenshot at full size over the page. It opens fitted to the window; "Actual size" shows it
// at the app's own window size (half its pixels, as the pictures are rendered at 2×) and the
// dialog scrolls. Escape, the close button or a click beside the picture closes it.
const { image, close } = useImagePreview()
const c = useContent()
const actual = ref(false)

const open = computed({
  get: () => image.value !== null,
  set: (value) => { if (!value) close() },
})
watch(image, () => { actual.value = false })
</script>

<template>
  <UModal
    v-model:open="open"
    :title="image?.alt"
    fullscreen
    :ui="{ content: 'preview', header: 'preview__bar', body: 'preview__body', close: 'preview__close' }"
  >
    <template #actions>
      <UButton
        color="neutral"
        variant="ghost"
        :icon="actual ? 'i-lucide-shrink' : 'i-lucide-expand'"
        :label="actual ? c.common.fitToScreen : c.common.actualSize"
        class="preview__zoom"
        @click="actual = !actual"
      />
    </template>
    <template #body>
      <div class="preview__stage" :class="{ 'is-actual': actual }" @click.self="close">
        <figure v-if="image" class="preview__shot" :style="{ '--shot-width': `${image.width}px`, '--shot-ratio': image.width / image.height }">
          <ThemeImage :dark="image.dark" :light="image.light" :width="image.width" :height="image.height" :alt="image.alt" eager />
        </figure>
      </div>
    </template>
  </UModal>
</template>

<style lang="scss">
// Not scoped: the dialog is teleported to <body>
.preview {
  background: color-mix(in srgb, var(--surface-base) 97%, transparent);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.preview__bar {
  min-height: 56px;
  border-bottom: 1px solid var(--border-subtle);

  gap: 8px;

  [data-slot='wrapper'] {
    flex: 1;
    min-width: 0;
  }

  [data-slot='title'] {
    overflow: hidden;
    color: var(--text-secondary);
    font-size: 14px;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.preview__close {
  position: static !important;
}

// Phones: the zoom button keeps its icon, the title gets the room
@media (max-width: 460px) {
  .preview__zoom [data-slot='label'] {
    display: none;
  }
}

.preview__body {
  display: flex;
  padding: 0 !important;
}

.preview__stage {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: 0;
  padding: clamp(12px, 3vw, 40px);
  overflow: auto;

  // Fitted: as large as the window allows without scrolling
  .preview__shot {
    width: min(100%, calc((100dvh - 56px - 2 * clamp(12px, 3vw, 40px)) * var(--shot-ratio)));
  }

  // Actual size: the window of the app at its own size; the stage scrolls when it is larger
  &.is-actual {
    align-items: flex-start;
    justify-content: flex-start;

    .preview__shot {
      flex: none;
      width: var(--shot-width);
      margin: auto;
    }
  }
}

.preview__shot {
  overflow: hidden;
  margin: 0;
  border-radius: 12px;
  background: var(--surface-raised);
  box-shadow: var(--shadow-card), 0 0 0 1px var(--border-strong);
}
</style>
