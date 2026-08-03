---
title: Usar o recurso URL
description: Direcione o estudante a uma página, vídeo, documento ou serviço externo.
category: Recursos
audience:
  - Professor
level: Básico
readingTime: 7 min
tags:
  - conteúdo
  - link
  - externo
moodleVersion: 5.2.x
status: em-revisao
lastReviewed: 2026-08-03
---
<ObjectiveCard>Ao final, você saberá decidir quando usar **URL**, configurar o essencial e verificar a experiência do estudante.</ObjectiveCard>

## Quando usar

Use URL quando o conteúdo permanece sob responsabilidade de outro site. Considere outra solução para endereços instáveis, sem acessibilidade ou que exigem conta não informada.

<ValidationNotice>O recurso é parte da distribuição padrão do Moodle 5.2, mas pode estar desabilitado. Os rótulos em português e a posição dos controles devem ser confirmados no IFMT.</ValidationNotice>

<Prerequisites>

- Papel com capacidade para adicionar recursos no curso.
- Material revisado, acessível e sem dados pessoais desnecessários.
- Modo de edição disponível.

</Prerequisites>

<NavigationPath path="No curso → ativar o modo de edição → adicionar uma atividade ou recurso → URL" />

## Configurações que importam

<ConfigurationTable :rows='[{&quot;field&quot;: &quot;Nome&quot;, &quot;purpose&quot;: &quot;Descreve o destino&quot;, &quot;impact&quot;: &quot;Evite “clique aqui”.&quot;}, {&quot;field&quot;: &quot;URL externa&quot;, &quot;purpose&quot;: &quot;Define o endereço&quot;, &quot;impact&quot;: &quot;Teste em sessão sem privilégios.&quot;}, {&quot;field&quot;: &quot;Aparência&quot;, &quot;purpose&quot;: &quot;Controla como o destino abre&quot;, &quot;impact&quot;: &quot;Pop-ups podem ser bloqueados.&quot;}, {&quot;field&quot;: &quot;Variáveis de URL&quot;, &quot;purpose&quot;: &quot;Pode enviar parâmetros&quot;, &quot;impact&quot;: &quot;Não use sem necessidade e análise de privacidade.&quot;}]' />

<StepByStep>
<StepItem title="Defina nome e propósito de URL" result="O estudante entende o que encontrará e por que deve acessar.">Escreva um nome descritivo e uma orientação compatível com a tarefa de aprendizagem.</StepItem>
<StepItem title="Configure o conteúdo próprio de URL" result="O recurso apresenta o material com o comportamento esperado.">Preencha os campos próprios de URL e revise as opções que alteram acesso, aparência ou conclusão.</StepItem>
<StepItem title="Teste URL como estudante" result="O conteúdo abre, é legível e não expõe informação indevida.">Salve, abra em tela estreita e teste com o perfil destinatário quando houver conta autorizada.</StepItem>
</StepByStep>

<ExampleBox>Adicione a biblioteca digital com texto de link descritivo e informe que o acesso exige credenciais institucionais.</ExampleBox>

<ScreenshotPlaceholder id="URL-CONFIG-01" title="Configuração de URL" description="Configuração do recurso URL com endereço externo e opções de aparência." alt="Configuração do recurso URL com endereço externo e opções de aparência." src="" framing="Enquadrar a área descrita com rótulos e controles relevantes, usando somente dados fictícios." />

<BestPractices>

- Explique finalidade, formato e tempo de uso.
- Prefira nomes estáveis, sem códigos que só a equipe conhece.
- Verifique teclado, zoom, celular e alternativa para mídia.

</BestPractices>

<Checklist :items='[&quot;Nome e descrição orientam a ação&quot;, &quot;Conteúdo abre com o perfil do estudante&quot;, &quot;Acessibilidade e direitos de uso foram verificados&quot;, &quot;Restrições e conclusão têm finalidade clara&quot;]' />

<RelatedContent :items='[{&quot;title&quot;: &quot;Comparar recursos&quot;, &quot;href&quot;: &quot;/comparacoes/&quot;, &quot;description&quot;: &quot;Escolha o formato mais adequado.&quot;}, {&quot;title&quot;: &quot;Acessibilidade&quot;, &quot;href&quot;: &quot;/boas-praticas/acessibilidade.html&quot;, &quot;description&quot;: &quot;Revise materiais inclusivos.&quot;}]' />

## Amplie esta orientação

<VideoSection title="Usar o recurso URL — demonstração guiada" description="Direcione o estudante a uma página, vídeo, documento ou serviço externo." duration="6–9 minutos" audience="Público indicado na página" status="em-producao" objective="Demonstrar o procedimento em um curso de teste, sem dados pessoais." :script='["Defina o propósito","Configure o conteúdo","Teste como estudante"]' />
