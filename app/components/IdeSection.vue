<script setup lang="ts">
import type { ScreenId } from '~~/i18n/content/types'

// Warp's accordion beside a figure: the headline and a list of short titles on the left, one open
// at a time with its words; on the right the real screen it talks about. The four parts of a
// step's review come first, then several projects in one window.
const c = useContent()
const to = useLocalLink()

const rows = computed(() => [
  ...c.value.ide.review.map((r, i) => ({ ...r, points: [] as string[], shot: (['review', 'review-tools', 'review-tools', 'review'] as ScreenId[])[i]! })),
  { ...c.value.ide.projects, shot: 'projects' as ScreenId },
])
const open = ref(0)
const shot = computed(() => rows.value[open.value]!.shot)
</script>

<template>
  <section id="ide" class="section section--ruled-top" aria-labelledby="ide-title">
    <div class="wrap ide">
      <div class="ide__left">
        <span class="eyebrow eyebrow--accent">{{ c.ide.eyebrow }}</span>
        <h2 id="ide-title" class="ide__title">{{ c.ide.title }}</h2>

        <ul class="acc">
          <li v-for="(row, i) in rows" :key="row.title" class="acc__item" :class="{ 'is-open': open === i }">
            <button
              :id="`ide-acc-${i}`"
              type="button"
              class="acc__head"
              :aria-expanded="open === i"
              :aria-controls="`ide-acc-panel-${i}`"
              @click="open = i"
            >
              {{ row.title }}
            </button>
            <div v-show="open === i" :id="`ide-acc-panel-${i}`" class="acc__body" role="region" :aria-labelledby="`ide-acc-${i}`">
              <p>{{ row.body }}</p>
              <ul v-if="row.points.length" class="acc__points">
                <li v-for="point in row.points" :key="point">{{ point }}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div class="ide__right">
        <p class="ide__lead">{{ c.ide.lead }}</p>
        <FigFrame :caption="`fig. 3 — ${c.screens.items[shot].tab}`">
          <Transition name="swap" mode="out-in">
            <ScreenShot :id="shot" :key="`${open}-${shot}`" />
          </Transition>
          <template #foot>
            <span>{{ c.screens.items[shot].title }}</span>
            <NuxtLink :to="to('/features#review')" class="ide__more">{{ c.unique.seeAll }} →</NuxtLink>
          </template>
        </FigFrame>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.ide {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  gap: 48px 64px;

  @include below(lg) {
    grid-template-columns: minmax(0, 1fr);
  }

  &__title {
    margin: 10px 0 40px;
    font-family: var(--font-mono);
    font-size: clamp(28px, 3.6vw, 40px);
    font-weight: 450;
    line-height: 1.15;
    letter-spacing: -0.035em;
  }

  &__lead {
    margin: 34px 0 32px;
    color: var(--text-secondary);
    font-size: 16px;
    line-height: 1.6;

    @include below(lg) {
      margin-top: 0;
    }
  }

  &__right :deep(.shot) {
    border-radius: 10px;
    box-shadow: var(--shadow-card), 0 0 0 1px var(--border-subtle);
  }

  &__more {
    color: var(--accent-text);

    &:hover {
      text-decoration: underline;
    }
  }
}

.acc {
  margin: 0;
  padding: 0;
  list-style: none;

  &__item {
    border-bottom: 1px solid var(--border);

    &:first-child {
      border-top: 1px solid var(--border);
    }
  }

  &__head {
    position: relative;
    width: 100%;
    padding: 18px 28px 18px 0;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 16px;
    letter-spacing: -0.01em;
    text-align: left;
    cursor: pointer;
    transition: color 0.15s;

    &::after {
      content: '+';
      position: absolute;
      top: 50%;
      right: 4px;
      color: var(--text-muted);
      transform: translateY(-50%);
    }

    &:hover {
      color: var(--text-primary);
    }

    .is-open & {
      padding-bottom: 8px;
      color: var(--text-primary);

      &::after {
        content: '−';
        color: var(--accent-text);
      }
    }
  }

  &__body {
    padding: 0 0 20px;
    color: var(--text-secondary);
    font-size: 14.5px;
    line-height: 1.6;
  }

  &__points {
    display: grid;
    gap: 6px;
    margin: 12px 0 0;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      gap: 10px;
      font-size: 14px;

      &::before {
        content: '';
        flex: none;
        width: 6px;
        height: 6px;
        margin-top: 0.6em;
        background: var(--accent);
      }
    }
  }
}

.swap-enter-active,
.swap-leave-active {
  transition: opacity 0.25s ease;
}

.swap-enter-from,
.swap-leave-to {
  opacity: 0;
}
</style>
