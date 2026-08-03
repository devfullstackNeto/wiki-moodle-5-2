# Como adicionar prints e vídeos

Este guia descreve o fluxo editorial do portal. Use sempre um curso de teste, dados fictícios e a interface institucional do Moodle 5.2.x. Antes de publicar uma captura, remova nomes, fotos, e-mails, matrículas, notas e qualquer outra informação pessoal.

## Organização dos prints

Armazene as imagens em `docs/public/images`, separadas por área e página. Use nomes numéricos e semânticos, somente com letras minúsculas, números e hífens.

```text
docs/public/images/
├── atividades/
│   ├── tarefa/01-ativar-edicao.webp
│   ├── forum/
│   └── questionario/01-adicionar-questionario.webp
├── recursos/
│   ├── arquivo/
│   ├── pagina/
│   └── livro/
├── avaliacao/
├── organizacao-do-curso/
├── participantes/
├── relatorios/
└── solucao-de-problemas/
```

Prefira WebP e um enquadramento suficiente para localizar o controle. Não inclua bordas decorativas no arquivo: o componente fornece apresentação, legenda, zoom e carregamento tardio.

## Print dentro de uma etapa

O print principal de um procedimento deve ficar no `StepItem` correspondente. Enquanto o arquivo não existir, omita `screenshot` ou deixe-o vazio e mantenha `screenshotTitle` e `screenshotDescription`; o portal público mostrará apenas um aviso discreto, enquanto o modo editorial exibirá as instruções de produção.

```vue
<StepItem
  title="Ative o modo de edição"
  screenshot="/images/atividades/tarefa/01-ativar-edicao.webp"
  screenshotTitle="Ativar o modo de edição no curso"
  screenshotDescription="Capture o cabeçalho do curso com o controle de edição visível e sem dados pessoais."
  caption="Ative o modo de edição antes de adicionar ou alterar atividades."
  alt="Botão para ativar o modo de edição no Moodle."
>
  Abra o curso e ative o modo de edição.
</StepItem>
```

Exemplo para Questionário:

```vue
<StepItem
  title="Crie o Questionário"
  screenshot="/images/atividades/questionario/01-adicionar-questionario.webp"
  screenshotTitle="Adicionar a atividade Questionário"
  screenshotDescription="Capture o seletor de atividades com Questionário destacado."
  caption="Selecione Questionário no seletor de atividades e recursos."
  alt="Seletor de atividades e recursos do Moodle com Questionário destacado."
/>
```

Use `ScreenshotGallery` somente para imagens complementares que não pertençam a um passo específico. Não repita nela imagens já exibidas nos passos.

## Vídeo publicado no YouTube

```vue
<VideoSection
  title="Como configurar a atividade Tarefa"
  description="Demonstração completa da criação e configuração."
  duration="8 min"
  audience="Professor e tutor"
  status="publicado"
  provider="youtube"
  url="https://www.youtube.com/watch?v=SEU_ID"
/>
```

Confirme que o vídeo está público ou não listado conforme a política institucional, possui legendas revisadas e não exibe dados pessoais. Use a URL canônica do YouTube; não cole código de incorporação.

## Vídeo ainda em produção

```vue
<VideoSection
  title="Como configurar a atividade Tarefa"
  description="Demonstração completa da criação e configuração."
  duration="8 min"
  audience="Professor e tutor"
  status="em-producao"
  objective="Demonstrar a criação, as configurações essenciais e o teste como estudante."
  :script='["Adicionar a Tarefa", "Configurar datas e envios", "Definir nota e feedback", "Testar a entrega"]'
/>
```

O estado público apresenta “Vídeo em produção”, objetivo, duração e tópicos previstos. Instruções técnicas e observações de revisão permanecem exclusivas do modo editorial.

## Validar localmente

Na raiz do projeto:

```bash
npm run dev
npm run dev:editorial
npm run validate
npm run test
npm run build
```

Revise as duas aparências, navegação por teclado, zoom das imagens e larguras de 360, 768, 1024 e 1440 pixels. Antes do envio, execute `npm run check` e confirme que `git status` contém apenas os arquivos previstos. A publicação ocorre pelo workflow `Deploy VitePress to GitHub Pages` após o push para `main`.
