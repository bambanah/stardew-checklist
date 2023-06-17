import { JSXElement } from "solid-js";

interface Props {
	children: JSXElement | JSXElement[];
}

const BundleNameContainer = (props: Props) => {
	return (
		<div class="bundle-name-background flex items-center justify-between px-1">
			{props.children}
		</div>
	);
};

export default BundleNameContainer;
