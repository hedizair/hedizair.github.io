<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  images: string[]
  startIndex: number
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const currentIndex = ref(props.startIndex)

// Resync l'index quand on ouvre la lightbox sur une image différente
watch(() => props.startIndex, (val) => {
  currentIndex.value = val
})

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

// Navigation clavier
const handleKey = (e: KeyboardEvent) => {
  if (!props.open) return
  if (e.key === 'ArrowLeft')  prev()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'Escape')     emit('close')
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))
</script>

<template>
  <!-- Teleport envoie le modal directement dans <body> — évite les problèmes de z-index et overflow -->
  <Teleport to="body">
    <Transition name="lightbox">
      <div v-if="open" class="lightbox" @click.self="emit('close')">

        <!-- Bouton fermer -->
        <button class="lightbox__close" @click="emit('close')">✕</button>

        <!-- Image principale -->
        <div class="lightbox__stage">
          <Transition name="slide" mode="out-in">
            <img
              :key="currentIndex"
              :src="images[currentIndex]"
              :alt="`Image ${currentIndex + 1}`"
              class="lightbox__img"
            />
          </Transition>
        </div>

        <!-- Navigation — cachée si une seule image -->
        <template v-if="images.length > 1">
          <button class="lightbox__nav lightbox__nav--prev" @click="prev">‹</button>
          <button class="lightbox__nav lightbox__nav--next" @click="next">›</button>

          <!-- Indicateur de position -->
          <div class="lightbox__dots">
            <button
              v-for="(_, i) in images"
              :key="i"
              class="lightbox__dot"
              :class="{ 'lightbox__dot--active': i === currentIndex }"
              @click="currentIndex = i"
            />
          </div>
        </template>

      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(10, 15, 25, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-8);
}

.lightbox__close {
  position: absolute;
  top: var(--space-6);
  right: var(--space-6);
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: var(--text-base);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 200ms ease;
}

.lightbox__close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox__stage {
  max-width: min(90vw, 1200px);
  max-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox__img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--radius-md);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
}

/* Boutons précédent / suivant */
.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 200ms ease;
}

.lightbox__nav:hover {
  background: rgba(255, 255, 255, 0.25);
}

.lightbox__nav--prev { left: var(--space-6); }
.lightbox__nav--next { right: var(--space-6); }

/* Indicateurs de position */
.lightbox__dots {
  position: absolute;
  bottom: var(--space-6);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--space-2);
}

.lightbox__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.3);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 200ms ease, transform 200ms ease;
}

.lightbox__dot--active {
  background: #fff;
  transform: scale(1.3);
}

/* Transitions */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 250ms ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 200ms ease, transform 200ms ease;
}
.slide-enter-from { opacity: 0; transform: translateX(20px); }
.slide-leave-to   { opacity: 0; transform: translateX(-20px); }
</style>