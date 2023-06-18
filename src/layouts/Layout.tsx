import { JSXElement } from "solid-js";

interface Props {
	title?: string;
	children: JSXElement | JSXElement[];
}

const Layout = (props: Props) => {
	return (
		<>
			<main class="mx-auto w-full max-w-7xl pb-4 sm:p-4">{props.children}</main>
		</>
	);
};

export default Layout;
