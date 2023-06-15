import { For } from "solid-js";

interface Props {
	source: string;
	ref?: HTMLDivElement;
}

const SourceTooltip = (props: Props) => {
	return (
		<div
			ref={props.ref}
			class="tooltip max-w-screen absolute right-0 top-10 z-10 box-border hidden whitespace-pre-line rounded p-2 text-left text-zinc-800 shadow-xl"
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
