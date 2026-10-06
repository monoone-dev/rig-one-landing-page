// Copy lives in i18n/content/<code>.ts (loaded by app/plugins/content.ts), so vue-i18n gets one
// empty bundle per language and only handles routing, detection and hreflang.
const localeFile = { path: 'bundled.ts', cache: false }

const locales = [
  { code: 'en', language: 'en-US', name: 'English', file: localeFile },
  { code: 'pl', language: 'pl-PL', name: 'Polski', file: localeFile },
  { code: 'es', language: 'es-ES', name: 'Español', file: localeFile },
  { code: 'it', language: 'it-IT', name: 'Italiano', file: localeFile },
  { code: 'fr', language: 'fr-FR', name: 'Français', file: localeFile },
  { code: 'pt', language: 'pt-BR', name: 'Português', file: localeFile },
  { code: 'de', language: 'de-DE', name: 'Deutsch', file: localeFile },
  { code: 'zh', language: 'zh-CN', name: '简体中文', file: localeFile },
  { code: 'ja', language: 'ja-JP', name: '日本語', file: localeFile },
]

const pages = ['/', '/features/', '/docs/', '/compare/', '/changelog/']

const localizedRoutes = locales.flatMap(({ code }) =>
  pages.map(page => (code === 'en' ? page : `/${code}${page}`)),
)

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
  devtools: { enabled: false },
  telemetry: false,

  ui: {
    // Fonts are self-hosted from public/assets/fonts: no third-party requests
    fonts: false,
    theme: { colors: ['primary', 'neutral'] },
    experimental: { componentDetection: true },
  },

  // English is the default (no prefix); other languages live under /pl/, /es/, ...
  // The first visit follows the browser language, then the choice is kept in a cookie.
  i18n: {
    // Origin only; GitHub Pages serves the site under /<repo>/ and Nuxt adds that base path.
    // The deploy sets NUXT_PUBLIC_I18N_BASE_URL to the Pages origin.
    baseUrl: 'https://monoone-dev.github.io',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    trailingSlash: true,
    locales,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'rig-one-locale',
      cookieCrossOrigin: false,
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'en',
    },
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    storageKey: 'rig-one-theme',
  },

  icon: {
    mode: 'svg',
    provider: 'none',
    fallbackToApi: false,
    serverBundle: 'local',
    clientBundle: {
      scan: { globInclude: ['app/**/*.{vue,ts}'] },
      sizeLimitKb: 0,
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'color-scheme', content: 'light dark' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },

  experimental: {
    appManifest: false,
    payloadExtraction: false,
  },

  features: {
    inlineStyles: true,
  },

  // `pnpm generate` (GitHub Pages) prerenders every page in every language
  nitro: {
    prerender: {
      routes: [...localizedRoutes, '/sitemap.xml', '/robots.txt'],
      crawlLinks: false,
      failOnError: true,
    },
  },

  vite: {
    build: { assetsInlineLimit: 0 },
  },

  typescript: { strict: true },
})
