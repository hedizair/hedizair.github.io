<script setup lang="ts">
import { abouts } from '@/data/abouts';
import HomeHeroCodeVisual from './HomeHeroCodeVisual.vue';
import HomeHeroContent from './HomeHeroContent.vue';

</script>

<template>
    <section>
        <div class="container hero__inner">
            <HomeHeroContent :abouts="abouts" />
            <HomeHeroCodeVisual :abouts="abouts" />
        </div>
    </section>
</template>

<style scoped>
.hero__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: var(--space-12);
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
}
</style>