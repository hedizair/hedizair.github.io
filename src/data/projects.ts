import type { Project } from '@/types'
import { techs } from '@/data/techs'

export const projects: Project[] = [
    {
        id: 1,
        title: 'Portfolio',
        descriptioni18nKey: 'projects.desc-project-portfolio',
        tags: [techs.vue, techs.typescript, techs.vite, techs.githubactions],
        githubUrl: ['https://github.com/hedizair/hedizair.github.io'],
        projectUrl: 'https://hedizair.github.io',
        state: 'prod'
    },
    {
        id: 2,
        title: 'Skquiz',
        descriptioni18nKey: 'projects.desc-project-skquiz',
        tags: [techs.react, techs.typescript, techs.vite, techs.nodejs, techs.express, techs.docker],
        githubUrl: ['https://github.com/hedizair/skquiz-discord-activity'],
        projectUrl: 'https://sk-quiz.com/#/',
        state: 'beta'
    },
    {
        id: 3,
        title: 'Bot Discord DR-MUNDO',
        descriptioni18nKey: 'projects.desc-project-drmundo',
        tags: [techs.typescript, techs.nodejs, techs.docker, techs.githubactions],
        githubUrl: ['https://github.com/hedizair/bot-discord-drmundo'],
        projectUrl: 'https://top.gg/bot/964279841925001276',
        state: 'prod'
    },
    {
        id: 4,
        title: 'Skquiz API',
        descriptioni18nKey: 'projects.desc-project-skquizapi',
        tags: [techs.go, techs.postgresql, techs.githubactions, techs.docker, techs.nginx],
        githubUrl: ['https://github.com/hedizair/skquiz-api'],
        projectUrl: 'https://hedizair.github.io',
        state: 'prod'
    },
    {
        id: 5,
        title: 'Skaarplay Auth API',
        descriptioni18nKey: 'projects.desc-project-skaarplayauthapi',
        tags: [techs.go, techs.postgresql, techs.githubactions, techs.docker, techs.nginx],
        githubUrl: ['https://github.com/hedizair/skaarplay-auth-api'],
        projectUrl: 'https://hedizair.github.io',
        state: 'prod'
    },
    {
        id: 6,
        title: 'Metinetflix',
        descriptioni18nKey: 'projects.desc-project-metinetflix',
        tags: [techs.symfony,techs.php, techs.javascript],
        githubUrl: ['https://github.com/hedizair/metinetflix'],
        state: 'stopped'
    },
    {
        id: 7,
        title: 'Médiation 3D',
        descriptioni18nKey: 'projects.desc-project-mediation3d',
        tags: [techs.vue, techs.typescript, techs.python],
        githubUrl: ['https://github.com/Mediation3D/Client-Mediation','https://github.com/Mediation3D/Server-Mediation'],
        projectUrl: 'https://hedizair.github.io',
        state: 'stopped'
    },
]