<script setup lang="ts">
import ExpandableCard from '@/components/ui/ExpandableCard.vue';
import TechChip from '@/components/ui/TechChip.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue'

import type { Project } from '@/types';

defineProps<{ project: Project }>()
</script>

<template>
  <ExpandableCard>

    <template #header>
      <div class="project-header">
        <h3 class="project-header__title">{{ project.title }}</h3>
        <div class="project-header__chips">
          <TechChip v-for="tag in project.tags" :key="tag.name" :name="tag.name" :logo="tag.logo" />
        </div>
      </div>
    </template>

    <template #content>
      <div class="project-detail">

        <p class="project-detail__description">{{ project.description }}</p>

        <div class="project-detail__links">
          <a :href="project.githubUrl" target="_blank" rel="noopener" class="btn btn-outline">
            <IconGitHub />
            GitHub
          </a>
          <a v-if="project.projectUrl" :href="project.projectUrl" target="_blank" rel="noopener"
            class="btn btn-outline">
            Voir le projet ↗
          </a>
        </div>

        <div v-if="project.videoUrl" class="project-detail__video">
          <video :src="project.videoUrl" controls preload="metadata" class="project-detail__video-player" />
        </div>

      </div>
    </template>

  </ExpandableCard>
</template>

<style scoped>
.project-header__title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-3);
}

.project-header__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.project-detail {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.project-detail__description {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
}

.project-detail__links {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.project-detail__video-player {
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}
</style>