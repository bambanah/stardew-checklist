import { For } from "solid-js";

interface Props {
	source: string;
	ref?: HTMLDivElement;
}

const SourceTooltip = (props: Props) => {
	return (
		<div
			ref={props.ref}
			class="hidden box-border absolute top-10 max-w-lg text-left text-gray-950 bg-gray-50 border-black border-2 rounded-md z-10 shadow-xl right-0 p-2 whitespace-pre-line"
		>
			{props.source.split(";").length > 1 ? (
				<ul class="list-disc list-inside">
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
