# Guia de publicação

## Preparar

1. Instale Node.js 20 ou mais recente.
2. Na raiz do portal, execute `npm install`.
3. Copie `.env.example` para `.env` e defina `SITE_URL` com a URL HTTPS pública, sem barra final.
4. Atualize contatos, políticas, licença e arquivos de mídia somente após aprovação institucional; preserve os arquivos autorizados da marca CREaD IFMT.
5. Execute `npm run check` e `npm run build`.

## Publicar

Publique todo o conteúdo de `docs/.vitepress/dist` na raiz configurada do servidor estático. O servidor deve:

- servir `index.html` por diretório;
- preservar arquivos `.html`, assets, `robots.txt` e `sitemap.xml`;
- usar HTTPS;
- aplicar cache longo aos assets com hash e cache curto aos HTML;
- retornar o `404.html` gerado para rotas inexistentes.

## Conferir depois da publicação

- URL canônica e sitemap usam o domínio definitivo;
- navegação, busca e modo escuro funcionam;
- nenhuma rota interna retorna 404;
- telas estreitas não têm rolagem horizontal;
- política de privacidade e contato estão publicados;
- analytics permanece desativado até decisão formal de privacidade.

O portal não exige Node.js em produção: o resultado do build é inteiramente estático.
