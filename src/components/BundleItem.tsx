import { ITEMS } from "@/constants/items";
import {
	bundleStore,
	isBundleComplete,
	storeItem,
	unstoreItem,
} from "@/store/item-store";
import type { BundleItem, BundleName, Item } from "@/types";
import classNames from "classnames";
import ItemBadge from "./ItemBadge";
import SourceTooltip from "./atoms/SourceTooltip";

interface Props {
	bundleName: BundleName;
	item: BundleItem;
}

export default function BundleItem(props: Props) {
	let tooltipRef: HTMLDivElement | undefined;

	const itemId = () =>
		typeof props.item === "string" ? props.item : props.item.item;
	const itemStoreId = () =>
		typeof props.item === "string" ? props.item : props.item.id ?? itemId();
	const quantity = () =>
		typeof props.item === "string" ? 1 : props.item.quantity ?? 1;
	const quality = () =>
		typeof props.item === "string"
			? "regular"
			: props.item.quality ?? "regular";

	const itemDetails = () => ITEMS[itemId()] as Item;

	const isStored = () =>
		bundleStore[0][props.bundleName]?.includes(itemStoreId());

	const showTooltip = (e: MouseEvent) => {
		e.preventDefault();

		if (tooltipRef && e.type === "mousemove") {
			const gap = 15;

			tooltipRef.style.display = "block";
			tooltipRef.style.top = e.pageY + gap + "px";
			tooltipRef.style.left = e.pageX + gap + "px";
		} else if (tooltipRef && e.type === "mouseleave") {
			tooltipRef.style.display = "none";
		}
	};

	return (
		<>
			<button
				onClick={() =>
					isStored()
						? unstoreItem(props.bundleName, itemStoreId())
						: storeItem(props.bundleName, itemStoreId())
				}
				class={classNames([
					"group flex items-center justify-between gap-2 rounded p-2 transition-[color,fill] duration-75 md:p-1",
					(isBundleComplete(props.bundleName) || isStored()) &&
						"fill-zinc-500 text-zinc-500",
				])}
				onMouseMove={(e) => showTooltip(e)}
				onMouseLeave={(e) => showTooltip(e)}
			>
				<ItemBadge
					class={classNames([" "])}
					itemName={itemDetails().name}
					iconPath={itemDetails().iconPath}
					quantity={quantity()}
					quality={quality()}
					itemStored={isStored()}
					bundleComplete={isBundleComplete(props.bundleName)}
				/>

				<SourceTooltip ref={tooltipRef} source={itemDetails().source} />
			</button>
		</>
	);
}
