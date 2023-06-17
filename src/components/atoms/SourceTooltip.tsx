import { For } from "solid-js";

interface Props {
	source: string;
	ref?: HTMLDivElement;
}

const SourceTooltip = (props: Props) => {
	const sources = () => props.source.split(";");

	return (
		<div
			ref={props.ref}
			class="tooltip absolute right-0 top-10 z-50 box-border hidden max-w-[15rem] whitespace-pre-line rounded p-1 text-left text-zinc-800 shadow-xl"
		>
			<p>Source{sources().length > 1 && "s"}:</p>

			{sources().length > 1 ? (
				<ul class="list-inside list-disc">
					<For each={sources()}>{(ln) => <li>{ln.trim()}</li>}</For>
				</ul>
			) : (
				<p>{sources()[0]}</p>
			)}
		</div>
	);
};

export default SourceTooltip;
