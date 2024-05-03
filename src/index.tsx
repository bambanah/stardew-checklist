/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import Layout from "./layouts/Layout";
import { lazy } from "solid-js";

const Home = lazy(() => import("@/pages/home"));
const Checklist = lazy(() => import("@/pages/checklist"));

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?",
	);
}

import "./index.css";

import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/patua-one/latin-400.css";
import "@fontsource/share-tech-mono/latin-400.css";

render(
	() => (
		<Router root={Layout}>
			<Route path="/" component={Home} />
			<Route path="/checklist" component={Checklist} />
		</Router>
	),
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	root!,
);
