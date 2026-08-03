import fs from 'node:fs'
import path from 'node:path'
import { projectRoot, walk } from './content-utils.mjs'

const roots = ['docs', 'scripts', 'tests'].map((name) => path.join(projectRoot, name))
const files = roots.flatMap((root) => fs.existsSync(root) ? walk(root).filter((file) => /\.(md|ts|mts|mjs|vue|css)$/.test(file)) : [])
const errors = []
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8')
  const relative = path.relative(projectRoot, file).replaceAll('\\', '/')
  if (source.includes('\t')) errors.push(`${relative}: tabulação encontrada`)
  if (/[ \t]+\r?$/m.test(source)) errors.push(`${relative}: espaço no fim de linha`)
  if (/console\.log\(/.test(source) && !relative.startsWith('scripts/')) errors.push(`${relative}: console.log em código do portal`)
  if (/\bTO[D]O\b/.test(source) && relative !== 'scripts/lint.mjs') errors.push(`${relative}: TODO não resolvido`)
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Lint concluído em ${files.length} arquivos.`)
