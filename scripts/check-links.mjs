import fs from 'node:fs'
import path from 'node:path'
import { docsRoot, routeToFile, walk } from './content-utils.mjs'

const errors = []
const files = walk(docsRoot).filter((file) => /\.(md|ts)$/.test(file))
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8')
  const relative = path.relative(docsRoot, file).replaceAll('\\', '/')
  const routes = [
    ...[...source.matchAll(/\[[^\]]+\]\((\/[^)\s]+)\)/g)].map((match) => match[1]),
    ...[...source.matchAll(/\b(?:href|link)[=:]\s*["'](\/[^"']+)["']/g)].map((match) => match[1])
  ]
  for (const route of routes) {
    const target = routeToFile(route)
    if (target && !fs.existsSync(target)) errors.push(`${relative}: ${route} não existe`)
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Links internos válidos em ${files.length} arquivos de conteúdo/configuração.`)
