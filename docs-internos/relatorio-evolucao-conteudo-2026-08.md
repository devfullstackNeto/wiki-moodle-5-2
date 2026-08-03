# Relatório da evolução editorial — agosto de 2026

## Escopo concluído

- 105 páginas revisadas sem alteração das URLs públicas.
- 10 páginas reescritas em profundidade: página inicial, Arquivo, Página, Livro, Tarefa, Fórum, Questionário, Grupos, Conclusão de atividade e Livro de notas.
- 95 páginas enriquecidas conforme o tipo editorial, preservando o conteúdo anterior.
- 70.242 palavras ou tokens textuais contabilizados pelo verificador, com média estrutural de 669 por página.

## Comparação com a auditoria inicial

| Indicador | Antes | Depois |
|---|---:|---:|
| Páginas auditadas | 105 | 105 |
| Páginas com passo a passo | 22 | 77 |
| Páginas com print planejado | 73 | 73 |
| Páginas com seção de vídeo | 12 | 105 |
| Páginas com exemplo | 77 | 87 |
| Páginas com checklist | 77 | 87 |
| Páginas com conteúdos relacionados | 22 | 104 |

Os 28 documentos sem `StepByStep` são a página inicial, índices, páginas de perfil, FAQ, glossário e comparações. A ausência é intencional: esses tipos usam rotas, catálogos, perguntas ou critérios de decisão em vez de um procedimento artificial.

Os 32 documentos sem placeholder de print são a página inicial, índices, páginas de perfil, boas práticas e comparações. Neles, uma captura de interface não é necessária para cumprir o objetivo editorial. As 73 páginas operacionais possuem captura planejada com tela, enquadramento, legenda e texto alternativo.

## Componentes atualizados

- `PageHero`: cabeçalho editorial com maior hierarquia visual.
- `HomeSearch`: busca principal com sugestões por tarefa.
- `ObjectiveCard`: objetivo com destaque de resultado de aprendizagem.
- `StepByStep` e `StepItem`: número, descrição, ação, resultado, dica, alerta e imagem opcional.
- `ScreenshotPlaceholder`: estado de produção, descrição da tela, enquadramento, legenda e texto alternativo.
- `VideoSection`: estado, objetivo, roteiro, tópicos, transcrição e próxima leitura.
- `RelatedContent`: seção “Você também pode precisar de” com chamada visual.

O sistema visual global também recebeu novos padrões para cabeçalhos, cards, passos, mídia, estados, responsividade, foco e modo escuro.

## Validações automatizadas

O script `validate-learning` verifica:

- atividades e recursos sem passo a passo;
- páginas operacionais sem prints planejados;
- páginas principais sem vídeo;
- páginas temáticas sem exemplo ou checklist;
- páginas sem conteúdos relacionados;
- placeholders sem identificação, descrição, enquadramento ou texto alternativo;
- links de texto pouco descritivos;
- páginas potencialmente órfãs;
- aplicação indevida do modelo procedural às comparações.

## Pendências institucionais e de produção

- Capturar as 73 telas planejadas no Moodle institucional, usando dados fictícios.
- Produzir ou incorporar os 105 vídeos planejados; todas as páginas já possuem objetivo e roteiro.
- Confirmar tema, pacote de idioma, versão corretiva 5.2.x, permissões e capacidades.
- Validar serviços e bibliotecas de BigBlueButton, H5P, LTI, SCORM e conversão/anotação de documentos.
- Validar identidade, contatos, políticas editoriais e integrações com o SUAP.

Essas pendências não impedem o build nem a navegação. Elas permanecem explícitas no conteúdo para impedir que variações institucionais sejam apresentadas como universais.
