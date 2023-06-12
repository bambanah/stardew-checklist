type Size = "sm" | "md" | "lg" | "xl";

interface Props {
	size?: Size;
	children: string;
}

const Heading = (props: Props) => {
	const sizeStyles: Record<Size, string> = {
		sm: "text-xl",
		md: "text-2xl",
		lg: "text-4xl",
		xl: "text-6xl",
	};
	const baseStyle = "font-sans font-semibold";

	return (
		<h1 class={`${baseStyle} ${sizeStyles[props.size ?? "md"]}`}>
			{props.children}
		</h1>
	);
};

export default Heading;