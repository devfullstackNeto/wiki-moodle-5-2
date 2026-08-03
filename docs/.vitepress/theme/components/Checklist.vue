<script setup lang="ts">defineProps<{ title?: string; items?: string[] }>()</script>
<template><section><h2>{{ title || 'Checklist' }}</h2><ul class="checklist"><li v-for="item in items" :key="item">{{ item }}</li><slot /></ul></section></template>
