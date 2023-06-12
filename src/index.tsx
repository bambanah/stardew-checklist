/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Route, Router, Routes } from "@solidjs/router";
import Home from "./pages/Home";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
	);
}

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
