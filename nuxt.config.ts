export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],

  colorMode: {
    preference: 'system',
    fallback: 'dark'
  },

  // English is the default (no prefix); other languages live under /pl, /es, ...
  // First visit to / follows the browser language, then the choice is kept in a cookie.
  i18n: {
    // Origin only (no path); the deploy sets NUXT_PUBLIC_I18N_BASE_URL to the Pages origin
    baseUrl: 'https://monoone.dev',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', language: 'en', name: 'English', file: 'en.json' },
      { code: 'pl', language: 'pl-PL', name: 'Polski', file: 'pl.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'it', language: 'it-IT', name: 'Italiano', file: 'it.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'pt', language: 'pt-BR', name: 'Português', file: 'pt.json' },
      { code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' },
      { code: 'zh', language: 'zh-CN', name: '简体中文', file: 'zh.json' },
      { code: 'ja', language: 'ja-JP', name: '日本語', file: 'ja.json' }
    ],
    // Any browser language we don't support (and any missing key) falls back to English
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
      fallbackLocale: 'en'
    }
  },

  // `pnpm generate` (GitHub Pages) prerenders every language as a static page.
  nitro: {
    prerender: {
      routes: ['/', '/pl', '/es', '/it', '/fr', '/pt', '/de', '/zh', '/ja']
    }
  },

  compatibilityDate: '2026-10-01',

  typescript: {
    strict: true
  }
})
