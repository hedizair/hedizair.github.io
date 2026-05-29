export type SkillLevel = 1 | 2 | 3

// Techno de base — juste un nom + logo, sans niveau
// Utilisée pour les tags de projets
export interface Tech {
    name: string
    logo: string
}

// Skill = Tech + niveau — utilisée dans les catégories de compétences
export interface Skill extends Tech {
    level: SkillLevel
}

export interface SkillCategory {
    id: string
    labelI18nKey: string
    icon: string
    skills: Skill[]
}

export type ProjectState = 'prod' | 'dev' | 'stopped' | 'beta'
export interface Project {
    id: number
    title: string
    descriptioni18nKey: string
    tags: Tech[]          
    githubUrl: string[]
    state: ProjectState
    projectUrl?: string
    videoUrl?: string
}
export interface ExternalLink {
    id: 'github' | 'linkedin'
    href: string
    label: string
    sub: string
}

export interface Abouts {
    presentation1i18nKey: string,
    presentation2i18nKey: string,
    stats: { value: string, labeli18nKey: string }[],
    yearOfExperience: number,
    firstName: string,
    lastName: string,
    jobTitle: string,
    externalLinks: ExternalLink[],

}