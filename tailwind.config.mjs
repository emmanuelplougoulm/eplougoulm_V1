/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"color-primary": "#66ffff" /* Light purple */,
				"color-secondary": " #ccd6f6" /* Blanc cassé */,
				"color-tertiary": " #8892b0" /* Gris clair */,
				"color-background": "#151526" /* Dark purple */,
				"color-accent": " #64ffda" /* Same primary color, used to accentuate */,
			},
			blur: {
				"4xl": "64px",
				"5xl": "80px",
				"6xl": "100px",
			},
		},
	},
	plugins: [],
};
