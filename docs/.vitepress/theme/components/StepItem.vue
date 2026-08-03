<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
import { withBase } from 'vitepress'
import { useEditorialMode } from '../composables/useEditorialMode'

const props = defineProps<{
  title: string
  description?: string
  action?: string
  expected?: string
  result?: string
  tip?: string
  alert?: string
  screenshot?: string
  image?: string
  caption?: string
  alt?: string
  screenshotTitle?: string
  screenshotDescription?: string
}>()

const editorialMode = useEditorialMode()
const instance = getCurrentInstance()
const hasScreenshotPlan = computed(() => {
  const vnodeProps = instance?.vnode.props || {}
  return Object.prototype.hasOwnProperty.call(vnodeProps, 'screenshot') || Boolean(props.screenshotTitle || props.screenshotDescription)
})
const screenshotSource = computed(() => props.screenshot || props.image || '')
const resolvedScreenshot = computed(() => screenshotSource.value ? withBase(screenshotSource.value) : '')
</script>

<template>
  <li class="step-item">
    <div class="step-item__body">
      <h3>{{ title }}</h3>
      <p v-if="description">{{ description }}</p>
      <div v-if="action" class="step-detail"><strong>Ação</strong><p>{{ action }}</p></div>
      <div v-if="$slots.default" class="step-item__extra"><slot /></div>
      <div v-if="expected || result" class="step-result"><strong>Resultado esperado</strong><p>{{ expected || result }}</p></div>
      <div v-if="tip" class="step-note step-note--tip"><strong>Dica</strong><p>{{ tip }}</p></div>
      <div v-if="alert" class="step-note step-note--alert"><strong>Atenção</strong><p>{{ alert }}</p></div>
      <figure v-if="resolvedScreenshot" class="step-image step-image--published">
        <ImageZoom :src="resolvedScreenshot" :alt="alt || caption || `Captura da etapa: ${title}`" :caption="caption" />
        <figcaption v-if="caption">{{ caption }}</figcaption>
      </figure>
      <aside v-else-if="hasScreenshotPlan" class="step-image step-image--planned" :class="{ 'step-image--editorial': editorialMode }">
        <span class="step-image__status">Captura em produção</span>
        <template v-if="editorialMode">
          <h4>{{ screenshotTitle || `Captura da etapa: ${title}` }}</h4>
          <p v-if="screenshotDescription">{{ screenshotDescription }}</p>
          <p v-if="alt"><strong>Texto alternativo:</strong> {{ alt }}</p>
        </template>
      </aside>
    </div>
  </li>
</template>
