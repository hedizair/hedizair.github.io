<script setup lang="ts">
import { abouts } from '@/data/abouts'

</script>

<template>
    <section class="hero">
        <div class="container hero__inner">

            <div class="hero__content">
                <p class="hero__hello">
                    <span class="hero__hello-dot"></span>
                    Disponible pour de nouvelles opportunités
                </p>

                <h1 class="hero__name">
                    Hedi<br />
                    <span class="hero__name-accent">Zair</span>
                </h1>

                <p class="hero__role">Développeur Full Stack</p>

                <div class="hero__stats">
                    <div v-for="stat in abouts.stats" :key="stat.label" class="hero__stat">
                        <span class="hero__stat-value">{{ stat.value }}</span>
                        <span class="hero__stat-label">{{ stat.label }}</span>
                    </div>
                </div>

                <div class="hero__actions">
                    <RouterLink to="/projects" class="btn btn-outline">Voir mes projets</RouterLink>
                    <a href="https://github.com/hedizair" target="_blank" rel="noopener" class="btn btn-outline">
                        GitHub
                    </a>
                </div>
            </div>

            <div class="hero__visual">
                <div class="hero__visual-card card">
                    <div class="hero__visual-line"><span class="k">const</span><span class="v"> dev</span><span
                            class="o"> = </span><span class="s">{</span></div>
                    <div class="hero__visual-line i"><span class="k">name</span><span class="o">: </span><span
                            class="s">'{{ abouts.firstName }} {{ abouts.lastName }}'</span><span class="o">,</span></div>
                    <div class="hero__visual-line i"><span class="k">role</span><span class="o">: </span><span
                            class="s">'Full Stack'</span><span class="o">,</span></div>
                    <div class="hero__visual-line i"><span class="k">xp</span><span class="o">: </span><span
                            class="n">{{ abouts.yearOfExperience }}</span><span class="o">,</span></div>
                    <div class="hero__visual-line i"><span class="k">open</span><span class="o">: </span><span
                            class="b">true</span></div>
                    <div class="hero__visual-line"><span class="s">}</span></div>
                    <span class="hero__visual-cursor"></span>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.hero {
    padding-top: calc(var(--nav-height) + var(--space-12));
    padding-bottom: var(--space-16);
    background: linear-gradient(160deg, #f0f4f8 60%, #e0ecf8 100%);
}

.hero__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: var(--space-12);
}

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

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.3;
    }
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

.hero__visual {
    display: flex;
    justify-content: center;
}

.hero__visual-card {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    padding: var(--space-6) var(--space-8);
    min-width: 260px;
    box-shadow: var(--shadow-lg);
}

.hero__visual-line {
    line-height: 1.9;
}

.i {
    padding-left: var(--space-6);
}

.k {
    color: #0550ae;
}

.v {
    color: #953800;
}

.o {
    color: var(--color-text-muted);
}

.s {
    color: #116329;
}

.n {
    color: #8250df;
}

.b {
    color: #cf222e;
}

.hero__visual-cursor {
    display: inline-block;
    width: 2px;
    height: 1.1em;
    background: var(--color-primary);
    vertical-align: text-bottom;
    animation: cursor-blink 1s step-end infinite;
    margin-left: 2px;
}

@keyframes cursor-blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

@media (max-width: 768px) {
    .hero__inner {
        grid-template-columns: 1fr;
    }

    .hero__visual {
        display: none;
    }

    .hero__stats {
        gap: var(--space-6);
    }
}
</style>