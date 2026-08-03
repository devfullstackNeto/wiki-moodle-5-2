<script setup lang="ts">
import { withBase } from 'vitepress'
defineProps<{ previous?: { title: string; href: string }; next?: { title: string; href: string } }>()
</script>
<template><nav aria-label="Navegação entre conteúdos" class="portal-grid"><a v-if="previous" class="portal-card" :href="withBase(previous.href)">Anterior<br><strong>{{ previous.title }}</strong></a><a v-if="next" class="portal-card" :href="withBase(next.href)">Próximo<br><strong>{{ next.title }}</strong></a></nav></template>
