<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import { withBase } from 'vitepress'

type VideoProvider = 'youtube' | 'vimeo' | 'mp4' | 'institutional'

const props = defineProps<{
  title: string
  description?: string
  duration?: string
  audience?: string
  provider?: VideoProvider
  platform?: string
  status?: 'publicado' | 'em-producao'
  url?: string
  thumbnail?: string
  transcript?: string
  topics?: string[]
  objective?: string
  script?: string[]
  next?: string
  nextHref?: string
}>()

const consent = ref(false)
const sectionId = `video-${useId().replaceAll(':', '')}`

const resolvedProvider = computed<VideoProvider>(() => {
  const explicit = props.provider || props.platform?.toLowerCase()
  if (explicit === 'youtube' || explicit === 'vimeo' || explicit === 'mp4' || explicit === 'institutional') return explicit
  if (!props.url) return 'institutional'
  try {
    const parsed = new URL(props.url, 'https://portal.local')
    if (parsed.hostname === 'youtu.be' || parsed.hostname.endsWith('youtube.com')) return 'youtube'
    if (parsed.hostname.endsWith('vimeo.com')) return 'vimeo'
    if (/\.mp4(?:$|\?)/i.test(parsed.pathname + parsed.search)) return 'mp4'
  } catch { /* A URL inválida será tratada em playableUrl. */ }
  return 'institutional'
})

const playableUrl = computed(() => {
  if (!props.url) return ''
  try {
    const parsed = new URL(props.url, 'https://portal.local')
    if (!['http:', 'https:'].includes(parsed.protocol) && !props.url.startsWith('/')) return ''

    if (resolvedProvider.value === 'youtube') {
      const validHost = parsed.hostname === 'youtu.be' || parsed.hostname === 'youtube.com' || parsed.hostname.endsWith('.youtube.com')
      if (!validHost) return ''
      const id = parsed.hostname === 'youtu.be'
        ? parsed.pathname.split('/').filter(Boolean)[0]
        : parsed.searchParams.get('v') || parsed.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/)?.[1]
      return id ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}` : ''
    }

    if (resolvedProvider.value === 'vimeo') {
      if (!(parsed.hostname === 'vimeo.com' || parsed.hostname.endsWith('.vimeo.com'))) return ''
      const id = parsed.pathname.split('/').filter(Boolean).findLast((part) => /^\d+$/.test(part))
      return id ? `https://player.vimeo.com/video/${id}` : ''
    }

    if (parsed.hostname === 'portal.local') {
      const relative = props.url.startsWith('/') ? props.url : `/${props.url}`
      return withBase(relative)
    }
    return parsed.toString()
  } catch { return '' }
})

const isPublished = computed(() => Boolean(playableUrl.value))
const usesIframe = computed(() => ['youtube', 'vimeo', 'institutional'].includes(resolvedProvider.value))
const plannedTopics = computed(() => props.script?.length ? props.script : props.topics || [])

</script>

<template>
  <section class="video-section" :aria-labelledby="sectionId">
    <div class="video-section__header">
      <div class="video-section__play" aria-hidden="true">▶</div>
      <div>
        <span class="section-kicker">Aprenda assistindo</span>
        <h2 :id="sectionId">{{ title }}</h2>
        <p v-if="description">{{ description }}</p>
      </div>
    </div>

    <div class="video-section__meta">
      <span v-if="duration" class="portal-badge"><strong>Duração:</strong>&nbsp;{{ duration }}</span>
      <span v-if="audience" class="portal-badge"><strong>Público:</strong>&nbsp;{{ audience }}</span>
      <span class="portal-badge video-status">{{ isPublished ? 'Vídeo publicado' : 'Vídeo em produção' }}</span>
    </div>

    <div v-if="!isPublished" class="video-production" role="status">
      <strong>Vídeo em produção</strong>
      <p><b>Objetivo:</b> {{ objective || description || 'Demonstrar este procedimento no ambiente institucional.' }}</p>
      <p v-if="url">A URL informada não é válida para o provedor selecionado. Revise a configuração antes de publicar.</p>
    </div>

    <div v-else-if="usesIframe && !consent" class="video-consent">
      <img v-if="thumbnail" :src="thumbnail" alt="" loading="lazy">
      <div class="video-consent__content">
        <strong>Vídeo pronto para carregar</strong>
        <p>Ao carregar, o provedor {{ resolvedProvider }} poderá receber dados técnicos da sua conexão.</p>
        <button type="button" @click="consent = true">Carregar vídeo</button>
      </div>
    </div>

    <div v-else-if="usesIframe" class="video-frame">
      <iframe
        :src="playableUrl"
        :title="title"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
      />
    </div>

    <video
      v-else
      class="video-player"
      controls
      preload="metadata"
      :poster="thumbnail"
      :aria-label="title"
    >
      <source :src="playableUrl" type="video/mp4">
      Seu navegador não reproduz este vídeo. <a :href="playableUrl">Baixe o arquivo MP4</a>.
    </video>

    <div v-if="plannedTopics.length" class="video-section__topics">
      <h3>{{ script?.length ? 'Roteiro resumido' : 'Tópicos abordados' }}</h3>
      <ol v-if="script?.length"><li v-for="item in script" :key="item">{{ item }}</li></ol>
      <ul v-else><li v-for="topic in topics" :key="topic">{{ topic }}</li></ul>
    </div>

    <details v-if="transcript" class="video-transcript">
      <summary>Transcrição do vídeo</summary>
      <p>{{ transcript }}</p>
    </details>
    <p v-if="next"><strong>Próxima leitura:</strong> <a v-if="nextHref" :href="nextHref">{{ next }}</a><span v-else>{{ next }}</span></p>
    <slot />
  </section>
</template>
