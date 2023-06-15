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
					Bundle Checklist
				</Display>
			</div>
			<main class="mx-auto w-full max-w-4xl pb-4 sm:p-4">{props.children}</main>
		</>
	);
};

export default Layout;
