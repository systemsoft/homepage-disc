
/*** IMPORT ------------------------------------------- ***/

import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/*** UTILITY ------------------------------------------ ***/

/** @type {import("@sveltejs/kit").Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => filename.split(/[/\\]/).includes("node_modules") ? undefined : true
	},
	kit: {
		adapter: adapter()
	},
	preprocess: [vitePreprocess()]
};

/*** EXPORT ------------------------------------------- ***/

export default config;
