<script setup lang="ts">
import { computed, ref } from 'vue'
const props = defineProps<{
  title: string
  description?: string
  duration?: string
  audience?: string
  platform?: string
  url?: string
  thumbnail?: string
  topics?: string[]
  next?: string
  nextHref?: string
  status?: 'publicado' | 'em-producao'
  objective?: string
  script?: string[]
  transcript?: string
}>()
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
  <section class="video-section" aria-labelledby="video-section-title">
    <div class="video-section__header">
      <div class="video-section__play" aria-hidden="true">▶</div>
      <div>
        <span class="section-kicker">Aprenda assistindo</span>
        <h2 id="video-section-title">{{ title }}</h2>
        <p v-if="description">{{ description }}</p>
      </div>
    </div>
    <div class="video-section__meta">
      <span v-if="duration" class="portal-badge"><strong>Duração:</strong>&nbsp;{{ duration }}</span>
      <span v-if="audience" class="portal-badge"><strong>Público:</strong>&nbsp;{{ audience }}</span>
      <span class="portal-badge video-status">{{ url || status === 'publicado' ? 'Vídeo publicado' : 'Vídeo em produção' }}</span>
    </div>
    <div v-if="!url" class="video-production">
      <strong>Vídeo em produção</strong>
      <p v-if="objective"><b>Objetivo:</b> {{ objective }}</p>
      <p v-else>O roteiro está planejado e a gravação será realizada após a validação da interface institucional.</p>
    </div>
    <div v-else-if="!consent" class="video-placeholder"><div><strong>Conteúdo externo não carregado</strong><p>Ative o vídeo somente se concordar com a política do provedor {{ platform || 'informado' }}.</p><button type="button" @click="consent = true">Carregar vídeo</button></div></div>
    <div v-else class="video-frame"><iframe v-if="embedUrl" :src="embedUrl" :title="title" loading="lazy" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" /></div>
    <div v-if="topics?.length || script?.length" class="video-section__topics">
      <h3>{{ script?.length ? 'Roteiro resumido' : 'Tópicos abordados' }}</h3>
      <ol v-if="script?.length"><li v-for="item in script" :key="item">{{ item }}</li></ol>
      <ul v-else><li v-for="topic in topics" :key="topic">{{ topic }}</li></ul>
    </div>
    <details v-if="transcript" class="video-transcript"><summary>Transcrição do vídeo</summary><p>{{ transcript }}</p></details>
    <p v-if="next"><strong>Próxima leitura:</strong> <a v-if="nextHref" :href="nextHref">{{ next }}</a><span v-else>{{ next }}</span></p>
    <slot />
  </section>
</template>
<style scoped>.video-frame{position:relative;aspect-ratio:16/9}.video-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}.video-placeholder button{min-height:44px;padding:.55rem 1rem;border:0;border-radius:8px;background:var(--vp-c-brand-1);color:#fff;font-weight:700}</style>
