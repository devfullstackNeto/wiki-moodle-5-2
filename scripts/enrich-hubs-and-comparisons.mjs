import fs from 'node:fs'
import path from 'node:path'
import { docsRoot, frontmatter, walk } from './content-utils.mjs'

const hubCopy = {
  atividades: ['Escolha pela ação do estudante', 'Compare produção, discussão, prática, pesquisa e avaliação antes de abrir o seletor.', 'Comece por Tarefa, Fórum e Questionário e avance para atividades especializadas quando o objetivo exigir.'],
  avaliacao: ['Conecte critério, evidência e devolutiva', 'Planeje atividades, itens, categorias, cálculos e feedback como um único sistema.', 'Comece pelo Livro de notas e valide o resultado com dados fictícios antes de receber notas reais.'],
  'boas-praticas': ['Revise a experiência inteira', 'Aplique design, acessibilidade, comunicação e privacidade desde o planejamento.', 'Escolha uma prática, teste com o perfil destinatário e registre a melhoria no curso.'],
  'comece-por-aqui': ['Construa uma base segura', 'Reconheça ambiente, navegação, conta e preferências antes de realizar tarefas complexas.', 'Siga as leituras na ordem sugerida e use a busca quando já souber o que deseja fazer.'],
  comparacoes: ['Decida pelo efeito pedagógico', 'Use comparações quando duas opções parecem equivalentes, mas produzem experiências diferentes.', 'Leia primeiro o critério de decisão, depois abra as páginas completas das duas opções.'],
  comunicacao: ['Escolha canal, público e tempo', 'Diferencie aviso, mensagem, calendário, fórum e notificação pelo comportamento esperado.', 'Comece pela urgência e pelo público; depois defina registro, resposta e acessibilidade.'],
  organizacao: ['Torne o percurso previsível', 'Estruture curso, seções, acesso, grupos, conclusão e reutilização sem fragmentar a experiência.', 'Comece pelas configurações do curso e só então adicione regras em itens específicos.'],
  participantes: ['Gerencie acesso com contexto', 'Diferencie inscrição, papel, grupo e acompanhamento antes de alterar uma pessoa.', 'Comece pela consulta de participantes e preserve os métodos institucionais de sincronização.'],
  recursos: ['Apresente conteúdo no formato adequado', 'Compare leitura direta, download, coleção, navegação e incorporação.', 'Comece por Arquivo, Página ou Livro e escolha alternativas apenas quando houver necessidade específica.'],
  relatorios: ['Comece por uma pergunta', 'Escolha relatório e filtros somente depois de definir pessoa, atividade, período e evidência.', 'Leia eventos literalmente e combine fontes antes de tomar uma decisão sobre participantes.'],
  'solucao-de-problemas': ['Diagnostique antes de alterar', 'Registre sintoma, escopo e horário; teste causas simples e preserve as evidências.', 'Escolha o problema observado e siga a sequência sem apagar tentativas ou dados originais.']
}

const profileCopy = {
  professores: ['Planejar', 'Organize objetivos, seções, critérios e acessibilidade.', 'Construir', 'Escolha recursos e atividades e teste o curso como estudante.', 'Acompanhar', 'Use feedback, notas, conclusão e relatórios com contexto.'],
  estudantes: ['Localizar', 'Use Painel, Meus cursos, índice e calendário para encontrar a próxima ação.', 'Participar', 'Leia instruções, envie produções e confirme o estado de cada atividade.', 'Acompanhar', 'Consulte feedback, notas e conclusão e peça ajuda com evidências.'],
  tutores: ['Preparar a mediação', 'Conheça objetivos, prazos, critérios e canais de contato.', 'Acompanhar a turma', 'Combine participação, conclusão e produções sem inferência automática.', 'Encaminhar', 'Registre contexto, ofereça orientação e acione o canal institucional correto.'],
  gestores: ['Definir a pergunta', 'Relacione decisão, público, período e evidência necessária.', 'Validar a fonte', 'Compare relatórios e limites antes de interpretar indicadores.', 'Agir com responsabilidade', 'Minimize dados, registre decisões e preserve transparência.']
}

function siblingCards(section, current) {
  const dir = path.join(docsRoot, section)
  if (!fs.existsSync(dir)) return []
  return walk(dir, '.md').filter((file) => !file.endsWith('index.md')).slice(0, 4).map((file) => {
    const meta = frontmatter(fs.readFileSync(file, 'utf8')) || {}
    const relative = path.relative(docsRoot, file).replaceAll('\\', '/').replace(/\.md$/, '.html')
    return { title: meta.title || path.basename(file, '.md'), href: `/${relative}`, description: meta.description || 'Abra a orientação completa.' }
  }).filter((item) => item.href !== current)
}

for (const file of walk(docsRoot, '.md').filter((item) => item.endsWith('index.md') && item !== path.join(docsRoot, 'index.md'))) {
  let source = fs.readFileSync(file, 'utf8')
  if (source.includes('class="hub-guide"')) continue
  const section = path.basename(path.dirname(file))
  const meta = frontmatter(source) || {}
  const profile = profileCopy[section]
  const copy = hubCopy[section]
  let block = '\n\n<section class="hub-guide">\n<span class="section-kicker">Rota de aprendizagem</span>\n<h2>Como usar esta área</h2>\n'
  if (profile) {
    block += `<div class="portal-grid">${[0, 3, 6].map((index) => `<div class="portal-card"><strong>${profile[index]}</strong><p>${profile[index + 1]}</p></div>`).join('')}</div>\n`
  } else if (copy) {
    block += `<p><strong>${copy[0]}.</strong> ${copy[1]}</p><p>${copy[2]}</p>\n`
  } else if (section === 'faq') {
    block += '<p>Use as perguntas frequentes para uma resposta inicial. Quando houver configuração, dados ou tentativa afetada, abra a página temática e siga o diagnóstico completo.</p>\n'
  } else if (section === 'glossario') {
    block += '<p>Consulte o termo para reconhecer o conceito e depois siga os links temáticos do portal para aplicá-lo no curso.</p>\n'
  }
  block += '</section>\n'
  const cards = siblingCards(section, `/${section}/`)
  if (cards.length) block += `\n<RelatedContent :items='${JSON.stringify(cards)}' />\n`
  if (!source.includes('<VideoSection')) {
    block += `\n<VideoSection title="Como navegar em ${String(meta.title || section).replace(/^Para /, '')}" description="Apresentação das rotas, filtros e pontos de partida desta área." duration="4 minutos" audience="Todos os públicos indicados" status="em-producao" objective="Ajudar a escolher a próxima orientação sem depender de conhecimento prévio dos menus." :script='["Reconhecer a finalidade da área","Escolher uma rota inicial","Usar catálogo e busca","Abrir uma orientação completa"]' />\n`
  }
  fs.writeFileSync(file, `${source.trimEnd()}${block}`)
}

const comparisons = {
  'arquivo-pagina.md': ['Arquivo', '/recursos/arquivo.html', 'Página', '/recursos/pagina.html', 'Um plano oficial deve manter paginação para download; as instruções para aplicá-lo precisam abrir e se adaptar ao celular.', 'Escolha Arquivo para o documento e Página para a orientação, conectando os dois sem repetir o conteúdo.'],
  'pagina-livro.md': ['Página', '/recursos/pagina.html', 'Livro', '/recursos/livro.html', 'Uma orientação cabe em três seções; um guia de unidade possui várias leituras que precisam de índice e retomada.', 'Use Página para leitura única e Livro quando capítulos e sequência reduzirem a carga de navegação.'],
  'tarefa-forum.md': ['Tarefa', '/atividades/tarefa.html', 'Fórum', '/atividades/forum.html', 'O estudante produz um relatório para correção privada e depois debate conclusões com colegas.', 'Receba o produto pela Tarefa e realize a discussão no Fórum; não force uma única ferramenta a cumprir os dois papéis.'],
  'questionario-h5p.md': ['Questionário', '/atividades/questionario.html', 'H5P', '/atividades/h5p.html', 'A turma pratica conceitos com interação e depois realiza uma avaliação registrada com política de tentativas.', 'Use H5P para prática multimídia e Questionário quando banco, revisão e nota formal forem necessários.'],
  'glossario-base.md': ['Glossário', '/atividades/glossario.html', 'Base de dados', '/atividades/base-de-dados.html', 'A turma define termos técnicos e também cataloga projetos com vários campos e filtros.', 'Use Glossário para verbetes; escolha Base de dados para registros estruturados com campos heterogêneos.'],
  'wiki-base.md': ['Wiki', '/atividades/wiki.html', 'Base de dados', '/atividades/base-de-dados.html', 'Um grupo redige coletivamente um manual e registra separadamente equipamentos com ficha padronizada.', 'Use Wiki para texto colaborativo conectado e Base de dados para coleção de registros independentes.'],
  'licao-livro.md': ['Lição', '/atividades/licao.html', 'Livro', '/recursos/livro.html', 'Um estudo de caso precisa ramificar segundo respostas; um guia de referência precisa de leitura livre por capítulos.', 'Escolha Lição para percurso condicionado e Livro para conteúdo hierárquico sem decisão automática.'],
  'grupos-agrupamentos.md': ['Grupos', '/participantes/grupos.html', 'Agrupamentos', '/organizacao-do-curso/grupos-e-agrupamentos.html', 'Quatro equipes existem no curso, mas duas atividades usam combinações diferentes dessas equipes.', 'Crie pessoas nos grupos e reúna grupos em agrupamentos distintos para cada conjunto de atividades.'],
  'ocultar-restringir.md': ['Ocultar', '/organizacao-do-curso/visibilidade-e-acesso.html', 'Restringir', '/organizacao-do-curso/visibilidade-e-acesso.html', 'Um rascunho ainda não deve aparecer; uma avaliação pronta deve abrir somente na data e para o grupo correto.', 'Oculte durante preparação e restrinja quando a disponibilidade depender de condição explícita.'],
  'conclusao-manual-automatica.md': ['Conclusão manual', '/organizacao-do-curso/conclusao.html', 'Conclusão automática', '/organizacao-do-curso/conclusao.html', 'Uma leitura reflexiva depende da declaração do estudante; uma Tarefa pode ser concluída quando houver envio.', 'Use marcação manual para autorregulação e automática quando o Moodle observar a ação sem ambiguidade.']
}

for (const [name, data] of Object.entries(comparisons)) {
  const file = path.join(docsRoot, 'comparacoes', name)
  let source = fs.readFileSync(file, 'utf8')
  if (source.includes('## Cenário de decisão')) continue
  const [a, hrefA, b, hrefB, scenario, decision] = data
  const block = `\n\n## Cenário de decisão\n\n<ExampleBox>${scenario}</ExampleBox>\n\n## Como decidir\n\n- Escolha **${a}** quando sua característica principal for indispensável ao objetivo.\n- Escolha **${b}** quando a experiência oferecida pela segunda opção reduzir etapas ou barreiras.\n- Combine as duas somente quando cada uma tiver uma função distinta e explícita.\n\n<ImportantBox title="Decisão recomendada">${decision}</ImportantBox>\n\n<Checklist :items='${JSON.stringify([`A ação do estudante foi definida`, `A característica exclusiva de ${a} é necessária`, `A característica exclusiva de ${b} é necessária`, 'A opção escolhida foi testada no perfil destinatário'])}' />\n\n<RelatedContent :items='${JSON.stringify([{ title: `Guia completo: ${a}`, href: hrefA, description: 'Veja configuração, teste e boas práticas.' }, { title: `Guia completo: ${b}`, href: hrefB, description: 'Compare a experiência completa.' }])}' />\n`
  source = source.replace(/<RelatedContent[\s\S]*?<\/RelatedContent>\s*$/m, '')
  source = source.replace(':script=\'\["Reconhecer o contexto","Aplicar a orientação","Testar o resultado"\]\'', `:script='${JSON.stringify([`Apresentar ${a}`, `Apresentar ${b}`, 'Comparar o cenário', 'Testar a decisão'])}'`)
  fs.writeFileSync(file, `${source.trimEnd()}${block}`)
}

console.log('Índices, perfis e comparações enriquecidos com modelos próprios.')
