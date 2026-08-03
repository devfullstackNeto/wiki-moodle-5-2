<script setup lang="ts">defineProps<{ term: string }>()</script>
<template><section class="portal-card"><h2 :id="term.toLowerCase().replace(/[^a-z0-9]+/g, '-')">{{ term }}</h2><slot /></section></template>
