const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
				stardew: ["Stardew", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
};
