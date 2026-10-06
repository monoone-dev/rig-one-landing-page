<script setup lang="ts">
import { features } from '~/data/shared'

const c = useContent()
</script>

<template>
  <section class="section" aria-labelledby="features-title">
    <div class="wrap">
      <SectionHead id="features-title" :level="1" :eyebrow="c.features.eyebrow" :title="c.features.title">
        {{ c.features.lead }}
      </SectionHead>

      <nav class="jump" :aria-label="c.features.eyebrow">
        <a v-for="f in features" :key="f.id" :href="`#${f.id}`" class="jump__link">
          <UIcon :name="f.icon" /> {{ c.features.items[f.id].title }}
        </a>
      </nav>

      <div class="rows">
        <article v-for="(f, i) in features" :id="f.id" :key="f.id" v-reveal class="row" :class="{ 'row--flip': i % 2 === 1 }">
          <div class="row__text">
            <span class="eyebrow eyebrow--accent">{{ c.features.items[f.id].eyebrow }}</span>
            <h2>{{ c.features.items[f.id].title }}</h2>
            <p>{{ c.features.items[f.id].body }}</p>
          </div>
          <div class="row__card">
            <span class="icon-tile icon-tile--lg"><UIcon :name="f.icon" /></span>
            <ul>
              <li v-for="point in c.features.items[f.id].points" :key="point">
                <UIcon name="i-lucide-check" class="row__check" />
                {{ point }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.jump {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  max-width: 860px;
  margin: -16px auto 72px;

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 6px 12px;
    border: 1px solid var(--border);
    border-radius: var(--round-pill);
    color: var(--text-secondary);
    font-size: 13.5px;
    font-weight: 500;
    transition: border-color 0.15s, color 0.15s;

    &:hover {
      border-color: var(--accent-ring);
      color: var(--text-primary);
    }
  }
}

.rows {
  display: grid;
  gap: 24px;
}

.row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 48px;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid var(--border-subtle);
  scroll-margin-top: 80px;

  @include below(md) {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
    padding: 32px 0;
  }

  &--flip &__text {
    @media (min-width: 821px) {
      order: 2;
    }
  }

  &__text {
    h2 {
      margin: 12px 0 14px;
      font-size: clamp(24px, 3vw, 32px);
      line-height: 1.15;
    }

    p {
      color: var(--text-secondary);
      font-size: 16.5px;
    }
  }

  &__card {
    padding: 28px;
    border: 1px solid var(--border);
    border-radius: var(--round-xl);
    background:
      radial-gradient(80% 60% at 100% 0%, var(--accent-soft), transparent 70%),
      var(--surface-raised);

    @include below(xs) {
      padding: 22px;
    }

    ul {
      display: grid;
      gap: 12px;
      margin: 20px 0 0;
      padding: 0;
      list-style: none;
    }

    li {
      display: flex;
      gap: 10px;
      color: var(--text-secondary);
      font-size: 15px;
    }
  }

  &__check {
    flex: none;
    width: 17px;
    height: 17px;
    margin-top: 3px;
    color: var(--accent-text);
  }
}
</style>
