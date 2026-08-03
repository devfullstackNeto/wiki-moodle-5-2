<script setup lang="ts">
import { withBase } from 'vitepress'
defineProps<{ items?: Array<{ title: string; href: string; description?: string }> }>()
</script>
<template><nav aria-label="Conteúdos relacionados"><h2>Conteúdos relacionados</h2><div class="portal-grid"><a v-for="item in items" :key="item.href" class="portal-card catalog-card" :href="withBase(item.href)"><strong>{{ item.title }}</strong><p v-if="item.description">{{ item.description }}</p></a><slot /></div></nav></template>
