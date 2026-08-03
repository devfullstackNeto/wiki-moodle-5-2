<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, withBase } from 'vitepress'
import { catalog, type CatalogItem } from '../../data/catalog'

const props = defineProps<{
  type?: string
  category?: string
  audience?: string
  objective?: string
  tag?: string
  relatedArea?: string
  title?: string
}>()
const route = useRoute()
const query = ref('')
const tag = ref('')
const level = ref('')
const audience = ref('')
const objective = ref('')
const category = ref('')

const routeAreas: Record<string, string> = {
  '/comunicacao/': 'comunicacao',
  '/avaliacao/': 'avaliacao',
  '/organizacao-do-curso/': 'organizacao',
  '/acompanhamento/': 'acompanhamento',
  '/recursos/': 'recursos',
  '/atividades/': 'atividades',
  '/participantes/': 'participantes',
  '/relatorios/': 'relatorios',
  '/conteudo-e-multimidia/': 'conteudo-multimidia',
  '/solucao-de-problemas/': 'solucao-de-problemas'
}

const activeArea = computed(() => props.relatedArea || Object.entries(routeAreas).find(([prefix]) => route.path.startsWith(prefix))?.[1] || '')
const pool = computed(() => catalog.filter((item) =>
  (!props.type || item.type === props.type) &&
  (!props.category || item.category === props.category) &&
  (!props.audience || item.audience.includes(props.audience)) &&
  (!props.objective || item.objectives.includes(props.objective)) &&
  (!props.tag || item.tags.includes(props.tag)) &&
  (!activeArea.value || item.relatedAreas.includes(activeArea.value))))
const tags = computed(() => [...new Set(pool.value.flatMap((item) => item.tags))].sort())
const audiences = computed(() => [...new Set(pool.value.flatMap((item) => item.audience))].sort())
const objectives = computed(() => [...new Set(pool.value.flatMap((item) => item.objectives))].sort())
const categories = computed(() => [...new Set(pool.value.map((item) => item.category))].sort())
const results = computed<CatalogItem[]>(() => {
  const term = query.value.trim().toLocaleLowerCase('pt-BR')
  return pool.value.filter((item) =>
    (!term || `${item.title} ${item.description} ${item.tags.join(' ')}`.toLocaleLowerCase('pt-BR').includes(term)) &&
    (!tag.value || item.tags.includes(tag.value)) &&
    (!level.value || item.level === level.value) &&
    (!audience.value || item.audience.includes(audience.value)) &&
    (!objective.value || item.objectives.includes(objective.value)) &&
    (!category.value || item.category === category.value))
})
const groupedResults = computed(() => Object.entries(results.value.reduce<Record<string, CatalogItem[]>>((groups, item) => {
  ;(groups[item.subcategory] ||= []).push(item)
  return groups
}, {})))
</script>
<template>
  <section class="content-catalog" :data-catalog-area="activeArea || undefined">
    <h2 v-if="title">{{ title }}</h2>
    <div class="catalog-controls">
      <label>Buscar neste catálogo <input v-model="query" type="search" placeholder="Título, finalidade ou etiqueta" /></label>
      <label>Filtrar por tema <select v-model="tag"><option value="">Todos</option><option v-for="item in tags" :key="item" :value="item">{{ item }}</option></select></label>
      <label v-if="categories.length > 1">Categoria <select v-model="category"><option value="">Todas</option><option v-for="item in categories" :key="item" :value="item">{{ item }}</option></select></label>
      <label v-if="objectives.length > 1">Objetivo <select v-model="objective"><option value="">Todos</option><option v-for="item in objectives" :key="item" :value="item">{{ item }}</option></select></label>
      <label v-if="audiences.length > 1">Público <select v-model="audience"><option value="">Todos</option><option v-for="item in audiences" :key="item" :value="item">{{ item }}</option></select></label>
      <label>Nível <select v-model="level"><option value="">Todos</option><option>Básico</option><option>Intermediário</option><option>Avançado</option></select></label>
    </div>
    <p aria-live="polite">{{ results.length }} conteúdo(s) encontrado(s).</p>
    <section v-for="([group, items]) in groupedResults" :key="group" class="catalog-group">
      <h3>{{ group }}</h3>
      <div class="portal-grid">
        <a v-for="item in items" :key="item.href" class="portal-card catalog-card" :class="{ 'catalog-card--featured': item.featured }" :href="withBase(item.href)">
          <span class="portal-eyebrow">{{ item.category }}</span><h4>{{ item.title }}</h4><p>{{ item.description }}</p>
          <div class="badge-row"><span class="portal-badge">{{ item.level }}</span><span v-for="itemTag in item.tags.slice(0, 2)" :key="itemTag" class="portal-badge">{{ itemTag }}</span></div>
        </a>
      </div>
    </section>
  </section>
</template>
