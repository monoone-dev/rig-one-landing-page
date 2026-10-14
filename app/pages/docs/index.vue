<script setup lang="ts">
import docs from '#docs'
import notes from '#release-notes'

const c = useContent()
const { locale } = useI18n()
const { absolute } = useSiteUrl()
const localePath = useLocalePath()
const router = useRouter()

const byId = new Map(docs.pages.map(p => [p.id, p]))
const tutorial = docs.pages.find(p => p.title.startsWith('Tutorial'))
const groups = docs.groups.map(g => ({ title: g.title, pages: g.pages.map(id => byId.get(id)!) }))

// The guide used to be one page: an old link such as /docs/#safety-model opens its page now.
// A full load, so the browser itself jumps to a heading further down that page.
onMounted(() => {
  const hash = decodeURIComponent(location.hash.slice(1))
  const target = hash && docs.pages.find(p => p.id === hash || p.toc.some(h => h.id === hash))
  if (target) location.replace(router.resolve(localePath(`/docs/${target.id}`)).href + (hash === target.id ? '' : `#${hash}`))
})

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
    'articleSection': docs.pages.map(p => p.title),
    'image': absolute('og-image.png'),
    ...(notes[0] ? { dateModified: notes[0].date } : {}),
  }],
})
</script>

<template>
  <DocsLayout>
    <header class="intro">
      <span class="eyebrow eyebrow--accent">{{ c.docs.eyebrow }}</span>
      <h1>{{ c.docs.title }}</h1>
      <p class="intro__lead">
        {{ c.docs.lead }}
      </p>
      <UButton
        v-if="tutorial"
        :to="localePath(`/docs/${tutorial.id}`)"
        :label="c.docs.tutorial"
        trailing-icon="i-lucide-arrow-right"
        size="lg"
        class="intro__start"
      />
      <p v-if="locale !== 'en'" class="intro__note">
        <UIcon name="i-lucide-languages" class="size-4 shrink-0" />
        {{ c.docs.englishNote }}
      </p>
    </header>

    <section v-for="g in groups" :key="g.title" class="group" lang="en" :aria-label="g.title">
      <h2 class="group__title">
        {{ g.title }}
      </h2>
      <ul class="group__pages">
        <li v-for="p in g.pages" :key="p.id">
          <NuxtLink class="card" :to="localePath(`/docs/${p.id}`)">
            <span class="card__title">
              {{ p.title }}
              <UIcon name="i-lucide-arrow-right" class="card__arrow size-4 shrink-0" />
            </span>
            <span class="card__summary">{{ p.summary }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </DocsLayout>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.intro {
  display: grid;
  justify-items: start;
  gap: 12px;
  margin-bottom: 40px;

  h1 {
    margin: 2px 0 0;
    font-size: clamp(32px, 4.5vw, 46px);
    line-height: 1.08;
    letter-spacing: -0.03em;
  }

  &__lead {
    max-width: 38em;
    color: var(--text-secondary);
    font-size: clamp(16px, 1.8vw, 18px);
  }

  &__start {
    margin-top: 10px;
  }

  &__note {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-muted);
    font-size: 14px;
  }
}

.group {
  margin-top: 32px;

  &__title {
    margin: 0 0 12px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__pages {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 17rem), 1fr));
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
}

.card {
  display: grid;
  align-content: start;
  gap: 6px;
  height: 100%;
  padding: 16px 18px;
  border: 1px solid var(--border);
  border-radius: var(--round-md);
  background: var(--surface-raised);
  text-decoration: none;
  transition: border-color 0.15s, background-color 0.15s;

  &:hover {
    border-color: var(--accent-ring);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-ring);
    outline-offset: 2px;
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    color: var(--text-primary);
    font-weight: 600;
  }

  &__arrow {
    color: var(--text-muted);
    transition: transform 0.15s, color 0.15s;
  }

  &:hover &__arrow {
    color: var(--accent-text);
    transform: translateX(2px);
  }

  &__summary {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.5;
  }

  @include reduced-motion {
    &,
    &__arrow {
      transition: none;
    }
  }
}
</style>
