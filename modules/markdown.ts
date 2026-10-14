import { readdirSync, readFileSync } from 'node:fs'
import { Marked, type Token, type Tokens } from 'marked'
import { addTemplate, addTypeTemplate, createResolver, defineNuxtModule, updateTemplates } from 'nuxt/kit'

// Turns the Markdown kept in this repository into HTML at build time, so the pages ship it as
// static markup:
//   #release-notes  ← release-notes/v<x.y.z>.md, newest first (the changelog page)
//   #docs           ← docs/user-guide.md, one page per "##" section, grouped (the docs pages)
// Both are also readable on GitHub as they are.

const datePattern = /^\*Released on (\d{4}-\d{2}-\d{2})\.\*\s*/

export interface ReleaseNote {
  tag: string
  version: string
  date: string
  /** The headline after the version, e.g. "Boards: shared task boards, encrypted on your Mac". */
  title: string
  html: string
  /** From the note's "## The package" section, shown apart from the notes. */
  package?: { file: string, sha256: string, noteHtml: string }
}

export interface DocsPage {
  /** The slug of the page's "##" heading, also its path: /docs/<id>/. */
  id: string
  title: string
  group: string
  /** The first sentence of the page, for the overview and the meta description. */
  summary: string
  /** Rounded up, at 220 words a minute. */
  minutes: number
  html: string
  /** The page's "###" headings, rendered as <h2>. */
  toc: { id: string, title: string }[]
}

export interface Docs {
  groups: { title: string, pages: string[] }[]
  pages: DocsPage[]
}

// How the left navigation groups the guide's "##" sections, in reading order. Every section of
// docs/user-guide.md must be in exactly one group, or the build fails.
const docsGroups: { title: string, pages: string[] }[] = [
  { title: 'Start here', pages: ['getting-started', 'concepts'] },
  { title: 'Build', pages: ['agents', 'workflows'] },
  { title: 'Run', pages: ['running-a-workflow', 'auto', 'checks-and-second-opinions', 'where-the-changes-go'] },
  { title: 'Beyond one run', pages: ['knowledge-and-the-lab', 'boards', 'triggers'] },
  { title: 'Trust and data', pages: ['safety-model', 'files-on-disk', 'settings'] },
  { title: 'Maintain', pages: ['updating', 'uninstall', 'troubleshooting'] },
]

const slug = (text: string) =>
  text.toLowerCase().replace(/<[^>]+>/g, '').replace(/[`'’"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

function createMarked(withIds: boolean) {
  return new Marked({
    gfm: true,
    renderer: {
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens)
        const external = /^https?:\/\//.test(href) ? ' target="_blank" rel="noopener"' : ''
        return `<a href="${href}"${title ? ` title="${title}"` : ''}${external}>${text}</a>`
      },
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens)
        return withIds && depth <= 3
          ? `<h${depth} id="${slug(text)}"><a href="#${slug(text)}">${text}</a></h${depth}>\n`
          : `<h${depth}>${text}</h${depth}>\n`
      },
    },
  })
}

// Each version title is an <h2>, so a note's own headings start at <h3> whatever level they use.
function shiftHeadings(tokens: Token[]) {
  const headings = tokens.filter((t): t is Tokens.Heading => t.type === 'heading')
  if (!headings.length) return
  const top = Math.min(...headings.map(h => h.depth))
  for (const heading of headings) heading.depth = Math.min(6, heading.depth - top + 3)
}

const compareVersions = (a: string, b: string) => {
  const pa = a.split('.').map(Number)
  const pb = b.split('.').map(Number)
  for (let i = 0; i < 3; i++) {
    if (pa[i] !== pb[i]) return (pb[i] ?? 0) - (pa[i] ?? 0)
  }
  return 0
}

function readNotes(dir: string): ReleaseNote[] {
  const marked = createMarked(false)
  return readdirSync(dir)
    .filter(name => /^v\d+\.\d+\.\d+\.md$/.test(name))
    .map((name) => {
      const tag = name.replace(/\.md$/, '')
      const version = tag.slice(1)
      let source = readFileSync(`${dir}/${name}`, 'utf8')
      // The first line is "# RigOne <version> — <title>"; the page shows the version and the title apart.
      const heading = source.match(/^# (.*)\n+/)?.[1] ?? ''
      const title = heading.replace(new RegExp(`^RigOne ${version.replace(/\./g, '\\.')}\\s*[—:-]\\s*`), '').trim()
      source = source.replace(/^# .*\n+/, '')
      const date = source.match(datePattern)?.[1]
      if (!date) throw new Error(`release-notes/${name}: start it with "# <title>" then "*Released on YYYY-MM-DD.*"`)
      source = source.replace(datePattern, '')
      // "## The package": the DMG's name in backticks, its SHA-256 in a code block, then any remarks.
      let pkg: ReleaseNote['package']
      const at = source.search(/^## The package\s*$/m)
      if (at >= 0) {
        const section = source.slice(at)
        const file = section.match(/`(RigOne_[^`]+\.dmg)`/)?.[1]
        const sha256 = section.match(/\b[0-9a-f]{64}\b/)?.[0]
        if (file && sha256) {
          const remarks = section.replace(/^[\s\S]*?```[^\n]*\n[\s\S]*?```\s*/, '')
          pkg = { file, sha256, noteHtml: remarks.trim() ? marked.parse(remarks) as string : '' }
          source = source.slice(0, at)
        }
      }
      const tokens = marked.lexer(source)
      shiftHeadings(tokens)
      const headline = title || heading
      return { tag, version, date, title: headline.charAt(0).toUpperCase() + headline.slice(1), html: marked.parser(tokens) as string, package: pkg }
    })
    .sort((a, b) => compareVersions(a.version, b.version))
}

const plain = (html: string) => html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")

/** The "##" slugs of the guide, in order: the docs pages to prerender. */
export function docsPageIds(file: string) {
  return [...readFileSync(file, 'utf8').matchAll(/^## (.+)$/gm)].map(m => slug(m[1]!))
}

function readDocs(file: string): Docs {
  const marked = createMarked(true)
  const source = readFileSync(file, 'utf8')
  // The file's own "# Title" and intro paragraph are for GitHub; the site has its own header.
  const tokens = marked.lexer(source.replace(/^# .*\n+(?:(?!## ).*\n)*/, ''))

  // Split at every "##": each section is a page whose title is that heading.
  const sections: { title: string, tokens: Token[] }[] = []
  for (const token of tokens) {
    if (token.type === 'heading' && token.depth === 2) sections.push({ title: token.text, tokens: [] })
    else sections.at(-1)?.tokens.push(token)
  }

  const groupOf = new Map(docsGroups.flatMap(g => g.pages.map(id => [id, g.title] as const)))
  const pages = sections.map(({ title, tokens: body }): DocsPage => {
    const id = slug(title)
    const group = groupOf.get(id)
    if (!group) throw new Error(`docs/user-guide.md: add "## ${title}" (${id}) to docsGroups in modules/markdown.ts`)
    // The page title is the <h1>, so "###" becomes <h2> and so on.
    const toc: DocsPage['toc'] = []
    for (const t of body) {
      if (t.type !== 'heading') continue
      if (t.depth === 3) toc.push({ id: slug(t.text), title: t.text.replace(/`/g, '') })
      t.depth = Math.max(2, t.depth - 1)
    }
    const html = marked.parser(body) as string
    // The opening paragraph, or the first item of an opening list, or else the page's headings.
    const opening = body.findIndex(t => t.type === 'heading')
    const lead = body.slice(0, opening < 0 ? body.length : opening)
      .find(t => t.type === 'paragraph' || t.type === 'list')
    const first = lead?.type === 'list' ? (lead as Tokens.List).items[0]?.text : (lead as Tokens.Paragraph | undefined)?.text
    const text = first ? plain(marked.parseInline(first) as string) : `${toc.map(h => h.title).join(', ')}.`
    const summary = text.match(/^.*?[.:](?=\s|$)/s)?.[0].replace(/\s+/g, ' ').replace(/:$/, '.') ?? text
    const words = plain(html).split(/\s+/).filter(Boolean).length
    return { id, title: title.replace(/`/g, ''), group, summary, minutes: Math.max(1, Math.ceil(words / 220)), html, toc }
  })

  const ids = new Set(pages.map(p => p.id))
  const missing = docsGroups.flatMap(g => g.pages).filter(id => !ids.has(id))
  if (missing.length) throw new Error(`modules/markdown.ts: docsGroups names sections the guide no longer has: ${missing.join(', ')}`)
  // Pages in navigation order, so previous and next follow the left column.
  const order = docsGroups.flatMap(g => g.pages)
  pages.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id))
  return { groups: docsGroups, pages }
}

export default defineNuxtModule({
  meta: { name: 'markdown' },
  setup(_, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const notesDir = resolve('../release-notes')
    const docsFile = resolve('../docs/user-guide.md')

    const notes = addTemplate({
      filename: 'release-notes.mjs',
      write: true,
      getContents: () => `export default ${JSON.stringify(readNotes(notesDir))}\n`,
    })
    const docs = addTemplate({
      filename: 'docs.mjs',
      write: true,
      getContents: () => `export default ${JSON.stringify(readDocs(docsFile))}\n`,
    })
    nuxt.options.alias['#release-notes'] = notes.dst
    nuxt.options.alias['#docs'] = docs.dst

    addTypeTemplate({
      filename: 'types/markdown.d.ts',
      getContents: () => `declare module '#release-notes' {
  const notes: {
    tag: string
    version: string
    date: string
    title: string
    html: string
    package?: { file: string, sha256: string, noteHtml: string }
  }[]
  export default notes
}
declare module '#docs' {
  const docs: {
    groups: { title: string, pages: string[] }[]
    pages: {
      id: string
      title: string
      group: string
      summary: string
      minutes: number
      html: string
      toc: { id: string, title: string }[]
    }[]
  }
  export default docs
}
`,
    }, { nuxt: true, nitro: true })

    nuxt.hook('builder:watch', async (_event, path) => {
      if (path.includes('release-notes/')) await updateTemplates({ filter: t => t.filename === 'release-notes.mjs' })
      if (path.includes('docs/')) await updateTemplates({ filter: t => t.filename === 'docs.mjs' })
    })
  },
})
