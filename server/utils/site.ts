import type { H3Event } from 'h3'

// Keep in step with `i18n.locales` and the prerendered pages in nuxt.config.ts.
export const sitemapLocales = [
  { code: 'en', language: 'en-US' },
  { code: 'pl', language: 'pl-PL' },
  { code: 'es', language: 'es-ES' },
  { code: 'it', language: 'it-IT' },
  { code: 'fr', language: 'fr-FR' },
  { code: 'pt', language: 'pt-BR' },
  { code: 'de', language: 'de-DE' },
  { code: 'zh', language: 'zh-CN' },
  { code: 'ja', language: 'ja-JP' },
]

export const sitemapPages = ['/', '/features/', '/docs/', '/compare/', '/changelog/']

/** Origin + base path, e.g. https://monoone-dev.github.io/rig-one-landing-page */
export function siteRoot(event: H3Event) {
  const config = useRuntimeConfig(event)
  const origin = String((config.public.i18n as { baseUrl?: string }).baseUrl || 'https://monoone-dev.github.io').replace(/\/$/, '')
  return `${origin}${config.app.baseURL.replace(/\/$/, '')}`
}
