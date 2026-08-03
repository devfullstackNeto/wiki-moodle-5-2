<script setup lang="ts">defineProps<{ title?: string }>()</script>
<template><section><h2>{{ title || 'Passo a passo' }}</h2><ol class="step-list"><slot /></ol></section></template>
