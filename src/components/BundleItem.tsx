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
import ItemTooltip from "./atoms/ItemTooltip";

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

		if (!tooltipRef) return;

		if (e.type === "mouseenter") {
			tooltipRef.style.display = "block";
		} else if (e.type === "mouseleave") {
			tooltipRef.style.display = "none";
		} else if (e.type === "pointermove") {
			const gapToCursor = 10;
			const rightMargin = 280;

			if (e.pageX > document.body.clientWidth - rightMargin) {
				tooltipRef.style.left = "inherit";
				tooltipRef.style.right = document.body.clientWidth - e.pageX + "px";
			} else {
				tooltipRef.style.left = e.pageX + "px";
				tooltipRef.style.right = "inherit";
			}

			tooltipRef.style.top = e.pageY + gapToCursor + "px";
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
						"fill-stone-500 text-stone-500",
				])}
				onMouseEnter={showTooltip}
				onPointerMove={(e) => showTooltip(e)}
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
			</button>
			<ItemTooltip ref={tooltipRef} item={itemDetails()} />
		</>
	);
}
