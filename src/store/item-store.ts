import { BUNDLES } from "@/constants/bundles";
import { ROOMS } from "@/constants/rooms";
import type { BundleName, ItemName, Room, RoomName } from "@/types";
import { persistentStore } from "./utils";

export type StoredItem = {
	bundle: BundleName;
	item: ItemName;
	quantity: number;
};

export const bundleStore = persistentStore<{
	[key in BundleName]?: string[];
}>("storedItems", {});

export const storeItem = (bundleName: BundleName, itemName: string) => {
	const [storedItems, setStoredItems] = bundleStore;

	setStoredItems(bundleName, [...(storedItems[bundleName] ?? []), itemName]);
};

export const unstoreItem = (bundleName: BundleName, itemName: string) => {
	const [storedItems, setStoredItems] = bundleStore;

	setStoredItems(
		bundleName,
		storedItems[bundleName]?.filter((item) => item !== itemName)
	);
};

/**
 * GETTERS
 */
const [storedItems] = bundleStore;

export const isBundleComplete = (bundleName: BundleName) => {
	const itemsStoredInBundle = storedItems[bundleName]?.length ?? 0;

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
