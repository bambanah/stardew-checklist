type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface Props {
	size?: Size;
	children: string | string[];
	class?: string;
}

const Heading = (props: Props) => {
	const sizeStyles: Record<Size, string> = {
		xs: "text-lg",
		sm: "text-2xl",
		md: "text-4xl",
		lg: "text-4xl",
		xl: "text-6xl",
	};
	const baseStyle = "font-stardew";

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
