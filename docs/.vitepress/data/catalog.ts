export interface CatalogItem {
  title: string
  description: string
  href: string
  type: string
  category: string
  audience: string[]
  objectives: string[]
  level: 'Básico' | 'Intermediário' | 'Avançado'
  tags: string[]
}

export const catalog: CatalogItem[] = [
  {
    "title": "Recurso Arquivo",
    "description": "Disponibilize um único documento, imagem, áudio ou outro arquivo com orientação de uso.",
    "href": "/recursos/arquivo.html",
    "type": "recurso",
    "category": "Recursos",
    "audience": [
      "Professor"
    ],
    "objectives": [
      "criar conteúdo",
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "conteúdo",
      "download",
      "arquivo"
    ]
  },
  {
    "title": "Recurso Pasta",
    "description": "Agrupe vários arquivos relacionados sem ocupar a página do curso com muitos links.",
    "href": "/recursos/pasta.html",
    "type": "recurso",
    "category": "Recursos",
    "audience": [
      "Professor"
    ],
    "objectives": [
      "criar conteúdo",
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "conteúdo",
      "arquivos",
      "organização"
    ]
  },
  {
    "title": "Recurso Página",
    "description": "Crie conteúdo web que abre diretamente no Moodle e se adapta melhor ao celular.",
    "href": "/recursos/pagina.html",
    "type": "recurso",
    "category": "Recursos",
    "audience": [
      "Professor"
    ],
    "objectives": [
      "criar conteúdo",
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "conteúdo",
      "leitura",
      "acessibilidade"
    ]
  },
  {
    "title": "Recurso URL",
    "description": "Direcione o estudante a uma página, vídeo, documento ou serviço externo.",
    "href": "/recursos/url.html",
    "type": "recurso",
    "category": "Recursos",
    "audience": [
      "Professor"
    ],
    "objectives": [
      "criar conteúdo",
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "conteúdo",
      "link",
      "externo"
    ]
  },
  {
    "title": "Recurso Livro",
    "description": "Organize conteúdo extenso em capítulos e subcapítulos com índice próprio.",
    "href": "/recursos/livro.html",
    "type": "recurso",
    "category": "Recursos",
    "audience": [
      "Professor"
    ],
    "objectives": [
      "criar conteúdo",
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "conteúdo",
      "leitura longa",
      "índice"
    ]
  },
  {
    "title": "Recurso Pacote de conteúdo IMS",
    "description": "Publique material estático empacotado no padrão IMS Content Package.",
    "href": "/recursos/pacote-ims.html",
    "type": "recurso",
    "category": "Recursos",
    "audience": [
      "Professor"
    ],
    "objectives": [
      "criar conteúdo",
      "organizar"
    ],
    "level": "Avançado",
    "tags": [
      "conteúdo",
      "IMS",
      "pacote"
    ]
  },
  {
    "title": "Recurso Área de texto e mídia",
    "description": "Mostre orientação, título visual ou mídia diretamente na página do curso.",
    "href": "/recursos/area-texto-midia.html",
    "type": "recurso",
    "category": "Recursos",
    "audience": [
      "Professor"
    ],
    "objectives": [
      "criar conteúdo",
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "conteúdo",
      "orientação",
      "multimídia"
    ]
  },
  {
    "title": "Atividade Tarefa",
    "description": "Receba trabalhos, avalie com critérios e devolva feedback.",
    "href": "/atividades/tarefa.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar",
      "acompanhar"
    ],
    "level": "Intermediário",
    "tags": [
      "avaliação",
      "produção",
      "feedback"
    ]
  },
  {
    "title": "Atividade Fórum",
    "description": "Promova discussões assíncronas, perguntas, sínteses e avaliação de participação.",
    "href": "/atividades/forum.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "criar conteúdo",
      "acompanhar"
    ],
    "level": "Intermediário",
    "tags": [
      "comunicação",
      "colaboração",
      "assíncrono"
    ]
  },
  {
    "title": "Atividade Questionário",
    "description": "Monte avaliações com questões reutilizáveis, tentativas e feedback controlados.",
    "href": "/atividades/questionario.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar",
      "acompanhar"
    ],
    "level": "Avançado",
    "tags": [
      "avaliação",
      "questões",
      "tentativas"
    ]
  },
  {
    "title": "Atividade Escolha",
    "description": "Faça uma pergunta objetiva com opções e publicação controlada dos resultados.",
    "href": "/atividades/escolha.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "criar conteúdo",
      "acompanhar"
    ],
    "level": "Básico",
    "tags": [
      "consulta",
      "decisão",
      "interação"
    ]
  },
  {
    "title": "Atividade Base de dados",
    "description": "Crie coleções colaborativas de registros com campos e modelos próprios.",
    "href": "/atividades/base-de-dados.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "criar conteúdo",
      "acompanhar"
    ],
    "level": "Avançado",
    "tags": [
      "colaboração",
      "produção",
      "registros"
    ]
  },
  {
    "title": "Atividade Feedback",
    "description": "Crie formulários de opinião e avaliação de experiência com perguntas próprias.",
    "href": "/atividades/feedback.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "criar conteúdo",
      "acompanhar"
    ],
    "level": "Intermediário",
    "tags": [
      "pesquisa",
      "opinião",
      "acompanhamento"
    ]
  },
  {
    "title": "Atividade Glossário",
    "description": "Organize termos e definições criados pelo professor ou pela turma.",
    "href": "/atividades/glossario.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "criar conteúdo",
      "acompanhar"
    ],
    "level": "Intermediário",
    "tags": [
      "conceitos",
      "colaboração",
      "referência"
    ]
  },
  {
    "title": "Atividade H5P",
    "description": "Adicione conteúdo interativo H5P e acompanhe tentativas quando o tipo permitir.",
    "href": "/atividades/h5p.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "criar conteúdo",
      "acompanhar"
    ],
    "level": "Avançado",
    "tags": [
      "interação",
      "multimídia",
      "acompanhamento"
    ]
  },
  {
    "title": "Atividade Lição",
    "description": "Combine páginas e perguntas em percursos guiados por respostas e saltos.",
    "href": "/atividades/licao.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "criar conteúdo",
      "acompanhar"
    ],
    "level": "Avançado",
    "tags": [
      "percurso",
      "questões",
      "interação"
    ]
  },
  {
    "title": "Atividade Pesquisa",
    "description": "Aplique instrumentos predefinidos do Moodle para investigar a experiência de aprendizagem.",
    "href": "/atividades/pesquisa.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "criar conteúdo",
      "acompanhar"
    ],
    "level": "Intermediário",
    "tags": [
      "pesquisa",
      "instrumento",
      "acompanhamento"
    ]
  },
  {
    "title": "Atividade SCORM",
    "description": "Publique pacotes SCORM/AICC e consulte tentativas registradas pelo pacote.",
    "href": "/atividades/scorm.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "criar conteúdo",
      "acompanhar"
    ],
    "level": "Avançado",
    "tags": [
      "pacote",
      "rastreamento",
      "conteúdo"
    ]
  },
  {
    "title": "Atividade Wiki",
    "description": "Construa uma coleção de páginas individual ou colaborativa com histórico de versões.",
    "href": "/atividades/wiki.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "criar conteúdo",
      "acompanhar"
    ],
    "level": "Avançado",
    "tags": [
      "colaboração",
      "autoria",
      "histórico"
    ]
  },
  {
    "title": "Atividade Laboratório de avaliação",
    "description": "Organize envio e avaliação por pares em fases controladas.",
    "href": "/atividades/laboratorio-de-avaliacao.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar",
      "acompanhar"
    ],
    "level": "Avançado",
    "tags": [
      "avaliação por pares",
      "colaboração",
      "rubrica"
    ]
  },
  {
    "title": "Atividade Ferramenta externa",
    "description": "Conecte recursos compatíveis com LTI sem criar uma integração improvisada.",
    "href": "/atividades/ferramenta-externa.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "criar conteúdo",
      "acompanhar"
    ],
    "level": "Avançado",
    "tags": [
      "LTI",
      "integração",
      "privacidade"
    ]
  },
  {
    "title": "Atividade BigBlueButton",
    "description": "Agende sessões de webconferência quando o serviço estiver configurado.",
    "href": "/atividades/bigbluebutton.html",
    "type": "atividade",
    "category": "Atividades",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "criar conteúdo",
      "acompanhar"
    ],
    "level": "Intermediário",
    "tags": [
      "síncrono",
      "webconferência",
      "comunicação"
    ]
  },
  {
    "title": "O que é o Moodle",
    "description": "Entenda curso, recurso, atividade, bloco e papel sem depender da aparência do tema.",
    "href": "/comece-por-aqui/o-que-e-o-moodle.html",
    "type": "guia",
    "category": "Comece por aqui",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "curso",
      "conceitos"
    ]
  },
  {
    "title": "Conhecer o Moodle 5.2",
    "description": "Reconheça a navegação e as mudanças relevantes da versão 5.2.",
    "href": "/comece-por-aqui/conhecer-moodle-5-2.html",
    "type": "guia",
    "category": "Comece por aqui",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "versão",
      "navegação"
    ]
  },
  {
    "title": "Acessar a plataforma",
    "description": "Use o endereço institucional ou a integração autorizada sem expor credenciais.",
    "href": "/comece-por-aqui/acessar-plataforma.html",
    "type": "guia",
    "category": "Comece por aqui",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "acesso",
      "segurança"
    ]
  },
  {
    "title": "Navegar no Moodle",
    "description": "Localize cursos, índice, atividades, notas e menu do usuário.",
    "href": "/comece-por-aqui/navegar-no-moodle.html",
    "type": "guia",
    "category": "Comece por aqui",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "navegação",
      "primeiros passos"
    ]
  },
  {
    "title": "Configurar perfil e preferências",
    "description": "Revise dados permitidos, editor, fórum, mensagens e notificações.",
    "href": "/comece-por-aqui/perfil-e-preferencias.html",
    "type": "guia",
    "category": "Comece por aqui",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "perfil",
      "preferências"
    ]
  },
  {
    "title": "Usar o Livro de notas",
    "description": "Entenda itens, categorias, totais e visões por papel.",
    "href": "/avaliacao/livro-de-notas.html",
    "type": "guia",
    "category": "Avaliação",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Intermediário",
    "tags": [
      "notas",
      "acompanhamento"
    ]
  },
  {
    "title": "Organizar categorias e itens de nota",
    "description": "Estruture avaliações online e externas sem duplicar registros.",
    "href": "/avaliacao/categorias-e-itens.html",
    "type": "guia",
    "category": "Avaliação",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Intermediário",
    "tags": [
      "notas",
      "categorias"
    ]
  },
  {
    "title": "Configurar cálculo e agregação",
    "description": "Combine notas de forma auditável e coerente com o plano de ensino.",
    "href": "/avaliacao/calculo-e-agregacao.html",
    "type": "guia",
    "category": "Avaliação",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Avançado",
    "tags": [
      "notas",
      "cálculo"
    ]
  },
  {
    "title": "Avaliar com rubricas e guias",
    "description": "Publique critérios e aplique avaliação avançada em atividades compatíveis.",
    "href": "/avaliacao/rubricas-e-guias.html",
    "type": "guia",
    "category": "Avaliação",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Avançado",
    "tags": [
      "rubrica",
      "feedback"
    ]
  },
  {
    "title": "Organizar o banco de questões",
    "description": "Crie categorias, versões e questões reutilizáveis no contexto adequado.",
    "href": "/avaliacao/banco-de-questoes.html",
    "type": "guia",
    "category": "Avaliação",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Avançado",
    "tags": [
      "questões",
      "organização"
    ]
  },
  {
    "title": "Importar questões em GIFT",
    "description": "Valide sintaxe, codificação e respostas antes de usar questões importadas.",
    "href": "/avaliacao/importar-gift.html",
    "type": "guia",
    "category": "Avaliação",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Avançado",
    "tags": [
      "GIFT",
      "questões"
    ]
  },
  {
    "title": "Gerenciar prazos e exceções",
    "description": "Diferencie datas e aplique ajustes por usuário ou grupo somente em módulos compatíveis.",
    "href": "/avaliacao/prazos-e-excecoes.html",
    "type": "guia",
    "category": "Avaliação",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Intermediário",
    "tags": [
      "prazos",
      "exceções"
    ]
  },
  {
    "title": "Gerenciar feedback e tentativas",
    "description": "Use nova tentativa, reabertura e feedback sem apagar o histórico.",
    "href": "/avaliacao/feedback-e-tentativas.html",
    "type": "guia",
    "category": "Avaliação",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Intermediário",
    "tags": [
      "feedback",
      "tentativas"
    ]
  },
  {
    "title": "Configurar o curso",
    "description": "Revise identificação, datas, formato, aparência, grupos e acompanhamento.",
    "href": "/organizacao-do-curso/configurar-curso.html",
    "type": "guia",
    "category": "Organização do curso",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "curso",
      "configuração"
    ]
  },
  {
    "title": "Organizar formatos e seções",
    "description": "Estruture o curso por tempo, tema ou fluxo real de aprendizagem.",
    "href": "/organizacao-do-curso/formatos-e-secoes.html",
    "type": "guia",
    "category": "Organização do curso",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "seções",
      "formato"
    ]
  },
  {
    "title": "Editar, mover e duplicar conteúdos",
    "description": "Reorganize itens sem perder contexto nem publicar cópias incompletas.",
    "href": "/organizacao-do-curso/editar-mover-duplicar.html",
    "type": "guia",
    "category": "Organização do curso",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "edição",
      "organização"
    ]
  },
  {
    "title": "Controlar visibilidade e acesso",
    "description": "Diferencie ocultar, disponibilizar fora da página e aplicar condições.",
    "href": "/organizacao-do-curso/visibilidade-e-acesso.html",
    "type": "guia",
    "category": "Organização do curso",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "visibilidade",
      "restrição"
    ]
  },
  {
    "title": "Configurar conclusão",
    "description": "Escolha critérios manuais ou automáticos que representem uma ação observável.",
    "href": "/organizacao-do-curso/conclusao.html",
    "type": "guia",
    "category": "Organização do curso",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Avançado",
    "tags": [
      "conclusão",
      "acompanhamento"
    ]
  },
  {
    "title": "Trabalhar com grupos e agrupamentos",
    "description": "Separe participantes e direcione atividades a conjuntos de grupos.",
    "href": "/organizacao-do-curso/grupos-e-agrupamentos.html",
    "type": "guia",
    "category": "Organização do curso",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "grupos",
      "agrupamentos"
    ]
  },
  {
    "title": "Reutilizar conteúdo de outro curso",
    "description": "Importe apenas o necessário e ajuste datas, grupos e avaliações.",
    "href": "/organizacao-do-curso/reutilizar-conteudo.html",
    "type": "guia",
    "category": "Organização do curso",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "importação",
      "reutilização"
    ]
  },
  {
    "title": "Fazer backup e restauração",
    "description": "Escolha entre cópia, restauração e redefinição sem comprometer dados.",
    "href": "/organizacao-do-curso/backup-e-restauracao.html",
    "type": "guia",
    "category": "Organização do curso",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Avançado",
    "tags": [
      "backup",
      "restauração"
    ]
  },
  {
    "title": "Usar blocos com propósito",
    "description": "Escolha blocos por contexto sem criar uma página para cada opção.",
    "href": "/organizacao-do-curso/blocos.html",
    "type": "guia",
    "category": "Organização do curso",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "blocos",
      "tema"
    ]
  },
  {
    "title": "Criar e sincronizar a sala pelo SUAP",
    "description": "Documente o fluxo institucional sem confundi-lo com funcionalidade nativa do Moodle.",
    "href": "/organizacao-do-curso/integracao-suap.html",
    "type": "guia",
    "category": "Organização do curso",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "SUAP",
      "institucional"
    ]
  },
  {
    "title": "Usar avisos e mensagens",
    "description": "Escolha comunicação de turma ou conversa direta com expectativa clara.",
    "href": "/comunicacao/avisos-e-mensagens.html",
    "type": "guia",
    "category": "Comunicação",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "avisos",
      "mensagens"
    ]
  },
  {
    "title": "Configurar notificações",
    "description": "Ajuste preferências pessoais sem prometer entrega que o administrador desabilitou.",
    "href": "/comunicacao/notificacoes.html",
    "type": "guia",
    "category": "Comunicação",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "notificações",
      "preferências"
    ]
  },
  {
    "title": "Usar calendário e eventos",
    "description": "Diferencie eventos automáticos e eventos criados manualmente.",
    "href": "/comunicacao/calendario-e-eventos.html",
    "type": "guia",
    "category": "Comunicação",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "calendário",
      "datas"
    ]
  },
  {
    "title": "Mediar discussões em fórum",
    "description": "Transforme postagens em investigação, diálogo e síntese.",
    "href": "/comunicacao/mediacao-foruns.html",
    "type": "guia",
    "category": "Comunicação",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "fórum",
      "mediação"
    ]
  },
  {
    "title": "Planejar colaboração",
    "description": "Escolha Fórum, Wiki, Glossário ou Base de dados conforme o produto coletivo.",
    "href": "/comunicacao/colaboracao.html",
    "type": "guia",
    "category": "Comunicação",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "colaboração",
      "escolha"
    ]
  },
  {
    "title": "Consultar participantes",
    "description": "Filtre pessoas, status e grupos sem inferir aprendizagem apenas pelo último acesso.",
    "href": "/participantes/consultar.html",
    "type": "guia",
    "category": "Participantes",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Básico",
    "tags": [
      "participantes",
      "privacidade"
    ]
  },
  {
    "title": "Gerenciar inscrições",
    "description": "Diferencie método, papel, período, suspensão e desinscrição.",
    "href": "/participantes/inscricoes.html",
    "type": "guia",
    "category": "Participantes",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Avançado",
    "tags": [
      "inscrição",
      "acesso"
    ]
  },
  {
    "title": "Compreender papéis e permissões",
    "description": "Relacione capacidade, papel e contexto antes de solicitar acesso.",
    "href": "/participantes/papeis-e-permissoes.html",
    "type": "guia",
    "category": "Participantes",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Avançado",
    "tags": [
      "papéis",
      "permissões"
    ]
  },
  {
    "title": "Organizar participantes em grupos",
    "description": "Crie grupos, membros e agrupamentos com uma finalidade explícita.",
    "href": "/participantes/grupos.html",
    "type": "guia",
    "category": "Participantes",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "grupos",
      "participantes"
    ]
  },
  {
    "title": "Acompanhar um estudante",
    "description": "Combine participação, conclusão, notas e contexto com intervenção humana.",
    "href": "/participantes/acompanhamento-individual.html",
    "type": "guia",
    "category": "Participantes",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "acompanhamento",
      "estudante"
    ]
  },
  {
    "title": "Validar sincronização de participantes pelo SUAP",
    "description": "Encaminhe divergências de vínculo pelo processo institucional correto.",
    "href": "/participantes/sincronizacao-suap.html",
    "type": "guia",
    "category": "Participantes",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "SUAP",
      "sincronização"
    ]
  },
  {
    "title": "Escolher o relatório adequado",
    "description": "Relacione pergunta, fonte, granularidade e limite de interpretação.",
    "href": "/relatorios/escolher-relatorio.html",
    "type": "guia",
    "category": "Relatórios",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Intermediário",
    "tags": [
      "relatórios",
      "decisão"
    ]
  },
  {
    "title": "Consultar logs",
    "description": "Filtre eventos por curso, participante, data, componente e ação.",
    "href": "/relatorios/logs.html",
    "type": "guia",
    "category": "Relatórios",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Avançado",
    "tags": [
      "logs",
      "auditoria"
    ]
  },
  {
    "title": "Consultar participação",
    "description": "Identifique quem executou ações selecionadas em uma atividade.",
    "href": "/relatorios/participacao.html",
    "type": "guia",
    "category": "Relatórios",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Intermediário",
    "tags": [
      "participação",
      "acompanhamento"
    ]
  },
  {
    "title": "Consultar conclusão",
    "description": "Veja critérios atendidos, pendências e ajustes manuais autorizados.",
    "href": "/relatorios/conclusao.html",
    "type": "guia",
    "category": "Relatórios",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Intermediário",
    "tags": [
      "conclusão",
      "relatório"
    ]
  },
  {
    "title": "Consultar relatórios de notas",
    "description": "Escolha visão geral, relatório do usuário, histórico ou visão única conforme a pergunta.",
    "href": "/relatorios/notas.html",
    "type": "guia",
    "category": "Relatórios",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Intermediário",
    "tags": [
      "notas",
      "relatório"
    ]
  },
  {
    "title": "Consultar relatórios de atividades",
    "description": "Use resultados próprios de Tarefa, Questionário, SCORM e outros módulos.",
    "href": "/relatorios/atividades.html",
    "type": "guia",
    "category": "Relatórios",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Avançado",
    "tags": [
      "atividades",
      "tentativas"
    ]
  },
  {
    "title": "Monitorar com responsabilidade",
    "description": "Use dados mínimos, contexto e contato pedagógico para apoiar estudantes.",
    "href": "/relatorios/monitoramento-responsavel.html",
    "type": "guia",
    "category": "Relatórios",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "avaliar"
    ],
    "level": "Intermediário",
    "tags": [
      "privacidade",
      "acompanhamento"
    ]
  },
  {
    "title": "Organizar cursos para aprender",
    "description": "Alinhe objetivos, sequência, atividades, avaliação e carga de navegação.",
    "href": "/boas-praticas/design-e-organizacao.html",
    "type": "guia",
    "category": "Boas práticas",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "design educacional",
      "organização"
    ]
  },
  {
    "title": "Criar conteúdo acessível",
    "description": "Aplique estrutura, contraste, alternativas, legendas e operação por teclado.",
    "href": "/boas-praticas/acessibilidade.html",
    "type": "guia",
    "category": "Boas práticas",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "acessibilidade",
      "WCAG"
    ]
  },
  {
    "title": "Comunicar e promover engajamento",
    "description": "Combine presença docente, escolha, retorno e expectativa realista.",
    "href": "/boas-praticas/comunicacao-e-engajamento.html",
    "type": "guia",
    "category": "Boas práticas",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "comunicação",
      "engajamento"
    ]
  },
  {
    "title": "Proteger dados e usar materiais com responsabilidade",
    "description": "Minimize dados e respeite direitos, contexto e acessibilidade.",
    "href": "/boas-praticas/privacidade-e-uso-responsavel.html",
    "type": "guia",
    "category": "Boas práticas",
    "audience": [
      "Professor",
      "Tutor"
    ],
    "objectives": [
      "organizar"
    ],
    "level": "Intermediário",
    "tags": [
      "privacidade",
      "direitos autorais"
    ]
  },
  {
    "title": "Resolver problemas de acesso",
    "description": "Separe endereço, autenticação, vínculo, bloqueio e navegador.",
    "href": "/solucao-de-problemas/acesso.html",
    "type": "guia",
    "category": "Solução de problemas",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "resolver problemas"
    ],
    "level": "Básico",
    "tags": [
      "acesso",
      "diagnóstico"
    ]
  },
  {
    "title": "Resolver atividade indisponível",
    "description": "Verifique visibilidade, datas, restrições, grupos e papel.",
    "href": "/solucao-de-problemas/atividade-indisponivel.html",
    "type": "guia",
    "category": "Solução de problemas",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "resolver problemas"
    ],
    "level": "Intermediário",
    "tags": [
      "atividade",
      "acesso"
    ]
  },
  {
    "title": "Resolver arquivo que não abre",
    "description": "Verifique permissão, integridade, formato, tamanho e aplicativo.",
    "href": "/solucao-de-problemas/arquivo-nao-abre.html",
    "type": "guia",
    "category": "Solução de problemas",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "resolver problemas"
    ],
    "level": "Básico",
    "tags": [
      "arquivo",
      "diagnóstico"
    ]
  },
  {
    "title": "Resolver problemas no envio de tarefa",
    "description": "Use o status de envio para localizar prazo, formato, tamanho e confirmação.",
    "href": "/solucao-de-problemas/envio-tarefa.html",
    "type": "guia",
    "category": "Solução de problemas",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "resolver problemas"
    ],
    "level": "Intermediário",
    "tags": [
      "tarefa",
      "envio"
    ]
  },
  {
    "title": "Resolver nota que não aparece",
    "description": "Diferencie nota ausente, oculta, não liberada e cálculo inesperado.",
    "href": "/solucao-de-problemas/nota-nao-aparece.html",
    "type": "guia",
    "category": "Solução de problemas",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "resolver problemas"
    ],
    "level": "Intermediário",
    "tags": [
      "nota",
      "visibilidade"
    ]
  },
  {
    "title": "Resolver conclusão não registrada",
    "description": "Compare o comportamento com cada critério configurado.",
    "href": "/solucao-de-problemas/conclusao-nao-registrada.html",
    "type": "guia",
    "category": "Solução de problemas",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "resolver problemas"
    ],
    "level": "Avançado",
    "tags": [
      "conclusão",
      "diagnóstico"
    ]
  },
  {
    "title": "Resolver problemas com grupos",
    "description": "Confira membros, modalidade, agrupamento, restrição e forçamento do curso.",
    "href": "/solucao-de-problemas/grupos.html",
    "type": "guia",
    "category": "Solução de problemas",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "resolver problemas"
    ],
    "level": "Intermediário",
    "tags": [
      "grupos",
      "diagnóstico"
    ]
  },
  {
    "title": "Resolver problemas com questionário",
    "description": "Identifique disponibilidade, tentativa, tempo, senha, comportamento e revisão.",
    "href": "/solucao-de-problemas/questionario.html",
    "type": "guia",
    "category": "Solução de problemas",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "resolver problemas"
    ],
    "level": "Avançado",
    "tags": [
      "questionário",
      "tentativas"
    ]
  },
  {
    "title": "Resolver problemas com vídeo",
    "description": "Verifique acesso, provedor, formato, legenda, rede e bloqueio de incorporação.",
    "href": "/solucao-de-problemas/video.html",
    "type": "guia",
    "category": "Solução de problemas",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "resolver problemas"
    ],
    "level": "Intermediário",
    "tags": [
      "vídeo",
      "acessibilidade"
    ]
  },
  {
    "title": "Solicitar suporte com informações úteis",
    "description": "Envie contexto suficiente sem senha ou excesso de dados pessoais.",
    "href": "/solucao-de-problemas/solicitar-suporte.html",
    "type": "guia",
    "category": "Solução de problemas",
    "audience": [
      "Todos os públicos"
    ],
    "objectives": [
      "resolver problemas"
    ],
    "level": "Básico",
    "tags": [
      "suporte",
      "privacidade"
    ]
  }
]
