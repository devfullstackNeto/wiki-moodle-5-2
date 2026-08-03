# Identidade visual e vídeos

## Arquivos de marca

As marcas ficam em `docs/public/branding/`:

- `cread-ifmt-horizontal.jpeg`: cabeçalho, rodapé e imagem de compartilhamento;
- `cread-ifmt-vertical.jpeg`: favicon provisório baseado na marca oficial fornecida.

Para atualizar uma marca sem editar código, substitua o arquivo correspondente mantendo o nome e a extensão. O nome do portal, os metadados e a marca do cabeçalho são configurados em `docs/.vitepress/config.mts`. O rodapé global está em `docs/.vitepress/theme/components/InstitutionalFooter.vue`.

Se o IFMT fornecer um símbolo simplificado próprio para favicon, coloque-o em `docs/public/branding/` e atualize a entrada `rel: 'icon'` em `config.mts`. Não derive ou redesenhe a marca sem autorização.

## Inserir vídeos

Use `VideoSection` no arquivo Markdown da página. Os provedores aceitos são `youtube`, `vimeo`, `mp4` e `institutional`.

Vídeo em produção:

```md
<VideoSection
  title="Como configurar a atividade Tarefa"
  description="Demonstração completa da criação e configuração da atividade."
  duration="8 min"
  audience="Professor e tutor"
  status="em-producao"
  :topics='["Criar a atividade", "Definir prazo", "Configurar tipos de envio", "Testar como estudante"]'
/>
```

YouTube publicado:

```md
<VideoSection
  title="Como configurar a atividade Tarefa"
  description="Demonstração completa da criação e configuração da atividade."
  duration="8 min"
  audience="Professor e tutor"
  status="publicado"
  provider="youtube"
  url="https://www.youtube.com/watch?v=ID_DO_VIDEO"
/>
```

MP4 hospedado no portal:

1. Coloque o arquivo autorizado em `docs/public/videos/`.
2. Use `provider="mp4"` e `url="/videos/nome-do-video.mp4"`.
3. Se houver uma capa, coloque-a em `docs/public/images/` e informe `thumbnail="/images/capa.jpg"`.

Para Vimeo, use `provider="vimeo"` e a URL pública do vídeo. Para um player próprio da instituição, use `provider="institutional"` e uma URL HTTPS incorporável. YouTube, Vimeo e players institucionais só carregam depois do consentimento do visitante. O player MP4 usa controles HTML5 nativos.

`transcript` recebe uma transcrição textual curta. Para transcrições longas, mantenha o texto na própria página, em uma seção acessível após o componente. Nunca publique dados pessoais, credenciais ou gravações sem autorização.

## Testar e publicar

Na raiz do projeto:

```sh
npm install
npm run dev
npm run validate
npm run test
npm run build
```

O ambiente local informado por `npm run dev` permite revisar responsividade, contraste, teclado, logo e reprodução. A publicação ocorre pelo workflow `.github/workflows/deploy-pages.yml` após commit e push na branch `main`.
