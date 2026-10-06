<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { site } from '~/data/site'

const c = useContent()
const to = useLocalLink()
const language = useLanguageMenu()
const theme = useThemeMenu()

const links = computed(() => [
  { label: c.value.nav.features, to: to('/features') },
  { label: c.value.nav.docs, to: to('/docs') },
  { label: c.value.nav.compare, to: to('/compare') },
  { label: c.value.nav.changelog, to: to('/changelog') },
])

// Tablets: the links move into a menu; language, theme, GitHub and Download stay in the bar
const menuItems = computed<DropdownMenuItem[][]>(() => [links.value.map(link => ({ label: link.label, to: link.to }))])

// Phones: one menu holds everything
const mobileMenuItems = computed<DropdownMenuItem[][]>(() => [
  [...menuItems.value[0]!, { label: c.value.nav.github, icon: 'i-simple-icons-github', to: site.links.repo, external: true }],
  [
    { label: c.value.common.language, icon: language.icon.value, children: language.items.value },
    { label: c.value.theme.label, icon: theme.icon.value, children: theme.items.value },
  ],
  [{ label: c.value.nav.download, icon: 'i-lucide-arrow-down-to-line', to: site.links.download, external: true }],
])
</script>

<template>
  <header class="nav">
    <div class="wrap nav__inner">
      <BrandMark />
      <nav class="nav__links" :aria-label="c.common.primaryNav">
        <NuxtLink v-for="link in links" :key="link.label" :to="link.to" class="nav__link">
          {{ link.label }}
        </NuxtLink>
      </nav>
      <div class="nav__cta">
        <UDropdownMenu :items="menuItems" :content="{ align: 'end' }" :ui="{ content: 'min-w-48' }">
          <UButton color="neutral" variant="outline" icon="i-lucide-menu" :aria-label="c.common.primaryNav" class="nav__menu" />
        </UDropdownMenu>
        <UDropdownMenu :items="mobileMenuItems" :content="{ align: 'end' }" :ui="{ content: 'min-w-56' }">
          <UButton color="neutral" variant="outline" icon="i-lucide-menu" :aria-label="c.common.primaryNav" class="nav__menu-mobile" />
        </UDropdownMenu>
        <div class="nav__desktop-only">
          <UButton :to="site.links.repo" external target="_blank" color="neutral" variant="ghost" icon="i-simple-icons-github" :aria-label="c.nav.github" />
          <LanguageSelect />
          <ThemeMenu />
          <UButton :to="site.links.download" external target="_blank" icon="i-lucide-arrow-down-to-line" :label="c.nav.download" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.nav {
  position: sticky;
  top: 0;
  z-index: 40;
  border-bottom: 1px solid var(--border-subtle);
  background: color-mix(in oklch, var(--surface-base) 82%, transparent);
  backdrop-filter: saturate(1.4) blur(14px);
  -webkit-backdrop-filter: saturate(1.4) blur(14px);

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    height: 64px;

    @include below(xs) {
      height: 56px;
      padding: 0 16px;
    }
  }

  &__links {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 26px;
    min-width: 0;

    @media (max-width: 1023px) {
      display: none;
    }
  }

  &__link {
    padding: 10px 0;
    color: var(--text-secondary);
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
    transition: color 0.15s;

    &:hover,
    &.router-link-active {
      color: var(--text-primary);
    }
  }

  &__cta {
    display: flex;
    flex: none;
    align-items: center;
    gap: 8px;
  }

  &__menu {
    @media (min-width: 1024px) {
      display: none;
    }

    @include below(sm) {
      display: none;
    }
  }

  &__menu-mobile {
    @media (min-width: 641px) {
      display: none;
    }
  }

  &__desktop-only {
    display: flex;
    align-items: center;
    gap: 6px;

    @include below(sm) {
      display: none;
    }
  }
}
</style>
