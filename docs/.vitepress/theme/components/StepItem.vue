<script setup lang="ts">defineProps<{ title: string; result?: string }>()</script>
<template><li class="step-item"><h3>{{ title }}</h3><slot /><p v-if="result"><strong>Resultado esperado:</strong> {{ result }}</p></li></template>
