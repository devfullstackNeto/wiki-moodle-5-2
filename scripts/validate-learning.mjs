import fs from 'node:fs'
import path from 'node:path'
import { docsRoot, walk } from './content-utils.mjs'

const errors = []
const pages = walk(docsRoot, '.md')
const primarySections = new Set(['atividades', 'avaliacao', 'comece-por-aqui', 'comunicacao', 'organizacao-do-curso', 'participantes', 'recursos', 'relatorios', 'solucao-de-problemas'])
const fullSource = walk(docsRoot).filter((file) => /\.(md|ts|mts|vue)$/.test(file)).map((file) => fs.readFileSync(file, 'utf8')).join('\n')

for (const file of pages) {
  const source = fs.readFileSync(file, 'utf8')
  const relative = path.relative(docsRoot, file).replaceAll('\\', '/')
  const section = relative.split('/')[0]
  const isHome = relative === 'index.md'
  const isIndex = relative.endsWith('index.md')
  const isComparison = section === 'comparacoes'
  const isPrimary = !isIndex && primarySections.has(section)

  if (!isHome && !source.includes('<VideoSection')) errors.push(`${relative}: página principal sem vídeo`)
  if (!isHome && !source.includes('<RelatedContent')) errors.push(`${relative}: página sem conteúdos relacionados`)
  if (!isIndex && !source.includes('<Checklist')) errors.push(`${relative}: página temática sem checklist`)
  if (!isIndex && !source.includes('<ExampleBox')) errors.push(`${relative}: página temática sem exemplo`)
  if (isPrimary && !source.includes('<StepByStep')) errors.push(`${relative}: procedimento/recurso/atividade sem passo a passo`)
  if (isPrimary && section !== 'boas-praticas' && !source.includes('<ScreenshotPlaceholder')) errors.push(`${relative}: página operacional sem print planejado`)
  if ((section === 'atividades' || section === 'recursos') && !isIndex) {
    for (const marker of ['<StepByStep', '<ScreenshotPlaceholder', '<VideoSection', '<ExampleBox', '<Checklist', '<RelatedContent']) {
      if (!source.includes(marker)) errors.push(`${relative}: página de ${section} sem ${marker.slice(1)}`)
    }
  }
  if (isComparison && source.includes('<StepByStep')) errors.push(`${relative}: comparação recebeu modelo procedural indevido`)
  if (/\[[^\]]*(clique aqui|saiba mais)[^\]]*\]\(/i.test(source)) errors.push(`${relative}: texto de link pouco descritivo`)
  for (const match of source.matchAll(/<ScreenshotPlaceholder\b([\s\S]*?)\/>/g)) {
    for (const attribute of ['id', 'title', 'description', 'framing', 'alt']) {
      if (!new RegExp(`\\b${attribute}="[^"]+"`).test(match[1])) errors.push(`${relative}: print sem ${attribute}`)
    }
  }

  if (!isHome) {
    const route = relative.endsWith('index.md') ? `/${relative.replace(/index\.md$/, '')}` : `/${relative.replace(/\.md$/, '')}`
    const linked = fullSource.includes(`'${route}'`) || fullSource.includes(`"${route}"`) || fullSource.includes(`${route}.html`) || fullSource.includes(`${route}.md`)
    if (!linked) errors.push(`${relative}: página potencialmente órfã`)
  }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}
console.log(`Estrutura pedagógica válida em ${pages.length} páginas: passos, vídeos, prints, exemplos, checklists, relacionados e órfãs verificados.`)
