import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

// createWebHashHistory utilise le # dans l'URL (ex: hedizair.github.io/#/projects)
// C'est nécessaire pour GitHub Pages qui ne supporte pas le routing HTML5 (createWebHistory)
// Avec createWebHistory, un F5 sur /projects renverrait une 404 côté serveur
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      // Lazy loading : le fichier n'est chargé que quand on navigue vers cette route
      // Améliore le temps de chargement initial
      component: () => import('@/views/ProjectsView.vue'),
    },
  ],
  // Remonte en haut de page à chaque changement de route
  scrollBehavior: () => ({ top: 0 }),
})

export default router