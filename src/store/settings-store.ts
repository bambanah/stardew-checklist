import { BundleName, RoomName } from "@/types";
import { persistentMap } from "@nanostores/persistent";
import { action } from "nanostores";

export type Settings = {
	bundleMode: "normal" | "remixed";
	hideCompleted: "true" | "false";
	hideSpoilers: "true" | "false";
	layoutStyle: "grid" | "card" | "list";
	collapsedRooms: RoomName[];
};

export const settingsStore = persistentMap<Settings>(
	"settings:",
	{
		bundleMode: "normal",
		hideCompleted: "false",
		hideSpoilers: "false",
		layoutStyle: "list",
		collapsedRooms: [],
	},
	{ encode: JSON.stringify, decode: JSON.parse }
);

export const toggleRoomCollapsed = action(
	settingsStore,
	"collapseRoom",
	(settingsStore, roomName: RoomName) => {
		if (settingsStore.get().collapsedRooms.includes(roomName)) {
			settingsStore.setKey(
				"collapsedRooms",
				settingsStore.get().collapsedRooms.filter((room) => room !== roomName)
			);
		} else {
			settingsStore.setKey("collapsedRooms", [
				...settingsStore.get().collapsedRooms,
				roomName,
			]);
		}
	}
);
