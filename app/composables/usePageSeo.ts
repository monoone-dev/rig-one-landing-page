import notes from '#release-notes'
import { site } from '~/data/site'

// Title, description, Open Graph, Twitter and one JSON-LD graph per page.
// <html lang>, canonical and hreflang alternates come from Nuxt i18n (useLocaleHead in app.vue).

export interface SeoInput {
  /** Page path without the language prefix, e.g. '/docs'. */
  path: string
  meta: () => { title: string, description: string, breadcrumb?: string }
  schema?: () => Record<string, unknown>[]
}

export const stripTags = (html: string) => html.replace(/<[^>]+>/g, '')

export function usePageSeo(input: SeoInput) {
  const localePath = useLocalePath()
  const c = useContent()
  const { locale } = useI18n()
  const { absolute } = useSiteUrl()
  const image = absolute(site.ogImage)
  const url = computed(() => absolute(localePath(input.path)))

  useSeoMeta({
    title: () => input.meta().title,
    description: () => input.meta().description,
    robots: 'index, follow, max-image-preview:large',
    author: site.organization,
    applicationName: site.name,
    ogType: 'website',
    ogSiteName: site.name,
    ogUrl: () => url.value,
    ogTitle: () => input.meta().title,
    ogDescription: () => input.meta().description,
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageType: 'image/png',
    ogImageAlt: () => c.value.meta.ogImageAlt,
    twitterCard: 'summary_large_image',
    twitterTitle: () => input.meta().title,
    twitterDescription: () => input.meta().description,
    twitterImage: image,
    twitterImageAlt: () => c.value.meta.ogImageAlt,
  })

  useHead(() => {
    const page = input.meta()
    const home = absolute(localePath('/'))
    const graph: Record<string, unknown>[] = [
      {
        '@type': 'Organization',
        '@id': absolute('#organization'),
        'name': site.organization,
        'url': site.organizationUrl,
        'sameAs': [site.organizationGithub],
      },
      {
        '@type': 'WebSite',
        '@id': absolute('#website'),
        'name': site.name,
        'url': absolute('/'),
        'publisher': { '@id': absolute('#organization') },
        'inLanguage': ['en', 'pl', 'es', 'it', 'fr', 'pt-BR', 'de', 'zh-CN', 'ja'],
      },
      {
        '@type': 'WebPage',
        '@id': `${url.value}#webpage`,
        'url': url.value,
        'name': page.title,
        'description': page.description,
        'inLanguage': locale.value,
        'isPartOf': { '@id': absolute('#website') },
        'about': { '@id': absolute('#app') },
        'primaryImageOfPage': image,
      },
      ...(input.schema?.() ?? []),
    ]

    if (page.breadcrumb) {
      graph.push({
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': site.name, 'item': home },
          { '@type': 'ListItem', 'position': 2, 'name': page.breadcrumb, 'item': url.value },
        ],
      })
    }

    return {
      script: [{
        key: 'ld-json',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }],
    }
  })
}

/** The application itself, as schema.org sees it. */
export function useSoftwareApplicationSchema() {
  const { absolute } = useSiteUrl()
  const latest = notes[0]

  return (extra: Record<string, unknown> = {}) => ({
    '@type': 'SoftwareApplication',
    '@id': absolute('#app'),
    'name': site.name,
    'description': site.description,
    'url': absolute('/'),
    'image': absolute(site.ogImage),
    'applicationCategory': 'DeveloperApplication',
    'applicationSubCategory': 'Coding agent orchestration',
    'operatingSystem': `macOS ${site.minMacOS} or later`,
    'processorRequirements': 'Apple Silicon (arm64)',
    'downloadUrl': site.links.download,
    'releaseNotes': absolute('/changelog/'),
    ...(latest ? { softwareVersion: latest.version, datePublished: latest.date } : {}),
    'isAccessibleForFree': true,
    'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
    'publisher': { '@id': absolute('#organization') },
    ...extra,
  })
}
