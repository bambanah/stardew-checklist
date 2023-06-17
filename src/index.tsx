/* @refresh reload */
import { render } from "solid-js/web";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
	);
}

import { lazy } from "solid-js";

const Home = lazy(() => import("@/pages/Home"));

import "./index.css";

import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/patua-one/latin-400.css";
import "@fontsource/share-tech-mono/latin-400.css";

render(
	() => <Home />,
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	root!
);
