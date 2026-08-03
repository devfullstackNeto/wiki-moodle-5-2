---
title: Configurar a atividade SCORM
description: Publique pacotes SCORM/AICC e consulte tentativas registradas pelo pacote.
category: Atividades
audience:
  - Professor
  - Tutor
level: Avançado
readingTime: 10 min
tags:
  - pacote
  - rastreamento
  - conteúdo
moodleVersion: 5.2.x
status: em-revisao
lastReviewed: 2026-08-03
---
<ObjectiveCard>Planejar e configurar SCORM com coerência entre objetivo, participação, acompanhamento e avaliação.</ObjectiveCard>

## O que esta atividade resolve

Publique pacotes SCORM/AICC e consulte tentativas registradas pelo pacote. Seu foco principal é **conteúdo empacotado e rastreamento**. Antes de escolher, confirme se essa interação é necessária e se existe alternativa mais simples.

<ValidationNotice>**SCORM** integra a distribuição padrão do Moodle 5.2, mas pode ser desabilitada ou depender de serviços, bibliotecas, capacidades e rótulos validados pela instituição.</ValidationNotice>

<Prerequisites>

- Objetivo de aprendizagem e evidência esperada para **SCORM** definidos.
- Papel com capacidade para adicionar e configurar **SCORM**.
- Datas, grupos, conclusão e avaliação aplicáveis a **SCORM** planejados.
- Conta de teste preparada para percorrer **SCORM** como estudante.

</Prerequisites>

<NavigationPath path="No curso → ativar o modo de edição → adicionar uma atividade ou recurso → SCORM" />

## Configurações essenciais

<ConfigurationTable :rows='[{&quot;field&quot;: &quot;Pacote&quot;, &quot;purpose&quot;: &quot;Recebe ZIP SCORM/AICC válido&quot;, &quot;impact&quot;: &quot;Teste versão e integridade.&quot;}, {&quot;field&quot;: &quot;Aparência&quot;, &quot;purpose&quot;: &quot;Controla janela, navegação e estrutura&quot;, &quot;impact&quot;: &quot;Pop-up pode ser bloqueado.&quot;}, {&quot;field&quot;: &quot;Disponibilidade&quot;, &quot;purpose&quot;: &quot;Define período&quot;, &quot;impact&quot;: &quot;Alinhe ao curso.&quot;}, {&quot;field&quot;: &quot;Nota&quot;, &quot;purpose&quot;: &quot;Escolhe método de pontuação&quot;, &quot;impact&quot;: &quot;Depende do que o pacote comunica.&quot;}, {&quot;field&quot;: &quot;Tentativas&quot;, &quot;purpose&quot;: &quot;Controla número e tratamento&quot;, &quot;impact&quot;: &quot;Relatórios variam com o pacote.&quot;}]' />

<StepByStep>
<StepItem title="Escreva instruções verificáveis para SCORM" result="O estudante sabe o que fazer, como, até quando e como será avaliado.">Para SCORM, detalhe propósito, produto esperado, critérios, prazo, suporte e alternativa acessível.</StepItem>
<StepItem title="Configure as opções próprias de SCORM" result="As opções da atividade correspondem ao desenho pedagógico.">Revise os campos específicos de SCORM pelo impacto na participação, não apenas pelo valor padrão.</StepItem>
<StepItem title="Conecte SCORM à avaliação e ao acompanhamento" result="Nota, conclusão e relatórios registram a evidência pretendida.">Teste tentativas, grupos, feedback e Livro de notas quando aplicáveis.</StepItem>
<StepItem title="Teste SCORM como participante" result="O fluxo completo funciona antes da abertura para a turma.">Use dados fictícios, tela estreita e o papel do participante.</StepItem>
</StepByStep>

<ExampleBox>Publique uma simulação SCORM fornecida pela instituição, conclua uma tentativa de teste e confira status, tempo e nota recebidos.</ExampleBox>

<ScreenshotGallery label="Capturas planejadas para SCORM">
<ScreenshotPlaceholder id="SCORM-CONFIG-01" title="Configurações principais" description="Tela de configuração de SCORM com as seções que alteram a experiência do estudante." alt="Configuração da atividade SCORM no Moodle 5.2." src="" framing="Enquadrar a área descrita com rótulos e controles relevantes, usando somente dados fictícios." />
<ScreenshotPlaceholder id="SCORM-RESULT-02" title="Resultado para o participante" description="Visualização de teste da atividade pronta, sem dados reais." alt="Atividade SCORM vista por uma conta de estudante de teste." src="" framing="Enquadrar a área descrita com rótulos e controles relevantes, usando somente dados fictícios." />
</ScreenshotGallery>

<AvoidThis>

- Publicar **SCORM** sem instrução ou critério observável.
- Presumir que acessar **SCORM** comprova aprendizagem.
- Usar dados reais em capturas ou testes de **SCORM**.
- Alterar **SCORM** depois que há participação sem avaliar o impacto.

</AvoidThis>

<Checklist :items='["Escreva instruções verificáveis para SCORM em SCORM foi verificado","Configure as opções próprias de SCORM em SCORM foi verificado","Conecte SCORM à avaliação e ao acompanhamento em SCORM foi verificado","Teste SCORM como participante em SCORM foi verificado","Acessibilidade de SCORM foi testada"]' />

<VideoSection title="Configurar SCORM" description="Vídeo previsto para demonstrar somente as decisões críticas, após validação do ambiente." duration="6–9 min" audience="Professor e tutor" />

<RelatedContent :items='[{"title":"Configurar a atividade Questionário","href":"/atividades/questionario.html","description":"Combine banco de questões, tentativas, comportamento, revisão e segurança em uma avaliação testada."},{"title":"Configurar a atividade Tarefa","href":"/atividades/tarefa.html","description":"Receba produções individuais ou em grupo, aplique critérios e devolva feedback com um fluxo verificável."},{"title":"Visão geral de atividades","href":"/atividades/","description":"Compare outras orientações desta área."}]' />
