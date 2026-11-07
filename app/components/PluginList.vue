<script setup lang="ts">
import { plugins } from '~/data/shared'

// Every plugin as a card: what it does, what it gives, and whether it is in the build people
// download today. The status comes from app/data/shared.ts, never from the translated text.
const c = useContent()
</script>

<template>
  <section class="section" aria-labelledby="plugins-title">
    <div class="wrap">
      <SectionHead id="plugins-title" :level="1" :eyebrow="c.plugins.eyebrow" :title="c.plugins.title">
        {{ c.plugins.lead }}
      </SectionHead>

      <ul class="plugins">
        <li v-for="(p, i) in plugins" :id="p.id" :key="p.id" v-reveal class="plugin" :style="{ '--reveal-delay': `${i * 70}ms` }">
          <div class="plugin__head">
            <span class="icon-tile"><UIcon :name="p.icon" /></span>
            <UBadge :color="p.status === 'included' ? 'primary' : 'neutral'" variant="subtle" :label="c.plugins.status[p.status]" />
          </div>
          <h2>{{ c.plugins.items[p.id].title }}</h2>
          <p>{{ c.plugins.items[p.id].body }}</p>
          <ul class="plugin__points">
            <li v-for="point in c.plugins.items[p.id].points" :key="point">
              <UIcon name="i-lucide-check" class="plugin__check" />
              {{ point }}
            </li>
          </ul>
        </li>
      </ul>

      <p v-reveal class="plugins__how">
        <UIcon name="i-lucide-settings" /> {{ c.plugins.howTo }}
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.plugins {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  max-width: 960px;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  @include below(md) {
    grid-template-columns: minmax(0, 1fr);
  }

  &__how {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 32px;
    color: var(--text-secondary);
    font-size: 14.5px;
    text-align: center;
  }
}

.plugin {
  @include card;

  padding: 28px;
  border-radius: 24px;

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  h2 {
    margin-bottom: 8px;
    font-size: 20px;
  }

  p {
    color: var(--text-secondary);
  }

  &__points {
    display: grid;
    gap: 8px;
    margin: 18px 0 0;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 14.5px;
    }
  }

  &__check {
    flex-shrink: 0;
    margin-top: 3px;
    color: var(--accent-text);
  }
}
</style>
