interface Experience {
  date: string;
  position: string;
  company: string;
  href: string;
  achievements: string[];
  tags: string[];
}

export const experiences: Array<Experience> = [
  // {
  //   date: "November 2024 - May 2025",
  //   position: "Front-end developer",
  //   company: "TrustInSoft",
  //   href: "https://www.trust-in-soft.com/",
  //   achievements: [
  //     "- Converted a CLI tool into an Electron app",
  //     "- Design system and brand guidelines",
  //     "- Architecture recommendations to a 4-member team",
  //     "- Advised on performance optimization",
  //     "- Applied DRY, KISS, YAGNI principles",
  //   ],
  //   tags: ["React.js", "Typescript", "Storybook", "Figma"],
  // },
  {
    date: "2021 - 2023",
    position: "QA engineer / Fullstack developer",
    company: "Lemonway (Fintech)",
    href: "https://www.lemonway.com/",
    achievements: [
      "- Built a reusable component library with Storybook, improving UI consistency and reducing development time by 30%",
      "- Led migration from monolith to microservices (Vue.js 2 + Nest.js), boosting scalability and flexibility",
      "- Delivered 30+ Vue.js components and migrated codebase from Vue 2 to Vue 3 for better maintainability",
      "- Increased test coverage by 30% and reduced manual testing with Playwright automation",
      "- Improved load times by 20% through performance optimization with Lighthouse",
      "- Gave presentations and demos in English and French, enhancing team alignment",
      "- Leveraged a modern stack (Vue.js, Nest.js, Storybook, Playwright, Lighthouse) and agile methods to deliver scalable, high-quality solutions",
    ],
    tags: ["Vue.js", "Nest.js", "Typescript", "Turborepo"],
  },
  {
    date: "2018 - 2021",
    position: "Fullstack developer",
    company: "Onepoint group",
    href: "https://www.groupeonepoint.com/fr/",
    achievements: [
      "• Developed an API used by 3,000 employees in 8 countries, streamlining HR processes and boosting efficiency",
      "• Improved security and user experience by integrating Keycloak SSO for 3,000 users",
      "• Turned Figma mockups into pixel-perfect interfaces, reducing feedback cycles and ensuring design consistency",
      "• Drove TypeScript adoption to enhance code quality and maintainability",
      "• Used modern tech (React, TypeScript, Keycloak, Figma) and cross-team collaboration to deliver secure, scalable solutions",
    ],
    tags: ["React.js", "Node.js", "Typescript"],
  },
];
