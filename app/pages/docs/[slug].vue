<script setup lang="ts">
import docs from '#docs'
import notes from '#release-notes'
import { site } from '~/data/site'

// One "##" section of docs/user-guide.md (see modules/markdown.ts).

const c = useContent()
const route = useRoute()
const { locale } = useI18n()
const { absolute, asset } = useSiteUrl()
const localePath = useLocalePath()

const index = computed(() => docs.pages.findIndex(p => p.id === route.params.slug))
if (index.value < 0) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const page = computed(() => docs.pages[index.value]!)
const previous = computed(() => docs.pages[index.value - 1])
const next = computed(() => docs.pages[index.value + 1])
// Screenshots in the guide point at `__BASE__/screenshots/…` (modules/markdown.ts)
const html = computed(() => page.value.html.replaceAll('__BASE__/', asset('')))
const isTutorial = computed(() => page.value.title.startsWith('Tutorial'))
const help = computed(() => fill(c.value.docs.helpHtml, { issues: site.links.newIssue }))

usePageSeo({
  path: `/docs/${page.value.id}`,
  meta: () => ({
    title: `${page.value.title} — ${c.value.meta.docs.title}`,
    description: page.value.summary,
    breadcrumb: page.value.title,
  }),
  schema: () => [{
    '@type': 'TechArticle',
    'headline': page.value.title,
    'description': page.value.summary,
    'inLanguage': 'en',
    'url': absolute(localePath(`/docs/${page.value.id}`)),
    'isPartOf': { '@type': 'TechArticle', 'headline': 'Using RigOne', 'url': absolute(localePath('/docs')) },
    'about': { '@id': absolute('#app') },
    'publisher': { '@id': absolute('#organization') },
    'timeRequired': `PT${page.value.minutes}M`,
    'image': absolute(page.value.toc.find(h => h.image)?.image ?? 'og-image.png'),
    ...(notes[0] ? { dateModified: notes[0].date } : {}),
  }, ...(isTutorial.value ? [{
    '@type': 'HowTo',
    'name': page.value.title,
    'description': page.value.summary,
    'inLanguage': 'en',
    'url': absolute(localePath(`/docs/${page.value.id}`)),
    'totalTime': 'PT15M',
    'tool': [{ '@type': 'HowToTool', 'name': site.name }, { '@type': 'HowToTool', 'name': 'Claude Code or Codex' }],
    'step': page.value.toc.filter(step => step.title.startsWith('Step')).map((step, index) => ({
      '@type': 'HowToStep',
      'position': index + 1,
      'name': step.title.replace(/^Step \d+:\s*(.)/, (_, first: string) => first.toUpperCase()),
      'url': `${absolute(localePath(`/docs/${page.value.id}`))}#${step.id}`,
      'text': step.summary ?? step.title,
      ...(step.image ? { image: absolute(step.image) } : {}),
    })),
  }] : [])],
})
</script>

<template>
  <DocsLayout :current="page.id" :toc="page.toc">
    <article class="article" aria-labelledby="docs-title">
      <p class="crumbs">
        <NuxtLink :to="localePath('/docs')">
          {{ c.docs.eyebrow }}
        </NuxtLink>
        <UIcon name="i-lucide-chevron-right" class="size-3.5 shrink-0" />
        <span lang="en">{{ page.group }}</span>
      </p>
      <h1 id="docs-title" lang="en">
        {{ page.title }}
      </h1>
      <p class="meta">
        <UIcon name="i-lucide-clock" class="size-3.5 shrink-0" />
        {{ fill(c.docs.readTime, { minutes: page.minutes }) }}
      </p>
      <p v-if="locale !== 'en'" class="meta">
        <UIcon name="i-lucide-languages" class="size-3.5 shrink-0" />
        {{ c.docs.englishNote }}
      </p>

      <!-- eslint-disable-next-line vue/no-v-html -- built from this repository's docs/user-guide.md -->
      <div class="md article__body" lang="en" v-html="html" />

      <!-- eslint-disable-next-line vue/no-v-html -- our own copy, see i18n/content -->
      <p class="help" v-html="help" />

      <nav v-if="previous || next" class="pager" :aria-label="c.docs.pager">
        <NuxtLink v-if="previous" class="pager__link" :to="localePath(`/docs/${previous.id}`)">
          <span class="pager__hint">
            <UIcon name="i-lucide-arrow-left" class="size-3.5" /> {{ c.docs.previous }}
          </span>
          <span class="pager__title" lang="en">{{ previous.title }}</span>
        </NuxtLink>
        <NuxtLink v-if="next" class="pager__link pager__link--next" :to="localePath(`/docs/${next.id}`)">
          <span class="pager__hint">
            {{ c.docs.next }} <UIcon name="i-lucide-arrow-right" class="size-3.5" />
          </span>
          <span class="pager__title" lang="en">{{ next.title }}</span>
        </NuxtLink>
      </nav>
    </article>
  </DocsLayout>
</template>

<style lang="scss" scoped>
.crumbs {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 8px;
  color: var(--text-muted);
  font-size: 14px;

  a {
    color: var(--text-secondary);
    text-decoration: none;

    &:hover {
      color: var(--text-primary);
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}

h1 {
  margin: 0;
  font-size: clamp(30px, 4vw, 40px);
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin: 10px 0 0;
  color: var(--text-muted);
  font-size: 14px;
}

// The guide's "###" headings arrive as <h2>: sections of one page, not chapters of a long one.
.article__body {
  margin-top: 28px;

  :deep(h2) {
    margin: 40px 0 12px;
    padding-top: 0;
    border-top: 0;
    font-size: 22px;
  }

  :deep(h3) {
    font-size: 17px;
  }
}

.help {
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

.pager {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 24px;

  @container (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
  }

  &__link {
    display: grid;
    gap: 4px;
    padding: 16px;
    border: 1px solid var(--border);
    border-radius: var(--round-md);
    color: var(--text-primary);
    text-decoration: none;
    transition: border-color 0.15s, background-color 0.15s;

    &:hover {
      border-color: var(--accent-ring);
      background: var(--surface-hover);
    }

    &:focus-visible {
      outline: 2px solid var(--accent-ring);
      outline-offset: 2px;
    }

    &--next {
      grid-column: 2;
      text-align: right;

      @container (max-width: 560px) {
        grid-column: auto;
      }
    }
  }

  &__hint {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--text-secondary);
    font-size: 14px;
  }

  &__link--next &__hint {
    justify-content: flex-end;
  }

  &__title {
    font-weight: 600;
  }
}
</style>
