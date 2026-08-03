<script setup lang="ts">defineProps<{ items?: Array<{ question: string; answer: string }> }>()</script>
<template><section><h2>Perguntas frequentes</h2><details v-for="item in items" :key="item.question" class="faq-item"><summary>{{ item.question }}</summary><p>{{ item.answer }}</p></details><slot /></section></template>
