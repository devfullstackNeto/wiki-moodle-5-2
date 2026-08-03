import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
export const docsRoot = path.join(projectRoot, 'docs')

export function walk(dir, extension) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full, extension)
    return !extension || full.endsWith(extension) ? [full] : []
  })
}

export function frontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return null
  const values = {}
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z][\w]*):\s*(.*)$/)
    if (field) values[field[1]] = field[2]
  }
  return values
}

export function routeToFile(route) {
  const clean = route.split('#')[0].split('?')[0]
  if (!clean.startsWith('/')) return null
  if (clean === '/') return path.join(docsRoot, 'index.md')
  const relative = decodeURIComponent(clean.slice(1))
  if (relative.endsWith('/')) return path.join(docsRoot, relative, 'index.md')
  if (relative.endsWith('.md')) return path.join(docsRoot, relative)
  if (relative.endsWith('.html')) return path.join(docsRoot, relative.replace(/\.html$/, '.md'))
  const direct = path.join(docsRoot, `${relative}.md`)
  if (fs.existsSync(direct)) return direct
  return path.join(docsRoot, relative, 'index.md')
}
