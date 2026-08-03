import { computed } from 'vue'
import { useData } from 'vitepress'

export function useEditorialMode() {
  const { theme } = useData()
  return computed(() => theme.value.editorialMode === true)
}
