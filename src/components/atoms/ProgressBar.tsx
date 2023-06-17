import classNames from "classnames";

interface Props {
	value: number;
	max: number;
	class?: string;
}

const ProgressBar = (props: Props) => {
	return (
		<div
			class={classNames([
				"border-progress w-full transition-opacity",
				props.class,
			])}
		>
			<div
				class={classNames(["h-2 bg-[#158efc] transition-all"])}
				style={{
					width: `${(props.value / props.max) * 100}%`,
				}}
			/>
		</div>
	);
};

export default ProgressBar;
