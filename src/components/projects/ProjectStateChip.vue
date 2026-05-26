<script setup lang="ts">
import type { ProjectState } from '@/types';

defineProps<{
  state: ProjectState
}>()

const emit = defineEmits<{ click: [] }>()
</script>

<template>
  <div
    class="state-chip"
  >
    <span>test</span>
    <span >{{ state }}</span>
  </div>
</template>

<style scoped>
.state-chip {
  border: 1px solid var(--color-border);

  /* display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  border-radius: var(--radius-full);
  background-color: var(--color-surface-alt);
  font-weight: 500;
  font-size: inherit;
  font-family: inherit;
  color: var(--color-text);
  white-space: nowrap;
  cursor: default;
  line-height: 1; */
}

</style>