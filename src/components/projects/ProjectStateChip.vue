<script setup lang="ts">
import type { ProjectState } from '@/types'

defineProps<{
  state: ProjectState
}>()
</script>

<template>
  <div
    class="state-chip"
    :class="`state-chip--${state}`"
  >
    <span class="state-chip__dot"></span>

    <span class="state-chip__label">
      {{ state }}
    </span>
  </div>
</template>

<style scoped>
.state-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.2rem 0.75rem;

  border-radius: 999px;
  border: 1px solid var(--color-border);

  background: rgba(255, 255, 255, 0.04);

  color: var(--color-text);

  font-size: 0.8rem;
  font-weight: 600;
}

.state-chip__dot {
  position: relative;

  width: 10px;
  height: 10px;

  border-radius: 50%;

  animation: pulse 1.5s infinite ease-in-out;
}

.state-chip__dot::after {
  content: '';

  position: absolute;
  inset: 0;

  border-radius: 50%;

  animation: ping 1.5s infinite ease-out;
}

/* ===== STATES ===== */

.state-chip--prod .state-chip__dot,
.state-chip--prod .state-chip__dot::after {
  background: #22c55e;
}

.state-chip--dev .state-chip__dot,
.state-chip--dev .state-chip__dot::after {
  background: #f59e0b;
}

.state-chip--stopped .state-chip__dot,
.state-chip--stopped .state-chip__dot::after {
  background: #ef4444;
}

.state-chip--beta .state-chip__dot,
.state-chip--beta .state-chip__dot::after {
  background: #b916be;
}

/* ===== ANIMATIONS ===== */

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.6;
  }
}

@keyframes ping {
  0% {
    transform: scale(1);
    opacity: 0.45;
  }

  80%,
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
}
</style>