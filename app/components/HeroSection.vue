<script setup lang="ts">
import notes from '#release-notes'
import { site } from '~/data/site'

const c = useContent()
const to = useLocalLink()
const latest = notes[0]
const release = computed(() => latest ? fill(c.value.hero.badgeRelease, { version: latest.version }) : '')
</script>

<template>
  <section id="product" class="hero" aria-labelledby="hero-title">
    <div class="wrap hero__grid">
      <div>
        <div class="hero__badges">
          <NuxtLink v-if="latest" :to="to(`/changelog#${latest.tag}`)" class="pill pill--link">
            <span class="pill__dot" /> {{ release }}
          </NuxtLink>
          <span class="pill"><UIcon name="i-simple-icons-apple" /> {{ c.hero.badgePlatform }}</span>
          <span class="pill"><UIcon name="i-lucide-git-compare-arrows" /> {{ c.hero.badgeAgents }}</span>
        </div>
        <h1 id="hero-title" class="hero__title">
          {{ c.hero.titleStrong }} <span class="hero__title-soft">{{ c.hero.titleSoft }}</span>
        </h1>
        <p class="hero__sub">{{ c.hero.sub }}</p>
        <div class="hero__actions">
          <UButton :to="site.links.download" external target="_blank" size="xl" icon="i-lucide-arrow-down-to-line" :label="c.hero.download" />
          <UButton :to="to('/docs')" size="xl" color="neutral" variant="outline" icon="i-lucide-book-open" :label="c.hero.docsCta" />
        </div>
        <p class="hero__note">
          <UIcon name="i-lucide-check" class="hero__note-icon" />
          {{ c.hero.note }}
        </p>
      </div>
      <RunIllustration :label="c.hero.illustrationLabel" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.hero {
  position: relative;
  padding: 88px 0 40px;

  @include below(lg) {
    padding-top: 48px;
  }

  &__grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
    gap: 56px;
    align-items: center;

    @include below(lg) {
      grid-template-columns: minmax(0, 1fr);
      gap: 40px;
    }
  }

  &__badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
  }

  &__title {
    margin-bottom: 24px;
    font-size: clamp(40px, 6.4vw, 72px);
    line-height: 1.02;
    letter-spacing: -0.04em;
    overflow-wrap: break-word;
  }

  &__title-soft {
    display: block;
    color: var(--text-muted);
    font-weight: 500;
  }

  &__sub {
    max-width: 34em;
    margin-bottom: 32px;
    color: var(--text-secondary);
    font-size: clamp(16.5px, 2vw, 19px);
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  &__note {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 18px;
    color: var(--text-muted);
    font-size: 13.5px;
  }

  &__note-icon {
    flex: none;
    color: var(--safe-text);
  }
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: var(--round-pill);
  background: var(--surface-raised);
  color: var(--text-secondary);
  font-size: 12.5px;
  font-weight: 500;

  &__dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
  }

  &--link {
    transition: border-color 0.15s ease, color 0.15s ease;

    &:hover {
      border-color: var(--accent-ring);
      color: var(--text-primary);
    }
  }
}
</style>
