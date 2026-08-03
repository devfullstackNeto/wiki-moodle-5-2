# Status editorial do portal

Atualizado em 3 de agosto de 2026.

Este documento acompanha informações de produção que não devem aparecer no portal público. O inventário público possui **107 páginas**; os campos `status` e `lastReviewed` continuam nos arquivos Markdown e não foram apagados.

## Modos de execução

| Modo | Comando | Informações exibidas |
|---|---|---|
| Público | `npm run dev` | Conteúdo consolidado, imagens e vídeos já publicados e data em português. |
| Editorial | `npm run dev:editorial` | Situação da página, avisos de validação, códigos e instruções de captura, roteiros e pendências de vídeo. |

A variável central é `VITEPRESS_EDITORIAL_MODE`. Somente o valor literal `true` ativa o modo editorial. O workflow do GitHub Pages define explicitamente `VITEPRESS_EDITORIAL_MODE: 'false'` e o comando de build público também força esse valor.

## Inventário atual

| Item | Quantidade | Situação editorial |
|---|---:|---|
| Páginas públicas | 107 | Mantidas |
| Páginas com status no frontmatter | 107 | Interno |
| Páginas com data de revisão | 107 | Data pública formatada em pt-BR |
| Capturas planejadas | 102 | Instruções detalhadas visíveis apenas no modo editorial |
| Seções de vídeo | 107 | Estado público de produção e detalhes editoriais separados |
| Avisos de validação institucional | 82 | Visíveis apenas no modo editorial |

## Critérios da auditoria pública

O build público percorre individualmente os 107 arquivos Markdown, confirma a existência do HTML correspondente e falha se o texto visível contiver status editoriais, instruções de captura, pedidos de validação antes da publicação ou datas ISO apresentadas ao leitor.

Capturas sem arquivo exibem apenas um estado discreto no passo correspondente; instruções de captura ficam no modo editorial. Galerias sem imagens publicadas permanecem ocultas. Se uma seção de vídeo não tiver URL reproduzível, o público vê título, objetivo, duração e tópicos previstos em um estado de produção; detalhes técnicos permanecem no modo editorial.

## Pendências institucionais preservadas

- Confirmar rótulos, caminhos, permissões e disponibilidade de recursos na instância Moodle 5.2.x do IFMT.
- Produzir e revisar as capturas catalogadas com dados fictícios e enquadramento acessível.
- Produzir, legendar e revisar os vídeos antes de incluir URLs públicas.
- Atualizar o frontmatter quando cada página for validada editorial e institucionalmente.

Os catálogos detalhados continuam em `catalogo-de-imagens.md`, `catalogo-de-videos.md` e `controle-de-pendencias.md`.
