<script setup lang="ts">
import { computed, isVNode, useSlots } from 'vue'

defineProps<{ title?: string }>()
const slots = useSlots()

function textContent(value: unknown): string {
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (Array.isArray(value)) return value.map(textContent).join('')
  if (isVNode(value)) return textContent(value.children)
  return ''
}

const contentParts = computed(() => {
  const content = textContent(slots.default?.() || [])
  return content.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part) => ({
    text: part.startsWith('**') && part.endsWith('**') ? part.slice(2, -2) : part,
    strong: part.startsWith('**') && part.endsWith('**')
  }))
})
</script>

<template>
  <section class="objective-card">
    <span class="objective-card__mark" aria-hidden="true">◎</span>
    <div>
      <span class="section-kicker">Resultado de aprendizagem</span>
      <h2 v-if="title">{{ title }}</h2><strong v-else class="objective-card__title">Objetivo desta página</strong>
      <div><template v-for="(part, index) in contentParts" :key="index"><strong v-if="part.strong">{{ part.text }}</strong><template v-else>{{ part.text }}</template></template></div>
    </div>
  </section>
</template>
