const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
				display: [
					"PatuaOneVariable",
					"Patua One",
					...defaultTheme.fontFamily.serif,
				],
				mono: ["Share Tech Mono", "VT323", ...defaultTheme.fontFamily.mono],
				stardew: ["Stardew", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				"stardew-yellow": {
					500: "#ffffcc",
					600: "#FAFABF",
				},
			},
			backgroundImage: {
				"stardew-background": "url('/images/stardewbackground.png')",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
