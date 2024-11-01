interface Experience {
	date: string;
	position: string;
	company: string;
	href: string;
	achievements: string[];
	tags: string[];
}

export const experiences: Array<Experience> = [
	{
		date: "2021 - Ongoing",
		position: "Fullstack developer",
		company: "Lemonway (Fintech)",
		href: "https://www.lemonway.com/",
		achievements: [
			"Migrated a user dashboard from Vue 2 to Vue 3 in order to meet PCI/DSSrequirements",
			"Managed to refactor a dashboard while keeping the delivery going,platform performances increased by 60%, users satisfaction by 40%",
			"Partnered with data-scientist & designer to track user path and auto KYC completion rate",
			"Gathered microservices into a monorepo ( turborepo ) from scratch",
			"Participated in each step of the design system process from ideation to development making components library available for everyone at LW",
			"Organised several workshops to homogenize internal coding conventions",
		],
		tags: ["Vue.js", "Nest.js", "Typescript"],
	},
	{
		date: "2018 - 2021",
		position: "Fullstack developer",
		company: "Groupe Onepoint",
		href: "https://www.groupeonepoint.com/fr/",
		achievements: [
			"Partnered with another developer to develop API for HR management tool used by 3000 users in 8 countries.",
			"Started using Typescript",
			"Participated in the thinking/creation process of the API architecture",
			"Collaborated with cyber-security team to implement SSO (keycloak)",
			"Build a live webapp to let students pass exams remotely",
			"Build a back-office to let administrators and teachers create exams online",
			"UI integration ( pixel perfect & responsive )",
		],
		tags: ["React.js", "Node.js", "Typescript"],
	},
];
