<script setup lang="ts">
import { useEditorialMode } from '../composables/useEditorialMode'

defineProps<{ title?: string }>()
const editorialMode = useEditorialMode()
</script>
<template><aside v-if="editorialMode" class="validation-notice"><strong>{{ title || 'Validação institucional necessária' }}</strong><div><slot /></div></aside></template>
