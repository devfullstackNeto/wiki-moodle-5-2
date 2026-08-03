<script setup lang="ts">
defineProps<{
  id: string
  title: string
  description: string
  alt: string
  ratio?: string
  src?: string
  caption?: string
  framing?: string
}>()
</script>
<template>
  <figure class="screenshot-placeholder">
    <ImageZoom v-if="src" :src="src" :alt="alt" :caption="caption || title" />
    <div v-else class="screenshot-placeholder__canvas" :style="{ aspectRatio: ratio || '16 / 9' }">
      <div class="screenshot-placeholder__content">
        <span class="screenshot-placeholder__status">Captura de tela em produção</span>
        <strong>{{ title }}</strong>
        <p>{{ description }}</p>
        <p v-if="framing"><b>Enquadramento recomendado:</b> {{ framing }}</p>
        <small>Identificador: {{ id }}</small>
      </div>
    </div>
    <figcaption>
      <strong>Legenda:</strong> {{ caption || description }}<br>
      <small><strong>Texto alternativo sugerido:</strong> {{ alt }}</small>
    </figcaption>
  </figure>
</template>
