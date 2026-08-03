<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref } from 'vue'
const props = defineProps<{ src: string; alt: string; caption?: string }>()
const open = ref(false)
const closeButton = ref<HTMLButtonElement>()
let trigger: HTMLElement | null = null
async function show(event: Event) { trigger = event.currentTarget as HTMLElement; open.value = true; await nextTick(); closeButton.value?.focus() }
function close() { open.value = false; trigger?.focus() }
function onKey(event: KeyboardEvent) { if (event.key === 'Escape' && open.value) close() }
if (typeof window !== 'undefined') window.addEventListener('keydown', onKey)
onBeforeUnmount(() => { if (typeof window !== 'undefined') window.removeEventListener('keydown', onKey) })
</script>
<template>
  <button class="image-button" type="button" :aria-label="`Ampliar imagem: ${caption || alt}`" @click="show"><img :src="src" :alt="alt" loading="lazy" /></button>
  <Teleport to="body"><div v-if="open" class="image-modal" role="dialog" aria-modal="true" :aria-label="caption || alt" @click.self="close"><button ref="closeButton" class="image-modal__close" type="button" @click="close">Fechar</button><img :src="props.src" :alt="props.alt" /></div></Teleport>
</template>
