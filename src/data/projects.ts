import type { Project } from '@/types'
import { techs } from '@/data/techs'

export const projects: Project[] = [
    {
        id: 1,
        title: 'Portfolio',
        description: 'Mon portfolio personnel, conçu pour présenter mes projets et compétences. Développé en Vue 3 + TypeScript, hébergé sur GitHub Pages avec un pipeline de déploiement automatique via GitHub Actions.',
        tags: [techs.vue, techs.typescript, techs.vite, techs.githubactions],
        githubUrl: 'https://github.com/hedizair/hedizair.github.io',
        projectUrl: 'https://hedizair.github.io',
        state: 'prod'
    },
    {
        id: 2,
        title: 'Skquiz',
        description: 'Activité Discord multijoueur de quiz, lancée directement dans un salon vocal via le SDK Activities de Discord. Frontend en React, serveur en Node.js, avec une architecture Event-Driven : le serveur alimente une pile d\'événements que le client poll en temps réel pour synchroniser les sessions de jeu. Gestion multi-session, plusieurs types de questions. Déploiement Docker en cours.',
        tags: [techs.react, techs.typescript, techs.vite, techs.nodejs, techs.express, techs.docker],
        githubUrl: 'https://github.com/hedizair/skquiz-discord-activity',
        state: 'dev'
    },
    {
        id: 3,
        title: 'Bot Discord DR-MUNDO',
        description: 'Bot Discord en Node.js + TypeScript permettant de consulter un profil Riot Games, l\'historique de parties et les statistiques League of Legends directement depuis Discord. Inclut un automate de notification des patch notes basé sur du scraping web. Disponible en français et en anglais. Déployé sur VPS OVH via Docker.',
        tags: [techs.typescript, techs.nodejs, techs.docker, techs.githubactions],
        githubUrl: 'https://github.com/hedizair/bot-discord-drmundo',
        projectUrl: 'https://top.gg/bot/964279841925001276',
        state: 'prod'
    },
    {
        id: 4,
        title: 'Skquiz API',
        description: 'API REST en Go et PostgreSQL exposant une base de questions variées utilisée par Skquiz. La base a été constituée à partir de sources externes et enrichie via IA. Déployée sur VPS OVH via Docker, GitHub Actions et GHCR, derrière un reverse proxy NGINX.',
        tags: [techs.go, techs.postgresql, techs.githubactions, techs.docker, techs.githubactions, techs.nginx],
        githubUrl: 'https://github.com/hedizair/skquiz-api',
        projectUrl: 'https://hedizair.github.io',
        state: 'prod'
    },
    {
        id: 5,
        title: 'Skaarplay Auth API',
        description: 'API REST d\'authentification centralisée en Go et PostgreSQL, socle de l\'écosystème Skaarplay. Fournit l\'authentification JWT et la gestion des droits à tous les services de la plateforme — dont Skquiz API. Déployée sur VPS OVH via Docker, GitHub Actions et GHCR, derrière NGINX.',
        tags: [techs.go, techs.postgresql, techs.githubactions, techs.docker, techs.githubactions, techs.nginx],
        githubUrl: 'https://github.com/hedizair/skaarplay-auth-api',
        projectUrl: 'https://hedizair.github.io',
        state: 'prod'
    },
    {
        id: 6,
        title: 'Metinetflix',
        description: 'Projet réalisé en binôme durant ma dernière année d’études avec PHP Symfony et MySQL. Il s’agit d’une plateforme web permettant aux utilisateurs de gérer leurs films, séries, animés et émissions TV vus ou à regarder, avec système de notes et commentaires, inspiré de AniList. Les données étaient récupérées via l’API de The Movie Database. Projet non publiée',
        tags: [techs.symfony,techs.php, techs.javascript],
        githubUrl: 'https://github.com/hedizair/metinetflix',
        state: 'stopped'
    },
    {
        id: 7,
        title: 'Médiation 3D',
        description:  'Projet de fin d’études réalisé en équipe de 4 pour une entreprise partenaire de l\'Université Claude Bernard Lyon 1. La plateforme, développée avec Vue.js, Python et Babylon.js, permettait de rejoindre des sessions de médiation en ligne dans un environnement 3D interactif. Les mouvements du visage des utilisateurs étaient capturés via webcam puis retransmis en temps réel sur des avatars 3D. Projet non publiée',
        tags: [techs.vue, techs.javascript, techs.python],
        githubUrl: 'https://github.com/hedizair/skaarplay-auth-api',
        projectUrl: 'https://hedizair.github.io',
        state: 'stopped'
    },
]