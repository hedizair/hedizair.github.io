<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>

<template>
    <section>
        <div class="container">

            <h1 class="projects-hero__title">
                {{ t('projects.my') }} <span class="projects-hero__title-accent">{{ t('projects.projects') }}</span>
            </h1>

            <p class="projects-hero__subtitle">
                {{ t('projects.subtitle') }}
            </p>

        </div>
    </section>
</template>

<style scoped>

.projects-hero__label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    color: var(--color-primary);
    font-weight: 500;
    font-family: var(--font-mono);
    margin-bottom: var(--space-4);
    background: rgba(59, 130, 196, 0.08);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    border: 1px solid rgba(59, 130, 196, 0.2);
}

/* Même point vert que le hero de la home — cohérence visuelle */
.projects-hero__label-dot {
    width: 7px;
    height: 7px;
    background: #4ade80;
    border-radius: 50%;
    animation: blink 2s ease-in-out infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.3;
    }
}

.projects-hero__title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: var(--color-text);
    margin-bottom: var(--space-4);
}

.projects-hero__title-accent {
    color: var(--color-primary);
}

.projects-hero__subtitle {
    font-size: var(--text-base);
    color: var(--color-text-muted);
    max-width: 800px;
}
</style>