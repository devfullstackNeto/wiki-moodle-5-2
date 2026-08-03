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

<ValidationNotice>Atividade padrão do Moodle 5.2. A disponibilidade pode ser alterada pelo administrador; serviços, bibliotecas, capacidades e rótulos do ambiente institucional precisam ser confirmados.</ValidationNotice>

<Prerequisites>

- Objetivo de aprendizagem e evidência esperada definidos.
- Papel com capacidade para adicionar e configurar a atividade.
- Datas, grupos, critérios de conclusão e regra de avaliação planejados.
- Conta ou recurso de teste para conferir a visão do estudante.

</Prerequisites>

<NavigationPath path="No curso → ativar o modo de edição → adicionar uma atividade ou recurso → Ferramenta externa" />

## Configurações essenciais

<ConfigurationTable :rows='[{&quot;field&quot;: &quot;Ferramenta&quot;, &quot;purpose&quot;: &quot;Seleciona configuração ou URL LTI&quot;, &quot;impact&quot;: &quot;Pode exigir cadastro administrativo.&quot;}, {&quot;field&quot;: &quot;Lançamento&quot;, &quot;purpose&quot;: &quot;Envia contexto à ferramenta&quot;, &quot;impact&quot;: &quot;Revise dados e papéis compartilhados.&quot;}, {&quot;field&quot;: &quot;Serviços de nota&quot;, &quot;purpose&quot;: &quot;Podem devolver resultado&quot;, &quot;impact&quot;: &quot;Teste a correspondência no Livro de notas.&quot;}, {&quot;field&quot;: &quot;Privacidade&quot;, &quot;purpose&quot;: &quot;Controla dados enviados quando disponível&quot;, &quot;impact&quot;: &quot;Siga contrato e política institucional.&quot;}, {&quot;field&quot;: &quot;Aparência&quot;, &quot;purpose&quot;: &quot;Define incorporação ou nova janela&quot;, &quot;impact&quot;: &quot;Teste acessibilidade e retorno ao curso.&quot;}]' />

<StepByStep>
<StepItem title="Escreva instruções verificáveis" result="O estudante sabe o que fazer, como, até quando e como será avaliado.">Inclua propósito, produto esperado, critérios, prazo, suporte e alternativa acessível.</StepItem>
<StepItem title="Configure a interação" result="As opções da atividade correspondem ao desenho pedagógico.">Revise cada campo pelo impacto na participação, não pela configuração padrão.</StepItem>
<StepItem title="Conecte avaliação e acompanhamento" result="Nota, conclusão e relatórios registram a evidência pretendida.">Teste tentativas, grupos, feedback e Livro de notas quando aplicáveis.</StepItem>
<StepItem title="Faça uma tentativa de teste" result="O fluxo completo funciona antes da abertura para a turma.">Use dados fictícios, tela estreita e o papel do participante.</StepItem>
</StepByStep>

<ExampleBox>Use apenas uma ferramenta LTI homologada, documentando quais dados recebe e testando o retorno de nota com uma conta fictícia.</ExampleBox>

<ScreenshotGallery label="Capturas planejadas para Ferramenta externa">
<ScreenshotPlaceholder id="FERRAMENTA-EXTERNA-CONFIG-01" title="Configurações principais" description="Tela de configuração de Ferramenta externa com as seções que alteram a experiência do estudante." alt="Configuração da atividade Ferramenta externa no Moodle 5.2." src="" />
<ScreenshotPlaceholder id="FERRAMENTA-EXTERNA-RESULT-02" title="Resultado para o participante" description="Visualização de teste da atividade pronta, sem dados reais." alt="Atividade Ferramenta externa vista por uma conta de estudante de teste." src="" />
</ScreenshotGallery>

<AvoidThis>

- Publicar sem instrução ou critério observável.
- Presumir que acesso ou clique comprova aprendizagem.
- Usar dados reais em capturas, testes ou demonstrações.
- Alterar configuração depois que há participação sem avaliar o impacto.

</AvoidThis>

<Checklist :items='[&quot;Objetivo e produto esperado estão explícitos&quot;, &quot;Datas, grupos e permissões foram testados&quot;, &quot;Avaliação e conclusão correspondem ao plano&quot;, &quot;Fluxo foi testado como participante&quot;, &quot;Alternativas acessíveis estão disponíveis&quot;]' />

<VideoSection title="Configurar Ferramenta externa" description="Vídeo previsto para demonstrar somente as decisões críticas, após validação do ambiente." duration="6–9 min" audience="Professor e tutor" />

<RelatedContent :items='[{&quot;title&quot;: &quot;Catálogo de atividades&quot;, &quot;href&quot;: &quot;/atividades/&quot;, &quot;description&quot;: &quot;Compare finalidades e níveis.&quot;}, {&quot;title&quot;: &quot;Conclusão de atividade&quot;, &quot;href&quot;: &quot;/organizacao-do-curso/conclusao.html&quot;, &quot;description&quot;: &quot;Planeje acompanhamento.&quot;}, {&quot;title&quot;: &quot;Livro de notas&quot;, &quot;href&quot;: &quot;/avaliacao/livro-de-notas.html&quot;, &quot;description&quot;: &quot;Confira o efeito da avaliação.&quot;}]' />
