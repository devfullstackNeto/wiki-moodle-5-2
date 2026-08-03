import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  { text: 'Início', link: '/' },
  { text: 'Comece por aqui', link: '/comece-por-aqui/' },
  {
    text: 'Por perfil',
    items: [
      { text: 'Professor', link: '/professores/' },
      { text: 'Estudante', link: '/estudantes/' },
      { text: 'Tutor', link: '/tutores/' },
      { text: 'Gestor', link: '/gestores/' }
    ]
  },
  {
    text: 'Ensinar no Moodle',
    items: [
      { text: 'Recursos', link: '/recursos/' },
      { text: 'Atividades', link: '/atividades/' },
      { text: 'Conteúdo e multimídia', link: '/conteudo-e-multimidia/' },
      { text: 'Avaliação', link: '/avaliacao/' },
      { text: 'Organização do curso', link: '/organizacao-do-curso/' }
    ]
  },
  {
    text: 'Acompanhar',
    items: [
      { text: 'Visão geral do acompanhamento', link: '/acompanhamento/' },
      { text: 'Comunicação', link: '/comunicacao/' },
      { text: 'Participantes', link: '/participantes/' },
      { text: 'Relatórios', link: '/relatorios/' }
    ]
  },
  { text: 'Ajuda', items: [
    { text: 'Solução de problemas', link: '/solucao-de-problemas/' },
    { text: 'Boas práticas', link: '/boas-praticas/' },
    { text: 'Glossário', link: '/glossario/' },
    { text: 'Perguntas frequentes', link: '/faq/' }
  ] }
]

const section = (text: string, base: string, items: string[]): DefaultTheme.SidebarItem => ({
  text,
  collapsed: false,
  items: [{ text: `Visão geral de ${text.toLowerCase()}`, link: `/${base}/` }, ...items.map((item) => {
    const [label, slug] = item.split('|')
    return { text: label, link: `/${base}/${slug}` }
  })]
})

export const sidebar: DefaultTheme.Sidebar = {
  '/acompanhamento/': [{
    text: 'Acompanhamento',
    collapsed: false,
    items: [
      { text: 'Visão geral do acompanhamento', link: '/acompanhamento/' },
      { text: 'Conclusão de atividade', link: '/organizacao-do-curso/conclusao' },
      { text: 'Acompanhamento individual', link: '/participantes/acompanhamento-individual' },
      { text: 'Relatórios', link: '/relatorios/' },
      { text: 'Livro de notas', link: '/avaliacao/livro-de-notas' }
    ]
  }],
  '/conteudo-e-multimidia/': [{
    text: 'Conteúdo e multimídia',
    collapsed: false,
    items: [
      { text: 'Visão geral', link: '/conteudo-e-multimidia/' },
      { text: 'Página', link: '/recursos/pagina' },
      { text: 'Livro', link: '/recursos/livro' },
      { text: 'Área de texto e mídia', link: '/recursos/area-texto-midia' },
      { text: 'H5P', link: '/atividades/h5p' },
      { text: 'SCORM', link: '/atividades/scorm' }
    ]
  }],
  '/comece-por-aqui/': [section('Comece por aqui', 'comece-por-aqui', [
    'O que é o Moodle|o-que-e-o-moodle', 'Conhecer o Moodle 5.2|conhecer-moodle-5-2',
    'Acessar a plataforma|acessar-plataforma', 'Navegar no Moodle|navegar-no-moodle',
    'Configurar perfil e preferências|perfil-e-preferencias'
  ])],
  '/recursos/': [section('Recursos', 'recursos', [
    'Arquivo|arquivo', 'Pasta|pasta', 'Página|pagina', 'URL|url', 'Livro|livro',
    'Pacote IMS|pacote-ims', 'Área de texto e mídia|area-texto-midia'
  ])],
  '/atividades/': [section('Atividades', 'atividades', [
    'Tarefa|tarefa', 'Fórum|forum', 'Questionário|questionario', 'Escolha|escolha',
    'Base de dados|base-de-dados', 'Feedback|feedback', 'Glossário|glossario', 'H5P|h5p',
    'Lição|licao', 'Pesquisa|pesquisa', 'SCORM|scorm', 'Wiki|wiki',
    'Laboratório de avaliação|laboratorio-de-avaliacao', 'Ferramenta externa|ferramenta-externa',
    'BigBlueButton|bigbluebutton'
  ])],
  '/avaliacao/': [section('Avaliação', 'avaliacao', [
    'Livro de notas|livro-de-notas', 'Categorias e itens|categorias-e-itens',
    'Cálculo e agregação|calculo-e-agregacao', 'Rubricas e guias|rubricas-e-guias',
    'Banco de questões|banco-de-questoes', 'Importar GIFT|importar-gift',
    'Prazos e exceções|prazos-e-excecoes', 'Feedback e tentativas|feedback-e-tentativas'
  ])],
  '/organizacao-do-curso/': [section('Organização do curso', 'organizacao-do-curso', [
    'Configurar o curso|configurar-curso', 'Formatos e seções|formatos-e-secoes',
    'Editar, mover e duplicar|editar-mover-duplicar', 'Visibilidade e acesso|visibilidade-e-acesso',
    'Conclusão|conclusao', 'Grupos e agrupamentos|grupos-e-agrupamentos',
    'Reutilizar conteúdo|reutilizar-conteudo', 'Backup e restauração|backup-e-restauracao',
    'Blocos|blocos', 'Integração SUAP|integracao-suap'
  ])],
  '/comunicacao/': [section('Comunicação', 'comunicacao', [
    'Avisos e mensagens|avisos-e-mensagens', 'Notificações|notificacoes',
    'Calendário e eventos|calendario-e-eventos', 'Mediação em fóruns|mediacao-foruns',
    'Colaboração|colaboracao'
  ])],
  '/participantes/': [section('Participantes', 'participantes', [
    'Consultar participantes|consultar', 'Inscrições|inscricoes', 'Papéis e permissões|papeis-e-permissoes',
    'Grupos|grupos', 'Acompanhamento individual|acompanhamento-individual', 'Sincronização SUAP|sincronizacao-suap'
  ])],
  '/relatorios/': [section('Relatórios', 'relatorios', [
    'Escolher o relatório|escolher-relatorio', 'Logs|logs', 'Participação|participacao',
    'Conclusão|conclusao', 'Notas|notas', 'Relatórios de atividades|atividades',
    'Monitoramento responsável|monitoramento-responsavel'
  ])],
  '/boas-praticas/': [section('Boas práticas', 'boas-praticas', [
    'Design e organização|design-e-organizacao', 'Acessibilidade|acessibilidade',
    'Comunicação e engajamento|comunicacao-e-engajamento', 'Privacidade e uso responsável|privacidade-e-uso-responsavel'
  ])],
  '/solucao-de-problemas/': [section('Solução de problemas', 'solucao-de-problemas', [
    'Acesso|acesso', 'Atividade indisponível|atividade-indisponivel', 'Arquivo não abre|arquivo-nao-abre',
    'Envio de tarefa|envio-tarefa', 'Nota não aparece|nota-nao-aparece',
    'Conclusão não registrada|conclusao-nao-registrada', 'Grupos|grupos',
    'Questionário|questionario', 'Vídeo|video', 'Solicitar suporte|solicitar-suporte'
  ])],
  '/comparacoes/': [section('Comparações', 'comparacoes', [
    'Arquivo × Página|arquivo-pagina', 'Página × Livro|pagina-livro', 'Tarefa × Fórum|tarefa-forum',
    'Questionário × H5P|questionario-h5p', 'Glossário × Base de dados|glossario-base',
    'Wiki × Base de dados|wiki-base', 'Lição × Livro|licao-livro', 'Grupos × agrupamentos|grupos-agrupamentos',
    'Ocultar × restringir|ocultar-restringir', 'Conclusão manual × automática|conclusao-manual-automatica'
  ])]
}
