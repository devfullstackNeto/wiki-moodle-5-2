<script setup lang="ts">
import { computed, ref } from 'vue'
const props = defineProps<{ title: string; description?: string; duration?: string; audience?: string; platform?: string; url?: string; thumbnail?: string; topics?: string[]; next?: string }>()
const consent = ref(false)
const embedUrl = computed(() => {
  if (!props.url) return ''
  try {
    const parsed = new URL(props.url)
    if (parsed.hostname === 'youtu.be') return `https://www.youtube-nocookie.com/embed/${parsed.pathname.slice(1)}`
    if (parsed.hostname.endsWith('youtube.com')) return `https://www.youtube-nocookie.com/embed/${parsed.searchParams.get('v') || ''}`
    if (parsed.hostname.endsWith('vimeo.com')) return `https://player.vimeo.com/video/${parsed.pathname.split('/').filter(Boolean).pop()}`
    return props.url
  } catch { return '' }
})
</script>
<template>
  <section class="portal-card">
    <h2>{{ title }}</h2><p v-if="description">{{ description }}</p>
    <p v-if="duration || audience"><span v-if="duration"><strong>Duração:</strong> {{ duration }}</span><span v-if="audience"> · <strong>Público:</strong> {{ audience }}</span></p>
    <VideoPlaceholder v-if="!url" :title="title" />
    <div v-else-if="!consent" class="video-placeholder"><div><strong>Conteúdo externo não carregado</strong><p>Ative o vídeo somente se concordar com a política do provedor {{ platform || 'informado' }}.</p><button type="button" @click="consent = true">Carregar vídeo</button></div></div>
    <div v-else class="video-frame"><iframe v-if="embedUrl" :src="embedUrl" :title="title" loading="lazy" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" /></div>
    <ul v-if="topics?.length"><li v-for="topic in topics" :key="topic">{{ topic }}</li></ul>
    <p v-if="next"><strong>Próxima leitura:</strong> {{ next }}</p><slot /></section>
</template>
<style scoped>.video-frame{position:relative;aspect-ratio:16/9}.video-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}.video-placeholder button{min-height:44px;padding:.55rem 1rem;border:0;border-radius:8px;background:var(--vp-c-brand-1);color:#fff;font-weight:700}</style>
