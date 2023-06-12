import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		preact(),
		Icons({ compiler: "astro", jsx: "preact" }),
	],
});
