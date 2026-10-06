<script setup lang="ts">
import notes from '#release-notes'
import { site } from '~/data/site'

const c = useContent()
const { locale } = useI18n()

usePageSeo({
  path: '/changelog',
  meta: () => c.value.meta.changelog,
})

const versionUi = {
  root: 'flex items-start scroll-mt-24',
  container: 'max-w-2xl min-w-0 flex-1',
  header: 'border-b border-default pb-4',
  title: 'text-3xl',
  date: 'text-xs/9 text-highlighted font-mono',
  indicator: 'sticky top-24 shrink-0',
}
</script>

<template>
  <main id="main" class="changelog">
    <header class="changelog__hero">
      <div class="changelog__intro">
        <span class="eyebrow eyebrow--accent">{{ c.changelog.eyebrow }}</span>
        <h1>{{ c.changelog.title }}</h1>
        <p>{{ c.changelog.lead }}</p>
        <div class="changelog__actions">
          <UButton :to="site.links.download" external target="_blank" size="lg" icon="i-lucide-arrow-down-to-line" :label="c.changelog.download" />
          <UButton :to="site.links.releases" external target="_blank" size="lg" color="neutral" variant="outline" icon="i-simple-icons-github" :label="c.changelog.github" />
        </div>
        <p v-if="locale !== 'en'" class="changelog__note">
          <UIcon name="i-lucide-languages" class="size-4 shrink-0" />
          {{ c.changelog.englishNote }}
        </p>
      </div>
    </header>

    <section class="changelog__list" lang="en">
      <UChangelogVersions :ui="{ root: 'py-14 sm:py-20', indicator: 'inset-y-0' }">
        <UChangelogVersion
          v-for="(note, index) in notes"
          :id="note.tag"
          :key="note.tag"
          :title="note.version"
          :date="note.date"
          :badge="index === 0 ? { label: c.changelog.latest, color: 'primary', variant: 'subtle' } : undefined"
          :ui="versionUi"
        >
          <template #body>
            <!-- eslint-disable-next-line vue/no-v-html -- built from this repository's release-notes/*.md -->
            <div class="md changelog__notes" v-html="note.html" />
          </template>
        </UChangelogVersion>
      </UChangelogVersions>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.changelog {
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  }

  &__hero {
    display: flex;
    align-items: center;
    padding: 64px 24px 56px;
    border-bottom: 1px solid var(--border-subtle);

    @include below(xs) {
      padding: 44px 16px 40px;
    }

    @media (min-width: 1280px) {
      position: sticky;
      top: 64px;
      height: calc(100vh - 64px);
      padding: 0 56px;
      border-right: 1px solid var(--border-subtle);
      border-bottom: 0;
    }
  }

  &__intro {
    max-width: 520px;
    margin: 0 auto;

    @media (min-width: 1280px) {
      margin: 0 0 0 auto;
    }

    h1 {
      margin: 14px 0 16px;
      font-size: clamp(34px, 5vw, 52px);
      line-height: 1.08;
      letter-spacing: -0.03em;
    }

    > p {
      color: var(--text-secondary);
      font-size: clamp(16px, 1.8vw, 17px);
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
  }

  &__note {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    color: var(--text-muted) !important;
    font-size: 14px !important;
  }

  &__list {
    padding: 0 24px;

    @include below(xs) {
      padding: 0 16px;
    }

    @media (min-width: 1280px) {
      padding: 0 56px 0 24px;
    }
  }

  &__notes {
    margin-top: 20px;
    font-size: 15px;
  }
}
</style>
