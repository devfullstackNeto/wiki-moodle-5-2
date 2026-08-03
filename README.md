# Portal Moodle 5.2

Portal estático em VitePress para documentação e aprendizagem sobre Moodle 5.2.x. O conteúdo foi reconstruído a partir da Wiki anterior após auditoria, consolidação e reescrita.

## Requisitos

- Node.js 20 ou superior.
- npm 10 ou superior.

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run validate
npm run check-links
npm run test
npm run check
npm run build
npm run preview
```

O servidor de desenvolvimento e a prévia escutam apenas em `127.0.0.1` por segurança.

## Build

O build de produção é gerado em `docs/.vitepress/dist/`. Publique todo o conteúdo dessa pasta no diretório público do host.

Antes do build definitivo, copie `.env.example` para `.env.local` e defina `SITE_URL`, `SITE_INSTITUTION` e os demais valores aprovados. Sem `SITE_URL`, canonical, sitemap e robots usam domínio `.invalid` propositalmente não publicável.

## Conteúdo e mídia

- Conteúdo público: `docs/`.
- Componentes: `docs/.vitepress/theme/components/`.
- Imagens autorizadas: `docs/public/images/`.
- Vídeos autorizados: `docs/public/videos/`.
- Decisões e pendências: `docs-internos/`.

Não ative analytics, provedores de vídeo, contatos ou identidade institucional sem aprovação.
