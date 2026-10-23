<script setup lang="ts">
import { screens } from '~/data/shared'

const c = useContent()
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
  <section id="screens" class="section" aria-labelledby="screens-title">
    <div class="wrap">
      <SectionHead id="screens-title" :eyebrow="c.screens.eyebrow" :title="c.screens.title">
        {{ c.screens.lead }}
      </SectionHead>

      <div v-reveal class="screens">
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
          <ScreenShot :id="s.id" :eager="i === 0" />
          <div class="screens__caption">
            <h3>{{ c.screens.items[s.id].title }}</h3>
            <p>{{ c.screens.items[s.id].body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.screens {
  display: grid;
  gap: 24px;

  &__tabs {
    display: flex;
    justify-self: center;
    gap: 4px;
    max-width: 100%;
    padding: 4px;
    overflow-x: auto;
    border-radius: 999px;
    background: var(--surface-active);
    scrollbar-width: none;

    @include below(sm) {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      justify-self: stretch;
      border-radius: var(--round-lg);
    }
  }

  &__tab {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 999px;
    color: var(--text-muted);
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    cursor: pointer;
    transition: background-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;

    &:hover {
      color: var(--text-primary);
    }

    // A segmented control: the current tab is a white raised pill with the ink
    &[aria-selected='true'] {
      background: var(--surface-raised);
      box-shadow: 0 1px 3px rgb(26 29 27 / 0.08), 0 0 0 1px var(--border);
      color: var(--text-primary);
    }

    @include below(sm) {
      justify-content: center;
      border-radius: calc(var(--round-lg) - 4px);
    }
  }

  &__panel {
    display: grid;
    gap: 20px;
  }

  &__caption {
    max-width: 640px;
    margin: 0 auto;
    text-align: center;

    h3 {
      margin: 0 0 6px;
      font-size: 20px;
    }

    p {
      color: var(--text-secondary);
      font-size: 15px;
    }
  }
}
</style>
