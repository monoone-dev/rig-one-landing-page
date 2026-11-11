<script setup lang="ts">
import type { ScreenId } from '~~/i18n/content/types'
import { differentiators } from '~/data/shared'

// Warp's "defined in code" figure: a list on the left, the selected item shown on the right, and
// the same items as a numbered grid below. Here each reason opens the real screen of the app
// where you meet it; the caption names that screen. It moves on by itself until you pick one.
const c = useContent()
const to = useLocalLink()

const shotFor: Record<string, ScreenId> = {
  ide: 'review',
  projects: 'projects',
  graph: 'canvas',
  peers: 'agent-detail',
  parallel: 'run-panel',
  checks: 'run',
  branches: 'review-tools',
  evidence: 'project',
}

const active = ref(0)
const item = computed(() => differentiators[active.value]!)
const shot = computed(() => shotFor[item.value.id]!)

let timer: ReturnType<typeof setInterval> | undefined
function stop() {
  if (timer) clearInterval(timer)
  timer = undefined
}
function pick(i: number) {
  stop()
  active.value = i
}
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(() => { active.value = (active.value + 1) % differentiators.length }, 6000)
})
onBeforeUnmount(stop)
</script>

<template>
  <section id="why" class="section section--ruled-top" aria-labelledby="why-title">
    <div class="wrap">
      <SectionHead id="why-title" :eyebrow="c.unique.eyebrow" :title="c.unique.title">
        {{ c.unique.lead }}
      </SectionHead>

      <FigFrame :caption="`fig. 2 — ${c.screens.items[shot].tab}`" class="why">
        <div class="why__split" @pointerenter="stop">
          <ul class="why__list" role="tablist" :aria-label="c.unique.eyebrow">
            <li v-for="(d, i) in differentiators" :key="d.id">
              <button
                type="button"
                role="tab"
                class="why__tab"
                :class="{ 'is-on': active === i }"
                :aria-selected="active === i"
                @click="pick(i)"
              >
                <UIcon :name="d.icon" class="why__icon size-4 shrink-0" />
                {{ c.unique.items[d.id].title }}
              </button>
            </li>
          </ul>
          <div class="why__view" role="tabpanel">
            <Transition name="swap" mode="out-in">
              <div :key="item.id" class="why__shot">
                <ScreenShot :id="shot" />
              </div>
            </Transition>
          </div>
        </div>
      </FigFrame>

      <ol class="why__grid">
        <li v-for="(d, i) in differentiators" :key="d.id">
          <button type="button" class="cell" :class="{ 'is-on': active === i }" @click="pick(i)">
            <span class="cell__n">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="cell__body">
              <span class="cell__title">{{ c.unique.items[d.id].title }}</span>
              <span class="cell__text">{{ c.unique.items[d.id].body }}</span>
            </span>
          </button>
        </li>
      </ol>

      <div class="why__more">
        <NuxtLink :to="to(item.to)" class="why__link">
          {{ c.unique.items[item.id].link }} <UIcon name="i-lucide-arrow-right" class="size-3.5" />
        </NuxtLink>
        <UButton :to="to('/features')" color="neutral" variant="outline" :label="c.unique.seeAll" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.why {
  :deep(.fig__panel) {
    padding: 0;
  }

  &__split {
    display: grid;
    grid-template-columns: 270px minmax(0, 1fr);
    min-height: 420px;

    @include below(lg) {
      grid-template-columns: minmax(0, 1fr);
      min-height: 0;
    }
  }

  &__list {
    display: grid;
    align-content: start;
    gap: 2px;
    margin: 0;
    padding: 10px;
    border-right: 1px solid var(--border-subtle);
    list-style: none;

    @include below(lg) {
      display: flex;
      overflow-x: auto;
      border-right: 0;
      border-bottom: 1px solid var(--border-subtle);
      scrollbar-width: none;
    }
  }

  &__tab {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 9px 14px;
    border-radius: var(--round-pill);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 13px;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.15s, color 0.15s;

    @include below(lg) {
      white-space: nowrap;
    }

    &:hover {
      color: var(--text-primary);
    }

    // Airy's selected row: a soft violet pill, the accent on the icon
    &.is-on {
      background: var(--accent-soft);
      color: var(--text-primary);

      .why__icon {
        color: var(--accent-text);
      }
    }
  }

  &__view {
    display: grid;
    align-items: center;
    padding: 24px;
    background-image: radial-gradient(var(--dot) 1px, transparent 1px);
    background-size: 16px 16px;

    @include below(sm) {
      padding: 10px;
    }

    :deep(.shot) {
      border-radius: 10px;
      box-shadow: var(--shadow-card), 0 0 0 1px var(--border-subtle);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;

    @include below(lg) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include below(xs) {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  &__more {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-top: 32px;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: 13.5px;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}

// One numbered cell: the selected one in full ink, the rest a step back, as on Warp
.cell {
  display: flex;
  gap: 14px;
  width: 100%;
  height: 100%;
  padding: 20px 20px 22px 0;
  text-align: left;
  cursor: pointer;

  &__n {
    flex: none;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 13px;
  }

  &__body {
    display: grid;
    align-content: start;
    gap: 8px;
  }

  &__title {
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 14px;
    transition: color 0.2s;
  }

  &__text {
    display: -webkit-box;
    overflow: hidden;
    color: var(--text-muted);
    font-size: 13.5px;
    line-height: 1.5;
    opacity: 0.8;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    transition: color 0.2s, opacity 0.2s;
  }

  &:hover &__title,
  &.is-on &__title {
    color: var(--text-primary);
  }

  &.is-on &__n {
    color: var(--accent-text);
  }

  &.is-on &__text {
    color: var(--text-secondary);
    opacity: 1;
  }
}

.swap-enter-active,
.swap-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.swap-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.swap-leave-to {
  opacity: 0;
}
</style>
