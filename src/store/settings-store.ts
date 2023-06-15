import { persistentStore } from "@/store/utils";
import { RoomName } from "@/types";

export type Settings = {
	bundleMode: "normal" | "remixed";
	hideCompleted: "true" | "false";
	hideSpoilers: "true" | "false";
	layoutStyle: "grid" | "card" | "list";
	collapsedRooms: RoomName[];
};

export const settingsStore = persistentStore<Settings>("settings", {
	bundleMode: "normal",
	hideCompleted: "false",
	hideSpoilers: "false",
	layoutStyle: "list",
	collapsedRooms: [],
});

export const toggleRoomCollapsed = (roomName: RoomName) => {
	const [state, setState] = settingsStore;

	if (state.collapsedRooms.includes(roomName)) {
		setState(
			"collapsedRooms",
			state.collapsedRooms.filter((room) => room !== roomName)
		);
	} else {
		setState("collapsedRooms", [...state.collapsedRooms, roomName]);
	}
};
