<script setup lang="ts">defineProps<{ label?: string }>()</script>
<template><section :aria-label="label || 'Galeria de capturas'" class="portal-grid"><slot /></section></template>
