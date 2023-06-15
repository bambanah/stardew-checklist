import classNames from "classnames";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

export interface HeadingProps {
	size?: Size;
	children: string | string[];
	class?: string;
}

const Heading = (props: HeadingProps) => {
	const sizeStyles: Record<Size, string> = {
		xs: "text-lg md:text-xl",
		sm: "text-xl md:text-2xl",
		md: "text-2xl md:text-4xl",
		lg: "text-3xl md:text-4xl",
		xl: "text-4xl md:text-6xl",
	};

	return (
		<h1
			class={classNames([
				sizeStyles[props.size ?? "md"],
				props.class ?? "font-serif",
			])}
		>
			{props.children}
		</h1>
	);
};

export default Heading;
