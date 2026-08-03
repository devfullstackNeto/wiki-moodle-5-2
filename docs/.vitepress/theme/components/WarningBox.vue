<script setup lang="ts">defineProps<{ title?: string }>()</script>
<template><aside class="portal-card callout warning"><strong>{{ title || 'Atenção' }}</strong><div><slot /></div></aside></template>
