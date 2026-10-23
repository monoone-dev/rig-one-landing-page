<script setup lang="ts">
import notes from '#release-notes'
import { site } from '~/data/site'

// The first screen answers three questions before anything else: who RigOne is for (the
// audience line), what problem it solves (the title and the three problem → answer pairs) and
// what it is (the sub). The real Run screen follows, in the visitor's colour mode.
const c = useContent()
const to = useLocalLink()
const latest = notes[0]
const release = computed(() => latest ? fill(c.value.hero.badgeRelease, { version: latest.version }) : '')
const problemIcons = ['i-lucide-panels-top-left', 'i-lucide-git-branch', 'i-lucide-list-checks'] as const
const chipIcons = ['i-lucide-circle-check', 'i-lucide-split', 'i-lucide-shield-check'] as const
</script>

<template>
  <section id="product" class="hero" aria-labelledby="hero-title">
    <div class="hero__glow" aria-hidden="true" />
    <div class="wrap">
      <div class="hero__intro">
        <div class="hero__badges">
          <NuxtLink v-if="latest" :to="to(`/changelog#${latest.tag}`)" class="pill pill--link">
            <span class="pill__dot" /> {{ release }}
          </NuxtLink>
          <span class="pill pill--wide"><UIcon name="i-simple-icons-apple" /> {{ c.hero.badgePlatform }}</span>
          <span class="pill pill--wide"><UIcon name="i-lucide-git-compare-arrows" /> {{ c.hero.badgeAgents }}</span>
        </div>

        <p class="hero__audience">
          <UIcon name="i-lucide-terminal" class="size-4 shrink-0" />
          {{ c.hero.audience }}
        </p>
        <h1 id="hero-title" class="hero__title">
          {{ c.hero.titleStrong }} <span class="hero__title-soft">{{ c.hero.titleSoft }}</span>
        </h1>
        <p class="hero__sub">
          {{ c.hero.sub }}
        </p>

        <div class="hero__actions">
          <UButton :to="site.links.download" external target="_blank" size="xl" icon="i-lucide-arrow-down-to-line" :label="c.hero.download" />
          <UButton :to="to('/docs')" size="xl" color="neutral" variant="outline" icon="i-lucide-book-open" :label="c.hero.docsCta" />
        </div>
        <p class="hero__note">
          <UIcon name="i-lucide-check" class="hero__note-icon" />
          {{ c.hero.note }}
        </p>
      </div>

      <ul class="hero__problems" :aria-label="c.hero.problemsLabel">
        <li v-for="(p, i) in c.hero.problems" :key="p.problem" class="problem">
          <span class="problem__icon"><UIcon :name="problemIcons[i]!" /></span>
          <span class="problem__text">
            <s class="problem__pain">{{ p.problem }}</s>
            <span class="problem__fix">{{ p.answer }}</span>
          </span>
        </li>
      </ul>

      <div class="hero__stage">
        <ScreenShot id="run" eager />
        <ul class="hero__chips" aria-hidden="true">
          <li v-for="(chip, i) in c.hero.chips" :key="chip" class="chip" :class="`chip--${i}`">
            <UIcon :name="chipIcons[i]!" class="chip__icon" />
            {{ chip }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.hero {
  position: relative;
  overflow: hidden;
  padding: 72px 0 24px;

  @include below(lg) {
    padding-top: 44px;
  }

  // Airy keeps the canvas calm: only a faint lift of light behind the title.
  &__glow {
    position: absolute;
    inset: -10% -10% auto;
    height: 720px;
    background: radial-gradient(46% 50% at 50% 0%, color-mix(in srgb, var(--surface-raised) 70%, transparent), transparent 72%);
    pointer-events: none;
  }

  &__intro {
    max-width: 860px;
    margin: 0 auto;
    text-align: center;
  }

  &__badges {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin-bottom: 28px;

    @include below(sm) {
      margin-bottom: 20px;
    }
  }

  &__audience {
    text-wrap: balance;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 14px;
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.01em;
  }

  &__title {
    margin-bottom: 22px;
    font-size: clamp(36px, 6vw, 68px);
    line-height: 1.04;
    letter-spacing: -0.035em;
    text-wrap: balance;
    overflow-wrap: break-word;
  }

  &__title-soft {
    display: block;
    color: var(--text-muted);
  }

  &__sub {
    max-width: 44em;
    margin: 0 auto 30px;
    color: var(--text-secondary);
    font-size: clamp(16.5px, 2vw, 19px);
    text-wrap: pretty;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  &__note {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    color: var(--text-muted);
    font-size: 13.5px;
  }

  &__note-icon {
    flex: none;
    color: var(--safe-text);
  }

  &__problems {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    max-width: 1000px;
    margin: 48px auto 0;
    padding: 0;
    list-style: none;

    @include below(md) {
      grid-template-columns: minmax(0, 1fr);
      max-width: 520px;
      gap: 10px;
    }
  }

  &__stage {
    position: relative;
    max-width: 1080px;
    margin: 56px auto 0;

    @include below(sm) {
      margin-top: 32px;
    }

    :deep(.shot) {
      box-shadow: var(--shadow-lg), 0 40px 80px -40px rgb(20 30 25 / 0.18);
    }
  }

  &__chips {
    margin: 0;
    padding: 0;
    list-style: none;

    @include below(md) {
      display: none;
    }
  }
}

.problem {
  display: flex;
  @include card;

  gap: 14px;
  align-items: flex-start;
  padding: 18px 20px;
  text-align: left;

  &__icon {
    display: grid;
    flex: none;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: var(--round-pill);
    background: var(--accent-soft);
    color: var(--accent-text);
  }

  &__text {
    display: grid;
    gap: 3px;
  }

  &__pain {
    color: var(--text-muted);
    font-size: 13px;
    text-decoration-color: color-mix(in oklch, var(--live-text) 70%, transparent);
    text-decoration-thickness: 1.5px;
  }

  &__fix {
    color: var(--text-primary);
    font-size: 14.5px;
    font-weight: 600;
    line-height: 1.35;
  }
}

.chip {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: var(--round-pill);
  background: var(--surface-raised);
  box-shadow: var(--shadow-lg);
  color: var(--text-primary);
  font-size: 13.5px;
  font-weight: 600;
  white-space: nowrap;
  animation: float 6s ease-in-out infinite;

  &__icon {
    color: var(--safe-text);
  }

  &--0 {
    top: 18%;
    left: -28px;
  }

  &--1 {
    top: 46%;
    right: -32px;
    animation-delay: -2s;

    .chip__icon {
      color: var(--accent-text);
    }
  }

  &--2 {
    bottom: 12%;
    left: 6%;
    animation-delay: -4s;
  }

  @include reduced-motion {
    animation: none;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 13px;
  border-radius: var(--round-pill);
  background: var(--surface-raised);
  box-shadow: var(--shadow-sm), 0 0 0 1px var(--border);
  color: var(--text-secondary);
  font-size: 12.5px;
  font-weight: 500;

  &__dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-soft);
  }

  // The platform and the agents are in the note and the audience line too; phones skip them here.
  &--wide {
    @include below(sm) {
      display: none;
    }
  }

  &--link {
    transition: background-color 0.15s ease, color 0.15s ease;

    &:hover {
      background: var(--surface-hover);
      color: var(--text-primary);
    }
  }
}
</style>
