<script setup lang="ts">
import * as uiLocales from '@nuxt/ui/locale'
import { site } from '~/data/site'

const { locale } = useI18n()
const c = useContent()
const { asset } = useSiteUrl()

// <html lang>, canonical, hreflang alternates and og:locale for every language
const localeHead = useLocaleHead({ dir: false, lang: true, seo: true })
// Every page ends with a slash (trailingSlash, the sitemap, og:url), but Nuxt i18n leaves it off the
// home page, which would make "/" and "" two URLs for the same page.
const withSlash = <T,>(href: T) => (typeof href === 'string' && !href.endsWith('/') ? `${href}/` : href) as T
const localeLinks = computed(() => (localeHead.value.link ?? []).map(link => ({ ...link, href: withSlash(link.href) })))

useHead(() => ({
  htmlAttrs: { lang: localeHead.value.htmlAttrs?.lang },
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: asset('favicon.svg') },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: asset('favicon-32.png') },
    { rel: 'apple-touch-icon', href: asset('apple-touch-icon.png') },
    { rel: 'manifest', href: asset('site.webmanifest') },
    ...localeLinks.value,
  ],
  meta: [
    ...(localeHead.value.meta ?? []),
    { name: 'theme-color', content: '#fcfcfd', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: '#09090b', media: '(prefers-color-scheme: dark)' },
    { name: 'msapplication-TileColor', content: site.themeColor },
  ],
}))

// Nuxt UI's own strings (aria labels etc.); Chinese is Simplified
const uiLocale = computed(() => {
  const code = (locale.value === 'zh' ? 'zh_cn' : locale.value) as keyof typeof uiLocales
  return uiLocales[code] ?? uiLocales.en
})
</script>

<template>
  <UApp :locale="uiLocale">
    <a class="skip-link" href="#main">{{ c.common.skipToContent }}</a>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </UApp>
</template>
