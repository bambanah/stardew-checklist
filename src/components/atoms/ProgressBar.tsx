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
				"h-1 w-full overflow-hidden bg-slate-200 dark:bg-slate-500",
				props.class,
			])}
		>
			<div
				class={classNames([
					"h-full transition-all",
					props.value >= props.max
						? "bg-green-500 dark:bg-green-400"
						: "bg-blue-500",
				])}
				style={{
					width: `${(props.value / props.max) * 100}%`,
				}}
			/>
		</div>
	);
};

export default ProgressBar;
