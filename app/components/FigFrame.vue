<script setup lang="ts">
// Warp's figure — a light grey frame with a bracketed caption centred on top — holding an Airy
// card: a white panel with rounded corners that floats on SurfaceOne's soft shadow.
defineProps<{
  caption: string
  label?: string
  meta?: string
}>()
</script>

<template>
  <figure class="fig">
    <figcaption class="fig__caption">
      <span>[ {{ caption }} ]</span>
      <i class="fig__dot" aria-hidden="true" />
    </figcaption>
    <div class="fig__panel">
      <div v-if="label || meta" class="fig__head">
        <span v-if="label">[ {{ label }} ]</span>
        <span v-if="meta" class="fig__meta">{{ meta }}</span>
      </div>
      <slot />
      <div v-if="$slots.foot" class="fig__foot">
        <slot name="foot" />
      </div>
    </div>
  </figure>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.fig {
  margin: 0;
  padding: 0 14px 14px;
  border: 1px solid var(--border);
  border-radius: var(--round-xl);
  background: var(--surface-sunken);

  @include below(sm) {
    padding: 0 8px 8px;
  }

  &__caption {
    position: relative;
    padding: 10px 40px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 12px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__dot {
    position: absolute;
    top: 8px;
    right: 2px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--surface-raised);
    box-shadow: var(--shadow-sm), 0 0 0 1px var(--border);

    &::after {
      content: '';
      position: absolute;
      inset: 7px;
      border-radius: 50%;
      background: var(--accent);
    }
  }

  &__panel {
    position: relative;
    border-radius: var(--round-lg);
    background: var(--surface-raised);
    box-shadow: var(--shadow-card);
    padding: 24px 32px 28px;

    @include below(sm) {
      padding: 14px;
    }
  }

  &__head {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 20px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 12px;

    @include below(sm) {
      margin-bottom: 12px;
    }
  }

  &__meta {
    text-align: right;
  }

  &__foot {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 8px 20px;
    margin-top: 20px;
    padding-top: 14px;
    border-top: 1px solid var(--border);
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 12px;
  }
}
</style>
