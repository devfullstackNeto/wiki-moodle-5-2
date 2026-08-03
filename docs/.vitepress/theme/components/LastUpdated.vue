<script setup lang="ts">
import { computed } from 'vue'
import { useEditorialMode } from '../composables/useEditorialMode'

const props = defineProps<{ date?: string; status?: string }>()
const editorialMode = useEditorialMode()

const formattedDate = computed(() => {
  if (!props.date) return ''
  const normalized = /^\d{4}-\d{2}-\d{2}$/.test(props.date) ? `${props.date}T12:00:00Z` : props.date
  const parsed = new Date(normalized)
  if (Number.isNaN(parsed.getTime())) return ''
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long', timeZone: 'UTC' }).format(parsed)
})

const formattedStatus = computed(() => {
  if (!props.status) return ''
  const label = props.status.replaceAll('-', ' ')
  return label.charAt(0).toLocaleUpperCase('pt-BR') + label.slice(1)
})
</script>

<template>
  <footer v-if="formattedDate || (editorialMode && formattedStatus)" class="portal-meta last-updated">
    <span v-if="formattedDate">Atualizado em {{ formattedDate }}</span>
    <span v-if="editorialMode && formattedStatus" class="portal-badge">Situação editorial: {{ formattedStatus }}</span>
  </footer>
</template>
