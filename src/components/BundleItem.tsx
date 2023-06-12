import { storedItemsList, storeItem, unstoreItem } from "@/store/item-store";
import type { BundleName, Item, ItemName } from "@/types";
import { useStore } from "@nanostores/solid";
import { computed } from "nanostores";

interface Props {
	bundleName: BundleName;
	item: Item & { id: ItemName };
}

const BundleItem = ({ item, bundleName }: Props) => {
	const $storedItemsList = useStore(storedItemsList);

	const bundleItemStr = `${bundleName}:${item.id}`;

	const isStored = useStore(
		computed(storedItemsList, (storedItemsList) =>
			storedItemsList.some((storedItem) => storedItem === bundleItemStr)
		)
	);

	return (
		<div class="flex items-center gap-2">
			<span class="">{isStored() ? "X" : "O"}</span>
			<span>{item.name}</span>

			<button
				onClick={() =>
					$storedItemsList().includes(bundleItemStr)
						? unstoreItem(bundleName, item.id)
						: storeItem(bundleName, item.id)
				}
				class="border p-1 px-4"
			>
				{$storedItemsList().includes(bundleItemStr) ? "Unstore" : "Store"}
			</button>
		</div>
	);
};

export default BundleItem;
