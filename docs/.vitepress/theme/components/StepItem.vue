<script setup lang="ts">
const props = defineProps<{
  number?: string | number
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
  <li class="step-item" :value="props.number ? Number(props.number) : undefined">
    <div class="step-item__body">
      <h3>{{ title }}</h3>
      <p v-if="description">{{ description }}</p>
      <div v-if="action" class="step-detail"><strong>Ação:</strong> {{ action }}</div>
      <slot />
      <p v-if="expected || result" class="step-result"><strong>Resultado esperado:</strong> {{ expected || result }}</p>
      <p v-if="tip" class="step-note step-note--tip"><strong>Dica:</strong> {{ tip }}</p>
      <p v-if="alert" class="step-note step-note--alert"><strong>Atenção:</strong> {{ alert }}</p>
      <figure v-if="screenshot || image" class="step-image">
        <ImageZoom :src="screenshot || image || ''" :alt="alt || caption || `Captura da etapa ${number || ''}`" :caption="caption" />
        <figcaption v-if="caption">{{ caption }}</figcaption>
      </figure>
    </div>
  </li>
</template>
