import type { Tech } from '@/types'

// "satisfies" vérifie que chaque valeur respecte Tech,
// mais garde les clés précises — pas de Record<string, Tech>
// donc techs.vue est Tech, jamais Tech | undefined
export const techs = {
    typescript: { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    javascript: { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    php: { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    java: { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    go: { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    cpp: { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    python: { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    sql: { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/azure-sql-db.png' },
    vue: { name: 'Vue 3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    react: { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    nodejs: { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    express: { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    microsoftsqlserver: { name: 'MS SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
    spring: { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    ssis: { name: 'SSIS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    postgresql: { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    mysql: { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    mongodb: { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    redis: { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    docker: { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    git: { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    linux: { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    github: { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    gitlab: { name: 'GitLab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    vite: { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    symfony: { name: 'Symfony', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
    ibmdb2: { name: 'IBM DB2', logo: 'https://cdn.prod.website-files.com/699810ea0b5b9db13bfd895f/6998c6619f65ee418d6436b3_691fc419e04dd939f0129754_17602022879agHfI_ibm.png' },
    nginx: { name: 'NGINX', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    githubactions: { name: 'GitHub Actions', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
    // =========================
    // 🧰 IDE / Tools
    // =========================
    vscode: { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    goland: { name: 'GoLand', logo: 'https://cdn.simpleicons.org/goland' },
    datagrip: { name: 'DataGrip', logo: 'https://cdn.simpleicons.org/datagrip' },
    webstorm: { name: 'WebStorm', logo: 'https://cdn.simpleicons.org/webstorm' },
    phpstorm: { name: 'PhpStorm', logo: 'https://cdn.simpleicons.org/phpstorm' },
    dbeaver: { name: 'DBeaver', logo: 'https://cdn.simpleicons.org/dbeaver' },
    visualstudio: { name: 'Visual Studio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg' },
    postman: { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    codex: { name: 'Codex', logo: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/openai.png' },
    inform3: { name: 'Infor M3', logo: 'https://www.ezcomsoftware.com/wp-content/uploads/2023/11/Infor-M3-logo2-300x109.png' },

} satisfies Record<string, Tech>