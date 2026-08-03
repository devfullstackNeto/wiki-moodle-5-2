---
title: Configurar a atividade Questionário
description: Combine banco de questões, tentativas, comportamento, revisão e segurança em uma avaliação testada.
category: Atividade
audience:
  - Professor
  - Tutor
level: Avançado
readingTime: 18 min
tags:
  - avaliação
  - questões
  - tentativas
moodleVersion: 5.2.x
status: em-revisao
lastReviewed: 2026-08-03
pageType: atividade
---

<ObjectiveCard>Ao final, você conseguirá criar um **Questionário**, adicionar questões, definir tentativas e feedback, controlar o que aparece em cada momento e executar uma tentativa de teste antes da aplicação.</ObjectiveCard>

## Finalidade pedagógica

Questionário reúne questões armazenadas no Banco de questões e registra tentativas. Pode apoiar diagnóstico, prática com feedback, autoavaliação ou prova. Dependendo dos tipos de questão, parte da correção é automática; respostas discursivas exigem avaliação manual.

A qualidade do Questionário depende mais das questões e da política de tentativa do que da quantidade de configurações. Cada opção deve responder a uma decisão: **o que medir, quando responder, quantas vezes tentar, quando receber retorno e como tratar exceções**.

## Quando utilizar

- Diagnóstico antes de uma unidade, sem peso ou com finalidade formativa.
- Prática repetida com feedback por alternativa e nova tentativa.
- Avaliação com combinação de questões objetivas e discursivas.
- Sorteio controlado de questões a partir de categorias bem mantidas.

## Quando não utilizar

- Para produção extensa com arquivo, use [Tarefa](./tarefa.html).
- Para debate, argumentação e interação entre participantes, use [Fórum](./forum.html).
- Para conteúdo interativo sem necessidade de item formal no Livro de notas, compare com [H5P](./h5p.html).
- Para pesquisa de opinião sem resposta correta, considere [Feedback](./feedback.html).

<ExampleBox title="Exemplo: quiz formativo com nova tentativa">Crie oito questões sobre segurança: cinco de múltipla escolha com feedback por alternativa, duas de associação e uma discursiva curta. Permita duas tentativas, use a maior nota, mostre feedback imediato sem revelar todas as respostas corretas antes do encerramento e proponha nova leitura conforme o erro.</ExampleBox>

<Prerequisites>

- Matriz de objetivos e conteúdo que o Questionário realmente deve avaliar.
- Questões revisadas, com resposta, nota, feedback e acessibilidade verificados.
- Política definida para tentativas, atraso, exceções e divulgação de resultados.
- Conta de estudante de teste e tempo para percorrer todas as variações relevantes.

</Prerequisites>

<NavigationPath path="Curso → ativar modo de edição → seção desejada → adicionar uma atividade ou recurso → Questionário" />

<StepByStep introduction="Primeiro configure o contêiner do Questionário; depois adicione e organize as questões.">
  <StepItem title="Planeje a avaliação" description="Relacione cada objetivo a uma evidência e escolha o tipo de questão adequado." expected="O conjunto cobre o que deve ser avaliado sem depender apenas de memorização." />
  <StepItem title="Crie o Questionário" description="Adicione a atividade, informe Nome e Descrição e escreva instruções sobre tentativas, navegação, materiais e suporte." screenshotTitle="Adicionar a atividade Questionário" screenshotDescription="Capture o seletor de atividades e recursos com Questionário destacado, usando um curso de teste e sem identificação de participantes." caption="Selecione Questionário no seletor de atividades e recursos." alt="Seletor de atividades e recursos do Moodle com a opção Questionário destacada." expected="O estudante conhece as regras antes de iniciar uma tentativa." />
  <StepItem title="Configure abertura, fechamento e tempo" description="Defina janela de acesso e limite de tempo somente quando necessários." action="Escolha o comportamento ao esgotar o tempo e considere conexão, acessibilidade e possíveis exceções." expected="A tentativa pode ser iniciada e finalizada dentro de uma política comunicada." />
  <StepItem title="Defina tentativas e nota" description="Escolha número de tentativas, método de avaliação e nota para aprovação quando aplicável." expected="O resultado no Livro de notas corresponde à estratégia formativa ou somativa." />
  <StepItem title="Configure leiaute e comportamento" description="Defina quantas questões aparecem por página, navegação e comportamento das questões." action="Avalie embaralhamento e feedback imediato, adiado ou interativo conforme o objetivo." expected="A interface reduz carga desnecessária e o feedback aparece no momento planejado." />
  <StepItem title="Controle as opções de revisão" description="Decida o que o estudante verá durante, logo após, enquanto o Questionário estiver aberto e depois do fechamento." action="Revise tentativa, acerto, notas, feedback e resposta correta em cada coluna de tempo." expected="Nenhuma resposta ou feedback é revelado antes do momento apropriado." alert="As opções de revisão são uma das principais fontes de exposição acidental de respostas." />
  <StepItem title="Adicione questões" description="Salve e exiba, abra a edição do Questionário e adicione nova questão, questão do banco ou questão aleatória." action="Defina nota de cada questão, paginação e total; mantenha categorias e versões reconhecíveis." expected="O Questionário contém o conjunto correto e a nota máxima está coerente." />
  <StepItem title="Configure restrições, grupos e conclusão" description="Use senha, endereço de rede ou outras restrições apenas dentro da política institucional; aplique exceções por usuário ou grupo quando necessário." expected="Participantes autorizados acessam as condições adequadas e a conclusão representa tentativa, nota ou aprovação planejada." />
  <StepItem title="Visualize como professor" description="Use a pré-visualização para responder todas as questões e verificar feedback, pontuação e navegação." expected="Erros de conteúdo, resposta, nota ou ramificação são corrigidos antes da aplicação." />
  <StepItem title="Faça uma tentativa como estudante" description="Use conta de teste e simule envio, tempo, interrupção, revisão e segunda tentativa." action="Confira também calendário, conclusão e Livro de notas." expected="O fluxo real coincide com a pré-visualização e com as instruções publicadas." />
  <StepItem title="Acompanhe resultados com cautela" description="Depois da aplicação, revise tentativas, respostas, análise de itens e questões que exigem correção manual." expected="O feedback é liberado corretamente e problemas são tratados sem apagar evidências necessárias." />
</StepByStep>

<ScreenshotGallery label="Capturas planejadas para a atividade Questionário">
  <ScreenshotPlaceholder id="QUESTIONARIO-TEMPO-01" title="Tempo e tentativas" description="Configuração com abertura, fechamento, limite de tempo, tentativas permitidas e método de avaliação." framing="Usar datas fictícias e enquadrar as seções Tempo e Nota." alt="Configuração de tempo, tentativas e nota de um Questionário." />
  <ScreenshotPlaceholder id="QUESTIONARIO-REVISAO-02" title="Matriz de opções de revisão" description="Seção de revisão com os quatro momentos e as opções de tentativa, acerto, nota, feedback e resposta correta." framing="Capturar a matriz inteira com configurações de demonstração, sem recomendar uma combinação universal." alt="Opções de revisão de um Questionário no Moodle 5.2." />
  <ScreenshotPlaceholder id="QUESTIONARIO-QUESTOES-03" title="Edição das questões" description="Tela de edição com três questões fictícias, notas, paginação e menu para adicionar." framing="Mostrar tipos variados e remover qualquer conteúdo de avaliação real." alt="Tela de edição de um Questionário com questões e pontuações." />
</ScreenshotGallery>

## Principais configurações

<ConfigurationTable :rows='[
  {"field":"Abrir e fechar o Questionário","purpose":"Define a janela em que tentativas podem ser iniciadas.","impact":"Não substitui instrução de prazo; exceções podem ser necessárias."},
  {"field":"Limite de tempo","purpose":"Controla a duração de cada tentativa.","impact":"Pode criar barreira e depende de tratamento ao expirar; use quando houver justificativa."},
  {"field":"Tentativas permitidas","purpose":"Define quantas vezes cada estudante pode responder.","impact":"Uma tentativa atende prova; várias podem apoiar prática e recuperação."},
  {"field":"Método de avaliação","purpose":"Escolhe como tentativas múltiplas formam a nota.","impact":"Maior, média, primeira ou última tentativa produzem incentivos diferentes."},
  {"field":"Leiaute e navegação","purpose":"Distribui questões por página e controla sequência.","impact":"Muitas questões por página aumentam rolagem; navegação sequencial impede retorno."},
  {"field":"Comportamento das questões","purpose":"Define quando respostas são avaliadas e feedback aparece.","impact":"Interativo, imediato ou adiado transformam a atividade pedagógica."},
  {"field":"Opções de revisão","purpose":"Controlam quais informações aparecem em cada momento.","impact":"Combinação inadequada pode revelar resposta correta enquanto outras pessoas ainda realizam a prova."},
  {"field":"Restrições extras","purpose":"Podem aplicar senha, rede e outros controles disponíveis.","impact":"Não garantem integridade sozinhas e podem bloquear participantes legítimos."},
  {"field":"Nota para aprovação","purpose":"Define o limiar usado por Livro de notas e conclusão.","impact":"Para conclusão por aprovação, também é preciso combinar as condições apropriadas."},
  {"field":"Conclusão","purpose":"Pode exigir tentativa, nota, aprovação ou esgotamento de tentativas, conforme opções.","impact":"Questões discursivas podem atrasar condições que dependem de nota."}
]' />

## Banco de questões e manutenção

As questões existem separadamente no Banco de questões e podem ser reutilizadas. Organize categorias por finalidade, mantenha nomes reconhecíveis e revise versões antes de inserir questões aleatórias. Alterar uma questão usada em tentativas existentes exige cautela; preserve a rastreabilidade e consulte as opções disponíveis em vez de apagar registros.

<WarningBox title="Questões discursivas">Uma tentativa com questão discursiva pode permanecer sem resultado final até a correção manual. Planeje conclusão, divulgação de notas e prazo de feedback considerando esse intervalo.</WarningBox>

<BestPractices>

- Escreva enunciados completos e alternativas plausíveis, sem pistas gramaticais ou visuais.
- Ofereça feedback que explique o raciocínio, não apenas “certo” ou “errado”.
- Use questões aleatórias apenas em categorias equivalentes em objetivo e dificuldade.
- Faça pré-visualização e tentativa real; elas revelam problemas diferentes.
- Tenha plano para queda de conexão e registre exceções sem expor justificativas pessoais.

</BestPractices>

<AvoidThis title="Erros comuns">

- Revelar respostas corretas imediatamente em uma avaliação ainda aberta.
- Usar limite de tempo sem testar acessibilidade e infraestrutura.
- Misturar questões de pesos muito diferentes sem revisar a nota máxima.
- Alterar questões ou configurações críticas depois de tentativas sem analisar consequências.
- Tratar embaralhamento, senha ou bloqueio de navegador como garantia isolada de segurança.

</AvoidThis>

<Checklist :items='["Objetivos e matriz de questões foram definidos", "Enunciados, respostas, notas e feedback foram revisados", "Tempo, tentativas e método de avaliação estão coerentes", "Opções de revisão foram conferidas nos quatro momentos", "Paginação e navegação funcionam em tela estreita", "Exceções e suporte foram planejados", "Pré-visualização e tentativa de estudante foram concluídas", "Livro de notas e conclusão apresentam o resultado esperado"]' />

<FAQ :items='[
  {"question":"Por que a nota ainda não aparece?","answer":"Verifique se existem questões discursivas aguardando correção, opções de revisão, visibilidade do item, estado da tentativa e bloqueio ou substituição no Livro de notas."},
  {"question":"Pré-visualizar é suficiente?","answer":"Não. A pré-visualização valida questões e comportamento do professor; uma conta de estudante revela disponibilidade, exceções, conclusão, calendário e visibilidade real."},
  {"question":"Posso mudar as questões depois que alguém respondeu?","answer":"Mudanças podem ser limitadas ou afetar resultados existentes. Preserve tentativas, examine as opções oferecidas pelo Moodle e registre qualquer decisão que altere avaliação."}
]' />

<VideoSection title="Como montar e testar um Questionário" description="Da matriz de avaliação à análise da tentativa de estudante." duration="12 minutos" audience="Professor e tutor" status="em-producao" objective="Configurar um Questionário sem expor respostas e validar o fluxo completo." :script='["Planejar objetivos e tipos de questão", "Configurar tempo e tentativas", "Definir comportamento e revisão", "Adicionar questões do banco", "Configurar conclusão", "Pré-visualizar", "Executar tentativa como estudante", "Conferir resultados"]' />

<RelatedContent :items='[
  {"title":"Organizar o Banco de questões","href":"/avaliacao/banco-de-questoes.html","description":"Estruture categorias, versões e reutilização."},
  {"title":"Questionário ou H5P?","href":"/comparacoes/questionario-h5p.html","description":"Compare avaliação formal e prática interativa."},
  {"title":"Resolver problemas no Questionário","href":"/solucao-de-problemas/questionario.html","description":"Diagnostique acesso, tentativa, envio e resultado."}
]' />

## Referência oficial

- [Quiz activity — MoodleDocs 5.2](https://docs.moodle.org/502/en/Quiz_activity)
