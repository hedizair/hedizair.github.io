<script setup lang="ts">
import TechChip from '@/components/ui/TechChip.vue';
import type { Tech } from '@/types';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
const props = defineProps<{
    tags: Tech[]
    activeTag: string | null
}>()

const emit = defineEmits<{
    'select-tag': [name: string | null]
}>()

</script>

<template>
    <div class="projects-filters">
        <TechChip :name="t('projects.all')" size="sm" hoverable :active="props.activeTag === null"
            @click="emit('select-tag', null)" />

        <TechChip v-for="tag in props.tags" :key="tag.name" :name="tag.name" :logo="tag.logo" size="sm" hoverable
            :active="props.activeTag === tag.name" @click="emit('select-tag', tag.name)" />
    </div>
</template>

<style scoped>
.projects-filters {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-5);
}
</style>