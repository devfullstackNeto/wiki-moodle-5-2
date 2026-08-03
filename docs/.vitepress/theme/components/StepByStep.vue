<script setup lang="ts">
defineProps<{ title?: string; introduction?: string }>()
</script>

<template>
  <section class="step-by-step" aria-labelledby="step-by-step-title">
    <div class="section-heading">
      <span class="section-kicker">Procedimento guiado</span>
      <h2 id="step-by-step-title">{{ title || 'Passo a passo' }}</h2>
      <p v-if="introduction">{{ introduction }}</p>
    </div>
    <ol class="step-list"><slot /></ol>
  </section>
</template>
