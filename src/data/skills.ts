import type { SkillCategory } from '@/types'
import { techs } from '@/data/techs'

export const skillCategories: SkillCategory[] = [
    {
        id: 'languages',
        label: 'Langages',
        icon: '⌨️',
        skills: [
            { ...techs.typescript, level: 3 },
            { ...techs.javascript, level: 3 },
            { ...techs.go, level: 3 },
            { ...techs.php, level: 2 },
            { ...techs.java, level: 1 },
        ],
    },
    {
        id: 'frameworks',
        label: 'Frameworks',
        icon: '🧩',
        skills: [
            { ...techs.vue, level: 2 },
            { ...techs.react, level: 3 },
            { ...techs.nodejs, level: 3 },
            { ...techs.spring, level: 1 },
            { ...techs.symfony, level: 2 },
        ],
    },
    {
        id: 'data',
        label: 'Data & BDD',
        icon: '🗄️',
        skills: [
            { ...techs.postgresql, level: 3 },
            { ...techs.mysql, level: 1 },
            { ...techs.mongodb, level: 2 },
            { ...techs.redis, level: 1 },
            { ...techs.ssis, level: 2 },
            { ...techs.microsoftsqlserver, level: 3 },
            { ...techs.ibmdb2, level: 1 },
        ],
    },
    {
        id: 'devops',
        label: 'DevOps & Outils',
        icon: '🔧',
        skills: [
            { ...techs.docker, level: 2 },
            { ...techs.git, level: 3 },
            { ...techs.github, level: 3 },
            { ...techs.githubactions, level: 2 },
            { ...techs.linux, level: 2 },
            { ...techs.nginx, level: 1 },

        ],
    },
]