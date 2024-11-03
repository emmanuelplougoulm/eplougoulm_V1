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
			"Dashboard migration from Vue 2 to Vue 3 ",
			"Full dashboard refactoring, web performances optimization",
			"User path tracking in collaboration with data analysts",
			"Turned monolith into microservices",
			"Design system creation",
			"Several workshops hosting",
		],
		tags: ["Vue.js", "Nest.js", "Typescript", "Turborepo"],
	},
	{
		date: "2018 - 2021",
		position: "Fullstack developer",
		company: "Groupe Onepoint",
		href: "https://www.groupeonepoint.com/fr/",
		achievements: [
			"HR management tool implementation used by 3000 users",
			"SSO implementation (keycloak)",
			"UI integration ( pixel perfect & responsive )",
		],
		tags: ["React.js", "Node.js", "Typescript"],
	},
];
