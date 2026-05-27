<script setup lang="ts">
import SkillCategory from '@/components/home/SkillCategory.vue';
import { skillCategories } from '@/data/skills';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<template>
    <section>
        <div class="container">
            <h2 class="section-title">{{ t('home.skillsTitle1') }} <span>{{ t('home.skillsTitle2') }}</span></h2>
            <p class="section-subtitle">{{ t('home.classifiedByCategory') }}</p>

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