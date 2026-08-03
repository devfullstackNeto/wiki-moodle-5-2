import fs from 'node:fs'
import path from 'node:path'
import { docsRoot, frontmatter, projectRoot, walk } from './content-utils.mjs'

const files = walk(docsRoot, '.md').sort()
const checks = [
  ['Passo a passo', '<StepByStep'],
  ['Print', '<ScreenshotPlaceholder'],
  ['Vídeo', '<VideoSection'],
  ['Exemplo', '<ExampleBox'],
  ['Checklist', '<Checklist'],
  ['Relacionados', '<RelatedContent']
]

const rows = files.map((file) => {
  const source = fs.readFileSync(file, 'utf8')
  const meta = frontmatter(source) || {}
  const relative = path.relative(docsRoot, file).replaceAll('\\', '/')
  const words = [...source.matchAll(/\b[\p{L}\p{N}][\p{L}\p{N}-]*\b/gu)].length
  const presence = Object.fromEntries(checks.map(([label, marker]) => [label, source.includes(marker)]))
  const score = checks.reduce((sum, [label]) => sum + Number(presence[label]), 0)
  const isIndex = relative.endsWith('index.md')
  const depth = words >= 900 && score >= 5 ? 'alta' : words >= 450 && score >= 4 ? 'média' : 'baixa'
  const rewrite = !isIndex && (words < 450 || score < 4)
  const priority = rewrite && (relative.startsWith('recursos/') || relative.startsWith('atividades/'))
    ? 'alta'
    : rewrite ? 'média' : isIndex && words < 250 ? 'média' : 'baixa'
  return { relative, title: meta.title || relative, words, presence, depth, rewrite, priority }
})

const yesNo = (value) => value ? 'sim' : 'não'
const lines = [
  '# Auditoria de profundidade do conteúdo',
  '',
  '> Diagnóstico-base registrado antes da evolução editorial. A auditoria considera presença estrutural e extensão; a revisão humana das páginas prioritárias complementa estes indicadores.',
  '',
  '## Resumo inicial',
  '',
  `- Páginas auditadas: **${rows.length}**.`,
  `- Profundidade baixa: **${rows.filter((row) => row.depth === 'baixa').length}**.`,
  `- Sem passo a passo: **${rows.filter((row) => !row.presence['Passo a passo']).length}**.`,
  `- Sem print planejado: **${rows.filter((row) => !row.presence.Print).length}**.`,
  `- Sem seção de vídeo: **${rows.filter((row) => !row.presence['Vídeo']).length}**.`,
  `- Sem exemplo: **${rows.filter((row) => !row.presence.Exemplo).length}**.`,
  `- Sem checklist: **${rows.filter((row) => !row.presence.Checklist).length}**.`,
  `- Sem conteúdos relacionados: **${rows.filter((row) => !row.presence.Relacionados).length}**.`,
  '',
  '## Diagnóstico por página',
  '',
  '| Página | Situação atual | Profundidade | Passos | Prints | Vídeo | Exemplo | Checklist | Reescrita | Prioridade |',
  '|---|---|---|---:|---:|---:|---:|---:|---:|---|',
  ...rows.map((row) => {
    const situation = row.rewrite ? `${row.words} palavras; estrutura incompleta` : `${row.words} palavras; base aproveitável`
    return `| \`${row.relative}\` — ${row.title} | ${situation} | ${row.depth} | ${yesNo(row.presence['Passo a passo'])} | ${yesNo(row.presence.Print)} | ${yesNo(row.presence['Vídeo'])} | ${yesNo(row.presence.Exemplo)} | ${yesNo(row.presence.Checklist)} | ${yesNo(row.rewrite)} | ${row.priority} |`
  }),
  '',
  '## Critérios de evolução',
  '',
  '- Recursos e atividades precisam ensinar decisão, configuração, teste, acompanhamento e acessibilidade.',
  '- Procedimentos precisam declarar pré-requisitos, caminho, etapas verificáveis, resultado e problemas frequentes.',
  '- Comparações precisam orientar uma escolha real, não repetir definições isoladas.',
  '- Páginas de perfil e índices precisam funcionar como rotas de aprendizagem, e não como listas de links.',
  '- Validações institucionais devem permanecer explícitas sempre que tema, idioma, plugins, permissões ou integrações puderem alterar a interface.',
  ''
]

const output = path.join(projectRoot, 'docs-internos', 'auditoria-profundidade-conteudo.md')
fs.writeFileSync(output, `${lines.join('\n')}\n`)
console.log(`Auditoria gerada: ${rows.length} páginas.`)
