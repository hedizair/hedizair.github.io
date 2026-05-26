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
            { ...techs.cpp, level: 1 },
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
        label: 'DevOps',
        icon: '⚙️',
        skills: [
            { ...techs.docker, level: 2 },
            { ...techs.git, level: 3 },
            { ...techs.github, level: 3 },
            { ...techs.githubactions, level: 2 },
            { ...techs.linux, level: 2 },
            { ...techs.nginx, level: 1 },

        ],
    },
    {
        id: 'devops',
        label: 'Logiciels & Outils',
        icon: '🔧',
        skills: [
            { ...techs.webstorm, level: 3 },
            { ...techs.phpstorm, level: 3 },
            { ...techs.datagrip, level: 3 },
            { ...techs.goland, level: 3 },
            { ...techs.vscode, level: 3 },
            { ...techs.postman, level: 2 },
            { ...techs.codex, level: 1 },
            { ...techs.visualstudio, level: 2 },
            { ...techs.inform3, level: 3 },
            { ...techs.dbeaver, level: 2 },

        ],
    },
]