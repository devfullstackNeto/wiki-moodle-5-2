<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<template>
  <section :aria-label="label || 'Galeria de capturas'" class="screenshot-gallery">
    <slot />
  </section>
</template>
