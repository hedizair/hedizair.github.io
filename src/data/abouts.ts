import type { Abouts } from '@/types'

export const abouts: Abouts = {
    firstName: 'Hedi',
    lastName: 'Zair',
    jobTitle: 'Développeur Full Stack',
    presentation1: "Développeur full stack avec 3+ ans d'expérience, je conçois des applications web robustes de bout en bout — de la base de données à l'interface utilisateur.",
    presentation2: "Passé par du React, je me replonge dans Vue 3 pour ses patterns élégants et sa Composition API. J'apprécie les codebases propres, bien typées, et les architectures qui tiennent dans le temps.",
    stats: [
        { value: '4', label: 'ans d\'expérience' },
        { value: '10+', label: 'projets réalisés' },
        { value: '8+', label: 'technos maîtrisées' },
    ],
    yearOfExperience: 3,
    externalLinks: [
        { id: 'github', href: 'https://github.com/hedizair', label: 'GitHub', sub: 'hedizair' },
        { id: 'linkedin', href: 'https://linkedin.com/in/', label: 'LinkedIn', sub: 'Hedi Zair' },
    ],
}