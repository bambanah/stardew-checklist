import { persistentStore } from "@/store/utils";
import { RoomName, Season } from "@/types";

export type Settings = {
	bundleMode: "normal" | "remixed";
	collapsedRooms: RoomName[];
	filterSeason?: Season;
	filterSeasonExclusive?: boolean;
};

export const settingsStore = persistentStore<Settings>("settings", {
	bundleMode: "normal",
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
