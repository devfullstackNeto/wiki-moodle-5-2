import { defineConfig } from 'vitepress'
import { nav, sidebar } from './data/navigation'

const siteUrl = (process.env.SITE_URL || 'https://devfullstackneto.github.io/wiki-moodle-5-2/').replace(/\/?$/, '/')
const editorialMode = process.env.VITEPRESS_EDITORIAL_MODE === 'true'

export default defineConfig({
  base: '/wiki-moodle-5-2/',
  lang: 'pt-BR',
  title: 'Portal Moodle 5.2 | CREaD IFMT',
  titleTemplate: ':title | CREaD IFMT',
  description: 'Portal de apoio e documentação do Moodle 5.2.x do CREaD IFMT.',
  cleanUrls: false,
  lastUpdated: true,
  sitemap: { hostname: siteUrl },
  head: [
    ['link', { rel: 'icon', type: 'image/jpeg', href: '/wiki-moodle-5-2/branding/cread-ifmt-vertical.jpeg' }],
    ['meta', { name: 'theme-color', content: '#238636' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Portal Moodle 5.2 | CREaD IFMT' }],
    ['meta', { property: 'og:image', content: `${siteUrl}branding/cread-ifmt-horizontal.jpeg` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],
  transformPageData(pageData) {
    const relative = pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '.html')
    const canonical = new URL(relative, siteUrl).toString()
    const title = pageData.frontmatter.title || pageData.title || 'Portal Moodle 5.2'
    const socialTitle = title.includes('CREaD IFMT') ? title : `${title} | CREaD IFMT`
    const description = pageData.frontmatter.description || 'Portal de apoio e documentação do Moodle 5.2.x do CREaD IFMT.'
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { property: 'og:title', content: socialTitle }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: canonical }]
    )
    if (!editorialMode) delete pageData.frontmatter.status
  },
  themeConfig: {
    editorialMode,
    logo: {
      light: '/branding/cread-ifmt-horizontal.jpeg',
      dark: '/branding/cread-ifmt-horizontal.jpeg',
      alt: 'Instituto Federal de Mato Grosso — Centro de Referência em Educação a Distância'
    },
    siteTitle: false,
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
    socialLinks: []
  }
})
