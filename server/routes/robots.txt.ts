// Served at the root of rig-one.io, so crawlers read it; it points them at the sitemap.
export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return `User-agent: *\nAllow: /\n\nSitemap: ${siteRoot(event)}/sitemap.xml\n`
})
