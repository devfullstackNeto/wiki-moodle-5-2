<script setup lang="ts">
defineProps<{
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
}>()
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
      <figure v-if="screenshot || image" class="step-image">
        <ImageZoom :src="screenshot || image || ''" :alt="alt || caption || 'Captura relacionada à etapa'" :caption="caption" />
        <figcaption v-if="caption">{{ caption }}</figcaption>
      </figure>
    </div>
  </li>
</template>
