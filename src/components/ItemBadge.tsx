import { Quality } from "@/types";
import classNames from "classnames";

interface Props {
	itemName: string;
	iconPath?: string;
	quality?: Quality;
	quantity?: number;
	class?: string;
	itemStored?: boolean;
	bundleComplete?: boolean;
}

const ItemBadge = (props: Props) => {
	const url = () => {
		if (props.iconPath?.startsWith("/")) return `/images/${props.iconPath}`;

		return `/images/items/${
			props.iconPath ?? props.itemName.replaceAll(" ", "_")
		}.png`;
	};

	const shouldFade = () => props.itemStored || props.bundleComplete;

	return (
		<div class="flex w-20 flex-col items-center">
			<div
				class={classNames([
					"relative transition-colors",
					props.itemStored
						? "item-container-empty border-opacity-50 group-hover:bg-stardew-yellow-600"
						: "item-container-full group-hover:bg-amber-200",
					props.class,
				])}
			>
				<img
					src={url()}
					class={classNames([
						"relative left-0 top-0 w-[48px] drop-shadow-2xl transition-opacity",
						shouldFade() && "opacity-50",
					])}
					aria-label={props.itemName}
					title={props.itemName}
				/>
				{props.quality && props.quality !== "regular" && (
					<img
						class="absolute -bottom-0 -left-0 w-[40px]"
						src={`/images/${props.quality}_quality_icon.png`}
					/>
				)}
				{props.itemStored && (
					<img
						class="absolute top-0 z-10 m-auto w-[48px] opacity-40"
						src={`/images/cross.png`}
					/>
				)}
				{props.quantity && props.quantity > 1 && (
					<span
						class={classNames([
							"absolute -bottom-[6px] left-0 flex h-full w-full items-end justify-end font-mono text-2xl font-bold text-zinc-100",
							shouldFade() && "saturate-50",
						])}
						style={{
							"text-shadow": ["1px 1px", "-1px 1px", "1px -1px", "-1px -1px"]
								.map(
									(pos) =>
										`${pos} 2px rgba(0,0,0,${shouldFade() ? "0.4" : "0.8"})`
								)
								.join(", "),
						}}
					>
						{props.quantity}
					</span>
				)}
			</div>
			<p class="w-24 overflow-hidden overflow-ellipsis whitespace-nowrap px-1 font-display">
				{props.itemName}
			</p>
		</div>
	);
};

export default ItemBadge;
