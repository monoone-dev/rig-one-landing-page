import { readdirSync, readFileSync } from 'node:fs'
import { Marked, type Token, type Tokens } from 'marked'
import { addTemplate, addTypeTemplate, createResolver, defineNuxtModule, updateTemplates } from 'nuxt/kit'

// Turns the Markdown kept in this repository into HTML at build time, so the pages ship it as
// static markup:
//   #release-notes  ← release-notes/v<x.y.z>.md, newest first (the changelog page)
//   #docs           ← docs/user-guide.md, with a table of contents (the docs page)
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

export interface DocsSection {
  id: string
  title: string
  children: { id: string, title: string }[]
}

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

function readDocs(file: string) {
  const marked = createMarked(true)
  // The file's own "# Title" and intro paragraph are the page header; the page renders the rest.
  const source = readFileSync(file, 'utf8').replace(/^# .*\n+(?:(?!## ).*\n)*/, '')
  const tokens = marked.lexer(source)
  const toc: DocsSection[] = []
  for (const token of tokens) {
    if (token.type !== 'heading') continue
    const title = token.text.replace(/`/g, '')
    if (token.depth === 2) toc.push({ id: slug(token.text), title, children: [] })
    else if (token.depth === 3) toc.at(-1)?.children.push({ id: slug(token.text), title })
  }
  return { html: marked.parser(tokens) as string, toc }
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
  const docs: { html: string, toc: { id: string, title: string, children: { id: string, title: string }[] }[] }
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
