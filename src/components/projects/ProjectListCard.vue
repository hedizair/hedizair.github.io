<script setup lang="ts">
import { ref } from 'vue'
import ExpandableCard from '@/components/ui/ExpandableCard.vue'
import TechChip from '@/components/ui/TechChip.vue'
import IconGitHub from '@/components/icons/IconGitHub.vue'
import ProjectStateChip from './ProjectStateChip.vue'
import ProjectGallery from './ProjectGallery.vue'
import ProjectLightbox from './ProjectLightbox.vue'
import type { Project } from '@/types'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
defineProps<{ project: Project }>()

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const openLightbox = (index: number) => {
  lightboxIndex.value = index
  lightboxOpen.value = true
}
</script>

<template>
  <ExpandableCard>

    <template #header>
      <div class="project-header">
        <div class="project-header__title-section">
          <h3 class="project-header__title">{{ project.title }}</h3>
          <ProjectStateChip :state="project.state" />
        </div>
        <div class="project-header__chips">
          <TechChip v-for="tag in project.tags" :key="tag.name" :name="tag.name" :logo="tag.logo" />
        </div>
      </div>
    </template>

    <template #content>
      <div class="project-detail">

        <p class="project-detail__description">{{ t(project.descriptioni18nKey) }}</p>

        <!-- Galerie — uniquement si des images sont définies -->
        <ProjectGallery v-if="project.images?.length" :images="project.images" @open="openLightbox" />

        <div class="project-detail__links">

          <a v-for="url in project.githubUrl" :key="url" :href="url" target="_blank" rel="noopener"
            class="btn btn-outline">
            <IconGitHub />
            GitHub
          </a>

          <a v-if="project.projectUrl" :href="project.projectUrl" target="_blank" rel="noopener"
            class="btn btn-outline">
            {{ t('projects.showProject') }} ↗
          </a>
        </div>

        <div v-if="project.videoUrl" class="project-detail__video">
          <video :src="project.videoUrl" controls preload="metadata" class="project-detail__video-player" />
        </div>

      </div>
    </template>

  </ExpandableCard>

  <!-- Lightbox — rendu via Teleport dans <body>, hors du flux de la card -->
  <ProjectLightbox v-if="project.images?.length" :images="project.images" :start-index="lightboxIndex"
    :open="lightboxOpen" @close="lightboxOpen = false" />
</template>

<style scoped>
.project-header__title-section {
  margin-bottom: var(--space-3);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.project-header__title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text);
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