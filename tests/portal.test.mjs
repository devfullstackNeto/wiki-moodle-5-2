import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { docsRoot, projectRoot, walk } from '../scripts/content-utils.mjs'

test('componentes obrigatórios estão presentes', () => {
  const expected = ['PageHero','AudienceBadge','DifficultyBadge','MoodleVersionBadge','ObjectiveCard','Prerequisites','NavigationPath','StepByStep','StepItem','ScreenshotPlaceholder','ScreenshotGallery','ImageZoom','VideoSection','VideoPlaceholder','VideoTranscript','TipBox','WarningBox','ImportantBox','ExampleBox','BestPractices','AvoidThis','Checklist','FAQ','RelatedContent','ResourceComparison','ConfigurationTable','GlossaryTerm','ValidationNotice','PageFeedback','LastUpdated','PreviousNext','Breadcrumbs']
  const base = path.join(docsRoot, '.vitepress/theme/components')
  for (const name of expected) assert.ok(fs.existsSync(path.join(base, `${name}.vue`)), `${name} ausente`)
})

test('busca local, modo de aparência e sitemap estão configurados', () => {
  const config = fs.readFileSync(path.join(docsRoot, '.vitepress/config.mts'), 'utf8')
  assert.match(config, /base:\s*'\/wiki-moodle-5-2\/'/)
  assert.match(config, /provider:\s*'local'/)
  assert.match(config, /sitemap:/)
  assert.match(config, /darkModeSwitchLabel/)
  assert.match(config, /cread-ifmt-horizontal\.jpeg/)
  assert.match(config, /Portal Moodle 5\.2 \| CREaD IFMT/)
})

test('CSS contém responsividade, foco e redução de movimento', () => {
  const css = fs.readFileSync(path.join(docsRoot, '.vitepress/theme/style.css'), 'utf8')
  assert.match(css, /@media \(max-width: 640px\)/)
  assert.match(css, /:focus-visible/)
  assert.match(css, /prefers-reduced-motion/)
  assert.match(css, /grid-template-columns: repeat\(auto-fit/)
})

test('conteúdo principal recebe landmark acessível', () => {
  const layout = fs.readFileSync(path.join(docsRoot, '.vitepress/theme/Layout.vue'), 'utf8')
  assert.match(layout, /#VPContent/)
  assert.match(layout, /role', 'main'/)
})

test('não há scripts externos de analytics', () => {
  const files = walk(docsRoot).filter((file) => /\.(md|vue|ts|mts)$/.test(file))
  const joined = files.map((file) => fs.readFileSync(file, 'utf8')).join('\n')
  assert.doesNotMatch(joined, /googletagmanager|matomo\.js|plausible\.io/)
})

test('scripts solicitados estão documentados no package', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'))
  for (const name of ['dev','build','preview','lint','test','validate','validate-learning','check-links','audit-content']) assert.ok(pkg.scripts[name], `${name} ausente`)
})

test('componentes de aprendizagem aceitam conteúdo detalhado', () => {
  const base = path.join(docsRoot, '.vitepress/theme/components')
  const step = fs.readFileSync(path.join(base, 'StepItem.vue'), 'utf8')
  const screenshot = fs.readFileSync(path.join(base, 'ScreenshotPlaceholder.vue'), 'utf8')
  const video = fs.readFileSync(path.join(base, 'VideoSection.vue'), 'utf8')
  for (const prop of ['description', 'action', 'expected', 'tip', 'alert', 'screenshot', 'caption', 'alt']) assert.match(step, new RegExp(`${prop}\\?`))
  assert.doesNotMatch(step, /number\?/)
  assert.match(screenshot, /framing\?/)
  for (const prop of ['status', 'objective', 'script', 'transcript', 'provider', 'url', 'thumbnail', 'topics']) assert.match(video, new RegExp(`${prop}\\?`))
  for (const provider of ['youtube', 'vimeo', 'mp4', 'institutional']) assert.match(video, new RegExp(`'${provider}'`))
})

test('passos usam uma única numeração automática e acessível', () => {
  const base = path.join(docsRoot, '.vitepress/theme')
  const css = fs.readFileSync(path.join(base, 'style.css'), 'utf8')
  const item = fs.readFileSync(path.join(base, 'components/StepItem.vue'), 'utf8')
  const pages = walk(docsRoot, '.md').map((file) => fs.readFileSync(file, 'utf8')).join('\n')
  assert.match(css, /\.step-item::marker/)
  assert.doesNotMatch(css, /\.step-item::before/)
  assert.doesNotMatch(css, /counter-(?:reset|increment):\s*portal-step/)
  assert.doesNotMatch(item, /:value=/)
  assert.doesNotMatch(pages, /<StepItem\b[^>]*\bnumber="[^"]+"/)
})

test('galeria e placeholders acomodam conteúdo nos breakpoints previstos', () => {
  const base = path.join(docsRoot, '.vitepress/theme')
  const css = fs.readFileSync(path.join(base, 'style.css'), 'utf8')
  const placeholder = fs.readFileSync(path.join(base, 'components/ScreenshotPlaceholder.vue'), 'utf8')
  const gallery = fs.readFileSync(path.join(base, 'components/ScreenshotGallery.vue'), 'utf8')
  assert.match(gallery, /screenshot-gallery/)
  assert.match(css, /grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(min\(100%,\s*280px\),\s*1fr\)\)/)
  assert.match(css, /overflow-wrap:\s*anywhere/)
  assert.match(css, /\.screenshot-placeholder\s*\{[^}]*height:\s*auto/s)
  assert.doesNotMatch(placeholder, /aspectRatio|position:\s*absolute/)
  const expectedRows = { 320: [3, 5], 360: [3, 5], 768: [2, 3], 1440: [1, 2] }
  for (const [width, expectedColumns] of [[320, 1], [360, 1], [768, 2], [1440, 3]]) {
    const contentWidth = Math.min(width - 32, 900)
    const columns = Math.max(1, Math.floor((contentWidth + 16) / 296))
    assert.equal(columns, expectedColumns, `${width}px deve comportar ${expectedColumns} coluna(s)`)
    assert.deepEqual([3, 5].map((cards) => Math.ceil(cards / columns)), expectedRows[width])
  }
})

test('corpus visual inclui textos curtos e longos nos placeholders', () => {
  const source = walk(docsRoot, '.md').map((file) => fs.readFileSync(file, 'utf8')).join('\n')
  const tags = [...source.matchAll(/<ScreenshotPlaceholder\b[^>]*>/g)].map((match) => match[0])
  const lengths = (name) => tags.map((tag) => tag.match(new RegExp(`\\b${name}="([^"]+)"`))?.[1]?.length).filter(Boolean)
  const titles = lengths('title')
  const descriptions = lengths('description')
  const alternatives = lengths('alt')
  assert.ok(Math.min(...titles) <= 20 && Math.max(...titles) >= 60)
  assert.ok(Math.min(...descriptions) <= 65 && Math.max(...descriptions) >= 130)
  assert.ok(Math.max(...alternatives) >= 80)
  assert.equal(tags.length, 100)
})

test('identificadores de capturas são únicos em todas as páginas', () => {
  const ids = new Map()
  for (const file of walk(docsRoot, '.md')) {
    const source = fs.readFileSync(file, 'utf8')
    for (const match of source.matchAll(/<ScreenshotPlaceholder\b[^>]*\bid="([A-Z0-9-]+)"/g)) {
      assert.ok(!ids.has(match[1]), `${match[1]} duplicado em ${file} e ${ids.get(match[1])}`)
      ids.set(match[1], file)
    }
  }
  assert.equal(ids.size, 100)
})

test('identidade institucional possui marcas e rodapé global', () => {
  const branding = path.join(docsRoot, 'public/branding')
  for (const file of ['cread-ifmt-horizontal.jpeg', 'cread-ifmt-vertical.jpeg']) {
    assert.ok(fs.existsSync(path.join(branding, file)), `${file} ausente`)
  }
  const layout = fs.readFileSync(path.join(docsRoot, '.vitepress/theme/Layout.vue'), 'utf8')
  const footer = fs.readFileSync(path.join(docsRoot, '.vitepress/theme/components/InstitutionalFooter.vue'), 'utf8')
  assert.match(layout, /<InstitutionalFooter/)
  assert.match(footer, /Centro de Referência em Educação a Distância/)
})
