<script setup lang="ts">defineProps<{ title?: string }>()</script>
<template><section><h2>{{ title || 'Evite' }}</h2><div class="portal-card callout important"><slot /></div></section></template>
