<script setup lang="ts">defineProps<{ title?: string }>()</script>
<template><section class="portal-card"><h2 v-if="title">{{ title }}</h2><strong v-else>Objetivo</strong><div><slot /></div></section></template>
