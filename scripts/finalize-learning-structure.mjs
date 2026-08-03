import fs from 'node:fs'
import path from 'node:path'
import { docsRoot, walk } from './content-utils.mjs'

const related = {
  'professores/index.md': [
    { title: 'Organizar um curso', href: '/organizacao-do-curso/configurar-curso.html', description: 'Prepare estrutura, acesso e acompanhamento.' },
    { title: 'Escolher atividades', href: '/atividades/', description: 'Compare experiências de aprendizagem.' },
    { title: 'Usar o Livro de notas', href: '/avaliacao/livro-de-notas.html', description: 'Confira avaliação e feedback.' }
  ],
  'estudantes/index.md': [
    { title: 'Navegar no Moodle', href: '/comece-por-aqui/navegar-no-moodle.html', description: 'Localize cursos e próximas ações.' },
    { title: 'Resolver envio de Tarefa', href: '/solucao-de-problemas/envio-tarefa.html', description: 'Diagnostique entrega e confirmação.' },
    { title: 'Consultar notas', href: '/avaliacao/livro-de-notas.html', description: 'Entenda nota e feedback.' }
  ],
  'tutores/index.md': [
    { title: 'Acompanhar participantes', href: '/participantes/acompanhamento-individual.html', description: 'Combine evidências com contexto.' },
    { title: 'Mediar fóruns', href: '/comunicacao/mediacao-foruns.html', description: 'Organize presença e síntese.' },
    { title: 'Escolher relatórios', href: '/relatorios/escolher-relatorio.html', description: 'Comece por uma pergunta.' }
  ],
  'gestores/index.md': [
    { title: 'Monitoramento responsável', href: '/relatorios/monitoramento-responsavel.html', description: 'Defina finalidade e limites.' },
    { title: 'Privacidade', href: '/boas-praticas/privacidade-e-uso-responsavel.html', description: 'Minimize dados e acesso.' },
    { title: 'Integração SUAP', href: '/organizacao-do-curso/integracao-suap.html', description: 'Valide dependências institucionais.' }
  ],
  'faq/index.md': [
    { title: 'Solução de problemas', href: '/solucao-de-problemas/', description: 'Siga diagnósticos completos.' },
    { title: 'Comece por aqui', href: '/comece-por-aqui/', description: 'Reconheça acesso e navegação.' }
  ],
  'glossario/index.md': [
    { title: 'Recursos', href: '/recursos/', description: 'Veja conceitos aplicados a conteúdos.' },
    { title: 'Atividades', href: '/atividades/', description: 'Veja conceitos aplicados à participação.' }
  ]
}

for (const [relative, items] of Object.entries(related)) {
  const file = path.join(docsRoot, relative)
  let source = fs.readFileSync(file, 'utf8')
  if (!source.includes('<RelatedContent')) {
    source = `${source.trimEnd()}\n\n<RelatedContent :items='${JSON.stringify(items)}' />\n`
    fs.writeFileSync(file, source)
  }
}

let framed = 0
for (const file of walk(docsRoot, '.md')) {
  let source = fs.readFileSync(file, 'utf8')
  const next = source.replace(/<ScreenshotPlaceholder\b([\s\S]*?)\/>/g, (whole, attributes) => {
    if (/\bframing="[^"]+"/.test(attributes)) return whole
    framed += 1
    return `<ScreenshotPlaceholder${attributes.trimEnd()} framing="Enquadrar a área descrita com rótulos e controles relevantes, usando somente dados fictícios." />`
  })
  if (next !== source) fs.writeFileSync(file, next)
}

console.log(`Estrutura finalizada; enquadramento acrescentado a ${framed} placeholders existentes.`)
