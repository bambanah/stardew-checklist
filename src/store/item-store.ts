import { BUNDLES } from "@/constants/bundles";
import { ITEMS } from "@/constants/items";
import type { Bundle, BundleName, ItemName, Room } from "@/types";
import { persistentMap } from "@nanostores/persistent";
import { action } from "nanostores";

export type StoredItem = {
	bundle: BundleName;
	item: ItemName;
	quantity: number;
};

export const storedItems = persistentMap<{
	[key in BundleName]?: {
		items: {
			[key in ItemName]?: number;
		};
	};
}>(
	"storedItemsMap",
	{},
	{
		encode: JSON.stringify,
		decode: JSON.parse,
	}
);

export function isItemStored(bundleName: BundleName, itemName: ItemName) {
	return !!storedItems.get()[bundleName]?.items[itemName];
}

export const storeItem = action(
	storedItems,
	"storeItem",
	(storedItems, bundleName: BundleName, itemName: ItemName) => {
		let required = 0;
		for (const item of BUNDLES[bundleName].items) {
			const name = typeof item === "string" ? item : item.item;
			if (name === itemName) required++;
		}

		const newValue = { ...(storedItems.get()[bundleName] ?? { items: {} }) };

		if (
			newValue.items[itemName] ||
			(newValue.items[itemName] ?? 0) < required
		) {
			newValue.items = {
				...newValue.items,
				[itemName]: (newValue.items[itemName] ?? 0) + 1,
			};
		}

		storedItems.setKey(bundleName, newValue);
	}
);

export const unstoreItem = action(
	storedItems,
	"unstoreItem",
	(storedItems, bundleName: BundleName, itemName: ItemName) => {
		const quantityStored = storedItems.get()[bundleName]?.items[itemName];

		if (quantityStored && quantityStored >= 0) {
			storedItems.setKey(bundleName, {
				items: {
					...storedItems.get()[bundleName]?.items,
					[itemName]: quantityStored - 1,
				},
			});
		}
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
