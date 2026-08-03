<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const STORAGE_KEY = 'portal-moodle:sidebar-collapsed'
const route = useRoute()
const collapsed = ref(false)
const hasSidebar = ref(false)

function applyState() {
  document.documentElement.classList.toggle('sidebar-collapsed', collapsed.value)
}

function refreshSidebar() {
  hasSidebar.value = Boolean(document.querySelector('.VPContent.has-sidebar'))
}

function toggleSidebar() {
  collapsed.value = !collapsed.value
  applyState()
  localStorage.setItem(STORAGE_KEY, String(collapsed.value))
}

onMounted(() => {
  collapsed.value = localStorage.getItem(STORAGE_KEY) === 'true'
  applyState()
  refreshSidebar()
})

watch(() => route.path, async () => {
  await nextTick()
  refreshSidebar()
})
</script>

<template>
  <button
    v-if="hasSidebar"
    class="sidebar-toggle"
    type="button"
    aria-controls="VPSidebarNav"
    :aria-expanded="!collapsed"
    :aria-label="collapsed ? 'Expandir menu lateral' : 'Recolher menu lateral'"
    :title="collapsed ? 'Expandir menu lateral' : 'Recolher menu lateral'"
    @click="toggleSidebar"
  >
    <span aria-hidden="true">{{ collapsed ? '›' : '‹' }}</span>
  </button>
</template>
