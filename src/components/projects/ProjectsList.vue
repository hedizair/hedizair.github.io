<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Tech } from '@/types'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import TechChip from '@/components/ui/TechChip.vue'

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
  <section class="section">
    <div class="container">

      <div class="projects-filters">
        <!--
          On utilise TechChip pour "Tous" aussi — sans logo, hoverable, active si null.
          Comme ça tous les chips du filtre sont identiques visuellement.
        -->
        <TechChip
          name="Tous"
          size="sm"
          hoverable
          :active="activeTag === null"
          @click="selectTag(null)"
        />

        <TechChip
          v-for="tag in allTags"
          :key="tag.name"
          :name="tag.name"
          :logo="tag.logo"
          size="sm"
          hoverable
          :active="activeTag === tag.name"
          @click="selectTag(tag.name)"
        />
      </div>

      <p class="projects-count">
        <span class="projects-count__num">{{ filteredProjects.length }}</span>
        projet{{ filteredProjects.length > 1 ? 's' : '' }}
        <span v-if="activeTag"> · {{ activeTag }}</span>
      </p>

      <div class="projects__list">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>

      <div v-if="filteredProjects.length === 0" class="projects__empty">
        <span class="projects__empty-icon">🔍</span>
        <p>Aucun projet avec la techno <strong>{{ activeTag }}</strong>.</p>
        <button class="btn btn-outline" @click="selectTag(null)">
          Voir tous les projets
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
.projects-filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
}

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