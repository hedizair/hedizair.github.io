import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
  ],

  build: {
    outDir: 'dist',      // (défaut)
    sourcemap: false,    // désactive les sourcemaps en prod (bundle plus léger)
    minify: 'esbuild',   // (défaut)
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
