<script setup lang="ts">
// Année courante calculée dynamiquement
const year = new Date().getFullYear()
</script>

<template>
    <footer class="footer">
        <div class="container footer__inner">
            <span class="footer__copy">© {{ year }} Hedi Zair</span>
            <div class="footer__links">
                <a href="https://github.com/hedizair" target="_blank" rel="noopener" class="footer__link">
                    GitHub
                </a>
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener" class="footer__link">
                    LinkedIn
                </a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    border-top: 1px solid var(--color-border);
    padding: var(--space-6) 0;
    margin-top: auto;
}

.footer__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-4);
}

.footer__copy {
    font-size: var(--text-sm);
    color: var(--color-text-light);
    font-family: var(--font-mono);
}

.footer__links {
    display: flex;
    gap: var(--space-6);
}

.footer__link {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--color-text-muted);
    transition: color var(--transition-fast);
}

.footer__link:hover {
    color: var(--color-primary);
}
</style>