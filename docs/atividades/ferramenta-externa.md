---
title: Configurar a atividade Ferramenta externa
description: Conecte recursos compatíveis com LTI sem criar uma integração improvisada.
category: Atividades
audience:
  - Professor
  - Tutor
level: Avançado
readingTime: 10 min
tags:
  - LTI
  - integração
  - privacidade
moodleVersion: 5.2.x
status: em-revisao
lastReviewed: 2026-08-03
---
<ObjectiveCard>Planejar e configurar Ferramenta externa com coerência entre objetivo, participação, acompanhamento e avaliação.</ObjectiveCard>

## O que esta atividade resolve

Conecte recursos compatíveis com LTI sem criar uma integração improvisada. Seu foco principal é **integração LTI**. Antes de escolher, confirme se essa interação é necessária e se existe alternativa mais simples.

<ValidationNotice>**Ferramenta externa** integra a distribuição padrão do Moodle 5.2, mas pode ser desabilitada ou depender de serviços, bibliotecas, capacidades e rótulos validados pela instituição.</ValidationNotice>

<Prerequisites>

- Objetivo de aprendizagem e evidência esperada para **Ferramenta externa** definidos.
- Papel com capacidade para adicionar e configurar **Ferramenta externa**.
- Datas, grupos, conclusão e avaliação aplicáveis a **Ferramenta externa** planejados.
- Conta de teste preparada para percorrer **Ferramenta externa** como estudante.

</Prerequisites>

<NavigationPath path="No curso → ativar o modo de edição → adicionar uma atividade ou recurso → Ferramenta externa" />

## Configurações essenciais

<ConfigurationTable :rows='[{&quot;field&quot;: &quot;Ferramenta&quot;, &quot;purpose&quot;: &quot;Seleciona configuração ou URL LTI&quot;, &quot;impact&quot;: &quot;Pode exigir cadastro administrativo.&quot;}, {&quot;field&quot;: &quot;Lançamento&quot;, &quot;purpose&quot;: &quot;Envia contexto à ferramenta&quot;, &quot;impact&quot;: &quot;Revise dados e papéis compartilhados.&quot;}, {&quot;field&quot;: &quot;Serviços de nota&quot;, &quot;purpose&quot;: &quot;Podem devolver resultado&quot;, &quot;impact&quot;: &quot;Teste a correspondência no Livro de notas.&quot;}, {&quot;field&quot;: &quot;Privacidade&quot;, &quot;purpose&quot;: &quot;Controla dados enviados quando disponível&quot;, &quot;impact&quot;: &quot;Siga contrato e política institucional.&quot;}, {&quot;field&quot;: &quot;Aparência&quot;, &quot;purpose&quot;: &quot;Define incorporação ou nova janela&quot;, &quot;impact&quot;: &quot;Teste acessibilidade e retorno ao curso.&quot;}]' />

<StepByStep>
<StepItem title="Escreva instruções verificáveis para Ferramenta externa" result="O estudante sabe o que fazer, como, até quando e como será avaliado.">Para Ferramenta externa, detalhe propósito, produto esperado, critérios, prazo, suporte e alternativa acessível.</StepItem>
<StepItem title="Configure as opções próprias de Ferramenta externa" result="As opções da atividade correspondem ao desenho pedagógico.">Revise os campos específicos de Ferramenta externa pelo impacto na participação, não apenas pelo valor padrão.</StepItem>
<StepItem title="Conecte Ferramenta externa à avaliação e ao acompanhamento" result="Nota, conclusão e relatórios registram a evidência pretendida.">Teste tentativas, grupos, feedback e Livro de notas quando aplicáveis.</StepItem>
<StepItem title="Teste Ferramenta externa como participante" result="O fluxo completo funciona antes da abertura para a turma.">Use dados fictícios, tela estreita e o papel do participante.</StepItem>
</StepByStep>

<ExampleBox>Use apenas uma ferramenta LTI homologada, documentando quais dados recebe e testando o retorno de nota com uma conta fictícia.</ExampleBox>

<ScreenshotGallery label="Capturas planejadas para Ferramenta externa">
<ScreenshotPlaceholder id="FERRAMENTA-EXTERNA-CONFIG-01" title="Configurações principais" description="Tela de configuração de Ferramenta externa com as seções que alteram a experiência do estudante." alt="Configuração da atividade Ferramenta externa no Moodle 5.2." src="" framing="Enquadrar a área descrita com rótulos e controles relevantes, usando somente dados fictícios." />
<ScreenshotPlaceholder id="FERRAMENTA-EXTERNA-RESULT-02" title="Resultado para o participante" description="Visualização de teste da atividade pronta, sem dados reais." alt="Atividade Ferramenta externa vista por uma conta de estudante de teste." src="" framing="Enquadrar a área descrita com rótulos e controles relevantes, usando somente dados fictícios." />
</ScreenshotGallery>

<AvoidThis>

- Publicar **Ferramenta externa** sem instrução ou critério observável.
- Presumir que acessar **Ferramenta externa** comprova aprendizagem.
- Usar dados reais em capturas ou testes de **Ferramenta externa**.
- Alterar **Ferramenta externa** depois que há participação sem avaliar o impacto.

</AvoidThis>

<Checklist :items='["Escreva instruções verificáveis para Ferramenta externa em Ferramenta externa foi verificado","Configure as opções próprias de Ferramenta externa em Ferramenta externa foi verificado","Conecte Ferramenta externa à avaliação e ao acompanhamento em Ferramenta externa foi verificado","Teste Ferramenta externa como participante em Ferramenta externa foi verificado","Acessibilidade de Ferramenta externa foi testada"]' />

<VideoSection title="Configurar Ferramenta externa" description="Vídeo previsto para demonstrar somente as decisões críticas, após validação do ambiente." duration="6–9 min" audience="Professor e tutor" />

<RelatedContent :items='[{"title":"Configurar a atividade Feedback","href":"/atividades/feedback.html","description":"Crie formulários de opinião e avaliação de experiência com perguntas próprias."},{"title":"Configurar a atividade Fórum","href":"/atividades/forum.html","description":"Planeje discussões assíncronas com tipo, mediação, assinatura, grupos, avaliação e conclusão coerentes."},{"title":"Visão geral de atividades","href":"/atividades/","description":"Compare outras orientações desta área."}]' />
