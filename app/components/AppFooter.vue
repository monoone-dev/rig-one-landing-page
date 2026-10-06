<script setup lang="ts">
import { site } from '~/data/site'

const c = useContent()
const to = useLocalLink()

const links = computed(() => [
  { label: c.value.nav.features, to: to('/features') },
  { label: c.value.nav.docs, to: to('/docs') },
  { label: c.value.nav.compare, to: to('/compare') },
  { label: c.value.nav.faq, to: to('/compare#faq') },
  { label: c.value.nav.changelog, to: to('/changelog') },
  { label: c.value.nav.issues, to: site.links.issues, external: true },
  { label: c.value.nav.github, to: site.links.repo, external: true },
])

const legal = computed(() => fill(c.value.footer.legalHtml, { year: 2026, org: site.organizationUrl, license: site.links.license }))
</script>

<template>
  <footer class="foot">
    <div class="wrap">
      <div class="foot__inner">
        <div class="foot__brand">
          <BrandMark :size="28" />
          <p>{{ c.footer.tagline }}</p>
        </div>
        <nav class="foot__links" :aria-label="c.common.footerNav">
          <NuxtLink v-for="link in links" :key="link.label" :to="link.to" :external="link.external" :target="link.external ? '_blank' : undefined">
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -- our own copy, see i18n/content -->
      <p class="foot__legal" v-html="legal" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.foot {
  position: relative;
  z-index: 1;
  padding: 44px 0 56px;
  border-top: 1px solid var(--border-subtle);

  &__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
  }

  &__brand p {
    margin-top: 8px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 12.5px;
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 24px;
    max-width: 640px;

    a {
      padding: 8px 0;
      color: var(--text-secondary);
      font-size: 14.5px;
      transition: color 0.15s;

      &:hover {
        color: var(--text-primary);
      }

      @include coarse-pointer {
        padding: 12px 4px;
      }
    }
  }

  &__legal {
    margin-top: 28px;
    color: var(--text-muted);
    font-size: 13px;

    :deep(a) {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}
</style>
