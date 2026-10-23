<script setup lang="ts">
import { honest } from '~/data/shared'

const c = useContent()
</script>

<template>
  <section id="honest" class="section" aria-labelledby="honest-title">
    <div class="wrap">
      <SectionHead id="honest-title" :eyebrow="c.honest.eyebrow" :title="c.honest.title">
        {{ c.honest.lead }}
      </SectionHead>
      <ul v-reveal class="honest">
        <li v-for="id in honest" :key="id" class="honest__item">
          <UIcon name="i-lucide-shield-check" class="honest__icon" />
          <span><b>{{ c.honest.items[id].title }}</b> {{ c.honest.items[id].body }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.honest {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @include card;

  gap: 0 40px;
  max-width: 960px;
  margin: 0 auto;
  padding: 12px 32px;
  list-style: none;

  @include below(md) {
    grid-template-columns: minmax(0, 1fr);
    padding: 8px 22px;
  }

  &__item {
    display: flex;
    gap: 12px;
    padding: 18px 0;
    border-top: 1px solid var(--border-subtle);
    color: var(--text-secondary);
    font-size: 15px;

    // The first row of each column sits on the card's own edge
    &:nth-child(-n + 2) {
      border-top: 0;
    }

    @include below(md) {
      &:nth-child(2) {
        border-top: 1px solid var(--border-subtle);
      }
    }
  }

  &__icon {
    flex: none;
    width: 18px;
    height: 18px;
    margin-top: 3px;
    color: var(--safe-text);
  }
}
</style>
