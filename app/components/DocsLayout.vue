<script setup lang="ts">
import docs from '#docs'

// The layout of SurfaceOne's documentation template: the pages in groups on the left, filtered
// by a search field; the article in the middle; "On this page" on the right, following the
// scroll. Narrower, the outline folds above the article; on a phone the pages hide behind a button.

const props = defineProps<{
  /** The page being read; none on the overview. */
  current?: string
  toc?: { id: string, title: string }[]
}>()

const c = useContent()
const localePath = useLocalePath()
const route = useRoute()

const query = ref('')
const navOpen = ref(false)
const outlineOpen = ref(false)

const byId = new Map(docs.pages.map(p => [p.id, p]))

/** The navigation filtered by the search field, on titles and headings; empty groups drop out. */
const groups = computed(() => {
  const q = query.value.trim().toLowerCase()
  return docs.groups
    .map(g => ({
      id: `docs-group-${g.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      title: g.title,
      pages: g.pages.map(id => byId.get(id)!).filter(p => !q
        || p.title.toLowerCase().includes(q)
        || p.toc.some(h => h.title.toLowerCase().includes(q))),
    }))
    .filter(g => g.pages.length > 0)
})

watch(() => route.path, () => {
  navOpen.value = false
  outlineOpen.value = false
})

/** The heading being read, highlighted in the outline. */
const active = ref('')
const root = ref<HTMLElement | null>(null)
/** Set while a jump scrolls, so the headings passed on the way are not highlighted. */
let jumping = false

function jump(id: string, event: Event) {
  event.preventDefault()
  const heading = document.getElementById(id)
  if (!heading) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  heading.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  heading.focus({ preventScroll: true })
  history.replaceState(history.state, '', `#${id}`)
  active.value = id
  outlineOpen.value = false
  jumping = true
  const done = () => (jumping = false)
  document.addEventListener('scrollend', done, { once: true, capture: true })
  setTimeout(done, 1000)
}

// Browser only: follow the scroll, again on every page.
let observer: IntersectionObserver | null = null
watch([root, () => props.toc], () => {
  observer?.disconnect()
  active.value = props.toc?.[0]?.id ?? ''
  if (typeof IntersectionObserver === 'undefined' || !root.value || !props.toc?.length) return
  observer = new IntersectionObserver((entries) => {
    const hit = entries.find(e => e.isIntersecting)
    if (hit && !jumping) active.value = hit.target.id
  }, { rootMargin: '-80px 0px -70% 0px' })
  for (const h of props.toc) {
    const el = document.getElementById(h.id)
    if (el) observer.observe(el)
  }
}, { flush: 'post', immediate: true })
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <main id="main" ref="root" class="docs">
    <div class="wrap docs__layout" :class="{ 'docs__layout--outline': toc?.length }">
      <div class="docs__side">
        <UButton
          class="docs__menu"
          color="neutral"
          variant="outline"
          icon="i-lucide-panel-left"
          :label="c.docs.menu"
          aria-controls="docs-nav"
          :aria-expanded="navOpen"
          @click="navOpen = !navOpen"
        />
        <nav id="docs-nav" class="nav" :aria-label="c.docs.eyebrow" :data-open="navOpen ? '' : undefined">
          <UInput
            v-model="query"
            class="nav__search"
            type="search"
            icon="i-lucide-search"
            autocomplete="off"
            color="neutral"
            :placeholder="c.docs.search"
            :aria-label="c.docs.search"
          />
          <NuxtLink
            class="nav__link nav__link--overview"
            :to="localePath('/docs')"
            :aria-current="!current ? 'page' : undefined"
          >
            <UIcon name="i-lucide-book-open" class="size-4 shrink-0" />
            {{ c.docs.overview }}
          </NuxtLink>
          <div v-for="g in groups" :key="g.id" class="nav__group" lang="en">
            <p :id="g.id" class="nav__label">
              {{ g.title }}
            </p>
            <ul :aria-labelledby="g.id">
              <li v-for="p in g.pages" :key="p.id">
                <NuxtLink
                  class="nav__link"
                  :to="localePath(`/docs/${p.id}`)"
                  :aria-current="p.id === current ? 'page' : undefined"
                >
                  {{ p.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <p v-if="!groups.length" class="nav__empty" role="status">
            {{ c.docs.noMatches }}
          </p>
        </nav>
      </div>

      <nav v-if="toc?.length" class="toc" aria-labelledby="docs-outline-title">
        <p id="docs-outline-title" class="toc__title">
          {{ c.docs.onThisPage }}
        </p>
        <button
          type="button"
          class="toc__toggle"
          aria-controls="docs-outline-list"
          :aria-expanded="outlineOpen"
          @click="outlineOpen = !outlineOpen"
        >
          {{ c.docs.onThisPage }}
          <UIcon name="i-lucide-chevron-right" class="toc__caret size-4" />
        </button>
        <ol id="docs-outline-list" class="toc__list" lang="en" :data-open="outlineOpen ? '' : undefined">
          <li v-for="h in toc" :key="h.id">
            <a
              class="toc__link"
              :href="`#${h.id}`"
              :aria-current="active === h.id ? 'location' : undefined"
              @click="jump(h.id, $event)"
            >{{ h.title }}</a>
          </li>
        </ol>
      </nav>

      <div class="docs__main">
        <slot />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.docs {
  container-type: inline-size;
  padding: 48px 0 96px;

  @include below(xs) {
    padding: 24px 0 64px;
  }

  .wrap {
    max-width: 1280px;
  }

  &__layout {
    display: grid;
    grid-template-columns: 13rem minmax(0, 1fr);
    grid-template-areas: 'side main';
    align-items: start;
    gap: 48px;

    &--outline {
      grid-template-columns: 13rem minmax(0, 1fr) 11rem;
      grid-template-areas: 'side main outline';
    }
  }

  &__side {
    grid-area: side;
    position: sticky;
    top: 88px;
    max-height: calc(100vh - 112px);
    overflow-y: auto;
    // Room for the focus ring of the search field and the links.
    margin: -4px;
    padding: 4px;
  }

  &__menu {
    display: none;
  }

  &__main {
    grid-area: main;
    min-width: 0;
    max-width: 46rem;
  }
}

// Left: the pages, in groups
.nav {
  display: grid;
  gap: 20px;

  &__search {
    width: 100%;
  }

  &__group {
    display: grid;
    gap: 4px;

    ul {
      display: grid;
      gap: 1px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }

  &__label {
    margin: 0;
    padding-inline: 12px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 32px;
    padding: 5px 12px;
    border-radius: var(--round-sm);
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.35;
    text-decoration: none;
    transition: background-color 0.15s, color 0.15s;

    &:hover {
      background: var(--surface-hover);
      color: var(--text-primary);
    }

    &[aria-current='page'] {
      background: var(--accent-soft);
      color: var(--text-primary);
      font-weight: 600;
      box-shadow: inset 2px 0 0 var(--accent);
    }

    &:focus-visible {
      outline: 2px solid var(--accent-ring);
      outline-offset: 0;
    }

    @include reduced-motion {
      transition: none;
    }
  }

  &__empty {
    margin: 0;
    padding-inline: 12px;
    color: var(--text-secondary);
    font-size: 14px;
  }
}

// Right: "On this page"
.toc {
  grid-area: outline;
  position: sticky;
  top: 88px;
  max-height: calc(100vh - 112px);
  overflow-y: auto;

  &__title {
    margin: 0 0 10px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
  }

  &__toggle {
    display: none;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 14px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    &:focus-visible {
      outline: 2px solid var(--accent-ring);
      outline-offset: -2px;
      border-radius: var(--round-md);
    }
  }

  &__caret {
    transition: transform 0.15s;

    @include reduced-motion {
      transition: none;
    }
  }

  &__toggle[aria-expanded='true'] &__caret {
    transform: rotate(90deg);
  }

  &__list {
    display: grid;
    margin: 0;
    padding: 0;
    border-left: 1px solid var(--border-subtle);
    list-style: none;
  }

  &__link {
    display: block;
    margin-left: -1px;
    padding: 5px 12px;
    border-left: 2px solid transparent;
    color: var(--text-secondary);
    font-size: 13.5px;
    line-height: 1.4;
    text-decoration: none;

    &:hover {
      color: var(--text-primary);
    }

    &[aria-current='location'] {
      border-left-color: var(--accent);
      color: var(--accent-text);
      font-weight: 500;
    }
  }
}

// Narrower: the outline folds into a disclosure above the article.
@container (max-width: 1080px) {
  .docs__layout--outline {
    grid-template-columns: 13rem minmax(0, 1fr);
    grid-template-areas:
      'side outline'
      'side main';
    row-gap: 24px;
  }

  .toc {
    position: static;
    max-width: 46rem;
    max-height: none;
    border: 1px solid var(--border-subtle);
    border-radius: var(--round-md);

    &__title {
      display: none;
    }

    &__toggle {
      display: flex;
    }

    &__list {
      margin: 0 14px 12px;

      &:not([data-open]) {
        display: none;
      }
    }
  }
}

// Phone and tablet: the pages hide behind the Contents button.
@container (max-width: 760px) {
  .docs__layout,
  .docs__layout--outline {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: 'side' 'outline' 'main';
    row-gap: 16px;
  }

  .docs__side {
    position: static;
    max-height: none;
    overflow: visible;
  }

  .docs__menu {
    display: inline-flex;
  }

  .nav {
    margin-top: 12px;
    padding: 16px 12px;
    border: 1px solid var(--border-subtle);
    border-radius: var(--round-md);

    &:not([data-open]) {
      display: none;
    }
  }
}
</style>
