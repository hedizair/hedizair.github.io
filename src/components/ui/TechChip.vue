<script setup lang="ts">
type ChipSize = 'sm' | 'md' | 'lg'

defineProps<{
  name: string
  logo?: string
  size?: ChipSize
  hoverable?: boolean
  active?: boolean
}>()

const emit = defineEmits<{ click: [] }>()
</script>

<template>
  <component
    :is="hoverable ? 'button' : 'div'"
    class="tech-chip"
    :class="[
      `tech-chip--${size ?? 'md'}`,
      { 'tech-chip--hoverable': hoverable },
      { 'tech-chip--active': active },
    ]"
    @click="hoverable ? emit('click') : undefined"
  >
    <img v-if="logo" :src="logo" :alt="name" class="tech-chip__logo" />
    <span class="tech-chip__name">{{ name }}</span>
  </component>
</template>

<style scoped>
.tech-chip {
  /* Reset complet des styles natifs button/div */
  appearance: none;
  -webkit-appearance: none;
  box-sizing: border-box;
  margin: 0;
  text-decoration: none;

  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  border-radius: var(--radius-full);
  background-color: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  font-weight: 500;
  font-size: inherit;
  font-family: inherit;
  color: var(--color-text);
  white-space: nowrap;
  cursor: default;
  line-height: 1;
}

.tech-chip--hoverable {
  cursor: pointer;
  transition:
    background-color 200ms ease,
    border-color 200ms ease,
    color 200ms ease,
    transform 200ms ease,
    box-shadow 200ms ease;
}

.tech-chip--hoverable:hover {
  border-color: var(--color-primary-light);
  background-color: #e8f0fb;
  color: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(59, 130, 196, 0.15);
}

.tech-chip--active {
  background-color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
  color: #fff !important;
}

.tech-chip--active.tech-chip--hoverable:hover {
  background-color: var(--color-primary-dark) !important;
  border-color: var(--color-primary-dark) !important;
  color: #fff !important;
}

/* Tailles */
.tech-chip--sm {
  padding: 3px var(--space-2);
  font-size: var(--text-xs);
}
.tech-chip--sm .tech-chip__logo { width: 12px; height: 12px; }

.tech-chip--md {
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
}
.tech-chip--md .tech-chip__logo { width: 16px; height: 16px; }

.tech-chip--lg {
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
}
.tech-chip--lg .tech-chip__logo { width: 22px; height: 22px; }

.tech-chip__logo { object-fit: contain; flex-shrink: 0; }
.tech-chip__name { line-height: 1; }
</style>