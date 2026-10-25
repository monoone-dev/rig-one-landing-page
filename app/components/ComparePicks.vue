<script setup lang="ts">
import { competitors } from '~/data/shared'
import { site } from '~/data/site'

const c = useContent()
</script>

<template>
  <section id="picks" class="section" aria-labelledby="picks-title">
    <div class="wrap">
      <SectionHead id="picks-title" :eyebrow="c.compare.eyebrow" :title="c.compare.picks.title">
        {{ c.compare.picks.lead }}
      </SectionHead>

      <ul v-reveal class="picks">
        <li class="pick pick--us">
          <h3 class="pick__name">{{ site.name }}</h3>
          <p>{{ c.compare.picks.rigone }}</p>
        </li>
        <li v-for="p in competitors" :key="p.id" class="pick">
          <h3 class="pick__name">
            {{ p.name }}
            <span class="pick__kind">{{ c.compare.products[p.id].kind }}</span>
          </h3>
          <p>{{ c.compare.products[p.id].pick }}</p>
          <a class="pick__link" :href="p.url" rel="noopener" target="_blank">
            {{ c.compare.picks.website }} <UIcon name="i-lucide-arrow-up-right" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.picks {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;

  @include below(xl) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include below(sm) {
    grid-template-columns: minmax(0, 1fr);
  }
}

.pick {
  @include card;

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 22px 24px;

  &--us {
    background: var(--accent-soft);
  }

  &__name {
    margin: 0;
    font-size: 18px;
    letter-spacing: -0.01em;
  }

  &--us &__name {
    color: var(--accent-text);
  }

  &__kind {
    display: block;
    margin-top: 2px;
    color: var(--text-muted);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0;
  }

  p {
    flex: 1;
    margin: 0;
    color: var(--text-secondary);
    font-size: 15px;
  }

  &__link {
    display: inline-flex;
    gap: 4px;
    align-items: center;
    color: var(--accent-text);
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
