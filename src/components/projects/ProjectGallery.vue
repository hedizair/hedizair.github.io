<script setup lang="ts">
const props = defineProps<{
  images: string[]
}>()

const emit = defineEmits<{
  open: [index: number]
}>()
console.log('ProjectGallery props:', props.images)
</script>

<template>
  <div class="gallery">
    <button
      v-for="(src, index) in images"
      :key="src"
      class="gallery__thumb"
      @click="emit('open', index)"
    >
      <img :src="src" :alt="`Image ${index + 1}`" class="gallery__img" />
      <!-- Overlay au hover -->
      <span class="gallery__overlay">
        <span class="gallery__zoom-icon">⤢</span>
      </span>
    </button>
  </div>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: var(--space-3);
}

.gallery__thumb {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
  cursor: pointer;
  padding: 0;
  background: none;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}

.gallery__thumb:hover {
  border-color: var(--color-primary-light);
  box-shadow: var(--shadow-md);
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 300ms ease;
}

.gallery__thumb:hover .gallery__img {
  transform: scale(1.04);
}

/* Overlay foncé au hover */
.gallery__overlay {
  position: absolute;
  inset: 0;
  background: rgba(30, 41, 59, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 200ms ease;
}

.gallery__thumb:hover .gallery__overlay {
  opacity: 1;
}

.gallery__zoom-icon {
  font-size: 1.5rem;
  color: #fff;
  line-height: 1;
}
</style>