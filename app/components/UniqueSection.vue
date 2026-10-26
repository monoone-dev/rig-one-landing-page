<script setup lang="ts">
import type { ScreenId } from '~~/i18n/content/types'
import { differentiators, screens } from '~/data/shared'

// A bento of the reasons: the first two are wide and carry a crop of the real screen they talk
// about, the four in the middle are square, the last two are wide again. Each card ends in a
// SurfaceOne-style footer that links to the feature.
const c = useContent()
const to = useLocalLink()
const { asset } = useSiteUrl()
const wide = new Set([0, 1, differentiators.length - 2, differentiators.length - 1])
const crops: Partial<Record<number, ScreenId>> = { 0: 'review', 1: 'projects' }
const size = (id: ScreenId) => screens.find(s => s.id === id)!
</script>

<template>
  <section id="why" class="section" aria-labelledby="why-title">
    <div class="wrap">
      <SectionHead id="why-title" :eyebrow="c.unique.eyebrow" :title="c.unique.title">
        {{ c.unique.lead }}
      </SectionHead>

      <ul class="bento">
        <li
          v-for="(item, i) in differentiators"
          :key="item.id"
          v-reveal
          class="bento__item"
          :class="{ 'bento__item--wide': wide.has(i), 'bento__item--shot': crops[i] }"
          :style="{ '--reveal-delay': `${(i % 4) * 70}ms` }"
        >
          <NuxtLink :to="to(item.to)" class="bento__link">
            <span class="bento__body">
              <span class="icon-tile"><UIcon :name="item.icon" /></span>
              <h3>{{ c.unique.items[item.id].title }}</h3>
              <p>{{ c.unique.items[item.id].body }}</p>
            </span>
            <span v-if="crops[i]" class="bento__crop" aria-hidden="true">
              <ThemeImage
                :dark="asset(`screenshots/${crops[i]}.webp`)"
                :light="asset(`screenshots/${crops[i]}-light.webp`)"
                :width="size(crops[i]!).width"
                :height="size(crops[i]!).height"
                alt=""
              />
            </span>
            <span class="bento__foot">
              {{ c.unique.items[item.id].link }}
              <UIcon name="i-lucide-arrow-right" class="bento__arrow" />
            </span>
          </NuxtLink>
        </li>
      </ul>

      <p v-reveal class="bento__more">
        <UButton :to="to('/features')" color="neutral" variant="outline" size="lg" trailing-icon="i-lucide-arrow-right" :label="c.unique.seeAll" />
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.bento {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;

  @include below(xl) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include below(sm) {
    grid-template-columns: minmax(0, 1fr);
  }

  &__item {
    display: flex;
    min-width: 0;

    &--wide {
      grid-column: span 2;

      h3 {
        font-size: clamp(20px, 2.2vw, 24px) !important;
      }

      @include below(sm) {
        grid-column: auto;
      }
    }
  }

  &__link {
    @include card;

    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    border-radius: 24px;
    transition: transform 0.5s var(--ease-out), box-shadow 0.5s var(--ease-out);

    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);

      .bento__arrow {
        transform: translateX(4px);
      }

      .bento__crop :deep(img) {
        transform: scale(1.03);
      }
    }
  }

  &__body {
    display: block;
    flex: 1;
    padding: 28px 28px 20px;

    h3 {
      margin-bottom: 8px;
      font-size: 18px;
      letter-spacing: -0.015em;
    }

    p {
      color: var(--text-secondary);
      font-size: 14.5px;
    }
  }

  // The wide cards with a picture keep their words to the left half on wide screens
  &__item--shot &__body {
    max-width: 30em;
  }

  &__crop {
    display: block;
    height: 220px;
    margin: 0 0 0 28px;
    overflow: hidden;
    border-top-left-radius: 12px;
    box-shadow: 0 0 0 1px var(--border), var(--shadow-card);

    :deep(img) {
      width: 160%;
      max-width: none;
      transform-origin: 0 0;
      transition: transform 0.8s var(--ease-out);
    }

    @include below(sm) {
      height: 160px;
    }
  }

  &__foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 28px;
    border-top: 1px solid var(--border-subtle);
    color: var(--accent-text);
    font-size: 14px;
    font-weight: 600;
  }

  &__arrow {
    transition: transform 0.4s var(--ease-out);
  }

  &__more {
    margin-top: 56px;
    text-align: center;
  }
}
</style>
