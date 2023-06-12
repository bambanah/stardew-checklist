import { storedItemsList, storeItem, unstoreItem } from "@/store/item-store";
import type { BundleName, Item, ItemName } from "@/types";
import { useStore } from "@nanostores/solid";
import classNames from "classnames";
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
		<button
			onClick={() =>
				$storedItemsList().includes(bundleItemStr)
					? unstoreItem(bundleName, item.id)
					: storeItem(bundleName, item.id)
			}
			class={classNames([
				"flex items-center justify-start gap-2 p-2 w-full rounded border",
				$storedItemsList().includes(bundleItemStr) && "bg-green-200",
			])}
		>
			<span class="">{isStored() ? "X" : "O"}</span>
			{item.name}
		</button>
	);
};

export default BundleItem;
