// Absolute URLs for SEO tags. The site may be served under a sub-path (GitHub Pages serves it from
// /<repo>/), so every URL is origin + app base path + page path.
export function useSiteUrl() {
  const { app, public: { i18n } } = useRuntimeConfig()
  const origin = String(i18n.baseUrl || 'https://monoone-dev.github.io').replace(/\/$/, '')
  const base = app.baseURL.replace(/\/$/, '')

  /** `path` is a router path ('/pl/docs/') or a file in public/ ('og-image.png'). */
  const absolute = (path: string) => `${origin}${base}/${path.replace(/^\//, '')}`
  /** A file in public/, relative to the base path, for <link> and <img>. */
  const asset = (file: string) => `${base}/${file.replace(/^\//, '')}`

  return { absolute, asset }
}
