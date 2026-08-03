<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
const route = useRoute()

function updateMainLandmark() {
  const content = document.querySelector('#VPContent')
  if (!content) return
  if (content.querySelector('main')) content.removeAttribute('role')
  else content.setAttribute('role', 'main')
}
onMounted(updateMainLandmark)
watch(() => route.path, async () => { await nextTick(); updateMainLandmark() })
</script>

<template>
  <Layout>
    <template #layout-top>
      <SidebarToggle />
    </template>
    <template #doc-before>
      <Breadcrumbs />
      <PageHero
        v-if="frontmatter.title"
        :title="frontmatter.title"
        :description="frontmatter.description"
        :category="frontmatter.category"
        :audience="frontmatter.audience || []"
        :level="frontmatter.level"
        :reading-time="frontmatter.readingTime"
        :version="frontmatter.moodleVersion"
        :tags="frontmatter.tags || []"
      />
    </template>
    <template #doc-after>
      <PageFeedback />
      <LastUpdated :date="frontmatter.lastReviewed" :status="frontmatter.status" />
    </template>
    <template #layout-bottom>
      <InstitutionalFooter />
    </template>
  </Layout>
</template>
