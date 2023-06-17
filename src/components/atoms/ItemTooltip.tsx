import { Item } from "@/types";
import { For } from "solid-js";

interface Props {
	item: Item;
	ref?: HTMLDivElement;
}

const ItemTooltip = (props: Props) => {
	const sources = () => props.item.source.split(";");

	return (
		<div
			ref={props.ref}
			class="tooltip-background absolute right-0 top-10 z-50 box-border hidden max-w-[15rem] flex-col gap-2 whitespace-pre-line p-1 text-left font-display font-light text-zinc-800 shadow-xl"
		>
			<h2 class="text-lg font-semibold">{props.item.name}</h2>

			<div>
				<h3>Source{sources().length > 1 && "s"}:</h3>

				{sources().length > 1 ? (
					<ul class="list-inside list-disc">
						<For each={sources()}>{(ln) => <li>{ln.trim()}</li>}</For>
					</ul>
				) : (
					<p>{sources()[0]}</p>
				)}
			</div>
		</div>
	);
};

export default ItemTooltip;
