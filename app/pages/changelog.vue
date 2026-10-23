<script setup lang="ts">
import notes from '#release-notes'
import { site } from '~/data/site'

// The layout of SurfaceOne's changelog template: the versions in a sticky list on the left, the
// releases on a timeline (version and date | rail with a dot | notes), a filter above them, and
// the newest few first. Every release is in the generated HTML; the older ones are only hidden.

type Filter = 'all' | 'feature' | 'patch'

/** Releases shown before "Show older releases". */
const PAGE = 5

const c = useContent()
const { locale } = useI18n()

usePageSeo({
  path: '/changelog',
  meta: () => c.value.meta.changelog,
})

const latest = notes[0]
/** x.y.0 brings features; a patch release (x.y.z, z > 0) only fixes. */
const isPatch = (version: string) => !version.endsWith('.0')

const filter = ref<Filter>('all')
const showAll = ref(false)
const filters = computed(() => [
  { value: 'all' as const, label: c.value.changelog.all },
  { value: 'feature' as const, label: c.value.changelog.featureReleases },
  { value: 'patch' as const, label: c.value.changelog.patchReleases },
])

const matching = computed(() => notes.filter(n =>
  filter.value === 'all' || (filter.value === 'patch') === isPatch(n.version)))
const shown = computed(() => showAll.value ? matching.value : matching.value.slice(0, PAGE))
const hasMore = computed(() => !showAll.value && matching.value.length > PAGE)
const isShown = (tag: string) => shown.value.some(n => n.tag === tag)

const dateLabel = computed(() => {
  const format = new Intl.DateTimeFormat(locale.value, { dateStyle: 'medium', timeZone: 'UTC' })
  return (date: string) => format.format(new Date(`${date}T00:00:00Z`))
})

/** The release being read, highlighted in the versions list. */
const active = ref(latest?.tag ?? '')
const root = ref<HTMLElement | null>(null)
/** Set while a jump scrolls, so the releases passed on the way are not highlighted. */
let jumping = false

async function jump(tag: string, event?: Event) {
  event?.preventDefault()
  if (!isShown(tag)) {
    if (!matching.value.some(n => n.tag === tag)) filter.value = 'all'
    showAll.value = true
    await nextTick()
  }
  const heading = document.getElementById(tag)
  if (!heading) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  heading.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  heading.focus({ preventScroll: true })
  history.replaceState(history.state, '', `#${tag}`)
  active.value = tag
  jumping = true
  const done = () => (jumping = false)
  document.addEventListener('scrollend', done, { once: true, capture: true })
  setTimeout(done, 1000)
}

// Browser only: follow the scroll, again whenever the shown releases change.
let observer: IntersectionObserver | null = null
watch([root, shown], () => {
  observer?.disconnect()
  if (typeof IntersectionObserver === 'undefined' || !root.value) return
  observer = new IntersectionObserver((entries) => {
    const hit = entries.find(e => e.isIntersecting)
    const tag = (hit?.target as HTMLElement | undefined)?.dataset.tag
    if (tag && !jumping) active.value = tag
  }, { rootMargin: '-80px 0px -70% 0px' })
  root.value.querySelectorAll('.release').forEach(el => observer?.observe(el))
}, { flush: 'post' })

onMounted(() => {
  // A link to an older release (/changelog#v1.1.0) opens it even though it starts hidden.
  const tag = decodeURIComponent(location.hash.slice(1))
  if (tag && notes.some(n => n.tag === tag) && !isShown(tag)) jump(tag)
})
onBeforeUnmount(() => observer?.disconnect())

const copied = ref('')
let copiedTimer: ReturnType<typeof setTimeout> | undefined
async function copy(tag: string, sha256: string) {
  try {
    await navigator.clipboard.writeText(sha256)
    copied.value = tag
    clearTimeout(copiedTimer)
    copiedTimer = setTimeout(() => (copied.value = ''), 2000)
  }
  catch {
    // No clipboard (an insecure context or a refused permission): the checksum stays selectable.
  }
}
</script>

<template>
  <main id="main" ref="root" class="changelog">
    <div class="wrap changelog__layout">
      <nav class="versions" aria-labelledby="versions-title">
        <p id="versions-title" class="versions__title">
          {{ c.changelog.versions }}
        </p>
        <ol class="versions__list">
          <li v-for="n in matching" :key="n.tag">
            <a
              class="versions__link"
              :href="`#${n.tag}`"
              :aria-current="active === n.tag ? 'location' : undefined"
              @click="jump(n.tag, $event)"
            >
              <span class="versions__num">v{{ n.version }}</span>
              <time class="versions__date" :datetime="n.date">{{ dateLabel(n.date) }}</time>
            </a>
          </li>
        </ol>
      </nav>

      <div class="changelog__main">
        <header class="head">
          <span class="eyebrow eyebrow--accent">{{ c.changelog.eyebrow }}</span>
          <h1>{{ c.changelog.title }}</h1>
          <p class="head__lead">
            {{ c.changelog.lead }}
          </p>
          <div class="head__actions">
            <UButton :to="site.links.download" external target="_blank" icon="i-lucide-arrow-down-to-line" :label="c.changelog.download" />
            <UButton :to="site.links.releases" external target="_blank" color="neutral" variant="outline" icon="i-simple-icons-github" :label="c.changelog.github" />
          </div>
          <p v-if="locale !== 'en'" class="head__note">
            <UIcon name="i-lucide-languages" class="size-4 shrink-0" />
            {{ c.changelog.englishNote }}
          </p>
        </header>

        <div class="toolbar">
          <div class="segmented" role="group" :aria-label="c.changelog.show">
            <button
              v-for="f in filters"
              :key="f.value"
              type="button"
              class="segmented__option"
              :aria-pressed="filter === f.value"
              @click="filter = f.value"
            >
              {{ f.label }}
            </button>
          </div>
          <p class="toolbar__count" role="status">
            {{ c.changelog.count }} {{ matching.length }}
          </p>
        </div>

        <ol class="timeline">
          <li
            v-for="n in matching"
            v-show="isShown(n.tag)"
            :key="n.tag"
            class="release"
            :class="{ 'release--end': n.tag === shown.at(-1)?.tag }"
            :data-tag="n.tag"
            :data-latest="n === latest ? '' : undefined"
          >
            <div class="release__when">
              <span class="release__version">v{{ n.version }}</span>
              <time :datetime="n.date">{{ dateLabel(n.date) }}</time>
              <UBadge v-if="n === latest" color="primary" variant="subtle" size="sm" :label="c.changelog.latest" />
            </div>
            <span class="release__dot" aria-hidden="true" />
            <article class="release__body" :aria-labelledby="n.tag" lang="en">
              <h2 :id="n.tag" class="release__title" tabindex="-1">
                <span class="sr-only">v{{ n.version }}: </span>{{ n.title }}
              </h2>
              <!-- eslint-disable-next-line vue/no-v-html -- built from this repository's release-notes/*.md -->
              <div class="md release__notes" v-html="n.html" />

              <section v-if="n.package" class="package" :lang="locale" :aria-label="`${c.changelog.package}: ${n.package.file}`">
                <div class="package__head">
                  <UIcon name="i-lucide-package" class="size-4 shrink-0" />
                  <span class="package__label">{{ c.changelog.package }}</span>
                  <code class="package__file">{{ n.package.file }}</code>
                </div>
                <div class="package__sum">
                  <span class="package__algo">SHA-256</span>
                  <code class="package__hash">{{ n.package.sha256 }}</code>
                  <UButton
                    size="xs"
                    color="neutral"
                    variant="ghost"
                    :icon="copied === n.tag ? 'i-lucide-check' : 'i-lucide-copy'"
                    :aria-label="copied === n.tag ? c.changelog.copied : c.changelog.copyChecksum"
                    :title="c.changelog.copyChecksum"
                    @click="copy(n.tag, n.package.sha256)"
                  />
                  <span class="sr-only" role="status">{{ copied === n.tag ? c.changelog.copied : '' }}</span>
                </div>
                <!-- eslint-disable-next-line vue/no-v-html -- built from this repository's release-notes/*.md -->
                <div v-if="n.package.noteHtml" class="md package__note" lang="en" v-html="n.package.noteHtml" />
              </section>
            </article>
          </li>
          <li v-if="matching.length === 0" class="timeline__empty">
            {{ c.changelog.empty }}
          </li>
        </ol>

        <div v-if="hasMore" class="more">
          <UButton color="neutral" variant="outline" icon="i-lucide-chevrons-down" :label="c.changelog.showOlder" @click="showAll = true" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.changelog {
  --rail: 9.5rem; // the timeline's date column
  --gutter: 2rem; // the column of the dots
  container-type: inline-size;
  padding: 64px 0 96px;

  @include below(xs) {
    padding: 40px 0 64px;
  }

  &__layout {
    display: grid;
    grid-template-columns: 9rem minmax(0, 1fr);
    align-items: start;
    gap: 40px;
  }

  &__main {
    min-width: 0;
  }
}

// Versions: jump to a release without scrolling
.versions {
  position: sticky;
  top: 88px;
  display: grid;
  gap: 8px;
  max-height: calc(100vh - 112px);
  overflow-y: auto;

  &__title {
    margin: 0;
    padding-left: 12px;
    color: var(--text-secondary);
    font-size: 13px;
    font-weight: 600;
  }

  &__list {
    display: grid;
    margin: 0;
    padding: 0;
    border-left: 1px solid var(--border-subtle);
    list-style: none;
  }

  &__link {
    display: grid;
    margin-left: -1px;
    padding: 5px 12px;
    border-left: 2px solid transparent;
    color: var(--text-secondary);
    text-decoration: none;

    &:hover {
      color: var(--text-primary);
    }

    &[aria-current='location'] {
      border-left-color: var(--accent);
      color: var(--accent-text);
    }
  }

  &__num {
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 500;
  }

  &__date {
    color: var(--text-muted);
    font-size: 12px;
  }
}

// Header
.head {
  display: grid;
  justify-items: start;
  gap: 10px;
  padding-left: calc(var(--rail) + var(--gutter));

  h1 {
    margin: 4px 0 0;
    font-size: clamp(32px, 4.5vw, 48px);
    line-height: 1.08;
    letter-spacing: -0.03em;
  }

  &__lead {
    max-width: 620px;
    color: var(--text-secondary);
    font-size: clamp(16px, 1.8vw, 17px);
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 8px;
  }

  &__note {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-muted);
    font-size: 14px;
  }
}

// Filter
.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 32px 0;
  padding: 12px 0 12px calc(var(--rail) + var(--gutter));
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);

  &__count {
    margin: 0;
    color: var(--text-secondary);
    font-size: 14px;
    font-variant-numeric: tabular-nums;
  }
}

.segmented {
  display: inline-flex;
  gap: 2px;
  padding: 4px;
  border-radius: var(--round-pill);
  background: var(--surface-active);

  &__option {
    padding: 5px 14px;
    border-radius: var(--round-pill);
    color: var(--text-muted);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: var(--text-primary);
    }

    &[aria-pressed='true'] {
      background: var(--surface-raised);
      color: var(--text-primary);
      box-shadow: 0 1px 3px rgb(26 29 27 / 0.08), 0 0 0 1px var(--border);
    }
  }
}

// Timeline: version and date | rail | notes
.timeline {
  margin: 0;
  padding: 0;
  list-style: none;

  &__empty {
    padding: 24px 0 24px calc(var(--rail) + var(--gutter));
    color: var(--text-secondary);
  }
}

.release {
  position: relative;
  display: grid;
  grid-template-columns: var(--rail) var(--gutter) minmax(0, 1fr);
  padding-bottom: 48px;

  // The rail: a line through every dot, stopping at the last one.
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    bottom: 0;
    left: calc(var(--rail) + var(--gutter) / 2 - 0.5px);
    width: 1px;
    background: var(--border);
  }

  &--end::before {
    display: none;
  }

  &__when {
    display: grid;
    justify-items: end;
    align-content: start;
    gap: 4px;
    padding-top: 2px;
    color: var(--text-secondary);
    font-size: 14px;
    text-align: right;
  }

  &__version {
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 14px;
    font-weight: 600;
  }

  &__dot {
    position: relative;
    justify-self: center;
    width: 12px;
    height: 12px;
    margin-top: 6px;
    border: 2px solid var(--text-muted);
    border-radius: 999px;
    background: var(--surface-base);
  }

  &[data-latest] &__dot {
    border-color: var(--accent);
    background: var(--accent);
    box-shadow: 0 0 0 4px var(--accent-soft);
  }

  &__body {
    display: grid;
    gap: 16px;
    min-width: 0;
  }

  &__title {
    margin: 0;
    scroll-margin-top: 96px;
    font-size: clamp(20px, 2.4vw, 24px);
    line-height: 1.25;
    letter-spacing: -0.015em;

    &:focus {
      outline: none;
    }
  }

  &__notes {
    font-size: 15px;
  }
}

// The signed DMG and its checksum, under each release's notes.
.package {
  display: grid;
  gap: 10px;
  padding: 18px 20px;
  border-radius: var(--round-xl);
  background: var(--surface-raised);
  box-shadow: var(--shadow-card);
  font-size: 14px;

  &__head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    color: var(--text-secondary);
  }

  &__label {
    font-weight: 600;
  }

  &__file {
    color: var(--text-primary);
    font-size: 13px;
    overflow-wrap: anywhere;
  }

  &__sum {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 10px;
  }

  &__algo {
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11.5px;
    font-weight: 600;
    letter-spacing: 0.06em;
  }

  &__hash {
    color: var(--text-secondary);
    font-size: 12.5px;
    overflow-wrap: anywhere;
    user-select: all;
  }

  &__note {
    color: var(--text-secondary);
    font-size: 13.5px;
  }
}

.more {
  display: flex;
  padding-left: calc(var(--rail) + var(--gutter));
}

// Medium: the versions become a scrollable row above the releases.
@container (max-width: 960px) {
  .changelog__layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }

  .versions {
    position: static;
    order: 1;
    max-height: none;

    &__title {
      padding-left: 0;
    }

    &__list {
      display: flex;
      gap: 4px;
      overflow-x: auto;
      border-bottom: 1px solid var(--border-subtle);
      border-left: 0;
    }

    &__link {
      margin: 0 0 -1px;
      border-bottom: 2px solid transparent;
      border-left: 0;
      white-space: nowrap;

      &[aria-current='location'] {
        border-bottom-color: var(--accent);
      }
    }
  }

  .changelog__main {
    display: contents;
  }

  .head {
    order: 0;
  }

  .toolbar,
  .timeline,
  .more {
    order: 2;
  }
}

// Narrow: version and date move above each release, the rail to the edge.
@container (max-width: 640px) {
  .head,
  .toolbar,
  .timeline__empty,
  .more {
    padding-left: 0;
  }

  .toolbar {
    margin: 8px 0 24px;
  }

  .release {
    grid-template-columns: 24px minmax(0, 1fr);
    grid-template-areas:
      'dot when'
      '. body';
    row-gap: 10px;
    padding-bottom: 40px;

    &::before {
      left: 11.5px;
    }

    &__when {
      display: flex;
      flex-wrap: wrap;
      grid-area: when;
      align-items: center;
      gap: 8px;
      text-align: left;
    }

    &__dot {
      grid-area: dot;
      justify-self: start;
      margin: 4px 0 0 6px;
    }

    &__body {
      grid-area: body;
    }
  }
}
</style>
