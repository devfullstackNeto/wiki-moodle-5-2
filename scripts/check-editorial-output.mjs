import fs from 'node:fs'
import path from 'node:path'
import { docsRoot, walk } from './content-utils.mjs'

const distRoot = path.join(docsRoot, '.vitepress', 'dist')
const html = walk(distRoot, '.html').map((file) => fs.readFileSync(file, 'utf8')).join('\n')
const required = [
  'Situação editorial:',
  'Captura de tela em produção',
  'Como produzir esta captura',
  'Vídeo em produção',
  'Validação institucional necessária'
]

for (const phrase of required) {
  if (!html.includes(phrase)) {
    console.error(`Modo editorial incompleto: texto esperado ausente — ${phrase}`)
    process.exit(1)
  }
}

const pageCount = walk(docsRoot, '.md').length
if (pageCount !== 107) {
  console.error(`Inventário editorial alterado: esperado 107 páginas, encontrado ${pageCount}`)
  process.exit(1)
}

console.log(`Modo editorial verificado: ${pageCount} páginas com controles de produção disponíveis.`)
