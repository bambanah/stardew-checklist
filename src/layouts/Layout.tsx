import Display from "@/components/atoms/Display";
import { JSXElement } from "solid-js";

interface Props {
	title?: string;
	children: JSXElement | JSXElement[];
}

const Layout = (props: Props) => {
	return (
		<>
			<div class="mx-auto py-8 text-center">
				<Display size="xl" class="text-slate-100">
					Stardew Community Bundle Checklist
				</Display>
			</div>
			<main class="mx-auto w-full max-w-4xl px-2 py-4">{props.children}</main>
		</>
	);
};

export default Layout;
