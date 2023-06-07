import { BUNDLES } from "@/constants/bundles";
import { ITEMS } from "@/constants/items";
import type { Bundle, ItemName, Room } from "@/types";
import { persistentAtom } from "@nanostores/persistent";

export const storedItems = persistentAtom<Set<string>>(
	"storedItems",
	new Set<string>(),
	{
		encode: JSON.stringify,
		decode: JSON.parse,
	}
);

export const isItemStored = (item: ItemName) => storedItems.get().has(item);

export const getBundlesInRoom = (room: Room) =>
	room.bundles.map((bundleName) => BUNDLES[bundleName]);

export const getItemsInBundle = (bundle: Bundle) =>
	bundle.items.map((itemName) =>
		typeof itemName === "string" ? ITEMS[itemName] : ITEMS[itemName.item]
	);
