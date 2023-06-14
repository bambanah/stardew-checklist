import { For } from "solid-js";

interface Props {
	source: string;
	ref?: HTMLDivElement;
}

const SourceTooltip = (props: Props) => {
	return (
		<div
			ref={props.ref}
			class="absolute right-0 top-10 z-10 box-border hidden max-w-lg whitespace-pre-line rounded border border-slate-800 bg-slate-100 p-2 text-left shadow-xl dark:border-slate-200 dark:bg-slate-900 dark:text-slate-200"
		>
			{props.source.split(";").length > 1 ? (
				<ul class="list-inside list-disc">
					<For each={props.source.split(";")}>
						{(ln) => <li>{ln.trim()}</li>}
					</For>
				</ul>
			) : (
				<p>{props.source}</p>
			)}
		</div>
	);
};

export default SourceTooltip;
