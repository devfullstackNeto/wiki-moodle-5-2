<script setup lang="ts">defineProps<{ title?: string; description?: string }>()</script>
<template><div class="video-placeholder"><span class="video-placeholder__mark" aria-hidden="true">▶</span><div><strong>{{ title || 'Vídeo em produção' }}</strong><p>{{ description || 'A gravação será adicionada após a validação da interface institucional.' }}</p></div></div></template>
