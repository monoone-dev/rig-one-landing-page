<script setup lang="ts">
import docs from '#docs'
import { site } from '~/data/site'

const c = useContent()
const { locale } = useI18n()
const { absolute } = useSiteUrl()
const localePath = useLocalePath()
const help = computed(() => fill(c.value.docs.helpHtml, { issues: site.links.newIssue }))

usePageSeo({
  path: '/docs',
  meta: () => c.value.meta.docs,
  schema: () => [{
    '@type': 'TechArticle',
    'headline': 'Using RigOne',
    'description': c.value.meta.docs.description,
    'inLanguage': 'en',
    'url': absolute(localePath('/docs')),
    'about': { '@id': absolute('#app') },
    'publisher': { '@id': absolute('#organization') },
    'articleSection': docs.toc.map(s => s.title),
  }],
})
</script>

<template>
  <main id="main" class="docs">
    <header class="docs__hero">
      <div class="wrap">
        <span class="eyebrow eyebrow--accent">{{ c.docs.eyebrow }}</span>
        <h1>{{ c.docs.title }}</h1>
        <p>{{ c.docs.lead }}</p>
        <p v-if="locale !== 'en'" class="docs__note">
          <UIcon name="i-lucide-languages" class="size-4 shrink-0" />
          {{ c.docs.englishNote }}
        </p>
      </div>
    </header>

    <div class="wrap docs__layout">
      <aside class="docs__toc">
        <nav :aria-label="c.docs.onThisPage">
          <p class="docs__toc-title">{{ c.docs.onThisPage }}</p>
          <ol>
            <li v-for="section in docs.toc" :key="section.id">
              <a :href="`#${section.id}`">{{ section.title }}</a>
            </li>
          </ol>
        </nav>
      </aside>

      <article class="docs__body" lang="en">
        <!-- eslint-disable-next-line vue/no-v-html -- built from this repository's docs/user-guide.md -->
        <div class="md" v-html="docs.html" />
        <!-- eslint-disable-next-line vue/no-v-html -- our own copy, see i18n/content -->
        <p class="docs__help" :lang="locale" v-html="help" />
      </article>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.docs {
  &__hero {
    padding: 72px 0 40px;
    border-bottom: 1px solid var(--border-subtle);

    @include below(sm) {
      padding: 48px 0 32px;
    }

    h1 {
      margin: 14px 0 14px;
      font-size: clamp(34px, 5vw, 52px);
      line-height: 1.08;
      letter-spacing: -0.03em;
    }

    p {
      max-width: 40em;
      color: var(--text-secondary);
      font-size: clamp(16px, 1.8vw, 18px);
    }
  }

  &__note {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    color: var(--text-muted) !important;
    font-size: 14px !important;
  }

  &__layout {
    display: grid;
    grid-template-columns: 220px minmax(0, 1fr);
    gap: 56px;
    padding-top: 8px;
    padding-bottom: 96px;

    @include below(md) {
      grid-template-columns: minmax(0, 1fr);
      gap: 0;
    }
  }

  &__toc {
    @include below(md) {
      display: none;
    }

    nav {
      position: sticky;
      top: 88px;
      padding-top: 48px;
    }

    ol {
      margin: 0;
      padding: 0;
      list-style: none;
      border-left: 1px solid var(--border);
    }

    a {
      display: block;
      margin-left: -1px;
      padding: 5px 0 5px 14px;
      border-left: 1px solid transparent;
      color: var(--text-secondary);
      font-size: 14px;
      transition: color 0.15s, border-color 0.15s;

      &:hover {
        border-left-color: var(--accent);
        color: var(--text-primary);
      }
    }
  }

  &__toc-title {
    margin-bottom: 10px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__body {
    max-width: 760px;
    padding-top: 8px;
  }

  &__help {
    margin-top: 48px;
    padding: 16px 20px;
    border: 1px solid var(--border);
    border-radius: var(--round-md);
    color: var(--text-secondary);
    font-size: 14.5px;

    :deep(a) {
      color: var(--accent-text);
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}
</style>
