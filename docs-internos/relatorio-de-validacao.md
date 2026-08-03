# Relatório de validação

**Data:** 03/08/2026  
**Escopo:** portal estático VitePress 1.6.4, conteúdo público e build de produção.

## Resultado

| Verificação | Resultado | Evidência |
|---|---|---|
| Lint | Aprovado | 152 arquivos verificados |
| Frontmatter e títulos | Aprovado | 105 páginas e 105 títulos únicos |
| Links internos | Aprovado | 108 arquivos de conteúdo/configuração |
| Testes automatizados | Aprovado | 6 de 6 testes |
| Build de produção | Aprovado | 105 rotas de conteúdo, página 404 e sitemap |
| Console do navegador | Aprovado | nenhum erro ou aviso nas amostras |
| Responsividade | Aprovado | 360, 768, 1024 e 1440 px sem rolagem horizontal |
| Landmarks e títulos | Aprovado | um `h1` e um landmark principal por página testada |
| Catálogo | Aprovado | filtro de 15 atividades para 1 resultado |
| Tema claro/escuro | Aprovado estruturalmente | seletor do tema e tokens dos dois esquemas presentes |
| Mídia | Aprovado estruturalmente | 88 capturas planejadas e 12 vídeos justificados; sem dados reais |

## Amostras navegadas

- página inicial;
- catálogo de atividades;
- página específica da atividade Tarefa.

O teste em 768 px encontrou inicialmente rolagem horizontal causada pela combinação da navegação larga com a área de conteúdo. A regra foi corrigida, o menu passa ao modo compacto até 959 px e a segunda medição confirmou `scrollWidth` igual à largura útil.

## Build

- Diretório: `docs/.vitepress/dist`
- Arquivos: 339
- Tamanho total: 6.313.284 bytes
- HTML gerado: 106 arquivos

## Integridade da fonte

`wiki-moodle-5-2` permaneceu fora do diretório de escrita da migração. A conferência final manteve **660 arquivos** e **3.988.278 bytes**, iguais à linha de base registrada antes da reconstrução. O checksum agregado da linha de base foi `ded7bc2ae086ed82b63573ce74e3555c68493afa54eca2956300daba075b91fc`.

## Dependências

O `npm audit --omit=dev` informa três avisos transitivos no servidor de desenvolvimento do VitePress 1.6.4/Vite 5, sem correção disponível na versão estável usada. A saída estática não executa esse servidor. Como mitigação, `dev` e `preview` escutam somente `127.0.0.1`; não os exponha à rede. Reavaliar quando houver uma versão estável do VitePress com a cadeia corrigida.

## Limites da validação

Compatibilidade editorial com o Moodle 5.2 foi revisada, mas telas, rótulos, permissões, plugins, integrações e dados reais do ambiente institucional não foram observados. Essas pendências estão registradas em `controle-de-pendencias.md`.
