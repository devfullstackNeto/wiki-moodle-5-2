<script setup lang="ts">
function openSearch() { const button = document.querySelector<HTMLButtonElement>('.VPNavBarSearch button, .DocSearch-Button'); button?.click() }
</script>
<template><section class="home-search"><h2>O que você precisa fazer no Moodle?</h2><p>Busque por uma tarefa, atividade, recurso, dúvida ou termo.</p><button type="button" aria-label="Abrir busca local do portal" @click="openSearch">Buscar no portal <kbd>Ctrl K</kbd></button></section></template>
