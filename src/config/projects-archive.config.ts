interface Project {
	year: string;
	project: string;
	href: string;
	tags: string[];
}

export const projectArchive: Array<Project> = [
	{
		year: "2024",
		project: "Kanban like",
		tags: [ "Vue.js", "Vite.js","Pinia" ],
		href: "https://github.com/emmanuelplougoulm/paylead",
	},
	{
		year: "2024",
		project: "Cryptobubbles clone",
		tags: ["Vite.js", "Biome.js", "Shadcn", "React.js", "Bun"],
		href: "https://github.com/emmanuelplougoulm/cryptobubbles-clone",
	},
	{
		year: "2024",
		project: "P4 Collective webapp",
		tags: ["Next.js", "Semantic Html", "SSR/CSR", "Web performance"],
		href: "https://nextjs-collectif-p4.vercel.app/",
	},
	{
		year: "2024",
		project: "Time slots algo",
		tags: ["Javascript", "Scripting", "Algo"],
		href: "https://github.com/emmanuelplougoulm/_time_slots_algo",
	},
	{
		year: "2024",
		project: "First Dapp",
		tags: ["Next", "Solidity", "Foundry", "Viem", "Wagmi"],
		href: "https://github.com/emmanuelplougoulm/dapp",
	},
	{
		year: "2023",
		project: "Moula manager",
		tags: ["Vue.js", "Nest.js", "Typescript"],
		href: "https://github.com/emmanuelplougoulm/moula-manager",
	},
	{
		year: "2021",
		project: "Automating copass",
		tags: ["Node.js", "Puppeteer","Automation"],
		href: "https://github.com/emmanuelplougoulm/automating-copass",
	},
];
