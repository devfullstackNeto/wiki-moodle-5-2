<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
const route = useRoute()
const { frontmatter } = useData()
const labels: Record<string,string> = { 'comece-por-aqui':'Comece por aqui', professores:'Professores', estudantes:'Estudantes', tutores:'Tutores', gestores:'Gestores', recursos:'Recursos', atividades:'Atividades', avaliacao:'Avaliação', comunicacao:'Comunicação', 'organizacao-do-curso':'Organização do curso', participantes:'Participantes', relatorios:'Relatórios', 'boas-praticas':'Boas práticas', 'solucao-de-problemas':'Solução de problemas', comparacoes:'Comparações', glossario:'Glossário', faq:'Perguntas frequentes' }
const parts = computed(() => route.path.split('/').filter(Boolean))
</script>
<template><nav v-if="parts.length" class="breadcrumbs" aria-label="Caminho da página"><a :href="withBase('/')">Início</a><template v-for="(part,index) in parts" :key="part"><span aria-hidden="true"> / </span><a v-if="index < parts.length - 1" :href="withBase(`/${parts.slice(0,index+1).join('/')}/`)">{{ labels[part] || part }}</a><span v-else aria-current="page">{{ frontmatter.title || labels[part] || part.replace(/\.html$/, '').replace(/-/g,' ') }}</span></template></nav></template>
