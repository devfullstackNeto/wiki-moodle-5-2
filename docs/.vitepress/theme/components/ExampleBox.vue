<script setup lang="ts">defineProps<{ title?: string }>()</script>
<template><section class="portal-card"><strong>{{ title || 'Exemplo aplicado' }}</strong><div><slot /></div></section></template>
