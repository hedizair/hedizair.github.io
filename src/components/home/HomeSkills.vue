<script setup lang="ts">
import SkillCategory from '@/components/home/SkillCategory.vue';
import { skillCategories } from '@/data/skills';
</script>

<template>
    <section class="section">
        <div class="container">
            <h2 class="section-title">Compétences <span>techniques</span></h2>
            <p class="section-subtitle">Classées par catégorie et niveau de maîtrise</p>

            <div class="skills__grid">
                <SkillCategory v-for="(category) in skillCategories" :key="category.id" :category="category" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.skills__grid {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
}
</style>