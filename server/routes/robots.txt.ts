// Crawlers read robots.txt only at the root of a host. While the site lives under a GitHub Pages
// sub-path this file is informational; it takes effect once a custom domain serves the site at "/".
export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return `User-agent: *\nAllow: /\n\nSitemap: ${siteRoot(event)}/sitemap.xml\n`
})
