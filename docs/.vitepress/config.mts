import { defineConfig } from 'vitepress'
import { nav, sidebar } from './data/navigation'

const siteUrl = (process.env.SITE_URL || 'https://devfullstackneto.github.io/wiki-moodle-5-2/').replace(/\/?$/, '/')
const institution = process.env.SITE_INSTITUTION || 'Instituição a confirmar'

export default defineConfig({
  base: '/wiki-moodle-5-2/',
  lang: 'pt-BR',
  title: 'Portal Moodle 5.2',
  titleTemplate: ':title | Portal Moodle 5.2',
  description: 'Base de conhecimento acessível sobre recursos, atividades e práticas no Moodle 5.2.x.',
  cleanUrls: false,
  lastUpdated: true,
  sitemap: { hostname: siteUrl },
  head: [
    ['meta', { name: 'theme-color', content: '#0b5563' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Portal Moodle 5.2' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],
  transformPageData(pageData) {
    const relative = pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '.html')
    const canonical = new URL(relative, siteUrl).toString()
    const title = pageData.frontmatter.title || pageData.title || 'Portal Moodle 5.2'
    const description = pageData.frontmatter.description || 'Documentação do Moodle 5.2.x.'
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { property: 'og:title', content: `${title} | Portal Moodle 5.2` }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: canonical }]
    )
  },
  themeConfig: {
    siteTitle: 'Portal Moodle 5.2',
    nav,
    sidebar,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar no portal' },
          modal: {
            noResultsText: 'Nenhum resultado encontrado',
            resetButtonTitle: 'Limpar busca',
            footer: { selectText: 'selecionar', navigateText: 'navegar', closeText: 'fechar' }
          }
        }
      }
    },
    outline: { level: [2, 3], label: 'Nesta página' },
    docFooter: { prev: 'Anterior', next: 'Próximo' },
    lastUpdated: { text: 'Última revisão', formatOptions: { dateStyle: 'medium' } },
    darkModeSwitchLabel: 'Aparência',
    lightModeSwitchTitle: 'Usar modo claro',
    darkModeSwitchTitle: 'Usar modo escuro',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Voltar ao topo',
    externalLinkIcon: true,
    footer: {
      message: `${institution} · Identidade, contato, políticas e licença aguardam validação institucional.`,
      copyright: 'Conteúdo de apoio sobre Moodle 5.2.x.'
    },
    socialLinks: []
  }
})
