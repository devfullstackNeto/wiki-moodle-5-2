<script setup lang="ts">defineProps<{ date?: string; status?: string }>()</script>
<template><footer class="portal-meta"><span v-if="date">Revisado em {{ date }}</span><span v-if="status" class="portal-badge">Situação: {{ status }}</span></footer></template>
