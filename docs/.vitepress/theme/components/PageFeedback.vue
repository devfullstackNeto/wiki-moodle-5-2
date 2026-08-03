<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vitepress'
const route = useRoute()
const choice = ref('')
function vote(value: string) { choice.value = value; if (typeof localStorage !== 'undefined') localStorage.setItem(`portal-feedback:${route.path}`, value) }
</script>
<template><section class="feedback-panel" aria-live="polite"><strong>Esta página foi útil?</strong><div v-if="!choice" class="feedback-actions"><button type="button" @click="vote('sim')">Sim</button><button type="button" @click="vote('nao')">Não</button></div><p v-else>Obrigado. A resposta foi salva apenas neste dispositivo.</p></section></template>
