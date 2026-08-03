<script setup lang="ts">defineProps<{ title?: string }>()</script>
<template><section class="objective-card"><span class="objective-card__mark" aria-hidden="true">◎</span><div><span class="section-kicker">Resultado de aprendizagem</span><h2 v-if="title">{{ title }}</h2><strong v-else>Objetivo desta página</strong><div><slot /></div></div></section></template>
