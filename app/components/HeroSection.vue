<script setup lang="ts">
import notes from '#release-notes'
import { site } from '~/data/site'

// Warp's first screen: a left-aligned mono headline, a short sans line, two square buttons, then
// the product as figure 1 — here the real Projects screen of the shipped app, in the visitor's
// colour mode. Under it, the three problems RigOne answers, numbered like Warp's feature rows.
const c = useContent()
const to = useLocalLink()
const latest = notes[0]
const release = computed(() => latest ? fill(c.value.hero.badgeRelease, { version: latest.version }) : '')
</script>

<template>
  <section id="product" class="hero" aria-labelledby="hero-title">
    <div class="wrap">
      <NuxtLink v-if="latest" :to="to(`/changelog#${latest.tag}`)" class="hero__release">
        <span class="hero__release-dot" /> {{ release }} <UIcon name="i-lucide-arrow-right" class="size-3.5" />
      </NuxtLink>

      <h1 id="hero-title" class="hero__title">
        {{ c.hero.titleStrong }}
        <span class="hero__title-soft">{{ c.hero.titleSoft }}</span>
      </h1>
      <p class="hero__sub">
        {{ c.hero.sub }}
      </p>

      <div class="hero__actions">
        <UButton :to="site.links.download" external target="_blank" size="lg" icon="i-simple-icons-apple" :label="c.hero.download" />
        <UButton :to="to('/docs')" size="lg" color="neutral" variant="outline" :label="c.hero.docsCta" />
        <span class="hero__note">{{ c.hero.note }}</span>
      </div>

      <FigFrame
        class="hero__fig"
        :caption="`fig. 1 — ${c.screens.items.projects.tab}`"
        :label="c.screens.items.projects.title"
        :meta="c.hero.badgePlatform"
      >
        <ScreenShot id="projects" eager />
        <template #foot>
          <span class="legend">
            <span v-for="chip in c.hero.chips" :key="chip" class="legend__item"><i />{{ chip }}</span>
          </span>
          <span>{{ c.hero.badgeAgents }}</span>
        </template>
      </FigFrame>

      <ol class="hero__problems" :aria-label="c.hero.problemsLabel">
        <li v-for="(p, i) in c.hero.problems" :key="p.problem" class="problem">
          <span class="problem__n">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="problem__body">
            <s class="problem__pain">{{ p.problem }}</s>
            <span class="problem__fix">{{ p.answer }}</span>
          </span>
        </li>
      </ol>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.hero {
  position: relative;
  padding: 64px 0 72px;

  @include below(sm) {
    padding-top: 40px;
  }

  &__release {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 28px;
    padding: 5px 13px 5px 11px;
    border-radius: var(--round-pill);
    background: var(--surface-raised);
    box-shadow: var(--shadow-sm), 0 0 0 1px var(--border);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 12.5px;
    transition: border-color 0.15s, color 0.15s;

    &:hover {
      border-color: var(--accent);
      color: var(--text-primary);
    }
  }

  &__release-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-soft);
  }

  &__title {
    max-width: 15em;
    margin-bottom: 22px;
    font-family: var(--font-mono);
    font-size: clamp(34px, 5.6vw, 64px);
    font-weight: 450;
    line-height: 1.08;
    letter-spacing: -0.045em;
    text-wrap: balance;
    overflow-wrap: break-word;
  }

  &__title-soft {
    display: block;
    color: var(--text-muted);
  }

  &__sub {
    max-width: 46em;
    margin-bottom: 30px;
    color: var(--text-secondary);
    font-size: clamp(15.5px, 1.6vw, 17px);
    line-height: 1.6;
    text-wrap: pretty;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px 12px;
  }

  &__note {
    margin-left: 8px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 12px;

    @include below(sm) {
      flex-basis: 100%;
      margin-left: 0;
    }
  }

  &__fig {
    margin-top: 48px;

    // The Surface glass: the violet of the mark glowing softly behind the window
    :deep(.fig__panel)::before {
      content: '';
      position: absolute;
      inset: 18% 10% 10%;
      border-radius: 50%;
      background: radial-gradient(closest-side, color-mix(in oklch, var(--accent) 28%, transparent), transparent);
      filter: blur(40px);
      pointer-events: none;
    }

    :deep(.fig__panel) > * {
      position: relative;
    }

    :deep(.shot) {
      border-radius: 10px;
      box-shadow: var(--shadow-lg), 0 40px 90px -50px color-mix(in oklch, var(--accent) 55%, transparent);
    }
  }

  &__problems {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px 32px;
    margin: 28px 0 0;
    padding: 0;
    list-style: none;

    @include below(md) {
      grid-template-columns: minmax(0, 1fr);
    }
  }
}

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 18px;

  &__item {
    display: inline-flex;
    align-items: center;
    gap: 7px;

    i {
      width: 8px;
      height: 8px;
      background: var(--accent);
    }

    &:nth-child(2) i {
      background: color-mix(in oklch, var(--accent) 55%, transparent);
    }

    &:nth-child(3) i {
      border: 1px solid var(--accent);
      background: transparent;
    }
  }
}

.problem {
  display: flex;
  gap: 14px;

  &__n {
    flex: none;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 13px;
  }

  &__body {
    display: grid;
    gap: 6px;
  }

  &__pain {
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 14px;
    text-decoration-color: var(--accent);
  }

  &__fix {
    color: var(--text-secondary);
    font-size: 14.5px;
    line-height: 1.5;
  }
}
</style>
