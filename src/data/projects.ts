import type { Project } from '@/types'
import { techs } from '@/data/techs'

export const projects: Project[] = [
    {
        id: 1,
        title: 'Portfolio',
        description: 'Ce portfolio, développé en Vue 3 + TypeScript. Hébergé sur GitHub Pages avec déploiement automatique via GitHub Actions.',
        tags: [techs.vue, techs.typescript, techs.vite, techs.githubactions],
        githubUrl: 'https://github.com/hedizair/hedizair.github.io',
        projectUrl: 'https://hedizair.github.io',
    },
    {
        id: 2,
        title: 'Skquiz',
        description: '...',
        tags: [techs.vue, techs.typescript, techs.vite, techs.nodejs, techs.react, techs.express],
        githubUrl: 'https://github.com/hedizair/skquiz-discord-activity',
        projectUrl: 'https://hedizair.github.io',
    },
    {
        id: 3,
        title: 'Bot Discord DR-MUNDO',
        description: '...',
        tags: [techs.typescript, techs.nodejs, techs.docker, techs.githubactions],
        githubUrl: 'https://github.com/hedizair/bot-discord-drmundo',
        projectUrl: 'https://top.gg/bot/964279841925001276',
    },
    {
        id: 4,
        title: 'Skquiz API',
        description: '...',
        tags: [techs.go, techs.postgresql, techs.githubactions, techs.docker, techs.githubactions],
        githubUrl: 'https://github.com/hedizair/skquiz-api',
        projectUrl: 'https://hedizair.github.io',
    },
    {
        id: 5,
        title: 'Skaarplay Auth API',
        description: '...',
        tags: [techs.go, techs.postgresql, techs.githubactions, techs.docker, techs.githubactions],
        githubUrl: 'https://github.com/hedizair/skaarplay-auth-api',
        projectUrl: 'https://hedizair.github.io',
    },
]