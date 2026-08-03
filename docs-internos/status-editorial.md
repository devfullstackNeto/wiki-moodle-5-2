# Status editorial do portal

Atualizado em 3 de agosto de 2026.

Este documento acompanha informações de produção que não devem aparecer no portal público. O inventário público permanece com **105 páginas**; os campos `status` e `lastReviewed` continuam nos arquivos Markdown e não foram apagados.

## Modos de execução

| Modo | Comando | Informações exibidas |
|---|---|---|
| Público | `npm run dev` | Conteúdo consolidado, imagens e vídeos já publicados e data em português. |
| Editorial | `npm run dev:editorial` | Situação da página, avisos de validação, códigos e instruções de captura, roteiros e pendências de vídeo. |

A variável central é `VITEPRESS_EDITORIAL_MODE`. Somente o valor literal `true` ativa o modo editorial. O workflow do GitHub Pages define explicitamente `VITEPRESS_EDITORIAL_MODE: 'false'` e o comando de build público também força esse valor.

## Inventário atual

| Item | Quantidade | Situação editorial |
|---|---:|---|
| Páginas públicas | 105 | Mantidas |
| Páginas com status no frontmatter | 105 | Interno |
| Páginas com data de revisão | 105 | Data pública formatada em pt-BR |
| Capturas planejadas | 100 | Instruções visíveis apenas no modo editorial |
| Seções de vídeo | 105 | Roteiro visível apenas no modo editorial quando não há mídia publicada |
| Avisos de validação institucional | 82 | Visíveis apenas no modo editorial |

## Critérios da auditoria pública

O build público percorre individualmente os 105 arquivos Markdown, confirma a existência do HTML correspondente e falha se o texto visível contiver status editoriais, mensagens de produção, instruções de captura, pedidos de validação antes da publicação ou datas ISO apresentadas ao leitor.

Capturas sem arquivo não geram cartões vazios no modo público. Se uma galeria ficar sem imagens publicadas, o contêiner também é ocultado. Se uma seção de vídeo não tiver URL reproduzível, ela é omitida integralmente no modo público; o objetivo e o roteiro permanecem disponíveis no modo editorial.

## Pendências institucionais preservadas

- Confirmar rótulos, caminhos, permissões e disponibilidade de recursos na instância Moodle 5.2.x do IFMT.
- Produzir e revisar as capturas catalogadas com dados fictícios e enquadramento acessível.
- Produzir, legendar e revisar os vídeos antes de incluir URLs públicas.
- Atualizar o frontmatter quando cada página for validada editorial e institucionalmente.

Os catálogos detalhados continuam em `catalogo-de-imagens.md`, `catalogo-de-videos.md` e `controle-de-pendencias.md`.
