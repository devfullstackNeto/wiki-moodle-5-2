<script setup lang="ts">
defineProps<{ id: string; title: string; description: string; alt: string; ratio?: string; src?: string; caption?: string }>()
</script>
<template>
  <figure class="screenshot-placeholder">
    <ImageZoom v-if="src" :src="src" :alt="alt" :caption="caption || title" />
    <div v-else class="screenshot-placeholder__canvas" :style="{ aspectRatio: ratio || '16 / 9' }">
      <div><strong>{{ id }} · captura pendente</strong><br>{{ description }}</div>
    </div>
    <figcaption><strong>{{ title }}.</strong> {{ caption || description }}<br><small>Texto alternativo planejado: {{ alt }}</small></figcaption>
  </figure>
</template>
