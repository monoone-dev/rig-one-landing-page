<script setup lang="ts">
import notes from '#release-notes'
import { site } from '~/data/site'

// The first screen answers three questions before anything else: who RigOne is for (the
// audience line), what problem it solves (the title and the three problem → answer pairs) and
// what it is (the sub). Two real projects side by side follow, in the visitor's colour mode.
const c = useContent()
const to = useLocalLink()
const latest = notes[0]
const release = computed(() => latest ? fill(c.value.hero.badgeRelease, { version: latest.version }) : '')
const problemIcons = ['i-lucide-panels-top-left', 'i-lucide-git-branch', 'i-lucide-list-checks'] as const
const chipIcons = ['i-lucide-circle-check', 'i-lucide-columns-2', 'i-lucide-shield-check'] as const
</script>

<template>
  <section id="product" class="hero" aria-labelledby="hero-title">
    <div class="hero__aurora" aria-hidden="true">
      <span /><span /><span />
    </div>
    <div class="wrap">
      <div class="hero__intro">
        <div class="hero__badges rise" style="--rise: 0">
          <NuxtLink v-if="latest" :to="to(`/changelog#${latest.tag}`)" class="pill pill--link">
            <span class="pill__dot" /> {{ release }}
          </NuxtLink>
          <span class="pill pill--wide"><UIcon name="i-simple-icons-apple" /> {{ c.hero.badgePlatform }}</span>
          <span class="pill pill--wide"><UIcon name="i-lucide-git-compare-arrows" /> {{ c.hero.badgeAgents }}</span>
        </div>

        <p class="hero__audience rise" style="--rise: 1">
          <UIcon name="i-lucide-terminal" class="hero__audience-icon size-4 shrink-0" />
          {{ c.hero.audience }}
        </p>
        <h1 id="hero-title" class="hero__title rise" style="--rise: 2">
          {{ c.hero.titleStrong }} <span class="hero__title-soft text-gradient">{{ c.hero.titleSoft }}</span>
        </h1>
        <p class="hero__sub rise" style="--rise: 3">
          {{ c.hero.sub }}
        </p>

        <div class="hero__actions rise" style="--rise: 4">
          <UButton :to="site.links.download" external target="_blank" size="xl" icon="i-lucide-arrow-down-to-line" :label="c.hero.download" />
          <UButton :to="to('/docs')" size="xl" color="neutral" variant="outline" icon="i-lucide-book-open" :label="c.hero.docsCta" />
        </div>
        <p class="hero__note rise" style="--rise: 5">
          <UIcon name="i-lucide-check" class="hero__note-icon" />
          {{ c.hero.note }}
        </p>
      </div>

      <ul class="hero__problems" :aria-label="c.hero.problemsLabel">
        <li v-for="(p, i) in c.hero.problems" :key="p.problem" class="problem rise" :style="{ '--rise': 6 + i }">
          <span class="problem__icon"><UIcon :name="problemIcons[i]!" /></span>
          <span class="problem__text">
            <s class="problem__pain">{{ p.problem }}</s>
            <span class="problem__fix">{{ p.answer }}</span>
          </span>
        </li>
      </ul>

      <div class="hero__stage rise" style="--rise: 8">
        <div class="hero__halo" aria-hidden="true" />
        <div class="scroll-lean">
          <ScreenShot id="projects" eager />
        </div>
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

  // Three soft blooms of the mark's violet drift slowly behind the title, as on an Apple
  // product page: felt more than seen, and still when motion is reduced.
  &__aurora {
    position: absolute;
    inset: -240px 0 auto;
    height: 900px;
    overflow: hidden;
    pointer-events: none;
    mask-image: linear-gradient(to bottom, #000 40%, transparent);

    span {
      position: absolute;
      width: 640px;
      height: 640px;
      border-radius: 50%;
      background: radial-gradient(closest-side, color-mix(in oklch, var(--accent) 22%, transparent), transparent);
      filter: blur(30px);
      animation: drift 22s ease-in-out infinite alternate;

      &:nth-child(1) {
        top: 60px;
        left: calc(50% - 720px);
      }

      &:nth-child(2) {
        top: -40px;
        left: calc(50% + 40px);
        background: radial-gradient(closest-side, color-mix(in oklch, oklch(70% 0.16 250) 20%, transparent), transparent);
        animation-delay: -7s;
      }

      &:nth-child(3) {
        top: 260px;
        left: calc(50% - 260px);
        width: 520px;
        height: 520px;
        background: radial-gradient(closest-side, color-mix(in oklch, oklch(72% 0.15 330) 14%, transparent), transparent);
        animation-delay: -14s;
      }
    }

    @include reduced-motion {
      span {
        animation: none;
      }
    }
  }

  &__halo {
    position: absolute;
    inset: 8% 6% -4%;
    border-radius: 50%;
    background: radial-gradient(closest-side, color-mix(in oklch, var(--accent) 26%, transparent), transparent);
    filter: blur(50px);
    opacity: 0.8;
    pointer-events: none;
  }

  &__intro {
    max-width: 980px;
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

  &__audience-icon {
    @include below(sm) {
      display: none;
    }
  }

  &__title {
    margin-bottom: 24px;
    font-size: clamp(40px, 7vw, 80px);
    font-weight: 650;
    line-height: 1.02;
    letter-spacing: -0.045em;
    text-wrap: balance;
    overflow-wrap: break-word;
  }

  &__title-soft {
    display: block;
    padding-bottom: 0.06em;
  }

  &__sub {
    max-width: 40em;
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
    margin: 72px auto 0;

    @include below(sm) {
      margin-top: 36px;
    }

    :deep(.shot) {
      position: relative;
      box-shadow: var(--shadow-lg), 0 60px 120px -50px color-mix(in oklch, var(--accent) 45%, transparent);
    }
  }

  &__chips {
    position: absolute;
    inset: 0;
    margin: 0;
    pointer-events: none;
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

  transition: transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }

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
  background: color-mix(in srgb, var(--surface-raised) 78%, transparent);
  box-shadow: var(--shadow-lg), inset 0 0 0 1px var(--border);
  backdrop-filter: saturate(1.6) blur(16px);
  -webkit-backdrop-filter: saturate(1.6) blur(16px);
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

// The first screen arrives in order: badges, title, words, buttons, then the window.
.rise {
  animation: rise 1s var(--ease-out) backwards;
  animation-delay: calc(var(--rise, 0) * 70ms + 80ms);

  @include reduced-motion {
    animation: none;
  }
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(18px);
    filter: blur(8px);
  }

  to {
    opacity: 1;
    transform: none;
    filter: none;
  }
}

@keyframes drift {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }

  to {
    transform: translate3d(60px, 40px, 0) scale(1.12);
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
