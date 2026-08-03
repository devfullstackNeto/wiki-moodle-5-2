# Relatório de correção dos componentes visuais

Data da auditoria: 3 de agosto de 2026.

## Escopo auditado

- 77 páginas utilizam `StepByStep` e `StepItem`.
- 73 páginas utilizam `ScreenshotPlaceholder`.
- 21 páginas organizam capturas com `ScreenshotGallery`.
- 100 identificadores de captura foram verificados; nenhum está duplicado.
- As páginas-piloto foram Questionário, Tarefa, Fórum, Livro, Página e Grupos.

## Causas encontradas

1. A numeração dos passos era gerada simultaneamente pelo elemento `<ol>`, por contadores CSS e por 286 atributos `number` escritos no Markdown.
2. O texto do placeholder era colocado dentro de uma área com proporção fixa, inadequada para descrições e textos alternativos longos.
3. `overflow: hidden` cortava conteúdo que ultrapassava a altura calculada.
4. A galeria reutilizava o grid genérico de cards, com largura mínima menor que a necessária para os metadados das capturas.
5. O tema base mantinha `body { min-width: 320px }`; em navegadores com barra de rolagem isso gerava 15 px de overflow na viewport de 320 px.

## Correções aplicadas

- `StepByStep` mantém um único `<ol>` acessível e cria identificador de título único.
- `StepItem` não aceita nem renderiza número manual. A ordem do `<ol>` é a única fonte da numeração visual e semântica.
- Foram removidos 286 atributos manuais de 61 páginas; as outras 16 páginas já dependiam da ordem automática.
- O marcador é estilizado somente com `::marker`; não há contador CSS nem pseudo-elemento concorrente.
- Os cards usam altura automática, largura máxima de 100%, `overflow-wrap: anywhere` e conteúdo textual com overflow visível.
- O placeholder sem imagem mostra selo, título, descrição, instrução de produção e texto alternativo em blocos separados.
- Imagens usam largura responsiva, altura automática e proporção natural.
- A galeria usa `repeat(auto-fit, minmax(min(100%, 280px), 1fr))` e uma coluna quando não existe espaço real.
- O `min-width` global rígido foi neutralizado para eliminar overflow horizontal em 320 px.

## Auditoria das páginas

- IDs duplicados: 0.
- Numerações manuais restantes: 0.
- Propriedades desconhecidas nos quatro componentes: 0.
- Galerias atuais: 52 com um card, 15 com dois cards e 6 com três cards.
- Não existe atualmente uma página editorial com cinco capturas; esse volume é coberto pelo teste automatizado de distribuição do grid.
- Não foram identificadas repetições internas que exigissem remover conteúdo pedagógico. Textos institucionais padronizados de enquadramento permanecem quando descrevem a mesma regra de produção segura.

## Testes visuais

Foram executadas 24 combinações no navegador: seis páginas-piloto em 320, 360, 768 e 1440 px.

Resultado em todas as combinações:

- nenhum overflow horizontal;
- nenhuma sobreposição entre cards;
- nenhum conteúdo fora do card;
- nenhuma altura zero;
- nenhuma numeração manual no DOM;
- passos e capturas presentes na ordem do documento.

Na página Questionário, os cards em 320 px cresceram automaticamente até 588 px conforme o conteúdo. O modo escuro apresentou contraste calculado de 19,12:1 no título do placeholder e não gerou overflow.

## Validação automatizada

Os testes agora impedem regressões de:

- contador ou pseudo-elemento duplicado;
- atributo manual `number` em qualquer página;
- ID de captura duplicado;
- proporção fixa no placeholder textual;
- ausência do grid responsivo;
- ausência de quebra segura de palavras;
- distribuição de três e cinco cards nos quatro breakpoints;
- falta de amostras curtas e longas de título, descrição e texto alternativo.

Validação final desta correção: 105 páginas válidas, 12 testes aprovados, links internos válidos e build de produção concluído.
