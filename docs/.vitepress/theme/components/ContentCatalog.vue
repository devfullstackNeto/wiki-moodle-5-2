<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { catalog, type CatalogItem } from '../../data/catalog'

const props = defineProps<{ type?: string; audience?: string; objective?: string; title?: string }>()
const query = ref('')
const tag = ref('')
const level = ref('')
const pool = computed(() => catalog.filter((item) =>
  (!props.type || item.type === props.type) &&
  (!props.audience || item.audience.includes(props.audience)) &&
  (!props.objective || item.objectives.includes(props.objective))))
const tags = computed(() => [...new Set(pool.value.flatMap((item) => item.tags))].sort())
const results = computed<CatalogItem[]>(() => {
  const term = query.value.trim().toLocaleLowerCase('pt-BR')
  return pool.value.filter((item) =>
    (!term || `${item.title} ${item.description} ${item.tags.join(' ')}`.toLocaleLowerCase('pt-BR').includes(term)) &&
    (!tag.value || item.tags.includes(tag.value)) && (!level.value || item.level === level.value))
})
</script>
<template>
  <section>
    <h2 v-if="title">{{ title }}</h2>
    <div class="catalog-controls">
      <label>Buscar neste catálogo <input v-model="query" type="search" placeholder="Título, finalidade ou etiqueta" /></label>
      <label>Filtrar por tema <select v-model="tag"><option value="">Todos</option><option v-for="item in tags" :key="item" :value="item">{{ item }}</option></select></label>
      <label>Nível <select v-model="level"><option value="">Todos</option><option>Básico</option><option>Intermediário</option><option>Avançado</option></select></label>
    </div>
    <p aria-live="polite">{{ results.length }} conteúdo(s) encontrado(s).</p>
    <div class="portal-grid">
      <a v-for="item in results" :key="item.href" class="portal-card catalog-card" :href="withBase(item.href)">
        <span class="portal-eyebrow">{{ item.category }}</span><h3>{{ item.title }}</h3><p>{{ item.description }}</p>
        <div class="badge-row"><span class="portal-badge">{{ item.level }}</span><span v-for="itemTag in item.tags.slice(0, 2)" :key="itemTag" class="portal-badge">{{ itemTag }}</span></div>
      </a>
    </div>
  </section>
</template>
