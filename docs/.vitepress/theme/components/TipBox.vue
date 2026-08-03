<script setup lang="ts">defineProps<{ title?: string }>()</script>
<template><aside class="portal-card callout tip"><strong>{{ title || 'Dica' }}</strong><div><slot /></div></aside></template>
