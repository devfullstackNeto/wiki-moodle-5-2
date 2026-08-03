---
title: Criar e usar grupos no curso
description: Organize participantes, modalidades e agrupamentos sem confundir equipe, acesso e inscrição.
category: Procedimento
audience:
  - Professor
  - Tutor
level: Intermediário
readingTime: 15 min
tags:
  - grupos
  - participantes
  - agrupamentos
moodleVersion: 5.2.x
status: em-revisao
lastReviewed: 2026-08-03
pageType: procedimento
---

<ObjectiveCard>Ao final, você conseguirá criar grupos manualmente ou automaticamente, distribuir participantes, montar agrupamentos e aplicar a modalidade correta em atividades e relatórios.</ObjectiveCard>

## Objetivo do procedimento

Grupos organizam participantes **dentro de um curso**. Eles podem separar turmas, equipes de trabalho, polos ou outros conjuntos que precisam interagir ou ser filtrados de forma distinta. Um participante pode estar em mais de um grupo e também pode não estar em grupo algum.

Um **agrupamento** é um conjunto de grupos. Ele permite usar diferentes arranjos no mesmo curso: por exemplo, grupos A, B, C e D para trabalhos regulares; agrupamento Manhã com A e B; agrupamento Tarde com C e D.

<ImportantBox title="Não confunda os conceitos">Grupo reúne pessoas dentro do curso. Agrupamento reúne grupos. Coorte atua no site ou categoria e costuma apoiar inscrição em vários cursos. Papel define permissões. Nenhum desses conceitos substitui os demais.</ImportantBox>

## Quando utilizar

- Várias turmas compartilham o mesmo curso e precisam de fóruns ou relatórios separados.
- Uma atividade deve receber entrega por equipe.
- Professores ou tutores acompanham subconjuntos específicos.
- Conteúdos ou datas variam por equipe e serão aplicados por agrupamento ou restrição.

<ExampleBox title="Exemplo: equipes e turnos">Quatro equipes trabalham separadamente em um Fórum. Para uma atividade integrada, Equipes 01 e 02 formam o agrupamento Manhã e Equipes 03 e 04 formam o agrupamento Tarde. As pessoas permanecem nos grupos; apenas os grupos são associados aos agrupamentos.</ExampleBox>

## Antes de começar

<Prerequisites>

- Participantes já inscritos no curso, salvo quando o método institucional sincroniza membros posteriormente.
- Finalidade, nomes e regra de composição registrados.
- Decisão entre criação manual, automática, importação ou integração institucional.
- Atividades que usarão os grupos identificadas antes da abertura para participação.

</Prerequisites>

<NavigationPath path="Curso → Participantes → menu de ações de Participantes → Grupos" />

<ValidationNotice>No tema Boost padrão, Grupos e Agrupamentos são acessados a partir do menu de Participantes. O tema, idioma, permissões e integração SUAP podem alterar o caminho e controlar a composição; confirme antes de orientar usuários.</ValidationNotice>

<StepByStep introduction="Crie a estrutura, confira os membros e somente depois aplique grupos às atividades.">
  <StepItem title="Defina o desenho dos grupos" description="Registre finalidade, quantidade, tamanho, critério de distribuição e duração." expected="É possível explicar por que cada participante pertence ao grupo e onde ele será usado." />
  <StepItem title="Abra a gestão de Grupos" description="No curso, acesse Participantes e escolha Grupos no menu disponível." expected="A página mostra grupos do curso e membros do grupo selecionado." />
  <StepItem title="Crie um grupo" description="Selecione Criar grupo, informe nome e, quando necessário, descrição, identificador ou chave de inscrição." action="Use um padrão estável, como “Projeto — Equipe 01”, evitando dados pessoais no nome." expected="O novo grupo aparece na lista e ainda pode estar sem membros." />
  <StepItem title="Adicione participantes" description="Selecione o grupo, abra Adicionar/remover usuários e mova as pessoas entre membros potenciais e existentes." action="Confira nomes homônimos e papéis antes de concluir." expected="A lista do grupo apresenta exatamente os participantes planejados." />
  <StepItem title="Use criação automática quando apropriado" description="Escolha critério por número de grupos ou membros, método de distribuição e convenção de nomes." action="Faça prévia da distribuição e avalie se participantes com papéis docentes devem ser incluídos." expected="Os grupos são criados com tamanho equilibrado segundo a regra definida." alert="Distribuição aleatória pode ignorar condições pedagógicas ou de acessibilidade que exigem composição intencional." />
  <StepItem title="Crie um agrupamento, se necessário" description="Abra a área Agrupamentos, crie o agrupamento e associe os grupos que devem atuar juntos." expected="O agrupamento lista apenas os grupos destinados àquele conjunto de atividades." />
  <StepItem title="Aplique à atividade" description="Edite uma atividade compatível e abra Configurações comuns do módulo." action="Escolha Sem grupos, Grupos separados ou Grupos visíveis e, quando necessário, selecione o agrupamento." expected="A atividade filtra interação ou visualização conforme a modalidade." />
  <StepItem title="Restrinja acesso somente quando precisar ocultar" description="Se a intenção é tornar um item disponível apenas para um grupo ou agrupamento, use Restringir acesso com a condição correspondente." expected="O item aparece para o conjunto correto e a mensagem de restrição é compreensível." alert="Modalidade de grupo e restrição de acesso não são equivalentes: uma organiza interação; a outra condiciona disponibilidade." />
  <StepItem title="Teste e registre" description="Use contas fictícias em grupos diferentes e compare atividade, participantes, notas e relatórios." expected="Cada papel vê somente o que deveria e o arranjo fica documentado para manutenção." />
</StepByStep>

<ScreenshotGallery label="Capturas planejadas para Grupos">
  <ScreenshotPlaceholder id="GRUPOS-MEMBROS-01" title="Grupos e membros" description="Página de Grupos com duas equipes fictícias e a lista de membros do grupo selecionado." framing="Usar somente contas de demonstração e enquadrar as duas colunas principais." alt="Página de gerenciamento de grupos mostrando grupos e membros fictícios." />
  <ScreenshotPlaceholder id="GRUPOS-AUTOMATICOS-02" title="Criação automática" description="Formulário de criação automática com convenção de nomes, quantidade e método de distribuição." framing="Mostrar os campos que alteram a distribuição e a prévia, se disponível." alt="Configuração para criar grupos automaticamente no Moodle." />
  <ScreenshotPlaceholder id="AGRUPAMENTO-ATIVIDADE-03" title="Modalidade e agrupamento na atividade" description="Configurações comuns de uma atividade com Grupos separados e um agrupamento selecionado." framing="Capturar somente campos de grupo, sem dados de participantes." alt="Atividade configurada com grupos separados e agrupamento." />
</ScreenshotGallery>

## O que cada configuração muda

<ConfigurationTable :rows='[
  {"field":"Sem grupos","purpose":"A atividade não separa participantes por grupo.","impact":"Todos interagem no mesmo contexto, conforme permissões."},
  {"field":"Grupos separados","purpose":"Limita normalmente a interação e visualização ao próprio grupo.","impact":"Professores com capacidade de acessar todos os grupos podem alternar entre eles."},
  {"field":"Grupos visíveis","purpose":"Mantém participação no próprio grupo e permite visualizar outros, conforme a atividade.","impact":"É útil para comparação, mas não oferece isolamento de conteúdo."},
  {"field":"Forçar modalidade no curso","purpose":"Aplica a modalidade do curso a todas as atividades.","impact":"Substitui configurações específicas; use apenas quando a regra vale para todo o curso."},
  {"field":"Agrupamento padrão","purpose":"Define um conjunto padrão para atividades e filtros compatíveis.","impact":"Pode afetar novas configurações e a página de participantes."},
  {"field":"Agrupamento na atividade","purpose":"Limita quais grupos participam naquele contexto.","impact":"Só aparece em atividades que suportam modalidade de grupo."},
  {"field":"Restrição por grupo/agrupamento","purpose":"Condiciona a disponibilidade do item.","impact":"Depende de Restringir acesso estar habilitado e deve ser testada como estudante."}
]' />

## Resultado esperado

Ao concluir, cada grupo tem nome, finalidade e membros verificados; agrupamentos representam conjuntos de grupos; atividades usam a modalidade correta; restrições aparecem apenas quando a disponibilidade realmente precisa ser condicionada.

<BestPractices>

- Use nomes neutros e estáveis; evite identificar desempenho ou condição do participante.
- Documente a composição antes de receber envios ou publicações.
- Faça alterações de membros entre atividades, não durante um trabalho em andamento.
- Revise usuários sem grupo quando uma atividade exige participação em equipe.
- Use agrupamentos para diferentes arranjos sem duplicar grupos desnecessariamente.

</BestPractices>

<AvoidThis title="Problemas frequentes">

- Criar grupos e esquecer de habilitar a modalidade na atividade.
- Habilitar entrega em grupo com participantes sem grupo ou em vários grupos relevantes.
- Usar grupos visíveis esperando isolamento completo.
- Confundir agrupamento com um grupo maior e tentar adicionar pessoas diretamente a ele.
- Alterar sincronização institucional manualmente sem saber se a próxima rotina desfará a mudança.

</AvoidThis>

<Checklist :items='["Finalidade e regra de composição foram registradas", "Todos os participantes necessários estão no grupo correto", "Usuários sem grupo e múltiplas associações foram revisados", "Agrupamentos contêm os grupos planejados", "Modalidade foi aplicada em cada atividade compatível", "Restrições foram usadas somente para disponibilidade", "Visões de grupos diferentes foram testadas", "Dependência do SUAP ou de outro método institucional foi validada"]' />

<FAQ :items='[
  {"question":"Um estudante pode participar de mais de um grupo?","answer":"Sim. Isso pode ser útil, mas exige atenção em atividades de entrega em grupo e em agrupamentos para evitar mais de uma associação aplicável."},
  {"question":"Grupos separados ocultam a atividade dos outros grupos?","answer":"Não necessariamente. A modalidade organiza interação e dados. Para disponibilizar o item apenas a um grupo ou agrupamento, configure uma restrição de acesso."},
  {"question":"O estudante pode escolher o próprio grupo?","answer":"Essa função não pertence ao recurso nativo de Grupos. Plugins como Group choice podem oferecê-la, mas devem ser tratados como opcionais e validados institucionalmente."}
]' />

<VideoSection title="Como criar grupos e agrupamentos" description="Da composição de equipes ao teste em uma atividade." duration="9 minutos" audience="Professor e tutor" status="em-producao" objective="Criar grupos consistentes e aplicar modalidade, agrupamento e restrição sem confundi-los." :script='["Diferenciar grupo, agrupamento, coorte e papel", "Criar grupo e adicionar membros", "Gerar grupos automaticamente", "Montar agrupamento", "Configurar atividade", "Testar grupos separados e visíveis"]' />

<RelatedContent :items='[
  {"title":"Grupos ou agrupamentos?","href":"/comparacoes/grupos-agrupamentos.html","description":"Escolha a estrutura correta para cada atividade."},
  {"title":"Organização do curso com grupos","href":"/organizacao-do-curso/grupos-e-agrupamentos.html","description":"Planeje usos em diferentes atividades."},
  {"title":"Resolver problemas com grupos","href":"/solucao-de-problemas/grupos.html","description":"Diagnostique membros, modalidade e visibilidade."}
]' />

## Referências oficiais

- [Groups and cohorts — MoodleDocs 5.2](https://docs.moodle.org/502/en/Groups_and_cohorts)
- [Groupings — MoodleDocs 5.2](https://docs.moodle.org/502/en/Groupings)
