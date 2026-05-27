<script setup lang="ts">
import { abouts } from '@/data/abouts'
import type { ExternalLink } from '@/types'
import IconGitHub from '@/components/icons/IconGitHub.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
import { type Component } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Map id → composant icône Vue
// On ajoute ici chaque nouvelle icône sans toucher aux data
const iconMap: Record<ExternalLink['id'], Component> = {
  github: IconGitHub,
  linkedin: IconLinkedIn,
}

// Map id → classe CSS pour la couleur de fond de l'icône
const iconClassMap: Record<ExternalLink['id'], string> = {
  github: '',
  linkedin: 'icon--linkedin',
}
</script>

<template>
  <section>
    <div class="container about__grid">

      <div class="about__text">
        <h2 class="section-title">{{ t('home.aboutTitle') }} <span>{{ t('home.aboutTitle2') }}</span></h2>
        <p class="about__para">{{ t(abouts.presentation1i18nKey) }}</p>
        <p class="about__para">{{ t(abouts.presentation2i18nKey) }}</p>
      </div>

      <div class="about__links">
        <a v-for="link in abouts.externalLinks" :key="link.id" :href="link.href" target="_blank" rel="noopener"
          class="about__link-card card">
          <span class="about__link-icon" :class="iconClassMap[link.id]">

            <component :is="iconMap[link.id]" />
          </span>
          <div>
            <p class="about__link-label">{{ link.label }}</p>
            <p class="about__link-sub">{{ link.sub }}</p>
          </div>
          <span class="about__link-arrow">↗</span>
        </a>

        <RouterLink to="/projects" class="about__link-card card">
          <span class="about__link-icon icon--projects">⚡</span>
          <div>
            <p class="about__link-label">{{ t('home.projects') }}</p>
            <p class="about__link-sub">{{ t('home.showAllProjects') }}</p>
          </div>
          <span class="about__link-arrow">→</span>
        </RouterLink>

      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: start;
}

.about__para {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-top: var(--space-4);
}

.about__links {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
}

.about__link-card {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  color: var(--color-text);
  text-decoration: none;
  transition: all var(--transition-base);
}

.about__link-card:hover {
  border-color: var(--color-primary-light);
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.about__link-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--color-surface-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-lg);
  flex-shrink: 0;
  color: var(--color-text);
}

.icon--linkedin {
  background: #e8f0fb;
  color: #0077b5;
}

.icon--projects {
  background: #fef9e7;
}

.about__link-label {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
}

.about__link-sub {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  margin-top: 2px;
}

.about__link-arrow {
  margin-left: auto;
  color: var(--color-text-light);
  transition: color var(--transition-fast);
}

.about__link-card:hover .about__link-arrow {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr;
  }
}
</style>