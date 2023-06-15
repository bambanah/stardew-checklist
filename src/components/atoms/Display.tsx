import classNames from "classnames";
import Heading, { HeadingProps } from "./Heading";

const Display = (props: HeadingProps) => {
	return (
		<Heading
			class={classNames(["font-stardew font-bold", props.class])}
			size={props.size}
		>
			{props.children}
		</Heading>
	);
};

export default Display;
