<script setup lang="ts">
import type { Abouts } from '@/types'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const props = defineProps<{ abouts: Abouts }>()

</script>

<template>
    <div class="hero__content">
        <p class="hero__hello">
            <span class="hero__hello-dot"></span>
            {{ t('home.availableForNewOpportunities') }}
        </p>

        <h1 class="hero__name">
            {{ props.abouts.firstName }} <br />
            <span class="hero__name-accent">{{ props.abouts.lastName }}</span>
        </h1>

        <p class="hero__role">{{ t('home.FullStackDeveloper') }}</p>

        <div class="hero__stats">
            <div v-for="stat in props.abouts.stats" :key="stat.labeli18nKey" class="hero__stat">
                <span class="hero__stat-value">{{ stat.value }}</span>
                <span class="hero__stat-label">{{ t(stat.labeli18nKey) }}</span>
            </div>
        </div>

        <div class="hero__actions">
            <RouterLink to="/projects" class="btn btn-outline">{{ t('home.showMyProjects') }}</RouterLink>
            <a :href="props.abouts.externalLinks.find((link) => link.id === 'github')?.href || '#'" target="_blank"
                rel="noopener" class="btn btn-outline">
                GitHub
            </a>
        </div>
    </div>
</template>

<style scoped>
.hero__hello {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    color: var(--color-primary);
    font-weight: 500;
    font-family: var(--font-mono);
    margin-bottom: var(--space-5);
    background: rgba(59, 130, 196, 0.08);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    border: 1px solid rgba(59, 130, 196, 0.2);
}

.hero__hello-dot {
    width: 7px;
    height: 7px;
    background: #4ade80;
    border-radius: 50%;
    animation: blink 2s ease-in-out infinite;
}

.hero__name {
    font-size: clamp(3rem, 7vw, 5rem);
    font-weight: 700;
    line-height: 1.0;
    letter-spacing: -0.03em;
    color: var(--color-text);
    margin-bottom: var(--space-3);
}

.hero__name-accent {
    color: var(--color-primary);
}

.hero__role {
    font-size: var(--text-lg);
    color: var(--color-text-muted);
    margin-bottom: var(--space-8);
}

.hero__stats {
    display: flex;
    gap: var(--space-8);
    margin-bottom: var(--space-8);
    padding-bottom: var(--space-8);
    border-bottom: 1px solid var(--color-border);
}

.hero__stat {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
}

.hero__stat-value {
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--color-primary);
    font-family: var(--font-mono);
    line-height: 1;
}

.hero__stat-label {
    font-size: var(--text-xs);
    color: var(--color-text-muted);
    white-space: nowrap;
}

.hero__actions {
    display: flex;
    gap: var(--space-4);
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    .hero__stats {
        gap: var(--space-6);
    }
}
</style>