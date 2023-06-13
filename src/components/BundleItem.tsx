import { ITEMS } from "@/constants/items";
import { storedItems, storeItem, unstoreItem } from "@/store/item-store";
import type { BundleName, BundleItem } from "@/types";
import { useStore } from "@nanostores/solid";
import classNames from "classnames";
import { FaRegularCircle, FaRegularCircleCheck } from "solid-icons/fa";

interface Props {
	bundleName: BundleName;
	item: BundleItem;
}

export default function BundleItem({ item, bundleName }: Props) {
	const $storedItems = useStore(storedItems);

	const itemId = typeof item === "string" ? item : item.item;
	const quantity = typeof item === "string" ? 1 : item.quantity ?? 1;
	const itemDetails = ITEMS[itemId];

	const isStored = () =>
		$storedItems().filter(
			(item) => item.bundle === bundleName && item.item === itemId
		).length > 0;

	return (
		<button
			onClick={() =>
				isStored()
					? unstoreItem(bundleName, itemId)
					: storeItem(bundleName, itemId)
			}
			class={classNames([
				"flex items-center justify-start gap-2 p-2 w-full rounded border transition-colors",
				isStored() ? "bg-green-200 hover:bg-green-300" : "hover:bg-neutral-100",
			])}
		>
			{isStored() ? <FaRegularCircleCheck /> : <FaRegularCircle />}
			<span class="font-medium">
				{itemDetails.name} {quantity > 1 && `(${quantity})`}
			</span>
		</button>
	);
}
