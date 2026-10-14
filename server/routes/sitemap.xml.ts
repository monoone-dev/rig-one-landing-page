import docs from '#docs'
import notes from '#release-notes'

// Screenshots shown on a page, for Google Images (dark versions; the light ones are the same screens)
const homeShots = ['run', 'canvas', 'agents', 'workflows', 'settings']
const pageImages: Record<string, string[]> = {
  '/': homeShots.map(id => `screenshots/${id}.webp`),
  '/features/': ['run', 'canvas', 'agents'].map(id => `screenshots/${id}.webp`),
  ...Object.fromEntries(docs.pages.map(p => [`/docs/${p.id}/`, [...new Set(p.toc.flatMap(h => h.image ?? []))]])),
}

export default defineEventHandler((event) => {
  const root = siteRoot(event)
  const url = (code: string, page: string) => `${root}${code === 'en' ? page : `/${code}${page}`}`
  const lastmod = notes[0]?.date

  const entries = sitemapPages.flatMap(page => sitemapLocales.map(({ code }) => {
    const alternates = sitemapLocales
      .map(l => `    <xhtml:link rel="alternate" hreflang="${l.language}" href="${url(l.code, page)}"/>`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url('en', page)}"/>`)
      .join('\n')
    // Every page describes the latest release, so it last changed when that release did
    const modified = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''
    const images = (pageImages[page] ?? [])
      .map(file => `\n    <image:image><image:loc>${root}/${file}</image:loc></image:image>`)
      .join('')
    return `  <url>\n    <loc>${url(code, page)}</loc>${modified}\n${alternates}${images}\n  </url>`
  }))

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries.join('\n')}\n</urlset>\n`
})
