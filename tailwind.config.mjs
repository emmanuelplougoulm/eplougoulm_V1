/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#FFFDFD" /* Light purple */,
        "color-secondary": " #ffffff" /* Blanc cassé */,
        "color-tertiary": " #FFFDFD" /* Gris clair */,
        "color-background": "#272F96" /* Dark purple */,
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
