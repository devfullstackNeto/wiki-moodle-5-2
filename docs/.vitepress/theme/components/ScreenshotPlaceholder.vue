<script setup lang="ts">
defineProps<{
  id: string
  title: string
  description: string
  alt: string
  src?: string
  caption?: string
  framing?: string
}>()
</script>
<template>
  <figure class="screenshot-placeholder" :class="{ 'screenshot-placeholder--image': src }" :data-screenshot-id="id">
    <ImageZoom v-if="src" :src="src" :alt="alt" :caption="caption || title" />
    <div v-else class="screenshot-placeholder__content">
      <span class="screenshot-placeholder__status">Captura de tela em produção</span>
      <h3>{{ title }}</h3>
      <p class="screenshot-placeholder__description">{{ description }}</p>
      <div class="screenshot-placeholder__detail">
        <strong>Como produzir esta captura</strong>
        <p>{{ framing || 'Enquadre apenas a área necessária, com dados fictícios e controles legíveis.' }}</p>
      </div>
      <div class="screenshot-placeholder__detail screenshot-placeholder__detail--alt">
        <strong>Texto alternativo sugerido</strong>
        <p>{{ alt }}</p>
      </div>
    </div>
    <figcaption v-if="src && (caption || description)">{{ caption || description }}</figcaption>
  </figure>
</template>
