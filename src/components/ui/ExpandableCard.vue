<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    defaultOpen?: boolean
    noHover?: boolean
}>()

const isOpen = ref(props.defaultOpen ?? false)
const toggle = () => { isOpen.value = !isOpen.value }

defineExpose({ isOpen, toggle })
</script>

<template>
    <div class="expandable-card card"
        :class="{ 'expandable-card--open': isOpen, 'expandable-card--no-hover': noHover }">
        <button class="expandable-card__trigger" @click="toggle">
            <div class="expandable-card__header">
                <slot name="header" />
            </div>
            <span class="expandable-card__chevron" :class="{ 'expandable-card__chevron--open': isOpen }">
                ›
            </span>
        </button>

        <!--
      On remplace v-show par une classe CSS --open sur un wrapper grid.
      grid-template-rows: 0fr → 1fr s'anime parfaitement contrairement à height: auto.
      L'enfant direct doit avoir min-height: 0 pour que la grille puisse le écraser à 0.
    -->
        <div class="expandable-card__body" :class="{ 'expandable-card__body--open': isOpen }">
            <div class="expandable-card__body-inner">
                <slot name="content" />
            </div>
        </div>

    </div>
</template>

<style scoped>
.expandable-card {
    padding: 0;
    overflow: hidden;
    cursor: pointer;
    /* Transition douce sur ombre et bordure au hover */
    transition:
        box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
        border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.expandable-card:not(.expandable-card--no-hover):hover {
    border-color: var(--color-primary-light);
    box-shadow: var(--shadow-md);
}

.expandable-card--open {
    box-shadow: var(--shadow-md);
    border-color: var(--color-primary-light);
}

.expandable-card__trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-5) var(--space-6);
    text-align: left;
    background: none;
    cursor: pointer;
    /* Fondu très léger sur le fond au hover */
    transition: background-color 200ms ease;
}

.expandable-card__trigger:hover {
    background-color: var(--color-surface-alt);
}

.expandable-card__header {
    flex: 1;
    min-width: 0;
}

.expandable-card__chevron {
    flex-shrink: 0;
    font-size: var(--text-xl);
    color: var(--color-text-muted);
    /* Rotation fluide du chevron */
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    line-height: 1;
    margin-left: var(--space-4);
}

.expandable-card__chevron--open {
    transform: rotate(90deg);
}

/*
  Technique grid pour animer height: auto.
  display: grid + grid-template-rows: 0fr/1fr permet
  d'animer l'ouverture sans connaître la hauteur à l'avance.
*/
.expandable-card__body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.expandable-card__body--open {
    grid-template-rows: 1fr;
}

/*
  min-height: 0 est obligatoire — sans ça le contenu
  ne peut pas être écrasé à hauteur 0 par la grille.
*/
.expandable-card__body-inner {
    min-height: 0;
    overflow: hidden;
    padding: 0 var(--space-6);
    /* Fondu du contenu en même temps que l'ouverture */
    opacity: 0;
    transition:
        opacity 200ms ease,
        padding 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.expandable-card__body--open .expandable-card__body-inner {
    padding: var(--space-5) var(--space-6) var(--space-6);
    border-top: 1px solid var(--color-border);
    opacity: 1;
    /* Léger délai sur l'opacité — le contenu apparaît une fois ouvert */
    transition:
        opacity 200ms ease 100ms,
        padding 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>