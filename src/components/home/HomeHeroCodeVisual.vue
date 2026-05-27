<script setup lang="ts">

import type { Abouts } from '@/types'

const props = defineProps<{ abouts: Abouts }>()
</script>

<template>
    <div class="hero__visual">
        <div class="hero__visual-card card">
            <div class="hero__visual-line"><span class="k">const</span><span class="v"> dev</span><span class="o"> =
                </span><span class="s">{</span></div>
            <div class="hero__visual-line i"><span class="k">name</span><span class="o">: </span><span class="s">'
                    {{ props.abouts.firstName }} {{ props.abouts.lastName }}'</span><span class="o">,</span></div>
            <div class="hero__visual-line i"><span class="k">role</span><span class="o">: </span><span class="s">'Full
                    Stack'</span><span class="o">,</span></div>
            <div class="hero__visual-line i"><span class="k">xp</span><span class="o">: </span><span class="n">
                {{props.abouts.yearOfExperience }}</span><span class="o">,</span></div>
            <div class="hero__visual-line i"><span class="k">open</span><span class="o">: </span><span
                    class="b">true</span></div>
            <div class="hero__visual-line"><span class="s">}</span></div>
            <span class="hero__visual-cursor"></span>
        </div>
    </div>
</template>

<style scoped>
.hero__visual {
    display: flex;
    justify-content: center;
}

.hero__visual-card {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    padding: var(--space-6) var(--space-8);
    min-width: 260px;
    box-shadow: var(--shadow-lg);
}

.hero__visual-line {
    line-height: 1.9;
}

.i {
    padding-left: var(--space-6);
}

.k {
    color: #0550ae;
}

.v {
    color: #953800;
}

.o {
    color: var(--color-text-muted);
}

.s {
    color: #116329;
}

.n {
    color: #8250df;
}

.b {
    color: #cf222e;
}

@media (max-width: 768px) {
    .hero__visual {
        display: none;
    }

}

</style>