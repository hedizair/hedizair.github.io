<script setup lang="ts">
import ExpandableCard from '@/components/ui/ExpandableCard.vue';
import TechChip from '@/components/ui/TechChip.vue';
import type { SkillCategory, SkillLevel } from '@/types';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const props = defineProps<{ category: SkillCategory }>()

const leveli18nKeys: Record<SkillLevel, string> = {
    1: 'home.familiar',
    2: 'home.proficient',
    3: 'home.expert',
}

const skillsByLevel = computed<Record<SkillLevel, typeof props.category.skills>>(() => {
    const groups: Record<SkillLevel, typeof props.category.skills> = { 1: [], 2: [], 3: [] }
    for (const skill of props.category.skills) {
        groups[skill.level].push(skill)
    }
    return groups
})
</script>

<template>
    <ExpandableCard>

        <template #header>
            <div class="skill-header">
                <span class="skill-header__icon">{{ category.icon }}</span>
                <span class="skill-header__label">{{ t(category.labelI18nKey) }}</span>
                <span class="skill-header__count">{{ category.skills.length }}</span>
            </div>
        </template>

        <template #content>
            <div class="skill-levels">
                <template v-for="lvl in [3, 2, 1] as SkillLevel[]" :key="lvl">
                    <div v-if="skillsByLevel[lvl].length" class="skill-level-group">

                        <div class="skill-level-group__label">
                            <span class="skill-level-dot" :data-level="lvl"></span>
                            {{ t(leveli18nKeys[lvl]) }}
                        </div>

                        <div class="skill-grid">
                            <TechChip v-for="skill in skillsByLevel[lvl]" :key="skill.name" :name="skill.name"
                                :logo="skill.logo" />
                        </div>

                    </div>
                </template>
            </div>
        </template>

    </ExpandableCard>
</template>

<style scoped>
.skill-header {
    display: flex;
    align-items: center;
    gap: var(--space-3);
}

.skill-header__icon {
    font-size: var(--text-xl);
}

.skill-header__label {
    font-size: var(--text-base);
    font-weight: 600;
    color: var(--color-text);
}

.skill-header__count {
    font-size: var(--text-xs);
    font-weight: 500;
    color: var(--color-text-light);
    background-color: var(--color-surface-alt);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    padding: 2px var(--space-2);
}

.skill-levels {
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
}

.skill-level-group__label {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-xs);
    font-weight: 600;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: var(--space-3);
}

.skill-level-dot {
    width: 8px;
    height: 8px;
    border-radius: var(--radius-full);
}

.skill-level-dot[data-level="1"] {
    background-color: var(--color-level-1);
    border: 1px solid var(--color-border);
}

.skill-level-dot[data-level="2"] {
    background-color: var(--color-level-2);
}

.skill-level-dot[data-level="3"] {
    background-color: var(--color-level-3);
}

.skill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
}
</style>