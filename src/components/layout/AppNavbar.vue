<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

// useRoute() = hook Vue Router pour accéder à la route active
// Permet de styler le lien actif différemment
const route = useRoute()

// Détecte si on a scrollé pour ajouter une ombre à la navbar
const scrolled = ref(false)

const handleScroll = () => {
    scrolled.value = window.scrollY > 10
}

// onMounted / onUnmounted = équivalent useEffect(() => {}, []) en React
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
    <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
        <div class="container navbar__inner">

            <!-- Logo / nom -->
            <RouterLink to="/" class="navbar__logo">
                <span class="navbar__logo-bracket">&lt;</span>
                HZ
                <span class="navbar__logo-bracket">/&gt;</span>
            </RouterLink>

            <!-- Navigation -->
            <nav class="navbar__nav">
                <!--
          RouterLink = composant Vue Router, équivalent de <Link> en React Router
          :class avec objet = applique la classe si la condition est vraie
        -->
                <RouterLink to="/" class="navbar__link" :class="{ 'navbar__link--active': route.name === 'home' }">
                    Accueil
                </RouterLink>
                <RouterLink to="/projects" class="navbar__link"
                    :class="{ 'navbar__link--active': route.name === 'projects' }">
                    Projets
                </RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: var(--nav-height);
    background-color: rgba(240, 244, 248, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid transparent;
    transition: border-color var(--transition-base), box-shadow var(--transition-base);
}

/* Classe ajoutée dynamiquement au scroll */
.navbar--scrolled {
    border-bottom-color: var(--color-border);
    box-shadow: var(--shadow-sm);
}

.navbar__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

.navbar__logo {
    font-family: var(--font-mono);
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
}

.navbar__logo-bracket {
    color: var(--color-primary);
}

.navbar__nav {
    display: flex;
    align-items: center;
    gap: var(--space-6);
}

.navbar__link {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--color-text-muted);
    padding: var(--space-2) 0;
    position: relative;
    transition: color var(--transition-fast);
}

/* Trait soulignant animé */
.navbar__link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    border-radius: var(--radius-full);
    transition: width var(--transition-base);
}

.navbar__link:hover,
.navbar__link--active {
    color: var(--color-primary);
}

.navbar__link--active::after,
.navbar__link:hover::after {
    width: 100%;
}
</style>