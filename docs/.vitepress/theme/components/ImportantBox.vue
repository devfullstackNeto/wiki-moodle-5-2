<script setup lang="ts">defineProps<{ title?: string }>()</script>
<template><aside class="portal-card callout important"><strong>{{ title || 'Importante' }}</strong><div><slot /></div></aside></template>
