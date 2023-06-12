import { storedItemsList, storeItem, unstoreItem } from "@/store/item-store";
import type { BundleName, Item, ItemName } from "@/types";
import { useStore } from "@nanostores/preact";
import FaSquare from "~icons/fa/square";

interface Props {
	bundleName: BundleName;
	item: Item & { id: ItemName };
}

export default function BundleItem({ item, bundleName }: Props) {
	const $storedItemsList = useStore(storedItemsList);

	const isItemStored = $storedItemsList.includes(`${bundleName}:${item.id}`);

	return (
		<div class="flex items-center gap-2">
			<span class="">{isItemStored ? <span>Hello</span> : <FaSquare />}</span>
			<span>{item.name}</span>

			{isItemStored ? (
				<button
					onClick={() => unstoreItem(bundleName, item.id)}
					class="border p-1 px-4"
				>
					Unstore
				</button>
			) : (
				<button
					onClick={() => storeItem(bundleName, item.id)}
					class="border p-1 px-4"
				>
					Store
				</button>
			)}
			{isItemStored ? <div>stored</div> : <div>Not stored</div>}
		</div>
	);
}
