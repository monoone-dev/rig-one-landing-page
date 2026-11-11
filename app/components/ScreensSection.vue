<script setup lang="ts">
import { screens as allScreens, screenTabs } from '~/data/shared'

const c = useContent()
const screens = screenTabs.map(id => allScreens.find(s => s.id === id)!)
const active = ref(0)
const tabs = ref<HTMLButtonElement[]>([])

// Arrow keys move between the tabs, as a tab list should; Home and End jump to the ends.
function onKey(event: KeyboardEvent) {
  const last = screens.length - 1
  const next = {
    ArrowRight: active.value === last ? 0 : active.value + 1,
    ArrowLeft: active.value === 0 ? last : active.value - 1,
    Home: 0,
    End: last,
  }[event.key]
  if (next === undefined) return
  event.preventDefault()
  active.value = next
  tabs.value[next]?.focus()
}
</script>

<template>
  <section id="screens" class="section section--ruled-top" aria-labelledby="screens-title">
    <div class="wrap">
      <SectionHead id="screens-title" :eyebrow="c.screens.eyebrow" :title="c.screens.title">
        {{ c.screens.lead }}
      </SectionHead>

      <FigFrame :caption="`fig. 4 — ${c.screens.items[screens[active]!.id].tab}`" :meta="`${active + 1} / ${screens.length}`" :label="c.screens.label">
        <div class="screens">
          <div class="screens__tabs" role="tablist" :aria-label="c.screens.label" @keydown="onKey">
            <button
              v-for="(s, i) in screens"
              :id="`screen-tab-${s.id}`"
              :key="s.id"
              ref="tabs"
              type="button"
              role="tab"
              class="screens__tab"
              :aria-selected="active === i"
              :aria-controls="`screen-${s.id}`"
              :tabindex="active === i ? 0 : -1"
              @click="active = i"
            >
              <UIcon :name="s.icon" class="size-4 shrink-0" />
              {{ c.screens.items[s.id].tab }}
            </button>
          </div>

          <div
            v-for="(s, i) in screens"
            v-show="active === i"
            :id="`screen-${s.id}`"
            :key="s.id"
            class="screens__panel"
            role="tabpanel"
            :aria-labelledby="`screen-tab-${s.id}`"
          >
            <ScreenShot :id="s.id" :eager="i === 0" class="screens__shot" />
            <div class="screens__caption">
              <h3>{{ c.screens.items[s.id].title }}</h3>
              <p>{{ c.screens.items[s.id].body }}</p>
            </div>
          </div>
        </div>
      </FigFrame>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

// Warp's tabbed figure: square mono tabs in a row, the real screen under them, the words beside
.screens {
  display: grid;
  gap: 20px;

  &__tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  &__tab {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border: 1px solid var(--border);
    border-radius: var(--round-pill);
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 12.5px;
    white-space: nowrap;
    cursor: pointer;
    transition: border-color 0.15s, color 0.15s, background-color 0.15s;

    &:hover {
      border-color: var(--border-strong);
      color: var(--text-primary);
    }

    &[aria-selected='true'] {
      border-color: var(--accent);
      background: var(--accent-soft);
      color: var(--text-primary);
    }
  }

  &__panel {
    display: grid;
    grid-template-columns: minmax(0, 3fr) minmax(0, 1fr);
    gap: 28px;
    align-items: start;
    animation: panel-in 0.4s var(--ease-out);

    @include below(lg) {
      grid-template-columns: minmax(0, 1fr);
      gap: 16px;
    }

    @include reduced-motion {
      animation: none;
    }
  }

  &__shot {
    border-radius: 10px;
    box-shadow: var(--shadow-card), 0 0 0 1px var(--border-subtle);
  }

  &__caption {
    padding-top: 4px;

    h3 {
      margin: 0 0 10px;
      font-family: var(--font-mono);
      font-size: 17px;
      font-weight: 450;
      letter-spacing: -0.02em;
    }

    p {
      color: var(--text-secondary);
      font-size: 14.5px;
      line-height: 1.6;
    }
  }
}

@keyframes panel-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
