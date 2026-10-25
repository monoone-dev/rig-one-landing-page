<script setup lang="ts">
import { competitors } from '~/data/shared'
import { site } from '~/data/site'

const c = useContent()
</script>

<template>
  <section id="picks" class="section" aria-labelledby="picks-title">
    <div class="wrap">
      <SectionHead id="picks-title" :eyebrow="c.compare.losses.eyebrow" :title="c.compare.losses.title">
        {{ c.compare.losses.lead }}
      </SectionHead>

      <ul v-reveal class="gaps">
        <li v-for="item in c.compare.losses.items" :key="item.title">
          <b>{{ item.title }}</b>
          <span>{{ item.body }}</span>
        </li>
      </ul>

      <h3 v-reveal class="picks__title">{{ c.compare.picks.title }}</h3>
      <p v-reveal class="picks__lead">{{ c.compare.picks.lead }}</p>
      <ul v-reveal class="picks">
        <li class="pick pick--us">
          <h4 class="pick__name">{{ site.name }}</h4>
          <p>{{ c.compare.picks.rigone }}</p>
          <UButton :to="site.links.download" external target="_blank" icon="i-lucide-arrow-down-to-line" :label="c.cta.download" class="pick__cta" />
        </li>
        <li v-for="p in competitors" :key="p.id" class="pick">
          <h4 class="pick__name">
            {{ p.name }}
            <span class="pick__kind">{{ c.compare.products[p.id].kind }}</span>
          </h4>
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

.gaps {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 40px;
  max-width: 960px;
  margin: 0 auto 88px;
  padding: 0;
  list-style: none;

  @include below(md) {
    grid-template-columns: minmax(0, 1fr);
  }

  li {
    display: grid;
    gap: 4px;
    padding: 16px 0;
    border-top: 1px solid var(--border-subtle);
    font-size: 15px;
  }

  b {
    color: var(--text-primary);
    font-weight: 600;
  }

  span {
    color: var(--text-secondary);
  }
}

.picks__title {
  margin: 0 0 8px;
  font-size: clamp(22px, 2.6vw, 28px);
  letter-spacing: -0.02em;
  text-align: center;
}

.picks__lead {
  margin: 0 auto 28px;
  color: var(--text-secondary);
  text-align: center;
}

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
    box-shadow: var(--shadow-card), inset 0 0 0 2px var(--accent);
  }

  &__cta {
    align-self: flex-start;
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
