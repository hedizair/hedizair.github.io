// stores/projects.ts
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { projects } from '@/data/projects'
import type { Tech } from '@/types'

export const useProjectsStore = defineStore('projects', () => {

    const activeTag = ref<string | null>(null)

    const filteredProjects = computed(() => {
        if (!activeTag.value) return projects
        return projects.filter(p => p.tags.some(t => t.name === activeTag.value))
    })

    const selectTag = (tag: string | null) => {
        activeTag.value = activeTag.value === tag ? null : tag
    }

    const allTags = computed<Tech[]>(() => {
        const seen = new Set<string>()
        const result: Tech[] = []
        for (const tech of projects.flatMap(p => p.tags)) {
            if (!seen.has(tech.name)) {
                seen.add(tech.name)
                result.push(tech)
            }
        }
        return result.sort((a, b) => a.name.localeCompare(b.name))
    })

    return { activeTag, filteredProjects, selectTag, allTags }

})

