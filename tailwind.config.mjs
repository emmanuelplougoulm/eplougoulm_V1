/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"purple-dark": "#151526",
				"purple-electric": "#8C64C4",
				"grey-light": "#fdfdfc",
				"grey-medium": "#b2b7cf",

				divider: "#545454",
			},
		},
	},
	plugins: [],
};
