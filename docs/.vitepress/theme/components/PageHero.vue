<script setup lang="ts">
defineProps<{ title: string; description?: string; category?: string; audience?: string[]; level?: string; readingTime?: string; version?: string; tags?: string[] }>()
</script>
<template>
  <header class="portal-hero">
    <div v-if="category" class="portal-eyebrow">{{ category }}</div>
    <h1>{{ title }}</h1>
    <p v-if="description" class="lead">{{ description }}</p>
    <div class="portal-meta" aria-label="Metadados da página">
      <AudienceBadge v-for="item in audience" :key="item" :label="item" />
      <DifficultyBadge v-if="level" :level="level" />
      <span v-if="readingTime" class="portal-badge">Leitura: {{ readingTime }}</span>
      <MoodleVersionBadge v-if="version" :version="version" />
    </div>
    <div v-if="tags?.length" class="badge-row" aria-label="Etiquetas" style="margin-top:.75rem">
      <span v-for="tag in tags" :key="tag" class="portal-badge">{{ tag }}</span>
    </div>
  </header>
</template>
