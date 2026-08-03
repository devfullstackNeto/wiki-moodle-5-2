<script setup lang="ts">defineProps<{ title?: string }>()</script>
<template><aside class="validation-notice"><strong>{{ title || 'Validação institucional necessária' }}</strong><div><slot /></div></aside></template>
