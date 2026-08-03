<script setup lang="ts">
import { withBase } from 'vitepress'
defineProps<{ items?: Array<{ title: string; href: string; description?: string }> }>()
</script>
<template><nav class="related-content" aria-label="Conteúdos relacionados"><span class="section-kicker">Continue aprendendo</span><h2>Você também pode precisar de</h2><div class="portal-grid"><a v-for="item in items" :key="item.href" class="portal-card catalog-card" :href="withBase(item.href)"><strong>{{ item.title }}</strong><p v-if="item.description">{{ item.description }}</p><span class="card-link">Abrir conteúdo →</span></a><slot /></div></nav></template>
