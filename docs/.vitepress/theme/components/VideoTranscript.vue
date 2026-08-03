<script setup lang="ts">defineProps<{ title?: string }>()</script>
<template><details class="portal-card"><summary><strong>{{ title || 'Transcrição' }}</strong></summary><slot /></details></template>
