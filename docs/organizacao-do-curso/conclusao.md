---
title: Configurar conclusão de atividade
description: Transforme ações observáveis em condições claras de progresso no Moodle 5.2.
category: Configuração
audience:
  - Professor
  - Tutor
level: Avançado
readingTime: 15 min
tags:
  - conclusão
  - acompanhamento
  - progresso
moodleVersion: 5.2.x
status: em-revisao
lastReviewed: 2026-08-03
pageType: configuracao
---

<ObjectiveCard>Ao final, você conseguirá habilitar o acompanhamento no curso, escolher condições manuais ou automáticas, testar o novo painel do Moodle 5.2 e interpretar o relatório sem confundir conclusão com aprendizagem.</ObjectiveCard>

## O que a conclusão registra

Conclusão de atividade registra se uma pessoa cumpriu condições configuradas em um recurso ou atividade. As condições podem incluir marcar manualmente, visualizar, enviar, publicar, receber nota ou atingir nota de aprovação, conforme o tipo de item.

Conclusão de curso combina critérios mais amplos e é tratada separadamente. Restrição de acesso pode usar uma conclusão anterior para liberar outro item, mas essa combinação precisa de teste e alternativa quando houver exceções.

<ImportantBox title="Limite da evidência">“Concluído” significa que a regra foi atendida. Visualizar comprova abertura; receber nota comprova que uma nota existe; nenhuma dessas condições, isoladamente, garante aprendizagem.</ImportantBox>

## Novidades visíveis no Moodle 5.2

- O estudante encontra uma lista **A fazer** com o que falta para concluir o item.
- Com edição ativa, o professor encontra um resumo de **Conclusão** e um atalho para editar condições.
- A conclusão manual foi movida para o cabeçalho da atividade.
- Quando todas as condições automáticas são atendidas, o cabeçalho mostra o estado concluído.
- As condições aparecem dentro da atividade mesmo quando sua exibição na página do curso está oculta.

<ExampleBox title="Exemplo: Tarefa com conclusão significativa">Configure uma Tarefa para concluir quando o estudante enviar e receber nota. Se o próximo conteúdo exigir aprovação, defina também a nota para aprovação e teste tentativas com resultado abaixo e acima do limiar.</ExampleBox>

<Prerequisites>

- Acompanhamento de conclusão habilitado no site e no curso.
- Ação observável definida para cada item.
- Nota para aprovação configurada quando uma condição depender de aprovação.
- Conta de estudante de teste e rotina agendada funcionando no ambiente.

</Prerequisites>

<NavigationPath path="Curso → ativar modo de edição → abrir a atividade ou recurso → Configurações → Conclusão da atividade" />

<ValidationNotice>Se a seção não aparecer, confira a configuração do curso e solicite ao administrador a verificação do acompanhamento de conclusão em Recursos avançados. Rótulos e atalho de edição precisam ser confirmados no tema institucional.</ValidationNotice>

<StepByStep introduction="Escolha a condição mais simples que represente o passo real do estudante.">
  <StepItem number="1" title="Defina o que significa concluir" description="Escreva a ação observável antes de abrir a configuração: ler, enviar, publicar, obter nota ou alcançar aprovação." expected="A condição técnica pode ser comparada a um comportamento real." />
  <StepItem number="2" title="Habilite o acompanhamento no curso" description="Abra as configurações do curso e confirme que o acompanhamento de conclusão está habilitado e que as condições devem ou não aparecer na página do curso." expected="A seção de conclusão fica disponível nas atividades e recursos." />
  <StepItem number="3" title="Abra a configuração do item" description="Edite a atividade ou recurso e localize Conclusão da atividade." expected="As opções compatíveis com aquele tipo de item são apresentadas." />
  <StepItem number="4" title="Escolha manual ou automática" description="Use marcação manual quando a pessoa deve declarar a conclusão; use requisitos automáticos quando o Moodle puder observar a condição." expected="O mecanismo corresponde ao tipo de evidência e é compreensível para a turma." />
  <StepItem number="5" title="Configure requisitos específicos" description="Selecione visualização, envio, publicações, nota, aprovação ou outras condições oferecidas pelo tipo de atividade." action="Se exigir aprovação, configure também a Nota para aprovação na seção de nota da atividade." expected="O painel A fazer lista condições que realmente podem ser atendidas." alert="Exigir nota sem prever correção manual pode manter a atividade pendente até o professor avaliar." />
  <StepItem number="6" title="Defina lembrete de conclusão, se necessário" description="Use a data esperada como referência de planejamento e linha do tempo, sem confundi-la com prazo de acesso." expected="O estudante recebe orientação temporal coerente com as datas da atividade." />
  <StepItem number="7" title="Salve e teste como estudante" description="Abra o item com conta de teste, observe o painel A fazer e cumpra cada condição." action="Confira marcação manual no cabeçalho, atualização automática, estado concluído e índice do curso." expected="Cada condição muda de estado no momento correto." tip="Algumas atualizações dependem de tarefas agendadas e podem não ser instantâneas." />
  <StepItem number="8" title="Consulte o relatório" description="Abra o relatório de conclusão de atividade e filtre por grupo quando necessário." action="Verifique estados automáticos, manuais, aprovação e substituições feitas por pessoa autorizada." expected="O relatório corresponde à tentativa de teste e pode apoiar acompanhamento responsável." />
  <StepItem number="9" title="Revise antes de alterar" description="Se já houver participantes, avalie o impacto de desbloquear ou mudar condições." expected="Nenhum histórico é apagado ou recalculado sem decisão registrada." alert="Ao desbloquear e salvar condições, informações de conclusão podem ser excluídas e, quando possível, regeneradas." />
</StepByStep>

<ScreenshotGallery label="Capturas planejadas para conclusão">
  <ScreenshotPlaceholder id="CONCLUSAO-CONFIG-01" title="Condições de conclusão" description="Seção Conclusão da atividade expandida em uma Tarefa de demonstração, com envio e nota como requisitos." framing="Mostrar apenas a seção e usar nota fictícia; incluir o campo de conclusão esperada se disponível." alt="Configuração de conclusão de atividade com requisitos de envio e nota." />
  <ScreenshotPlaceholder id="CONCLUSAO-ESTUDANTE-02" title="Painel A fazer no Moodle 5.2" description="Atividade na visão do estudante mostrando a lista de condições e o estado de cada uma." framing="Enquadrar o cabeçalho e o painel redesenhado, sem dados pessoais." alt="Painel A fazer com condições de conclusão de uma atividade no Moodle 5.2." />
  <ScreenshotPlaceholder id="CONCLUSAO-RELATORIO-03" title="Relatório de conclusão" description="Grade do relatório com participantes fictícios e diferentes estados de conclusão." framing="Usar curso de teste e enquadrar legenda, filtro de grupo e algumas colunas." alt="Relatório de conclusão de atividade com estados automáticos e manuais." />
</ScreenshotGallery>

## Condições e impactos

<ConfigurationTable :rows='[
  {"field":"Marcar manualmente","purpose":"Permite ao estudante declarar que concluiu.","impact":"É transparente, mas depende de autorregulação e não registra qualidade."},
  {"field":"Visualizar a atividade","purpose":"Marca quando o item é aberto.","impact":"Não demonstra leitura, tempo ou compreensão; evite combinar com outros requisitos sem necessidade."},
  {"field":"Receber nota","purpose":"Exige que exista uma nota na atividade.","impact":"Questões discursivas e correção manual atrasam a conclusão."},
  {"field":"Receber nota de aprovação","purpose":"Distingue conclusão com aprovação segundo o limiar configurado.","impact":"Exige Nota para aprovação e visibilidade compatível da nota."},
  {"field":"Enviar à Tarefa","purpose":"Conclui depois que o estudante envia.","impact":"Pode ocorrer antes da correção e do feedback."},
  {"field":"Publicar no Fórum","purpose":"Exige quantidade de posts, discussões ou respostas.","impact":"Alguns tipos de fórum não permitem iniciar discussão; quantidade não mede qualidade."},
  {"field":"Data esperada","purpose":"Cria referência temporal para acompanhamento.","impact":"Não abre, fecha ou bloqueia a atividade; configure datas próprias quando necessário."}
]' />

## Acompanhamento responsável

Use o relatório para identificar quem pode precisar de orientação, não para concluir automaticamente que houve desinteresse. A ausência pode decorrer de acesso, grupo, prazo, correção pendente, exceção ou falha na tarefa agendada. Combine o estado com outras evidências e preserve a privacidade ao compartilhar resultados.

<BestPractices>

- Mostre ao estudante o que precisa fazer e por que a conclusão é usada.
- Prefira poucas condições significativas a combinações redundantes.
- Configure aprovação apenas depois de definir limiar e política de tentativas.
- Teste o encadeamento com restrições usando situações de sucesso e falha.
- Registre qualquer substituição manual e limite-a a papéis autorizados.

</BestPractices>

<AvoidThis title="Erros comuns">

- Exigir visualização junto de envio quando o envio já implica acesso.
- Configurar aprovação sem Nota para aprovação.
- Liberar conteúdo crítico apenas por conclusão sem prever exceções.
- Alterar condições depois de participação sem avaliar exclusão e regeneração de dados.
- Usar o relatório como medida isolada de engajamento ou aprendizagem.

</AvoidThis>

<Checklist :items='["Acompanhamento está habilitado no curso", "Cada condição representa uma ação observável", "Condições redundantes foram removidas", "Nota para aprovação foi configurada quando necessária", "Painel A fazer foi conferido como estudante", "Atualização automática e tarefas agendadas foram consideradas", "Relatório corresponde ao teste", "Impacto de alterações em dados existentes foi avaliado"]' />

<FAQ :items='[
  {"question":"Onde ficou o botão Marcar como concluído no Moodle 5.2?","answer":"A conclusão manual aparece no cabeçalho da atividade. As condições automáticas também são apresentadas em um painel dentro do item."},
  {"question":"Por que a conclusão não atualizou imediatamente?","answer":"Confira se a condição foi realmente atendida, se a nota está visível e se tarefas agendadas, especialmente o cálculo de conclusão, estão sendo executadas."},
  {"question":"Posso marcar por um estudante?","answer":"Um papel com a capacidade de substituir conclusão pode alterar o estado pelo relatório. A ação deve ter justificativa e seguir a política institucional."}
]' />

<VideoSection title="Como configurar e testar conclusão de atividade" description="Condições, painel A fazer, relatório e cuidados ao alterar dados." duration="9 minutos" audience="Professor e tutor" status="em-producao" objective="Criar condições significativas e verificar o comportamento novo do Moodle 5.2." :script='["Habilitar acompanhamento no curso", "Escolher condição manual ou automática", "Combinar nota e aprovação", "Testar painel A fazer", "Consultar relatório", "Diagnosticar atraso de atualização", "Revisar antes de desbloquear"]' />

<RelatedContent :items='[
  {"title":"Conclusão manual ou automática?","href":"/comparacoes/conclusao-manual-automatica.html","description":"Escolha o mecanismo conforme a evidência."},
  {"title":"Relatório de conclusão","href":"/relatorios/conclusao.html","description":"Interprete estados e substituições."},
  {"title":"Resolver conclusão não registrada","href":"/solucao-de-problemas/conclusao-nao-registrada.html","description":"Verifique condição, nota e tarefas agendadas."}
]' />

## Referências oficiais

- [Activity completion — MoodleDocs 5.2](https://docs.moodle.org/502/en/Activity_completion)
- [Activity completion settings — MoodleDocs 5.2](https://docs.moodle.org/502/en/Activity_completion_settings)
