---
title: Configurar a atividade Tarefa
description: Receba produções individuais ou em grupo, aplique critérios e devolva feedback com um fluxo verificável.
category: Atividade
audience:
  - Professor
  - Tutor
level: Intermediário
readingTime: 17 min
tags:
  - avaliação
  - produção
  - feedback
moodleVersion: 5.2.x
status: em-revisao
lastReviewed: 2026-08-03
pageType: atividade
---

<ObjectiveCard>Ao final, você conseguirá criar uma **Tarefa**, escolher tipos de envio e feedback, configurar datas, grupos, nota e conclusão, testar a entrega e organizar a correção.</ObjectiveCard>

## Finalidade pedagógica

Tarefa é a atividade indicada quando o estudante precisa entregar uma produção para análise do professor: texto, relatório, planilha, imagem, áudio, vídeo, código ou outro arquivo permitido. A entrega pode ser individual ou em grupo e a avaliação pode usar pontos, escala, rubrica ou guia de avaliação, conforme a configuração.

Use Tarefa para tornar explícita a relação entre **produto esperado, critérios, prazo, envio, correção e feedback**. O formulário técnico não substitui essas decisões.

## Quando utilizar

- Produções autorais que exigem leitura, correção ou devolutiva individual.
- Entregas em etapas, quando tentativas adicionais ou reabertura fazem parte do plano.
- Trabalho em grupo com responsabilidade e composição previamente verificadas.
- Avaliação com rubrica, guia ou fluxo de correção controlado.

## Quando não utilizar

- Para conversa entre participantes, prefira [Fórum](./forum.html).
- Para respostas objetivas corrigidas automaticamente, use [Questionário](./questionario.html).
- Para uma manifestação rápida sem arquivo ou correção individual, avalie [Escolha](./escolha.html) ou [Feedback](./feedback.html).
- Para apenas disponibilizar um modelo, use [Arquivo](../recursos/arquivo.html) e explique a atividade separadamente.

<ExampleBox title="Exemplo: relatório técnico com rubrica">Solicite um relatório de até 1.500 palavras em PDF acessível. Disponibilize um modelo em “Arquivos adicionais”, explique quatro critérios de avaliação, permita um arquivo por estudante, defina prazo e data limite diferentes e faça uma entrega de teste antes de abrir para a turma.</ExampleBox>

<Prerequisites>

- Objetivo, produto, critérios e estratégia de feedback definidos.
- Datas coerentes com o calendário e política de atrasos comunicada.
- Tipos, quantidade e tamanho dos arquivos compatíveis com a infraestrutura.
- Grupos e agrupamentos prontos antes de habilitar entrega em grupo.
- Conta de estudante de teste e dados fictícios para percorrer o fluxo.

</Prerequisites>

<NavigationPath path="Curso → ativar modo de edição → seção desejada → adicionar uma atividade ou recurso → Tarefa" />

<StepByStep introduction="Configure primeiro o que o estudante fará; depois conecte avaliação, acompanhamento e operação da correção.">
  <StepItem title="Escreva a proposta e as instruções" description="Preencha Nome, Descrição e Instruções da atividade com objetivo, produto, etapas, critérios e suporte." action="Use Arquivos adicionais para modelos ou materiais que ajudam a realizar a entrega." expected="O estudante sabe o que entregar, em qual formato, até quando e como será avaliado." />
  <StepItem title="Defina as datas" description="Diferencie abertura, prazo de entrega e data limite." action="Use “Permitir envios a partir de” para abertura, “Data de entrega” para o prazo comunicado e “Data limite” somente se quiser impedir novos envios depois dela." expected="O calendário representa a política de entrega e de atraso." alert="Depois da data de entrega, um envio pode ser marcado como atrasado; depois da data limite, o botão de envio deixa de estar disponível, salvo exceção." />
  <StepItem title="Escolha os tipos de envio" description="Habilite texto online, envio de arquivo ou ambos conforme o produto." action="Defina quantidade máxima, tamanho e tipos aceitos quando usar arquivos; informe os mesmos limites nas instruções." expected="A interface de envio corresponde ao produto solicitado e evita formatos inutilizáveis." />
  <StepItem title="Configure feedback e tentativas" description="Escolha comentários, arquivos de feedback e outros canais disponíveis; decida como reaberturas serão tratadas." action="Se usar confirmação de envio, explique ao estudante quando o rascunho se torna definitivo." expected="O estudante consegue receber e compreender a devolutiva e o professor mantém um fluxo previsível." />
  <StepItem title="Configure entrega em grupo, se necessária" description="Ative envio em grupo apenas depois de conferir grupos, agrupamento e participantes." action="Decida se todos os membros precisam confirmar a entrega e associe o agrupamento correto quando aplicável." expected="Cada participante entrega no espaço previsto, sem equipes vazias ou combinações indevidas." alert="Alterar grupos depois que existem envios pode comprometer a associação das entregas." />
  <StepItem title="Defina nota e método de avaliação" description="Escolha pontos ou escala, nota máxima, nota para aprovação e método de avaliação." action="Se usar rubrica ou guia, salve a Tarefa e configure o formulário de avaliação antes de abrir para a turma." expected="O Livro de notas recebe um item coerente com os critérios publicados." />
  <StepItem title="Planeje correção e múltiplos avaliadores" description="Avalie fluxo de avaliação, alocação e notificações segundo o tamanho da turma." action="No Moodle 5.2, múltiplos avaliadores podem ser atribuídos a um envio quando fluxo e alocação estão habilitados; valide permissões e método de cálculo no ambiente." expected="Responsabilidades, estado da correção e liberação de resultados estão definidos." />
  <StepItem title="Configure conclusão e acesso" description="Escolha critérios como envio ou recebimento de nota somente se representarem a etapa desejada." expected="O estudante vê condições alcançáveis e o próximo conteúdo é liberado conforme o planejamento." />
  <StepItem title="Faça uma entrega de teste" description="Salve e exiba, entre como estudante autorizado e envie um arquivo fictício." action="Confirme datas, botão de envio, estado do rascunho, recibo, conclusão, nota e visualização do feedback." expected="O fluxo completo funciona antes de receber produções reais." />
  <StepItem title="Corrija e devolva feedback" description="Abra a Tarefa e acesse a lista de envios ou a tela de avaliação." action="Aplique os critérios, salve a avaliação, controle a liberação e confira a visão do estudante." expected="Nota e feedback aparecem no momento correto e ficam consistentes no Livro de notas." />
</StepByStep>

<ScreenshotGallery label="Capturas planejadas para a atividade Tarefa">
  <ScreenshotPlaceholder id="TAREFA-CONFIG-01" title="Datas e tipos de envio" description="Formulário da Tarefa com as seções Disponibilidade e Tipos de envio expandidas." framing="Mostrar datas fictícias, texto online, arquivos, quantidade, tamanho e tipos aceitos." alt="Configuração de datas e tipos de envio de uma Tarefa no Moodle 5.2." />
  <ScreenshotPlaceholder id="TAREFA-ESTUDANTE-02" title="Entrega vista pelo estudante" description="Tarefa de demonstração mostrando instruções, condições, prazo e botão para adicionar envio." framing="Usar conta e arquivo fictícios; não mostrar nomes, notas ou documentos reais." alt="Tela de uma Tarefa antes do envio na visão do estudante." />
  <ScreenshotPlaceholder id="TAREFA-CORRECAO-03" title="Correção e feedback" description="Tela de avaliação com documento fictício, campo de nota e área de feedback." framing="Enquadrar os controles principais sem dados pessoais; ocultar painel que não for necessário." alt="Interface de avaliação de uma Tarefa com nota e feedback no Moodle 5.2." />
</ScreenshotGallery>

## Configurações que alteram o fluxo

<ConfigurationTable :rows='[
  {"field":"Permitir envios a partir de","purpose":"Define quando a área de envio fica disponível.","impact":"Antes da data, o estudante pode visualizar a proposta, mas não enviar, conforme as demais opções."},
  {"field":"Data de entrega","purpose":"Registra o prazo esperado e sinaliza atraso.","impact":"Não bloqueia necessariamente o envio; aparece no calendário e na linha do tempo."},
  {"field":"Data limite","purpose":"Impede novos envios depois do momento definido.","impact":"Exceções precisam ser configuradas por usuário ou grupo quando justificadas."},
  {"field":"Texto online","purpose":"Recebe produção diretamente no editor.","impact":"Facilita leitura imediata, mas textos longos e fórmulas podem exigir outro formato."},
  {"field":"Envio de arquivos","purpose":"Recebe um ou mais arquivos.","impact":"Quantidade, tamanho e tipos devem corresponder às ferramentas disponíveis para corrigir."},
  {"field":"Tipos de feedback","purpose":"Define comentários, arquivos e outros formatos habilitados.","impact":"Escolha um canal que o estudante consiga acessar e que preserve o histórico necessário."},
  {"field":"Exigir que o estudante clique em enviar","purpose":"Separa rascunho de entrega definitiva.","impact":"Acrescenta uma etapa que precisa estar explícita nas instruções."},
  {"field":"Tentativas adicionais","purpose":"Controla reabertura manual ou automática segundo critérios.","impact":"Altera o ciclo de revisão; explique o que pode ser reenviado e como será reavaliado."},
  {"field":"Envio em grupos","purpose":"Produz uma entrega compartilhada pelos membros.","impact":"Depende de grupos consistentes e pode exigir confirmação de todos."},
  {"field":"Nota e método de avaliação","purpose":"Define pontos, escala, rubrica ou guia.","impact":"Cria o item no Livro de notas e deve corresponder aos critérios anunciados."},
  {"field":"Fluxo e alocação de avaliação","purpose":"Organizam estados e responsáveis pela correção.","impact":"No 5.2, múltiplos avaliadores dependem da combinação dessas opções e de permissões."},
  {"field":"Conclusão da atividade","purpose":"Pode exigir envio ou nota, entre condições disponíveis.","impact":"A condição precisa ser compatível com correção manual e prazo de liberação."}
]' />

## Acompanhamento e correção

Na visão do professor, a página da Tarefa apresenta o resumo das entregas e acesso à correção. A interface pode permitir navegação entre estudantes, anotação de documentos quando os serviços necessários estão configurados, comentário, arquivo de feedback e uso de formulário avançado. Na visão do estudante, o estado da entrega, prazo, confirmação, nota e feedback dependem das opções escolhidas.

<ImportantBox title="Registro novo no Moodle 5.2">O download de arquivo de feedback pelo estudante gera evento de log. Esse registro confirma o download, não a leitura ou compreensão da devolutiva.</ImportantBox>

<BestPractices>

- Forneça um exemplo ou modelo sem transformar a resposta em mera reprodução.
- Publique os critérios antes da entrega e use a mesma linguagem na correção.
- Separe data de entrega de data limite para permitir política de atraso consciente.
- Informe formatos acessíveis e aceite alternativa equivalente quando necessário.
- Faça feedback acionável: reconheça evidência, indique melhoria e proponha próxima ação.

</BestPractices>

<AvoidThis title="Erros comuns">

- Pedir um formato que o professor não consegue abrir ou anotar.
- Habilitar entrega em grupo sem conferir membros e agrupamento.
- Ocultar notas no Livro de notas e esperar que o feedback esteja visível.
- Alterar método de avaliação ou grupos depois de existirem envios sem avaliar o impacto.
- Usar data limite igual ao prazo sem prever exceções institucionais.

</AvoidThis>

<Checklist :items='["Produto, critérios, formato e prazo estão explícitos", "Datas de abertura, entrega e limite têm funções distintas", "Tipos e limites de envio foram testados", "Grupos e agrupamento foram conferidos", "Nota, aprovação e método de avaliação estão alinhados", "Conclusão e restrições representam o fluxo", "Entrega, correção e feedback foram testados como estudante", "Dados fictícios foram usados nas capturas e demonstrações"]' />

<FAQ :items='[
  {"question":"Qual é a diferença entre data de entrega e data limite?","answer":"A data de entrega indica o prazo e permite identificar atraso. A data limite impede novos envios depois dela, salvo exceção configurada."},
  {"question":"Por que o estudante não consegue editar o envio?","answer":"Verifique confirmação de envio, estado da tentativa, data limite, bloqueio, fluxo e se a tentativa precisa ser reaberta."},
  {"question":"Posso usar mais de um avaliador no Moodle 5.2?","answer":"Sim, o 5.2 inclui múltiplos avaliadores quando fluxo de avaliação e alocação estão habilitados. Confirme capacidades, número de avaliadores e cálculo da nota final no ambiente institucional."}
]' />

<VideoSection title="Como criar, testar e corrigir uma Tarefa" description="Configuração completa do envio à devolutiva." duration="10 minutos" audience="Professor e tutor" status="em-producao" objective="Configurar uma Tarefa coerente e percorrer o fluxo como estudante e avaliador." :script='["Escrever proposta e critérios", "Definir datas", "Escolher tipos de envio", "Configurar feedback e tentativas", "Revisar grupos e nota", "Testar uma entrega", "Corrigir e conferir o Livro de notas"]' />

<RelatedContent :items='[
  {"title":"Configurar rubricas e guias","href":"/avaliacao/rubricas-e-guias.html","description":"Transforme critérios em um formulário de avaliação."},
  {"title":"Prazos e exceções","href":"/avaliacao/prazos-e-excecoes.html","description":"Planeje extensões sem alterar a turma inteira."},
  {"title":"Usar o Livro de notas","href":"/avaliacao/livro-de-notas.html","description":"Confira item, categoria, visibilidade e total."}
]' />

## Referências oficiais

- [Assignment activity — MoodleDocs 5.2](https://docs.moodle.org/502/en/Assignment)
- [Assignment settings — MoodleDocs 5.2](https://docs.moodle.org/502/en/mod/assignment/mod)
