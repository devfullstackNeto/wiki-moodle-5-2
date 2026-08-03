---
title: Usar o recurso Arquivo
description: Publique um documento, imagem ou mídia com contexto, formato, tamanho e comportamento de abertura bem definidos.
category: Recurso
audience:
  - Professor
level: Básico
readingTime: 12 min
tags:
  - conteúdo
  - download
  - arquivo
moodleVersion: 5.2.x
status: em-revisao
lastReviewed: 2026-08-03
pageType: recurso
---

<ObjectiveCard>Ao final, você conseguirá decidir quando o recurso **Arquivo** é adequado, publicar um material acessível, escolher como ele será aberto e testar a experiência real do estudante.</ObjectiveCard>

## O que é o recurso Arquivo

**Arquivo** disponibiliza um único material digital no curso: PDF, documento, planilha, apresentação, imagem, áudio, pacote compactado ou outro formato permitido pelo ambiente. O estudante seleciona o item na página do curso e o navegador abre ou baixa o conteúdo conforme o tipo de arquivo, o dispositivo e a configuração de aparência.

O arquivo continua sendo um objeto separado do Moodle. Isso preserva seu formato original, mas também transfere ao estudante a necessidade de ter aplicativo compatível, espaço, conexão e condições de acessibilidade para utilizá-lo.

<ImportantBox title="Decisão pedagógica">Não publique um arquivo isolado sem dizer por que ele deve ser aberto, o que o estudante deve observar e qual ação vem depois. O recurso entrega o material; a orientação de aprendizagem continua sendo responsabilidade de quem planeja o curso.</ImportantBox>

## Quando utilizar

- O material precisa manter diagramação, paginação ou assinatura, como plano de ensino e formulário oficial.
- O estudante precisa baixar uma planilha, modelo editável, conjunto de dados ou arquivo para uso offline.
- O documento já possui uma versão acessível e está em formato amplamente suportado.
- A mídia será consultada como material complementar e seu tamanho foi informado.

## Quando evitar

- Para um texto curto ou instrução que deve abrir rapidamente no celular, prefira [Página](./pagina.html).
- Para vários arquivos relacionados, prefira [Pasta](./pasta.html) ou organize uma sequência clara no curso.
- Para leitura extensa dividida em partes, considere [Livro](./livro.html).
- Para conteúdo que exige resposta, envio, discussão ou nota, use uma [atividade](../atividades/).

<ExampleBox title="Exemplo: plano de ensino acessível">No início do curso, publique “Plano de ensino — 2026/2 (PDF, 480 KB)”. Na descrição, informe que o documento apresenta objetivos, cronograma e avaliação, e ofereça contato para solicitar formato alternativo. Configure a exibição do tipo e do tamanho para ajudar quem usa conexão limitada.</ExampleBox>

<Prerequisites>

- Permissão para adicionar recursos no curso.
- Arquivo final revisado, nomeado de forma compreensível e sem dados pessoais desnecessários.
- Verificação de acessibilidade do próprio documento, não apenas da página do Moodle.
- Conhecimento do limite de envio e dos tipos aceitos no ambiente institucional.

</Prerequisites>

<NavigationPath path="Curso → ativar modo de edição → seção desejada → adicionar uma atividade ou recurso → Arquivo" />

<StepByStep introduction="O caminho pode mudar ligeiramente conforme o tema e o pacote de idioma. As decisões e os campos abaixo pertencem ao recurso padrão do Moodle 5.2.">
  <StepItem title="Prepare o material" description="Revise conteúdo, acessibilidade, direitos de uso e tamanho antes de entrar no Moodle." action="Renomeie o arquivo com assunto e versão; remova dados ocultos ou pessoais que não sejam necessários." expected="O arquivo final abre localmente e pode ser compreendido pelo público destinatário." tip="Evite nomes como documento-final-v7.pdf; use um título que também faça sentido depois do download." />
  <StepItem title="Abra o seletor de atividades" description="Entre no curso, ative o modo de edição e localize a seção em que o material será usado." action="Selecione a opção de adicionar uma atividade ou recurso e escolha Arquivo." expected="O formulário de configuração do recurso Arquivo é exibido." />
  <StepItem title="Dê contexto ao item" description="Preencha Nome e, quando necessário, Descrição." action="Escreva o que é o material, para que serve, formato, tamanho aproximado e o que fazer depois da leitura." expected="O estudante entende a finalidade antes de abrir o arquivo." />
  <StepItem title="Adicione o arquivo" description="Use a área de seleção de arquivos ou o método de arrastar e soltar disponível no gerenciador." action="Aguarde o envio terminar e confirme se o nome correto aparece no gerenciador de arquivos." expected="O material fica associado ao recurso sem duplicatas ou versões antigas." alert="O limite máximo é definido pelo site, pelo curso e pela própria atividade; prevalece o menor deles." />
  <StepItem title="Escolha a aparência" description="Defina como o arquivo será apresentado e quais informações aparecerão ao lado do nome." action="Avalie abertura automática, incorporação, nova janela ou download e decida se tipo, tamanho e data devem ser mostrados." expected="O comportamento de abertura é compatível com o formato e com os dispositivos usados pela turma." tip="Nem todo formato pode ser incorporado; o navegador também influencia o resultado." />
  <StepItem title="Configure acesso e conclusão" description="Revise disponibilidade, restrições e conclusão somente quando houver uma finalidade clara." action="Se usar conclusão, escolha uma condição observável e explique ao estudante como ela será registrada." expected="O arquivo aparece para o público correto no momento planejado." />
  <StepItem title="Salve e teste como estudante" description="Use Salvar e exibir e abra o recurso em um perfil de teste autorizado." action="Teste download ou abertura, zoom, teclado, tela estreita e conexão limitada; confirme o retorno ao curso." expected="O arquivo abre sem pedir permissões indevidas e a próxima ação está clara." />
</StepByStep>

<ScreenshotGallery label="Capturas planejadas para o recurso Arquivo">
  <ScreenshotPlaceholder id="ARQUIVO-CONFIG-01" title="Nome, descrição e seleção do arquivo" description="Formulário do recurso Arquivo mostrando Nome, Descrição e o gerenciador após o envio de um arquivo de demonstração." framing="Capturar apenas o formulário e usar arquivo fictício, sem dados pessoais ou endereço institucional sensível." alt="Formulário do recurso Arquivo com nome, descrição e arquivo de demonstração adicionado." />
  <ScreenshotPlaceholder id="ARQUIVO-APARENCIA-02" title="Opções de aparência" description="Seção Aparência expandida com o seletor de exibição e as opções de mostrar tamanho, tipo e data." framing="Enquadrar o título da seção e todos os campos de aparência visíveis no ambiente validado." alt="Configurações de aparência do recurso Arquivo no Moodle 5.2." />
</ScreenshotGallery>

## Principais configurações

<ConfigurationTable :rows='[
  {"field":"Nome","purpose":"Identifica o link na página do curso e nos relatórios.","impact":"Um nome orientado ao conteúdo reduz cliques por tentativa; formato e versão podem ser úteis."},
  {"field":"Descrição","purpose":"Explica finalidade, forma de uso e próxima ação.","impact":"Pode aparecer na página do curso quando a opção correspondente estiver habilitada."},
  {"field":"Selecionar arquivos","purpose":"Armazena o material principal no contexto do recurso.","impact":"Tipo e tamanho são limitados pela configuração institucional; versões duplicadas confundem a turma."},
  {"field":"Exibição","purpose":"Controla se o navegador tenta abrir, incorporar, usar nova janela ou oferecer download.","impact":"As opções disponíveis dependem do formato e do que o administrador habilitou."},
  {"field":"Mostrar tamanho e tipo","purpose":"Antecipa o custo e o aplicativo necessário para acessar o material.","impact":"É especialmente útil para arquivos grandes e estudantes com conectividade limitada."},
  {"field":"Mostrar data de envio/modificação","purpose":"Ajuda a reconhecer atualizações.","impact":"Use apenas se a data tiver significado; ela não substitui um histórico de versões."},
  {"field":"Restringir acesso","purpose":"Condiciona a disponibilidade a data, grupo, nota ou outro critério habilitado.","impact":"Uma regra mal combinada pode ocultar o material sem explicar ao estudante como acessá-lo."},
  {"field":"Conclusão da atividade","purpose":"Registra marcação manual ou condição compatível com o recurso.","impact":"Visualizar ou marcar como concluído comprova acesso, não compreensão do documento."}
]' />

## Como aparece para professor e estudante

Para o professor, o recurso pode ser reaberto e editado pelas ações disponíveis no curso ou pela página do próprio item, conforme o tema. Para o estudante, o ícone e o nome conduzem ao arquivo. O tipo de exibição pode levar a uma página incorporada, nova janela, abertura pelo navegador ou download.

<TipBox title="Teste representativo">Se o curso será usado principalmente por celular, não valide apenas no computador. Arquivos largos, planilhas e PDFs digitalizados podem abrir tecnicamente e ainda assim serem impraticáveis.</TipBox>

<BestPractices>

- Informe formato e tamanho quando isso afeta o acesso.
- Forneça títulos internos, idioma correto, ordem de leitura e texto selecionável em PDFs.
- Evite digitalizações sem reconhecimento de texto e imagens que contenham informação sem alternativa.
- Atualize o nome ou a descrição quando substituir o conteúdo por uma nova versão relevante.
- Ofereça formato alternativo quando o arquivo exigir software específico.

</BestPractices>

<AvoidThis title="Erros comuns">

- Usar Arquivo para uma instrução de três parágrafos que funcionaria melhor como Página.
- Publicar “material.pdf” sem assunto, versão ou contexto.
- Marcar conclusão por visualização e interpretar o resultado como evidência de aprendizagem.
- Substituir um documento após o início de uma atividade sem avisar o que mudou.
- Expor planilhas, comentários, propriedades do documento ou nomes reais em materiais de demonstração.

</AvoidThis>

<Checklist :items='["O nome identifica conteúdo, formato e versão quando necessário", "A descrição explica finalidade e próxima ação", "O arquivo abre e é acessível no dispositivo de teste", "Tamanho, tipo e comportamento de abertura foram avaliados", "Direitos de uso e dados pessoais foram verificados", "Restrições e conclusão têm propósito pedagógico", "O fluxo foi testado como estudante"]' />

<FAQ :items='[
  {"question":"Posso apenas arrastar o arquivo para a página do curso?","answer":"O Moodle pode oferecer arrastar e soltar com o modo de edição ativo. Mesmo assim, abra a configuração depois para revisar nome, descrição, aparência, acesso e conclusão."},
  {"question":"Por que a opção de exibição que procuro não aparece?","answer":"Formatos, tema e opções habilitadas pelo administrador alteram o conjunto disponível. Valide no ambiente institucional e escolha um comportamento que também funcione sem incorporação."},
  {"question":"Visualizar o arquivo é uma boa condição de conclusão?","answer":"Pode ser útil como organização do percurso, mas registra apenas a abertura. Para verificar compreensão, associe uma pergunta, discussão, tarefa ou outra evidência."}
]' />

<VideoSection title="Como publicar e testar um Arquivo" description="Demonstração completa da preparação, configuração e validação do recurso." duration="6 minutos" audience="Professor" status="em-producao" objective="Publicar um arquivo acessível com contexto e comportamento de abertura adequado." :script='["Preparar e nomear o arquivo", "Adicionar o recurso na seção", "Preencher nome e descrição", "Enviar o material", "Comparar opções de aparência", "Configurar conclusão", "Testar como estudante no celular"]' />

<RelatedContent :items='[
  {"title":"Arquivo ou Página?","href":"/comparacoes/arquivo-pagina.html","description":"Escolha entre download e leitura direta no Moodle."},
  {"title":"Usar o recurso Pasta","href":"/recursos/pasta.html","description":"Organize vários arquivos relacionados."},
  {"title":"Acessibilidade de materiais","href":"/boas-praticas/acessibilidade.html","description":"Revise documentos, imagens, mídia e navegação."}
]' />

## Referência oficial

- [File resource settings — MoodleDocs 5.2](https://docs.moodle.org/502/en/File_resource_settings)
