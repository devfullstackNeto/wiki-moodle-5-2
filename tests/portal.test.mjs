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
  for (const name of ['dev','build','preview','lint','test','validate','check-links']) assert.ok(pkg.scripts[name], `${name} ausente`)
})
