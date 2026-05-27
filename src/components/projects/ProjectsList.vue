<script setup lang="ts">
import ProjectListCard from '@/components/projects/ProjectListCard.vue'
import ProjectsListFilters from '@/components/projects/ProjectsListFilters.vue'
import { projects } from '@/data/projects'
import type { Tech } from '@/types'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
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

const activeTag = ref<string | null>(null)

const filteredProjects = computed(() => {
  if (!activeTag.value) return projects
  return projects.filter(p => p.tags.some(t => t.name === activeTag.value))
})

const selectTag = (name: string | null) => {
  activeTag.value = activeTag.value === name ? null : name
}

</script>

<template>
  <section>
    <div class="container">

      <ProjectsListFilters :tags="allTags" :activeTag="activeTag" @select-tag="selectTag" />

      <p class="projects-count">
        <span class="projects-count__num">{{ filteredProjects.length }}</span>
        {{ t('projects.project') }}{{ filteredProjects.length > 1 ? 's' : '' }}
        <span v-if="activeTag"> · {{ activeTag }}</span>
      </p>

      <div class="projects__list">
        <ProjectListCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>

      <div v-if="filteredProjects.length === 0" class="projects__empty">
        <span class="projects__empty-icon">🔍</span>
        <p>{{ t('projects.noProjectsWithTech') }} <strong>{{ activeTag }}</strong>.</p>
        <button class="btn btn-outline" @click="selectTag(null)">
          {{ t('projects.showAllProjects') }}
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>


.projects-count {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
  font-family: var(--font-mono);
}

.projects-count__num {
  font-weight: 700;
  color: var(--color-primary);
}

.projects__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.projects__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-16) 0;
  text-align: center;
  color: var(--color-text-muted);
}

.projects__empty-icon { font-size: 2.5rem; }
</style>