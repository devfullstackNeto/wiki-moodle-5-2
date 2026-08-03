<script setup lang="ts">defineProps<{ title?: string }>()</script>
<template><section><h2>{{ title || 'Boas práticas' }}</h2><div class="portal-card callout tip"><slot /></div></section></template>
