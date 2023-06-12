import Navbar from "@/components/Navbar";
import { JSXElement } from "solid-js";

interface Props {
	title?: string;
	children: JSXElement | JSXElement[];
}

const Layout = (props: Props) => {
	return (
		<>
			<Navbar />
			<main class="mx-auto w-full max-w-4xl px-4 py-4">{props.children}</main>
		</>
	);
};

export default Layout;
