---
title: Usar o recurso Pacote de conteúdo IMS
description: Publique material estático empacotado no padrão IMS Content Package.
category: Recursos
audience:
  - Professor
level: Avançado
readingTime: 7 min
tags:
  - conteúdo
  - IMS
  - pacote
moodleVersion: 5.2.x
status: em-revisao
lastReviewed: 2026-08-03
---
<ObjectiveCard>Ao final, você saberá decidir quando usar **Pacote de conteúdo IMS**, configurar o essencial e verificar a experiência do estudante.</ObjectiveCard>

## Quando usar

Use Pacote de conteúdo IMS quando você recebeu um pacote IMS válido de fonte confiável. Considere outra solução para arquivos ZIP comuns ou conteúdo que precisa registrar interação detalhada.

<ValidationNotice>O recurso é parte da distribuição padrão do Moodle 5.2, mas pode estar desabilitado. Os rótulos em português e a posição dos controles devem ser confirmados no IFMT.</ValidationNotice>

<Prerequisites>

- Papel com capacidade para adicionar recursos no curso.
- Material revisado, acessível e sem dados pessoais desnecessários.
- Modo de edição disponível.

</Prerequisites>

<NavigationPath path="No curso → ativar o modo de edição → adicionar uma atividade ou recurso → Pacote de conteúdo IMS" />

## Configurações que importam

<ConfigurationTable :rows='[{&quot;field&quot;: &quot;Nome&quot;, &quot;purpose&quot;: &quot;Identifica o pacote&quot;, &quot;impact&quot;: &quot;Informe origem e finalidade.&quot;}, {&quot;field&quot;: &quot;Pacote&quot;, &quot;purpose&quot;: &quot;Recebe o ZIP IMS&quot;, &quot;impact&quot;: &quot;Um ZIP comum não é suficiente.&quot;}, {&quot;field&quot;: &quot;Arquivamento&quot;, &quot;purpose&quot;: &quot;Controla versões do pacote&quot;, &quot;impact&quot;: &quot;Disponibilidade depende do ambiente.&quot;}, {&quot;field&quot;: &quot;Aparência&quot;, &quot;purpose&quot;: &quot;Define navegação e exibição&quot;, &quot;impact&quot;: &quot;Teste em navegadores e celular.&quot;}]' />

<StepByStep>
<StepItem title="Defina nome e propósito de Pacote de conteúdo IMS" result="O estudante entende o que encontrará e por que deve acessar.">Escreva um nome descritivo e uma orientação compatível com a tarefa de aprendizagem.</StepItem>
<StepItem title="Configure o conteúdo próprio de Pacote de conteúdo IMS" result="O recurso apresenta o material com o comportamento esperado.">Preencha os campos próprios de Pacote de conteúdo IMS e revise as opções que alteram acesso, aparência ou conclusão.</StepItem>
<StepItem title="Teste Pacote de conteúdo IMS como estudante" result="O conteúdo abre, é legível e não expõe informação indevida.">Salve, abra em tela estreita e teste com o perfil destinatário quando houver conta autorizada.</StepItem>
</StepByStep>

<ExampleBox>Disponibilize um objeto educacional institucional exportado como IMS, testando todos os links antes da publicação.</ExampleBox>

<ScreenshotPlaceholder id="PACOTE-IMS-CONFIG-01" title="Configuração de Pacote de conteúdo IMS" description="Configuração do Pacote IMS com arquivo selecionado e opções de aparência." alt="Configuração do Pacote IMS com arquivo selecionado e opções de aparência." src="" framing="Enquadrar a área descrita com rótulos e controles relevantes, usando somente dados fictícios." />

<BestPractices>

- Explique finalidade, formato e tempo de uso.
- Prefira nomes estáveis, sem códigos que só a equipe conhece.
- Verifique teclado, zoom, celular e alternativa para mídia.

</BestPractices>

<Checklist :items='[&quot;Nome e descrição orientam a ação&quot;, &quot;Conteúdo abre com o perfil do estudante&quot;, &quot;Acessibilidade e direitos de uso foram verificados&quot;, &quot;Restrições e conclusão têm finalidade clara&quot;]' />

<RelatedContent :items='[{&quot;title&quot;: &quot;Comparar recursos&quot;, &quot;href&quot;: &quot;/comparacoes/&quot;, &quot;description&quot;: &quot;Escolha o formato mais adequado.&quot;}, {&quot;title&quot;: &quot;Acessibilidade&quot;, &quot;href&quot;: &quot;/boas-praticas/acessibilidade.html&quot;, &quot;description&quot;: &quot;Revise materiais inclusivos.&quot;}]' />

<VideoSection title="Pacote de conteúdo IMS no Moodle 5.2" description="Demonstração da inclusão, configuração e conferência de um pacote IMS em um curso de teste." duration="5 min" audience="Professor" />
