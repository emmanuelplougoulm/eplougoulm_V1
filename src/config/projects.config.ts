interface Project {
	title: string;
	description: string;
	ariaLabel: string;
	href: string;
	img: string;
	tags: string[];
}

export const projects: Array<Project> = [
	{
		title: "P4 Collective webapp",
		description: "Theater collective website",
		ariaLabel: "Build a website for a theater collective",
		href: "https://nextjs-collectif-p4.vercel.app/",
		img: "/p4_thumbnail.webp",
		tags: ["Next.js", "Semantic Html", "SSR/CSR", "Web performance"],
	},
	{
		title: "CryptoBubbles clone",
		description:
			"A clone of the famous crypto market forecast built with modern React tools",
		ariaLabel: "Build a cryptobubbles clone (opens in a new tab)",
		href: "https://github.com/emmanuelplougoulm/cryptobubbles-clone",
		img: "/bubbles_thumbnail.webp",
		tags: ["Vite.js", "Biome.js", "Shadcn", "React.js", "Bun"],
	},
	{
		title: "Moula manager",
		description:
			"Webapp based on NuxtJS to display crypto-currencies portfolio",
		ariaLabel: "Webapp based on NuxtJS to display crypto-currencies portfolio",
		href: "https://github.com/emmanuelplougoulm/moula-manager",
		img: "/bubbles_thumbnail.webp",
		tags: ["Vue.js", "Nest.js", "Typescript"],
	},
];
