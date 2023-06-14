import { BUNDLES } from "@/constants/bundles";
import { ITEMS } from "@/constants/items";
import { ROOMS } from "@/constants/rooms";
import type { Bundle, BundleName, ItemName, Room, RoomName } from "@/types";
import { persistentMap } from "@nanostores/persistent";
import { useStore } from "@nanostores/solid";
import { action } from "nanostores";

export type StoredItem = {
	bundle: BundleName;
	item: ItemName;
	quantity: number;
};

export const storedItems = persistentMap<{
	[key in BundleName]?: string[];
}>(
	"storedItems_",
	{},
	{
		encode: JSON.stringify,
		decode: JSON.parse,
	}
);

export const storeItem = action(
	storedItems,
	"storeItem",
	(storedItems, bundleName: BundleName, itemName: string) => {
		storedItems.setKey(bundleName, [
			...(storedItems.get()[bundleName] ?? []),
			itemName,
		]);
	}
);

export const unstoreItem = action(
	storedItems,
	"unstoreItem",
	(storedItems, bundleName: BundleName, itemName: string) => {
		const currItems = storedItems.get()[bundleName];

		if (currItems) {
			storedItems.setKey(
				bundleName,
				storedItems.get()[bundleName]?.filter((item) => item !== itemName)
			);
		}
	}
);

/**
 * GETTERS
 */

const $storedItems = useStore(storedItems);

export const isItemStored = (bundleName: BundleName, itemName: string) =>
	!!$storedItems()[bundleName]?.includes(itemName);

export const isBundleComplete = (bundleName: BundleName) => {
	const itemsStoredInBundle = $storedItems()[bundleName]?.length ?? 0;

	return itemsStoredInBundle >= BUNDLES[bundleName].items_required;
};

export const isRoomComplete = (roomName: RoomName) => {
	return [...ROOMS[roomName].bundles].every((bundle) =>
		isBundleComplete(bundle)
	);
};

export const getBundlesInRoom = (room: Room) =>
	room.bundles.map((bundleName) => ({
		...BUNDLES[bundleName],
		id: bundleName,
	}));
