import { BUNDLES } from "@/constants/bundles";
import { ITEMS } from "@/constants/items";
import type { Bundle, BundleName, ItemName, Room } from "@/types";
import { persistentAtom } from "@nanostores/persistent";
import { action, computed } from "nanostores";

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
export const isStored = action(
	storedItems,
	"isStored",
	(storedItems, bundleName: BundleName, itemName: ItemName) => {
		return storedItems
			.get()
			.some((item) => item.bundle === bundleName && item.item === itemName);
	}
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

export const storeItem = action(
	storedItems,
	"storeItem",
	(storedItems, bundleName: BundleName, itemName: ItemName) => {
		console.log(bundleName, itemName);
		let required = 0;
		for (const item of BUNDLES[bundleName].items) {
			const name = typeof item === "string" ? item : item.item;
			if (name === itemName) required++;
		}

		const storedItem = getStoredItemIfExists(bundleName, itemName);

		if (storedItem && storedItem.quantity < required) {
			// TODO: Check this
			storedItem.quantity++;
		} else {
			storedItems.set([
				...storedItems.get(),
				{ bundle: bundleName, item: itemName, quantity: 1 },
			]);
		}

		return storedItems.get();
	}
);

export function unstoreItem(bundleName: BundleName, itemName: ItemName) {
	const storedItem = getStoredItemIfExists(bundleName, itemName);

	if (!storedItem) return;

	if (storedItem.quantity > 1) {
		// TODO: Check this
		storedItem.quantity--;
	} else {
		storedItems.set([
			...storedItems.get().filter((item) => item !== storedItem),
		]);
	}
}

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
