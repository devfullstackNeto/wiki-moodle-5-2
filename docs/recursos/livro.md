---
title: Usar o recurso Livro
description: Organize leituras extensas em capítulos navegáveis sem fragmentar o percurso do estudante.
category: Recurso
audience:
  - Professor
level: Intermediário
readingTime: 13 min
tags:
  - conteúdo
  - leitura longa
  - índice
moodleVersion: 5.2.x
status: em-revisao
lastReviewed: 2026-08-03
pageType: recurso
---

<ObjectiveCard>Ao final, você conseguirá planejar a arquitetura de um **Livro**, configurar sua navegação, criar capítulos e subcapítulos, revisar a experiência de leitura e decidir quando outro formato seria melhor.</ObjectiveCard>

## O que é o recurso Livro

Livro reúne páginas de conteúdo em uma estrutura hierárquica com índice próprio. Cada capítulo abre dentro do Moodle e pode conter texto, links e mídia produzidos no editor. Subcapítulos permitem um segundo nível de organização, útil para dividir uma unidade extensa sem preencher a página principal do curso com muitos recursos separados.

O Livro é principalmente um recurso de leitura. Ele não coleta respostas nem substitui atividades avaliativas. Sua organização deve ajudar o estudante a reconhecer onde está, quanto falta e qual ação realizar depois de cada parte.

## Quando utilizar

- Uma unidade contém várias partes que precisam de ordem e índice.
- O conteúdo é extenso demais para uma única Página, mas deve permanecer responsivo.
- O estudante precisa retomar capítulos específicos ao longo do curso.
- Há necessidade de imprimir um capítulo ou o livro inteiro, quando a capacidade e o tema permitem essa opção.

## Quando evitar

- Para um texto curto, prefira [Página](./pagina.html).
- Para um documento oficial com layout fixo, use [Arquivo](./arquivo.html).
- Para percurso adaptativo com perguntas e ramificações, avalie [Lição](../atividades/licao.html).
- Para conteúdo que exige produção colaborativa, considere [Wiki](../atividades/wiki.html).

<ExampleBox title="Exemplo: segurança em laboratório">Crie “Guia de segurança em laboratório” com capítulos Preparação, Equipamentos, Conduta e Emergências. Em Equipamentos, use subcapítulos para proteção individual e proteção coletiva. Termine cada capítulo com uma síntese e um link para a atividade correspondente.</ExampleBox>

<Prerequisites>

- Permissão para adicionar recursos e editar capítulos.
- Sumário planejado com títulos curtos e uma sequência compreensível.
- Conteúdo revisado e dividido por objetivo, não apenas por tamanho.
- Mídia acessível e links de continuidade definidos.

</Prerequisites>

<NavigationPath path="Curso → ativar modo de edição → seção desejada → adicionar uma atividade ou recurso → Livro" />

<StepByStep introduction="No Livro, a configuração do recurso e a criação dos capítulos acontecem em momentos diferentes.">
  <StepItem title="Planeje o sumário" description="Liste capítulos e, quando necessário, subcapítulos antes de abrir o formulário." action="Dê a cada parte um título que descreva seu conteúdo fora de contexto." expected="A estrutura cabe em até dois níveis e acompanha a lógica de aprendizagem." />
  <StepItem title="Adicione o recurso Livro" description="Com o modo de edição ativo, abra o seletor e escolha Livro." expected="O formulário de configuração geral do Livro é exibido." />
  <StepItem title="Configure identidade e navegação" description="Preencha Nome e Descrição e escolha a formatação de capítulos." action="Decida como o índice indicará a hierarquia e se títulos personalizados são necessários." expected="O recurso tem apresentação consistente com o sumário planejado." />
  <StepItem title="Salve e crie o primeiro capítulo" description="Após salvar, o Moodle solicita o título e o conteúdo do primeiro capítulo." action="Insira uma abertura que explique objetivo, tempo de leitura e relação com o restante do livro." expected="O primeiro capítulo aparece no índice e na área de leitura." />
  <StepItem title="Adicione os demais capítulos" description="Use os controles de edição do índice para criar, mover, ocultar ou editar capítulos." action="Marque como subcapítulo somente as partes que pertencem claramente ao capítulo anterior." expected="O índice reflete a sequência planejada sem níveis excessivos." alert="Mover ou renomear capítulos depois da publicação pode afetar referências usadas em orientações externas; revise links e instruções." />
  <StepItem title="Construa continuidade" description="Finalize cada capítulo com síntese e próxima ação." action="Inclua links para atividades relacionadas apenas quando ajudarem o percurso e teste o destino." expected="O estudante sabe se deve avançar, praticar, voltar ou entregar uma atividade." />
  <StepItem title="Teste navegação e impressão" description="Percorra o Livro como estudante, em tela estreita e com teclado." action="Confira índice, botões anterior/próximo, títulos, mídia e, se disponível, impressão de capítulo e livro." expected="A sequência é compreensível e cada capítulo pode ser consultado sem perda de contexto." />
</StepByStep>

<ScreenshotGallery label="Capturas planejadas para o recurso Livro">
  <ScreenshotPlaceholder id="LIVRO-CONFIG-01" title="Configuração geral do Livro" description="Formulário com Nome, Descrição, Formatação de capítulos e Títulos personalizados." framing="Enquadrar as opções próprias do Livro e ocultar elementos institucionais não validados." alt="Configuração do recurso Livro com opções de formatação do índice." />
  <ScreenshotPlaceholder id="LIVRO-INDICE-02" title="Índice e controles de capítulos" description="Livro de demonstração aberto com capítulos, um subcapítulo e controles de edição visíveis." framing="Mostrar índice completo e início do capítulo, usando conteúdo fictício." alt="Livro no Moodle com índice hierárquico e controles de edição de capítulos." />
</ScreenshotGallery>

## Principais configurações

<ConfigurationTable :rows='[
  {"field":"Nome","purpose":"Identifica o Livro na página do curso.","impact":"Use um título temático; evite nomes genéricos como “Material da unidade”."},
  {"field":"Descrição","purpose":"Explica escopo, sequência e forma de uso.","impact":"Pode aparecer na página do curso; uma descrição longa compete com o próprio conteúdo."},
  {"field":"Formatação de capítulos","purpose":"Define como o índice representa os níveis, por exemplo com números ou recuos.","impact":"A convenção escolhida deve ser consistente com os títulos escritos pelo professor."},
  {"field":"Títulos personalizados","purpose":"Controla como o título do capítulo é exibido dentro do conteúdo.","impact":"Pode evitar repetição, mas exige conferir se a página continua claramente identificada."},
  {"field":"Título do capítulo","purpose":"Nomeia cada unidade de leitura no índice.","impact":"Títulos longos ou repetidos tornam o índice difícil de percorrer."},
  {"field":"Subcapítulo","purpose":"Coloca a parte no segundo nível da hierarquia.","impact":"O Livro oferece apenas essa relação hierárquica; não simule níveis adicionais visualmente."},
  {"field":"Restrições e conclusão","purpose":"Integram o Livro ao percurso e ao acompanhamento.","impact":"A visualização do recurso não comprova a leitura de todos os capítulos."}
]' />

## Manutenção e experiência do estudante

O estudante navega pelo índice e pelos controles de avanço do Livro. O professor, com as permissões adequadas, encontra ações de capítulo junto ao índice. A ferramenta de impressão pode estar no menu **Mais**, dependendo do tema e das capacidades. A exportação como pacote IMS é restrita por capacidade e normalmente não está disponível para todos os papéis.

<WarningBox title="Conclusão do Livro">A condição de visualização pertence ao recurso como um todo. Se cada parte precisa gerar evidência separada, considere páginas ou atividades distintas, sem fragmentar além do necessário.</WarningBox>

<BestPractices>

- Mantenha capítulos com extensão previsível e títulos paralelos.
- Use o primeiro capítulo como orientação de navegação e o último como síntese e encaminhamento.
- Evite subcapítulos usados apenas para compensar um sumário mal planejado.
- Inclua contexto em imagens e não repita a mesma introdução em todas as partes.
- Faça revisão completa depois de importar ou copiar conteúdo entre cursos.

</BestPractices>

<AvoidThis title="Erros comuns">

- Transformar cada parágrafo em capítulo, criando navegação cansativa.
- Criar um único capítulo muito longo que deveria ser uma Página ou ser dividido.
- Referir-se apenas ao número do capítulo, sem título, porque a ordem pode mudar.
- Ocultar um capítulo que é pré-requisito de outros sem revisar o percurso.
- Presumir que a opção de impressão produz automaticamente um documento acessível.

</AvoidThis>

<Checklist :items='["O sumário foi planejado antes da edição", "Capítulos têm títulos informativos e no máximo dois níveis", "Cada capítulo possui objetivo, conteúdo e próxima ação", "Índice e navegação foram testados em tela estreita", "Mídia, links e estrutura de títulos são acessíveis", "Impressão foi verificada se fizer parte da orientação", "Conclusão e restrições representam o percurso pretendido"]' />

<FAQ :items='[
  {"question":"Quantos níveis o Livro oferece?","answer":"A estrutura editorial trabalha com capítulos e subcapítulos. Se o conteúdo exige hierarquia mais profunda, simplifique o sumário ou divida o material em unidades coerentes."},
  {"question":"Posso imprimir todo o Livro?","answer":"A documentação padrão prevê impressão do livro ou do capítulo pelo menu Mais, desde que a capacidade esteja disponível. Confirme o resultado e a posição do controle no tema institucional."},
  {"question":"Livro registra quais capítulos foram lidos?","answer":"A conclusão padrão do recurso não comprova leitura de cada capítulo. Use atividades ou evidências específicas quando esse acompanhamento for necessário."}
]' />

<VideoSection title="Como estruturar e publicar um Livro" description="Planejamento do sumário, criação de capítulos e teste da navegação." duration="8 minutos" audience="Professor" status="em-producao" objective="Criar um Livro com índice claro, capítulos acessíveis e continuidade pedagógica." :script='["Decidir entre Página e Livro", "Planejar capítulos e subcapítulos", "Configurar o recurso", "Criar e reorganizar capítulos", "Inserir próxima ação", "Testar índice, navegação e impressão"]' />

<RelatedContent :items='[
  {"title":"Página ou Livro?","href":"/comparacoes/pagina-livro.html","description":"Compare extensão, hierarquia e navegação."},
  {"title":"Lição ou Livro?","href":"/comparacoes/licao-livro.html","description":"Decida entre leitura linear e percurso interativo."},
  {"title":"Design e organização","href":"/boas-praticas/design-e-organizacao.html","description":"Construa uma experiência previsível no curso."}
]' />

## Referência oficial

- [Using Book — MoodleDocs 5.2](https://docs.moodle.org/502/en/Using_Book)
