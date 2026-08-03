import fs from 'node:fs'
import path from 'node:path'
import { docsRoot, frontmatter, walk } from './content-utils.mjs'

const files = walk(docsRoot, '.md')
const pagesBySection = new Map()
for (const file of files) {
  const relative = path.relative(docsRoot, file).replaceAll('\\', '/')
  const section = relative.split('/')[0]
  if (relative === 'index.md' || relative.endsWith('/index.md')) continue
  const meta = frontmatter(fs.readFileSync(file, 'utf8')) || {}
  const item = { file, relative, title: meta.title || path.basename(file, '.md'), description: meta.description || '' }
  pagesBySection.set(section, [...(pagesBySection.get(section) || []), item])
}
for (const items of pagesBySection.values()) items.sort((a, b) => a.relative.localeCompare(b.relative, 'pt-BR'))

const genericDecisions = /\r?\n## Decisões essenciais\r?\n\r?\n- Defina a finalidade e quem será afetado\.\r?\n- Verifique permissões, datas, grupos e dados envolvidos\.\r?\n- Faça a menor alteração necessária e preserve o histórico\.\r?\n- Teste com o perfil destinatário e registre o resultado\.\r?\n/g
const genericChecklist = /<Checklist :items='\[&quot;Finalidade registrada&quot;, &quot;Impacto sobre estudantes verificado&quot;, &quot;Nomes e opções confirmados no ambiente&quot;, &quot;Teste realizado sem dados pessoais&quot;\]' \/>/
const genericActivityChecklist = /<Checklist :items='\[&quot;Objetivo e produto esperado estão explícitos&quot;, &quot;Datas, grupos e permissões foram testados&quot;, &quot;Avaliação e conclusão correspondem ao plano&quot;, &quot;Fluxo foi testado como participante&quot;, &quot;Alternativas acessíveis estão disponíveis&quot;\]' \/>/

function topicFrom(title) {
  return title
    .replace(/^Configurar a atividade /, '')
    .replace(/^Usar o recurso /, '')
    .replace(/^Como /, '')
    .replace(/^Criar e usar /, '')
    .trim()
}

function contextualRelated(section, relative) {
  const items = pagesBySection.get(section) || []
  const index = items.findIndex((item) => item.relative === relative)
  const selected = []
  if (index > 0) selected.push(items[index - 1])
  if (index >= 0 && index < items.length - 1) selected.push(items[index + 1])
  if (selected.length < 2 && items.length > 1) selected.push(items.find((item) => item.relative !== relative && !selected.includes(item)))
  const cards = selected.filter(Boolean).slice(0, 2).map((item) => ({
    title: item.title,
    href: `/${item.relative.replace(/\.md$/, '.html')}`,
    description: item.description
  }))
  cards.push({ title: `Visão geral de ${section.replaceAll('-', ' ')}`, href: `/${section}/`, description: 'Compare outras orientações desta área.' })
  return `<RelatedContent :items='${JSON.stringify(cards)}' />`
}

let changed = 0
for (const file of files) {
  const relative = path.relative(docsRoot, file).replaceAll('\\', '/')
  if (relative === 'index.md') continue
  if (relative.endsWith('/index.md')) {
    let indexSource = fs.readFileSync(file, 'utf8')
    const indexMeta = frontmatter(indexSource) || {}
    const indexTitle = String(indexMeta.title || path.basename(path.dirname(file)))
    const next = indexSource.replace(/Esta área reúne conteúdos que eram fragmentados em várias páginas da Wiki anterior\./g, `A área **${indexTitle}** reúne conteúdos consolidados que antes estavam fragmentados na Wiki.`)
    if (next !== indexSource) fs.writeFileSync(file, next)
    continue
  }
  const section = relative.split('/')[0]
  let source = fs.readFileSync(file, 'utf8')
  const original = source
  const meta = frontmatter(source) || {}
  const topic = topicFrom(String(meta.title || path.basename(file, '.md')))

  source = source.replace(genericDecisions, '\n')

  const stepTitles = [...source.matchAll(/<StepItem\b[^>]*\btitle="([^"]+)"/g)].map((match) => match[1])
  if (genericChecklist.test(source) && stepTitles.length) {
    source = source.replace(genericChecklist, `<Checklist :items='${JSON.stringify(stepTitles.slice(0, 6).map((title) => `${title} foi concluído e conferido`))}' />`)
  }
  if (genericActivityChecklist.test(source) && stepTitles.length) {
    source = source.replace(genericActivityChecklist, `<Checklist :items='${JSON.stringify([...stepTitles.slice(0, 4).map((title) => `${title} em ${topic} foi verificado`), `Acessibilidade de ${topic} foi testada`])}' />`)
  }

  source = source.replace(/<ExampleBox>Em um curso de teste, aplique \*\*[^*]+\*\* a uma situação fictícia, registre a configuração escolhida e compare a visão do professor com a do participante antes de usar dados reais\.<\/ExampleBox>/g, () => {
    if (!stepTitles.length) return `<ExampleBox>Teste ${topic} com dados fictícios e registre o resultado antes de aplicar no curso real.</ExampleBox>`
    const first = stepTitles[0].toLowerCase()
    const second = (stepTitles[1] || stepTitles[0]).toLowerCase()
    const last = stepTitles.at(-1).toLowerCase()
    return `<ExampleBox title="Exemplo de aplicação">Em um curso de demonstração, ${first} e depois ${second}. Antes de trabalhar com dados reais, ${last} e registre o resultado.</ExampleBox>`
  })

  source = source.replace(/expected="A etapa pode ser conferida antes de avançar\."/g, (_, offset) => {
    const before = source.slice(Math.max(0, offset - 300), offset)
    const title = [...before.matchAll(/title="([^"]+)"/g)].pop()?.[1] || topic
    return `expected="A decisão “${title}” foi registrada e conferida no perfil destinatário."`
  })

  source = source
    .replace(/title="Escreva instruções verificáveis"/g, `title="Escreva instruções verificáveis para ${topic}"`)
    .replace(/>Inclua propósito, produto esperado, critérios, prazo, suporte e alternativa acessível\.<\/StepItem>/g, `>Para ${topic}, detalhe propósito, produto esperado, critérios, prazo, suporte e alternativa acessível.</StepItem>`)
    .replace(/title="Configure a interação"/g, `title="Configure as opções próprias de ${topic}"`)
    .replace(/>Revise cada campo pelo impacto na participação, não pela configuração padrão\.<\/StepItem>/g, `>Revise os campos específicos de ${topic} pelo impacto na participação, não apenas pelo valor padrão.</StepItem>`)
    .replace(/title="Conecte avaliação e acompanhamento"/g, `title="Conecte ${topic} à avaliação e ao acompanhamento"`)
    .replace(/title="Faça uma tentativa de teste"/g, `title="Teste ${topic} como participante"`)
    .replace(/title="Defina nome e propósito"/g, `title="Defina nome e propósito de ${topic}"`)
    .replace(/title="Adicione e configure o conteúdo"/g, `title="Configure o conteúdo próprio de ${topic}"`)
    .replace(/title="Teste como estudante"/g, `title="Teste ${topic} como estudante"`)
    .replace(/title="Tela de referência"/g, `title="${topic}: tela principal"`)
    .replace(/- Objetivo de aprendizagem e evidência esperada definidos\./g, `- Objetivo de aprendizagem e evidência esperada para **${topic}** definidos.`)
    .replace(/- Papel com capacidade para adicionar e configurar a atividade\./g, `- Papel com capacidade para adicionar e configurar **${topic}**.`)
    .replace(/- Datas, grupos, critérios de conclusão e regra de avaliação planejados\./g, `- Datas, grupos, conclusão e avaliação aplicáveis a **${topic}** planejados.`)
    .replace(/- Conta ou recurso de teste para conferir a visão do estudante\./g, `- Conta de teste preparada para percorrer **${topic}** como estudante.`)
    .replace(/- Publicar sem instrução ou critério observável\./g, `- Publicar **${topic}** sem instrução ou critério observável.`)
    .replace(/- Presumir que acesso ou clique comprova aprendizagem\./g, `- Presumir que acessar **${topic}** comprova aprendizagem.`)
    .replace(/- Usar dados reais em capturas, testes ou demonstrações\./g, `- Usar dados reais em capturas ou testes de **${topic}**.`)
    .replace(/- Alterar configuração depois que há participação sem avaliar o impacto\./g, `- Alterar **${topic}** depois que há participação sem avaliar o impacto.`)

  source = source.replace(/<ValidationNotice>Confirme nomes, rotas, capacidades e opções no Moodle institucional antes de publicar instruções passo a passo\.<\/ValidationNotice>/g, `<ValidationNotice>Confirme no Moodle institucional os nomes, caminhos, capacidades e opções que afetam **${topic}** antes de publicar esta orientação.</ValidationNotice>`)
  source = source.replace(/<ValidationNotice>Atividade padrão do Moodle 5\.2\. A disponibilidade pode ser alterada pelo administrador; serviços, bibliotecas, capacidades e rótulos do ambiente institucional precisam ser confirmados\.<\/ValidationNotice>/g, `<ValidationNotice>**${topic}** integra a distribuição padrão do Moodle 5.2, mas pode ser desabilitada ou depender de serviços, bibliotecas, capacidades e rótulos validados pela instituição.</ValidationNotice>`)
  source = source.replace(/<ValidationNotice>Confirme se as duas opções estão habilitadas e quais relatórios e permissões existem no ambiente institucional\.<\/ValidationNotice>/g, `<ValidationNotice>Confirme no ambiente institucional a disponibilidade, os relatórios e as permissões das opções comparadas em **${topic}**.</ValidationNotice>`)
  source = source.replace(/- Combine as duas somente quando cada uma tiver uma função distinta e explícita\./g, `- Combine as opções de **${topic}** somente quando cada uma tiver função distinta e explícita.`)
  source = source.replace(/Esta área reúne conteúdos que eram fragmentados em várias páginas da Wiki anterior\./g, `A área **${topic}** reúne conteúdos consolidados que antes estavam fragmentados na Wiki.`)

  const relatedTags = [...source.matchAll(/<RelatedContent\b[\s\S]*?\/>/g)]
  const hasGenericRelated = relatedTags.some((match) => /Aprofunde esta decisão no contexto do curso|Catálogo de atividades/.test(match[0]))
  if (hasGenericRelated) {
    const replacement = contextualRelated(section, relative)
    let inserted = false
    source = source.replace(/<RelatedContent\b[\s\S]*?\/>/g, (tag) => {
      if (/Aprofunde esta decisão no contexto do curso|Catálogo de atividades/.test(tag)) {
        if (inserted) return ''
        inserted = true
        return replacement
      }
      return tag
    })
  }

  if (source !== original) {
    fs.writeFileSync(file, source)
    changed += 1
  }
}

console.log(`Duplicações editoriais removidas ou contextualizadas em ${changed} páginas.`)
