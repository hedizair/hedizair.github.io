import type { Abouts } from '@/types'

export const abouts: Abouts = {
    firstName: 'Hédi',
    lastName: 'Zaïr',
    jobTitle: 'Développeur Full Stack',
    presentation1: "Développeur full stack avec 3+ ans d'expérience, avec une dominante backend, je conçois des APIs robustes, des pipelines ETL/ELT, des automatisations de processus métier et des interfaces web.",
    presentation2: "J'apprécie les architectures propres et bien typées — que ce soit pour du scheduling de tâches, de la gestion de flux de données, des services backend ou du développement web.", stats: [
        { value: '3+', label: 'ans d\'expérience pro' },
        { value: '7+', label: 'projets personnels réalisés' },
        { value: '10+', label: 'technos maîtrisées' },
    ],
    yearOfExperience: 3,
    externalLinks: [
        { id: 'github', href: 'https://github.com/hedizair', label: 'GitHub', sub: 'hedizair' },
        { id: 'linkedin', href: 'https://linkedin.com/in/', label: 'LinkedIn', sub: 'Hedi Zair' },
    ],
}