import notes from '#release-notes'

export default defineEventHandler((event) => {
  const root = siteRoot(event)
  const url = (code: string, page: string) => `${root}${code === 'en' ? page : `/${code}${page}`}`
  const lastmod = notes[0]?.date

  const entries = sitemapPages.flatMap(page => sitemapLocales.map(({ code }) => {
    const alternates = sitemapLocales
      .map(l => `    <xhtml:link rel="alternate" hreflang="${l.language}" href="${url(l.code, page)}"/>`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url('en', page)}"/>`)
      .join('\n')
    const modified = lastmod && page === '/changelog/' ? `\n    <lastmod>${lastmod}</lastmod>` : ''
    return `  <url>\n    <loc>${url(code, page)}</loc>${modified}\n${alternates}\n  </url>`
  }))

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`
})
