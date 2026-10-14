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
  /** `###` sections, with their first paragraph and first screenshot (for structured data). */
  children: { id: string, title: string, summary?: string, image?: string }[]
}

// Width and height of a WebP file at its natural size, so the page reserves the space.
function webpSize(file: string) {
  const b = readFileSync(file)
  const chunk = b.toString('ascii', 12, 16)
  if (chunk === 'VP8X') return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) }
  if (chunk === 'VP8L') {
    const bits = b.readUInt32LE(21)
    return { width: 1 + (bits & 0x3fff), height: 1 + ((bits >> 14) & 0x3fff) }
  }
  return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff }
}

const slug = (text: string) =>
  text.toLowerCase().replace(/<[^>]+>/g, '').replace(/[`'’"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// `![alt](../public/screenshots/<id>.webp)` reads on GitHub as it is. On the site it becomes a
// framed figure holding the dark `<id>.webp` and the light `<id>-light.webp`, shown by colour
// mode, at half their pixel size; `__BASE__/` is replaced with the app base path by the page.
function createMarked(withIds: boolean, publicDir?: string) {
  return new Marked({
    gfm: true,
    renderer: {
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens)
        const external = /^https?:\/\//.test(href) ? ' target="_blank" rel="noopener"' : ''
        return `<a href="${href}"${title ? ` title="${title}"` : ''}${external}>${text}</a>`
      },
      image({ href, text }) {
        const id = href.match(/^\.\.\/public\/screenshots\/([a-z0-9-]+)\.webp$/)?.[1]
        if (!id || !publicDir) return `<img src="${href}" alt="${text}">`
        const { width, height } = webpSize(`${publicDir}/screenshots/${id}.webp`)
        const img = (file: string, mode: string) =>
          `<img src="__BASE__/screenshots/${file}.webp" data-mode="${mode}" width="${width / 2}" height="${height / 2}" alt="${text.replace(/"/g, '&quot;')}" loading="lazy" decoding="async">`
        return `<span class="md-shot">${img(id, 'dark')}${img(`${id}-light`, 'light')}</span>`
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

function readDocs(file: string, publicDir: string) {
  const marked = createMarked(true, publicDir)
  // The file's own "# Title" and intro paragraph are the page header; the page renders the rest.
  const source = readFileSync(file, 'utf8').replace(/^# .*\n+(?:(?!## ).*\n)*/, '')
  const tokens = marked.lexer(source)
  const toc: DocsSection[] = []
  const plain = (text: string) => text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[*`]/g, '').replace(/\s+/g, ' ').trim()
  let child: DocsSection['children'][number] | undefined
  for (const token of tokens) {
    if (token.type === 'paragraph' && child) {
      const shot = token.tokens?.find((t): t is Tokens.Image => t.type === 'image')?.href.match(/screenshots\/([a-z0-9-]+)\.webp$/)?.[1]
      if (shot) child.image ??= `screenshots/${shot}.webp`
      else child.summary ??= plain(token.text)
    }
    if (token.type !== 'heading') continue
    const title = token.text.replace(/`/g, '')
    child = undefined
    if (token.depth === 2) toc.push({ id: slug(token.text), title, children: [] })
    else if (token.depth === 3) {
      child = { id: slug(token.text), title }
      toc.at(-1)?.children.push(child)
    }
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
      getContents: () => `export default ${JSON.stringify(readDocs(docsFile, resolve('../public')))}\n`,
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
  const docs: { html: string, toc: { id: string, title: string, children: { id: string, title: string, summary?: string, image?: string }[] }[] }
  export default docs
}
`,
    }, { nuxt: true, nitro: true })

    nuxt.hook('builder:watch', async (_event, path) => {
      if (path.includes('release-notes/')) await updateTemplates({ filter: t => t.filename === 'release-notes.mjs' })
      if (path.includes('docs/') || path.includes('public/screenshots/')) await updateTemplates({ filter: t => t.filename === 'docs.mjs' })
    })
  },
})
