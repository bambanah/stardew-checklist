import classNames from "classnames";
import { JSX, splitProps } from "solid-js";

type Props = JSX.HTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
	const [, rest] = splitProps(props, ["class"]);

	return (
		<button
			class={classNames([
				"border-button flex items-center gap-2 px-2 py-1 font-stardew font-bold transition-opacity duration-75 sm:px-1 sm:py-0",
				props.class,
			])}
			{...rest}
		/>
	);
};

export default Button;
