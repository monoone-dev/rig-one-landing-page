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
  gap: 0 40px;
  max-width: 920px;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  @include below(md) {
    grid-template-columns: minmax(0, 1fr);
  }

  &__item {
    display: flex;
    gap: 12px;
    padding: 16px 0;
    border-top: 1px solid var(--border-subtle);
    color: var(--text-secondary);
    font-size: 15px;
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
