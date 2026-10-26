<script setup lang="ts">
import { ideIcons } from '~/data/shared'

// RigOne as an IDE for agent work: what a finished step looks like when you review it, then
// several projects open side by side in one window. Both pictures are real screens.
const c = useContent()
const to = useLocalLink()
</script>

<template>
  <section id="ide" class="section" aria-labelledby="ide-title">
    <div class="wrap">
      <SectionHead id="ide-title" :eyebrow="c.ide.eyebrow" :title="c.ide.title">
        {{ c.ide.lead }}
      </SectionHead>

      <div v-reveal class="ide ide--stacked">
        <div class="ide__shot scroll-lean">
          <ScreenShot id="review" />
        </div>
        <ul class="ide__cards">
          <li v-for="(card, i) in c.ide.review" :key="card.title" v-reveal class="ide__card" :style="{ '--reveal-delay': `${i * 70}ms` }">
            <span class="icon-tile"><UIcon :name="ideIcons[i]!" /></span>
            <span>
              <h3>{{ card.title }}</h3>
              <p>{{ card.body }}</p>
            </span>
          </li>
        </ul>
      </div>

      <div v-reveal class="ide ide--flip">
        <div class="ide__shot">
          <ScreenShot id="projects" />
        </div>
        <div class="ide__text">
          <h3>{{ c.ide.projects.title }}</h3>
          <p>{{ c.ide.projects.body }}</p>
          <ul class="ide__points">
            <li v-for="point in c.ide.projects.points" :key="point">
              <UIcon name="i-lucide-check" class="ide__check" />
              {{ point }}
            </li>
          </ul>
          <NuxtLink :to="to('/features#review')" class="ide__link">
            {{ c.unique.seeAll }} <UIcon name="i-lucide-arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.ide {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 8fr);
  gap: 40px;
  align-items: center;

  & + & {
    margin-top: 96px;

    @include below(md) {
      margin-top: 64px;
    }
  }

  &--flip {
    grid-template-columns: minmax(0, 8fr) minmax(0, 5fr);
  }

  // The review is read line by line, so its picture takes the full width and the cards sit below
  &--stacked {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }

  @include below(lg) {
    &,
    &--flip {
      grid-template-columns: minmax(0, 1fr);
      gap: 28px;
    }

    // On one column the words come first, then the picture they describe
    &--flip .ide__text {
      order: -1;
    }
  }

  &__cards {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
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

  &__card {
    @include card;

    transition: transform 0.5s var(--ease-out), box-shadow 0.5s var(--ease-out);

    &:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
    }

    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 22px;

    h3 {
      margin: 2px 0 4px;
      font-size: 16px;
    }

    p {
      color: var(--text-secondary);
      font-size: 14px;
    }

    .icon-tile {
      flex-shrink: 0;
    }
  }

  &__shot {
    min-width: 0;
  }

  &__text {
    h3 {
      margin-bottom: 10px;
      font-size: clamp(22px, 2.4vw, 28px);
      letter-spacing: -0.01em;
    }

    > p {
      color: var(--text-secondary);
      font-size: 16px;
    }
  }

  &__points {
    display: grid;
    gap: 10px;
    margin: 20px 0 0;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      color: var(--text-soft);
      font-size: 15px;
    }
  }

  &__check {
    flex-shrink: 0;
    margin-top: 3px;
    color: var(--accent-text);
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 22px;
    color: var(--accent-text);
    font-size: 14px;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}
</style>
