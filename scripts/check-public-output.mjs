import fs from 'node:fs'
import path from 'node:path'
import { docsRoot, walk } from './content-utils.mjs'

const distRoot = path.join(docsRoot, '.vitepress', 'dist')
const pages = walk(docsRoot, '.md')

function outputFor(source) {
  const relative = path.relative(docsRoot, source)
  return path.join(distRoot, relative.replace(/\.md$/i, '.html'))
}

function visibleText(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_, value) => String.fromCodePoint(Number(value)))
    .replace(/&(?:nbsp|amp|quot|apos|lt|gt);/g, ' ')
    .replace(/\s+/g, ' ')
}

const forbidden = [
  /em-revis[aã]o/iu,
  /em-produ[cç][aã]o/iu,
  /valida[cç][aã]o institucional/iu,
  /situa[cç][aã]o editorial/iu,
  /institui[cç][aã]o a confirmar/iu,
  /captura de tela em produ[cç][aã]o/iu,
  /v[ií]deo em produ[cç][aã]o/iu,
  /como produzir esta captura/iu,
  /texto alternativo sugerido/iu,
  /antes de publicar esta orienta[cç][aã]o/iu,
  /(?:revisado|atualizado) em \d{4}-\d{2}-\d{2}/iu
]

const failures = []
for (const source of pages) {
  const output = outputFor(source)
  if (!fs.existsSync(output)) {
    failures.push(`${path.relative(docsRoot, source)}: HTML não gerado`)
    continue
  }
  const text = visibleText(fs.readFileSync(output, 'utf8'))
  for (const pattern of forbidden) {
    const match = text.match(pattern)
    if (match) failures.push(`${path.relative(docsRoot, source)}: “${match[0]}”`)
  }
}

if (pages.length !== 105) failures.push(`inventário público alterado: esperado 105 páginas, encontrado ${pages.length}`)
if (failures.length) {
  console.error('Falha na separação do modo público:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(`Modo público verificado: ${pages.length} páginas sem linguagem editorial proibida.`)
