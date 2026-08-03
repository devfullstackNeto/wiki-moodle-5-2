<script setup lang="ts">defineProps<{ title?: string }>()</script>
<template><section class="portal-card"><h2>{{ title || 'Antes de começar' }}</h2><slot /></section></template>
