<script setup lang="ts">
import * as uiLocales from '@nuxt/ui/locale'
import { site } from '~/data/site'

const { t, locale } = useI18n()
const { app, public: { i18n } } = useRuntimeConfig()

// Works under a sub-path too (GitHub Pages serves the site from /<repo>/)
const asset = (file: string) => `${app.baseURL}${file}`
const absolute = (file: string) => `${(i18n.baseUrl as string).replace(/\/$/, '')}${asset(file)}`

// <html lang>, hreflang alternates and og:locale for every language
const i18nHead = useLocaleHead()

useHead(() => ({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs.lang },
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: asset('favicon.svg') },
    ...(i18nHead.value.link ?? [])
  ],
  meta: [
    ...(i18nHead.value.meta ?? []),
    { name: 'theme-color', content: '#fafafa', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: '#0a0a0a', media: '(prefers-color-scheme: dark)' }
  ]
}))

useSeoMeta({
  title: () => `${site.name} — ${t('meta.title')}`,
  description: () => t('meta.description'),
  ogTitle: site.name,
  ogDescription: () => t('meta.title'),
  ogImage: absolute('og-image.png'),
  twitterCard: 'summary_large_image'
})

// Nuxt UI's own strings (aria labels etc.); Chinese is Simplified
const uiLocale = computed(() => {
  const code = (locale.value === 'zh' ? 'zh_cn' : locale.value) as keyof typeof uiLocales
  return uiLocales[code] ?? uiLocales.en
})
</script>

<template>
  <UApp :locale="uiLocale">
    <AppHeader />
    <UMain>
      <NuxtPage />
    </UMain>
    <AppFooter />
  </UApp>
</template>
