---
title: Organizar e conferir o Livro de notas
description: Estruture itens, categorias, agregação, visibilidade e conferência sem perder a origem das notas.
category: Relatório e configuração
audience:
  - Professor
  - Tutor
level: Intermediário
readingTime: 16 min
tags:
  - notas
  - avaliação
  - acompanhamento
moodleVersion: 5.2.x
status: em-revisao
lastReviewed: 2026-08-03
pageType: relatorio
---

<ObjectiveCard>Ao final, você conseguirá reconhecer a origem das notas, organizar categorias, verificar agregação e visibilidade e comparar as visões do professor e do estudante.</ObjectiveCard>

## O que é o Livro de notas

O Livro de notas reúne itens avaliativos do curso. Atividades como Tarefa e Questionário criam itens vinculados; itens manuais podem ser adicionados para avaliações realizadas fora dessas atividades. Categorias organizam itens e aplicam métodos de agregação para produzir subtotais e total do curso.

O Livro de notas **não substitui** a configuração pedagógica interna da atividade. Alterar uma nota diretamente no relatório pode criar uma substituição e impedir que mudanças feitas na atividade atualizem aquele valor.

<ImportantBox title="Planeje antes de lançar notas">Defina pesos, categorias, notas máximas, aprovação e política de arredondamento antes de receber muitas avaliações. Uma fórmula tecnicamente correta ainda pode produzir um resultado pedagógico inesperado.</ImportantBox>

## Quando usar cada visão

- **Relatório do avaliador:** matriz de participantes e itens para conferência e edição autorizada.
- **Configuração do Livro de notas:** categorias, itens, pesos, agregação e ordem.
- **Relatório do usuário:** experiência de um estudante com notas e feedback visíveis.
- **Visão geral:** panorama de cursos, conforme papel e capacidade.
- **Histórico de notas:** rastreabilidade de alterações, quando disponível ao papel.

<ExampleBox title="Exemplo: composição transparente">Organize duas categorias: Atividades formativas, com três tarefas de mesmo peso, e Avaliação final, com um Questionário. Antes de abrir o curso, simule notas mínima, média e máxima e confira se o total corresponde ao plano de ensino e ao que será mostrado ao estudante.</ExampleBox>

<Prerequisites>

- Plano de avaliação com itens, notas máximas, pesos e critérios de aprovação.
- Atividades avaliativas já identificadas e categorias planejadas.
- Permissão para visualizar ou gerenciar notas.
- Curso de teste ou conjunto de notas fictícias para simular cálculos.

</Prerequisites>

<NavigationPath path="Curso → Notas" />

<ValidationNotice>A primeira tela, o seletor de relatórios e os nomes das abas variam conforme tema, permissões e configuração. Confirme a navegação no Moodle institucional antes de capturar ou orientar procedimentos locais.</ValidationNotice>

<StepByStep introduction="Separe conferência, estrutura e edição para reduzir substituições acidentais.">
  <StepItem title="Abra Notas e reconheça o relatório" description="No curso, acesse Notas e identifique relatório do avaliador, configuração e relatório do usuário." expected="Você sabe em qual visão está antes de alterar qualquer valor." />
  <StepItem title="Liste os itens esperados" description="Compare as colunas com as atividades avaliativas e itens manuais do plano." action="Procure itens duplicados, ocultos, órfãos ou com nota máxima incorreta." expected="Cada avaliação aparece uma única vez e tem origem conhecida." />
  <StepItem title="Organize categorias" description="Na configuração do Livro, crie categorias coerentes com o plano e mova os itens." expected="A ordem e os subtotais explicam a composição da nota." />
  <StepItem title="Defina agregação e pesos" description="Escolha o método da categoria e ajuste pesos somente quando fizerem parte da regra publicada." action="Simule pelo menos três combinações de notas e calcule o resultado também fora do Moodle." expected="Os totais do Moodle correspondem à regra do curso." alert="Itens vazios, notas máximas diferentes e exclusões podem alterar o resultado de formas pouco intuitivas." />
  <StepItem title="Revise aprovação e exibição" description="Configure nota para aprovação onde ela for usada e confira casas decimais, letras e visibilidade." expected="Estudante e professor interpretam o resultado com a mesma escala." />
  <StepItem title="Evite substituição desnecessária" description="Corrija a nota na atividade de origem sempre que possível." action="Use edição direta apenas quando houver motivo e saiba reconhecer o indicador de nota substituída ou bloqueada." expected="A atividade continua sendo a fonte do valor e atualizações permanecem sincronizadas." />
  <StepItem title="Confira a visão do estudante" description="Abra o relatório de usuário de uma conta fictícia ou use a função autorizada de visualização." action="Verifique nota, intervalo, feedback, subtotal, total e itens ocultos." expected="Somente informações liberadas aparecem e os rótulos são compreensíveis." />
  <StepItem title="Teste antes de publicar resultados" description="Use dados fictícios para testar pesos, ausências, nota zero, item vazio e aprovação." expected="Casos extremos não produzem total inesperado ou mensagem enganosa." />
  <StepItem title="Registre e acompanhe alterações" description="Documente mudanças relevantes e consulte histórico quando precisar investigar um valor." expected="A equipe consegue explicar a origem e a evolução da nota sem expor dados indevidos." />
</StepByStep>

<ScreenshotGallery label="Capturas planejadas para o Livro de notas">
  <ScreenshotPlaceholder id="NOTAS-AVALIADOR-01" title="Relatório do avaliador" description="Matriz de notas com participantes e itens fictícios, categorias e total do curso." framing="Usar apenas contas de demonstração; mostrar cabeçalho, uma categoria e o total." alt="Relatório do avaliador com itens e categorias do Livro de notas." />
  <ScreenshotPlaceholder id="NOTAS-CONFIG-02" title="Configuração de categorias e itens" description="Estrutura do Livro com duas categorias, atividades vinculadas, pesos e ações." framing="Enquadrar nomes, agregação e pesos sem mostrar notas reais." alt="Configuração do Livro de notas com categorias, itens e pesos." />
  <ScreenshotPlaceholder id="NOTAS-USUARIO-03" title="Relatório do usuário" description="Visão de estudante fictício com nota, intervalo, feedback e total visíveis." framing="Mostrar somente dados fictícios e o conjunto mínimo necessário para explicar a leitura." alt="Relatório de notas visto por um estudante de demonstração." />
</ScreenshotGallery>

## Conceitos essenciais

<ConfigurationTable :rows='[
  {"field":"Item de nota vinculado","purpose":"Recebe resultado de uma atividade do curso.","impact":"Mudanças devem ser feitas preferencialmente na atividade de origem."},
  {"field":"Item manual","purpose":"Registra avaliação que não vem de uma atividade Moodle.","impact":"Precisa de nome, nota máxima, categoria e política de feedback claros."},
  {"field":"Categoria","purpose":"Agrupa itens e calcula subtotal.","impact":"Pode ter agregação, peso, aprovação e regras próprias."},
  {"field":"Agregação","purpose":"Define como valores formam subtotal ou total.","impact":"Média, média ponderada, soma e outros métodos respondem de modo diferente a itens vazios e notas máximas."},
  {"field":"Peso","purpose":"Controla contribuição relativa do item ou categoria.","impact":"Pesos precisam reproduzir o plano publicado e ser testados com exemplos."},
  {"field":"Nota para aprovação","purpose":"Define o limiar usado em relatórios e conclusão.","impact":"Não muda a nota; muda a interpretação de aprovação e condições conectadas."},
  {"field":"Ocultar","purpose":"Impede exibição do item ao estudante.","impact":"Pode afetar o que aparece em conclusão e em outros blocos; não use para corrigir estrutura."},
  {"field":"Bloqueio e substituição","purpose":"Impedem atualização automática ou registram valor editado diretamente.","impact":"Podem separar o Livro da atividade de origem e exigir correção consciente."}
]' />

## Como interpretar sem tirar conclusões indevidas

Nota é um registro de avaliação dentro de uma regra. Ela não revela sozinha esforço, participação, contexto ou aprendizagem em outras dimensões. Ao acompanhar a turma, combine nota com critérios, feedback, tentativas, entregas e comunicação. Compartilhe dados apenas com quem possui necessidade e permissão.

<BestPractices>

- Use nomes idênticos ou claramente relacionados entre plano, atividade e Livro.
- Mantenha estrutura enxuta; categorias demais dificultam compreensão.
- Simule cálculos antes de comunicar pesos.
- Corrija na origem e use histórico para investigar alterações.
- Confira sempre o relatório do usuário antes de liberar resultados.

</BestPractices>

<AvoidThis title="Erros comuns">

- Digitar nota diretamente e criar substituição sem perceber.
- Ocultar a categoria inteira quando a intenção era ocultar um item.
- Misturar nota zero, item vazio e ausência sem política definida.
- Mudar nota máxima depois de avaliações sem recalcular impacto.
- Usar casas decimais exibidas como se fossem a precisão real do cálculo.

</AvoidThis>

<Checklist :items='["Todos os itens têm origem e finalidade conhecidas", "Categorias correspondem ao plano de avaliação", "Agregação e pesos foram simulados", "Notas máximas e aprovação foram conferidas", "Itens ocultos, bloqueados e substituídos foram revisados", "Relatório do usuário mostra nota e feedback corretos", "Casos de ausência, zero e item vazio foram testados", "Alterações relevantes estão documentadas"]' />

<FAQ :items='[
  {"question":"Por que a nota alterada na Tarefa não atualiza no Livro?","answer":"Verifique se a nota foi substituída ou bloqueada diretamente no Livro. Nesses estados, a atividade de origem pode deixar de atualizar o valor."},
  {"question":"Nota oculta conta no total?","answer":"O efeito depende das configurações do Livro e do relatório. Não presuma; simule o caso e confira tanto o relatório do avaliador quanto o do usuário."},
  {"question":"Qual agregação devo usar?","answer":"A que reproduz a regra publicada no plano de avaliação. Escolha depois de simular itens com notas máximas diferentes, valores vazios e pesos."}
]' />

<VideoSection title="Como organizar e conferir o Livro de notas" description="Estrutura, cálculo, visibilidade e teste da visão do estudante." duration="10 minutos" audience="Professor e tutor" status="em-producao" objective="Montar um Livro de notas transparente e identificar substituições ou cálculos inesperados." :script='["Reconhecer relatórios", "Conferir itens de origem", "Criar categorias", "Testar agregação e pesos", "Revisar aprovação e visibilidade", "Identificar substituições", "Conferir relatório do usuário"]' />

<RelatedContent :items='[
  {"title":"Categorias e itens","href":"/avaliacao/categorias-e-itens.html","description":"Estruture a composição da avaliação."},
  {"title":"Cálculo e agregação","href":"/avaliacao/calculo-e-agregacao.html","description":"Compare métodos e simule resultados."},
  {"title":"Resolver nota que não aparece","href":"/solucao-de-problemas/nota-nao-aparece.html","description":"Investigue origem, visibilidade e substituição."}
]' />

## Referências oficiais

- [Grades — MoodleDocs 5.2](https://docs.moodle.org/502/en/Grades)
- [Managing grades — MoodleDocs 5.2](https://docs.moodle.org/502/en/Managing_grades)
