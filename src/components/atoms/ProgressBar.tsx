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
				"h-1 w-full overflow-hidden bg-slate-200 transition-opacity delay-150",
				props.class,
			])}
		>
			<div
				class={classNames(["h-full bg-blue-500 transition-all"])}
				style={{
					width: `${(props.value / props.max) * 100}%`,
				}}
			/>
		</div>
	);
};

export default ProgressBar;
