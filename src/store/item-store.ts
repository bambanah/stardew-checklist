import { BUNDLES } from "@/constants/bundles";
import { ITEMS } from "@/constants/items";
import type { Bundle, BundleName, ItemName, Room } from "@/types";
import { persistentAtom } from "@nanostores/persistent";
import { action, computed } from "nanostores";
import { Accessor } from "solid-js";

export type StoredItem = {
	bundle: BundleName;
	item: ItemName;
	quantity: number;
};
export const storedItems = persistentAtom<StoredItem[]>("storedItems", [], {
	encode: JSON.stringify,
	decode: JSON.parse,
});
export const storedItemsList = computed(storedItems, (current) =>
	current.map((storedItem) => `${storedItem.bundle}:${storedItem.item}`)
);

export function getStoredItemIfExists(
	bundleName: BundleName,
	itemName: ItemName
) {
	const storedItem = storedItems
		.get()
		.find(
			(bundleItem) =>
				bundleItem.bundle === bundleName && bundleItem.item === itemName
		);

	return storedItem;
}

export const isItemStored = (
	storedItems: Accessor<StoredItem[]>,
	bundleName: BundleName,
	itemName: ItemName
) => {
	return storedItems().some(
		(item) => item.bundle === bundleName && item.item === itemName
	);
};

export const storeItem = action(
	storedItems,
	"storeItem",
	(storedItems, bundleName: BundleName, itemName: ItemName) => {
		// let required = 0;
		// for (const item of BUNDLES[bundleName].items) {
		// 	const name = typeof item === "string" ? item : item.item;
		// 	if (name === itemName) required++;
		// }

		storedItems.set([
			...storedItems.get(),
			{ bundle: bundleName, item: itemName, quantity: 1 },
		]);
	}
);

export const unstoreItem = action(
	storedItems,
	"unstoreItem",
	(storedItems, bundleName: BundleName, itemName: ItemName) => {
		console.log(bundleName, itemName);

		storedItems.set([
			...storedItems
				.get()
				.filter(
					(item) => !(item.bundle === bundleName && item.item === itemName)
				),
		]);
	}
);

export const getBundlesInRoom = (room: Room) =>
	room.bundles.map((bundleName) => ({
		...BUNDLES[bundleName],
		id: bundleName,
	}));

export const getItemsInBundle = (bundle: Bundle) =>
	bundle.items.map((item) =>
		typeof item === "string"
			? { ...ITEMS[item], id: item }
			: { ...ITEMS[item.item], id: item.item }
	);
