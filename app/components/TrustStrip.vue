<script setup lang="ts">
import { trustIcons } from '~/data/shared'

// SurfaceOne's figures band: one wide card split into equal cells, each a fact you can check.
const c = useContent()
</script>

<template>
  <div class="trust">
    <div class="wrap">
      <ul v-reveal class="trust__band" :aria-label="c.trust.aria">
        <li v-for="(label, i) in c.trust.items" :key="i" class="trust__item">
          <UIcon :name="trustIcons[i]!" class="trust__icon" />
          <span>{{ label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.trust {
  margin-top: 72px;

  &__band {
    @include card;

    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin: 0;
    padding: 6px;
    list-style: none;

    @include below(lg) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include below(xs) {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 22px;
    color: var(--text-soft);
    font-size: 15px;
    font-weight: 550;
    line-height: 1.35;

    & + & {
      border-left: 1px solid var(--border-subtle);
    }

    @include below(lg) {
      &:nth-child(3) {
        border-left: 0;
      }

      &:nth-child(n + 3) {
        border-top: 1px solid var(--border-subtle);
      }
    }

    @include below(xs) {
      & + & {
        border-left: 0;
        border-top: 1px solid var(--border-subtle);
      }
    }
  }

  &__icon {
    flex: none;
    width: 22px;
    height: 22px;
    color: var(--accent-text);
  }
}
</style>
