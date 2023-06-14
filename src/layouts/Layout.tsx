import Heading from "@/components/atoms/Heading";
import { JSXElement } from "solid-js";

interface Props {
	title?: string;
	children: JSXElement | JSXElement[];
}

const Layout = (props: Props) => {
	return (
		<>
			<div class="mx-auto py-8 text-center">
				<Heading size="lg">Stardew Community Bundle Checklist</Heading>
			</div>
			<main class="max-w-8xl mx-auto w-full px-2 py-4">{props.children}</main>
		</>
	);
};

export default Layout;
