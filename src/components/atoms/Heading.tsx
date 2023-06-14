type Size = "sm" | "md" | "lg" | "xl";

interface Props {
	size?: Size;
	children: string | string[];
	class?: string;
}

const Heading = (props: Props) => {
	const sizeStyles: Record<Size, string> = {
		sm: "text-xl",
		md: "text-3xl",
		lg: "text-4xl",
		xl: "text-6xl",
	};
	const baseStyle = "font-sans font-semibold";

	return (
		<h1
			class={`${baseStyle} ${sizeStyles[props.size ?? "md"]} ${
				props.class ?? ""
			}`}
		>
			{props.children}
		</h1>
	);
};

export default Heading;
