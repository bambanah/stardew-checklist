/* @refresh reload */
import { render } from "solid-js/web";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
	);
}

import { Route, Router, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

import "./index.css";
import "@fontsource/inter/latin-400.css";

const Home = lazy(() => import("@/pages/Home"));

render(
	() => (
		<Router>
			<Routes>
				<Route path="/" component={Home} />
			</Routes>
		</Router>
	),
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	root!
);
