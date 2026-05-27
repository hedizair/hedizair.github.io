import type { Abouts } from '@/types'

export const abouts: Abouts = {
    firstName: 'Hédi',
    lastName: 'Zaïr',
    jobTitle: 'Développeur Full Stack',
    presentation1i18nKey: "home.presentation1",
    presentation2i18nKey: "home.presentation2",
    stats: [
        { value: '3+', labeli18nKey: 'home.yearsOfExperience' },
        { value: '7+', labeli18nKey: 'home.personalProjectsAchieved' },
        { value: '10+', labeli18nKey: 'home.technosMastered' },
    ],
    yearOfExperience: 3,
    externalLinks: [
        { id: 'github', href: 'https://github.com/hedizair', label: 'GitHub', sub: 'hedizair' },
        { id: 'linkedin', href: 'https://linkedin.com/in/', label: 'LinkedIn', sub: 'Hedi Zair' },
    ],
}