import fs from 'node:fs'
import path from 'node:path'
import { docsRoot, frontmatter, walk } from './content-utils.mjs'

const required = ['title', 'description', 'category', 'level', 'readingTime', 'moodleVersion', 'status', 'lastReviewed']
const allowedStatus = new Set(['em-revisao', 'validado', 'arquivado'])
const titles = new Map()
const screenshotIds = new Map()
const errors = []
const files = walk(docsRoot, '.md')

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8')
  const meta = frontmatter(source)
  const relative = path.relative(docsRoot, file).replaceAll('\\', '/')
  if (!meta) { errors.push(`${relative}: frontmatter ausente`); continue }
  for (const key of required) if (!meta[key]) errors.push(`${relative}: campo ${key} ausente`)
  if (meta.status && !allowedStatus.has(meta.status)) errors.push(`${relative}: status inválido`)
  if (meta.moodleVersion !== '5.2.x') errors.push(`${relative}: versão diferente de 5.2.x`)
  if (/\b(Capítulo|Unidade|Módulo)\s+\d+/i.test(source)) errors.push(`${relative}: estrutura numerada proibida`)
  if (/<StepItem\b[^>]*\bnumber="[^"]+"/.test(source)) errors.push(`${relative}: StepItem com numeração manual`)
  if (titles.has(meta.title)) errors.push(`${relative}: título duplicado com ${titles.get(meta.title)}`)
  else titles.set(meta.title, relative)
  for (const match of source.matchAll(/<ScreenshotPlaceholder\b([\s\S]*?)\/>/g)) {
    if (!/\balt="[^"]+"/.test(match[1])) errors.push(`${relative}: placeholder sem alt`)
    if (!/\bid="[A-Z0-9-]+"/.test(match[1])) errors.push(`${relative}: placeholder sem id semântico`)
    const id = match[1].match(/\bid="([A-Z0-9-]+)"/)?.[1]
    if (id) {
      if (screenshotIds.has(id)) errors.push(`${relative}: id de captura duplicado com ${screenshotIds.get(id)}`)
      else screenshotIds.set(id, relative)
    }
  }
}

if (files.length !== 107) errors.push(`esperadas 107 páginas; encontradas ${files.length}`)
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Conteúdo válido: ${files.length} páginas, ${titles.size} títulos únicos.`)
