import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import './style.css'

const modules = import.meta.glob('./components/*.vue', { eager: true })

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    for (const [path, module] of Object.entries(modules)) {
      const name = path.split('/').pop()!.replace('.vue', '')
      app.component(name, (module as { default: unknown }).default)
    }
  }
} satisfies Theme
