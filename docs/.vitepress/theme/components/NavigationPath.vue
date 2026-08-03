<script setup lang="ts">defineProps<{ path: string; confirmed?: boolean }>()</script>
<template><div class="portal-card"><strong>Caminho de navegação</strong><p>{{ path }}</p><ValidationNotice v-if="!confirmed">Confirme este caminho no tema e no pacote de idioma do ambiente institucional.</ValidationNotice></div></template>
