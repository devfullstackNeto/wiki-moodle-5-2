<script setup lang="ts">
import { useId } from 'vue'

defineProps<{ title?: string; introduction?: string }>()
const headingId = `step-by-step-${useId().replaceAll(':', '')}`
</script>

<template>
  <section class="step-by-step" :aria-labelledby="headingId">
    <div class="section-heading">
      <span class="section-kicker">Procedimento guiado</span>
      <h2 :id="headingId">{{ title || 'Passo a passo' }}</h2>
      <p v-if="introduction">{{ introduction }}</p>
    </div>
    <ol class="step-list" role="list"><slot /></ol>
  </section>
</template>
