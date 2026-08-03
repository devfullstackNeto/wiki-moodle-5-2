<script setup lang="ts">
function openSearch() { const button = document.querySelector<HTMLButtonElement>('.VPNavBarSearch button, .DocSearch-Button'); button?.click() }
</script>
<template>
  <section class="home-search">
    <span class="home-search__eyebrow">Central de aprendizagem Moodle 5.2</span>
    <h2>O que você precisa fazer hoje?</h2>
    <p>Encontre instruções completas por atividade, recurso, perfil ou objetivo pedagógico.</p>
    <button type="button" aria-label="Abrir busca local do portal" @click="openSearch">
      <span>Buscar por “criar tarefa”, “grupos”, “notas”...</span><kbd>Ctrl K</kbd>
    </button>
    <div class="home-search__suggestions" aria-label="Sugestões de busca">
      <a href="./atividades/tarefa.html">Criar uma tarefa</a>
      <a href="./atividades/questionario.html">Montar um questionário</a>
      <a href="./avaliacao/livro-de-notas.html">Conferir notas</a>
    </div>
  </section>
</template>
