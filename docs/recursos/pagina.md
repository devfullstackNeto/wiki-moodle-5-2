---
title: Usar o recurso Página
description: Crie uma leitura web acessível, responsiva e conectada ao percurso do curso.
category: Recurso
audience:
  - Professor
level: Básico
readingTime: 12 min
tags:
  - conteúdo
  - leitura
  - acessibilidade
moodleVersion: 5.2.x
status: em-revisao
lastReviewed: 2026-08-03
pageType: recurso
---

<ObjectiveCard>Ao final, você conseguirá criar uma **Página** bem estruturada, decidir o que deve permanecer no Moodle, configurar a exibição e testar leitura, links e mídia em diferentes telas.</ObjectiveCard>

## O que é o recurso Página

Página cria um conteúdo web dentro do curso. O professor escreve no editor do Moodle e pode combinar títulos, parágrafos, listas, links, imagens, áudio, vídeo e outros elementos permitidos pela política de conteúdo do site. Ao selecionar o recurso, o estudante lê o material sem precisar baixar um documento separado.

Esse formato tende a se adaptar melhor ao celular e pode ser mais acessível que um arquivo de editor de texto quando o objetivo é apenas ler. A acessibilidade, porém, depende de uma estrutura correta: títulos em ordem, links descritivos, texto alternativo, contraste e mídia com alternativa.

## Quando utilizar

- Orientações de uma atividade, sínteses, roteiros de estudo e textos curtos ou médios.
- Conteúdo que será atualizado e deve permanecer sempre na versão mais recente.
- Leitura com links internos, imagens ou mídia integrada ao percurso.
- Informação que precisa se adaptar a telas pequenas e permitir zoom sem rolagem horizontal.

## Quando evitar

- Para um arquivo que precisa ser baixado, editado ou manter layout oficial, use [Arquivo](./arquivo.html).
- Para uma leitura extensa com várias partes e índice próprio, use [Livro](./livro.html).
- Para texto muito curto que deve aparecer diretamente na página do curso, avalie [Área de texto e mídia](./area-texto-midia.html).
- Para coletar resposta ou avaliar participação, escolha uma [atividade](../atividades/).

<ExampleBox title="Exemplo: orientações para projeto integrador">Crie uma Página com objetivo, produto esperado, etapas, critérios de avaliação e links para o modelo de entrega. Use títulos de nível 2 para cada parte, uma lista numerada para a sequência e links com nomes descritivos.</ExampleBox>

<Prerequisites>

- Permissão para adicionar recursos e conteúdo revisado.
- Estrutura planejada antes da formatação: objetivo, seções, chamada para ação e próxima leitura.
- Imagens com finalidade e texto alternativo; vídeos com legenda ou transcrição.
- Links verificados e autorização para publicar qualquer material de terceiros.

</Prerequisites>

<NavigationPath path="Curso → ativar modo de edição → seção desejada → adicionar uma atividade ou recurso → Página" />

<StepByStep introduction="Crie primeiro a estrutura e depois aplique formatação. Copiar diretamente de um editor de texto pode trazer estilos desnecessários.">
  <StepItem title="Defina a ação esperada" description="Escreva em uma frase o que o estudante deverá compreender ou fazer após a leitura." expected="A página tem um propósito verificável e não é apenas um depósito de texto." />
  <StepItem title="Abra o recurso Página" description="Com o modo de edição ativo, use o seletor de atividades e recursos na seção desejada." expected="O formulário de configuração da Página é exibido." />
  <StepItem title="Preencha nome e descrição" description="Use um nome que antecipe o conteúdo; na descrição, explique finalidade e contexto quando isso ajudar antes do clique." expected="O item é reconhecível no índice e na página do curso." />
  <StepItem title="Construa o conteúdo no editor" description="Adicione introdução, títulos em ordem, parágrafos curtos, listas e links descritivos." action="Use os estilos de título do editor em vez de apenas aumentar tamanho ou aplicar negrito." expected="Leitores visuais e tecnologias assistivas reconhecem a hierarquia." tip="Se colar texto de outro aplicativo, use o recurso de limpar formatação e revise o resultado." />
  <StepItem title="Inclua mídia com alternativa" description="Adicione somente imagens, áudio ou vídeo que apoiem o objetivo." action="Escreva texto alternativo para imagens informativas e forneça legenda, transcrição ou equivalente textual para mídia." expected="O conteúdo principal permanece compreensível sem depender de som, cor ou imagem." />
  <StepItem title="Revise aparência, acesso e conclusão" description="Decida se nome, descrição ou data de modificação devem aparecer e configure condições somente quando necessárias." expected="O recurso integra o percurso sem poluir a página ou criar bloqueios indevidos." />
  <StepItem title="Salve, visualize e teste" description="Use Salvar e exibir, percorra todos os links e confira a página em tela estreita e com teclado." expected="A leitura é contínua, sem elementos cortados, links quebrados ou instruções ambíguas." alert="Conteúdo incorporado pode ser removido por filtros ou bloqueado por políticas institucionais; valide no ambiente de produção." />
</StepByStep>

<ScreenshotGallery label="Capturas planejadas para o recurso Página">
  <ScreenshotPlaceholder id="PAGINA-EDITOR-01" title="Editor do conteúdo da Página" description="Formulário com Nome, Descrição e Conteúdo; o texto demonstra títulos, lista e link descritivo." framing="Usar texto fictício curto e enquadrar a barra do editor junto da estrutura do conteúdo." alt="Editor do recurso Página com títulos, parágrafos, lista e link descritivo." />
  <ScreenshotPlaceholder id="PAGINA-ESTUDANTE-02" title="Página pronta em tela estreita" description="Visualização do recurso publicado como estudante, mostrando hierarquia, imagem com legenda e navegação seguinte." framing="Capturar em largura equivalente a celular sem dados de usuário visíveis." alt="Página do Moodle adaptada a uma tela estreita com títulos e conteúdo legível." />
</ScreenshotGallery>

## Principais configurações

<ConfigurationTable :rows='[
  {"field":"Nome","purpose":"Define o rótulo do recurso no curso.","impact":"Deve indicar assunto e, quando útil, a ação: “Leia as orientações do projeto”."},
  {"field":"Descrição","purpose":"Contextualiza a leitura antes de abrir o recurso.","impact":"Pode ser exibida na página do curso; textos longos ali aumentam a rolagem."},
  {"field":"Conteúdo da página","purpose":"Recebe texto, links e mídia por meio do editor.","impact":"A estrutura semântica determina legibilidade, navegação por teclado e uso com leitor de tela."},
  {"field":"Exibir nome da página","purpose":"Mostra ou oculta o nome dentro do recurso.","impact":"Evite repetição visual sem remover a referência necessária para orientação."},
  {"field":"Exibir descrição","purpose":"Apresenta a descrição junto ao conteúdo.","impact":"Só habilite quando ela acrescentar contexto que não está na introdução."},
  {"field":"Exibir data de última modificação","purpose":"Informa quando o conteúdo foi atualizado.","impact":"É útil em páginas mantidas continuamente; pode confundir em conteúdo estável."},
  {"field":"Restrições de acesso","purpose":"Controlam quando e para quem a página aparece.","impact":"Combine regras com mensagens compreensíveis e teste o perfil afetado."},
  {"field":"Conclusão","purpose":"Permite marcação manual ou condição de visualização, conforme configuração.","impact":"A visualização ajuda a organizar o percurso, mas não demonstra leitura ou compreensão."}
]' />

## Estrutura recomendada

1. Título que corresponda ao link do curso.
2. Introdução com objetivo e tempo de leitura.
3. Seções curtas com títulos informativos.
4. Exemplo ou aplicação no contexto da disciplina.
5. Chamada clara para a próxima ação.
6. Link para atividade, recurso ou página relacionada.

<BestPractices>

- Escreva para leitura na tela: frases diretas, parágrafos curtos e informação principal no início.
- Preserve uma única ideia por seção e use listas apenas quando houver uma coleção real.
- Use “consulte os critérios de avaliação” em vez de links como “clique aqui”.
- Não use cor isoladamente para transmitir estado ou prioridade.
- Revise o HTML gerado quando a colagem produzir aparência inconsistente.

</BestPractices>

<AvoidThis title="Erros comuns">

- Reproduzir um documento inteiro com formatação visual, mas sem hierarquia de títulos.
- Incorporar vídeo sem legenda, transcrição ou contexto.
- Abrir todos os links em nova janela sem necessidade.
- Criar uma Página muito longa quando capítulos de Livro facilitariam orientação e retomada.
- Usar conclusão por visualização como única evidência de estudo.

</AvoidThis>

<Checklist :items='["Objetivo e próxima ação aparecem no conteúdo", "Títulos estão em ordem e não são apenas texto em negrito", "Links têm nomes descritivos e foram testados", "Imagens e mídia possuem alternativas", "A página funciona com teclado, zoom e tela estreita", "Conteúdo colado não trouxe estilos indevidos", "A visão do estudante foi verificada"]' />

<FAQ :items='[
  {"question":"Página é sempre mais acessível que PDF?","answer":"Não automaticamente. Ela oferece melhor adaptação à tela, mas ainda exige títulos corretos, texto alternativo, contraste, links claros e mídia acessível."},
  {"question":"Quando devo mostrar a data de modificação?","answer":"Quando atualizações frequentes importam para a interpretação. Para conteúdo estável, a data pode acrescentar ruído sem ajudar."},
  {"question":"Posso inserir qualquer código no editor?","answer":"Filtros e políticas do site removem elementos não permitidos. Evite scripts e dependências externas; valide incorporações autorizadas no ambiente institucional."}
]' />

<VideoSection title="Como criar uma Página acessível" description="Do planejamento da estrutura ao teste no celular e por teclado." duration="7 minutos" audience="Professor" status="em-producao" objective="Publicar uma Página responsiva com hierarquia, links e mídia acessíveis." :script='["Escolher Página em vez de Arquivo", "Planejar a estrutura", "Usar títulos e listas no editor", "Inserir link e imagem acessível", "Revisar aparência e conclusão", "Testar como estudante"]' />

<RelatedContent :items='[
  {"title":"Página ou Livro?","href":"/comparacoes/pagina-livro.html","description":"Decida pela extensão e pela necessidade de capítulos."},
  {"title":"Arquivo ou Página?","href":"/comparacoes/arquivo-pagina.html","description":"Compare leitura direta, download e acessibilidade."},
  {"title":"Inserir mídia com acessibilidade","href":"/boas-praticas/acessibilidade.html","description":"Aplique alternativas e estrutura semântica."}
]' />

## Referência oficial

- [Page resource — MoodleDocs 5.2](https://docs.moodle.org/502/en/Page_resource)
