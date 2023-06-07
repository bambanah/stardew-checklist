import { persistentMap } from "@nanostores/persistent";

export type Settings = {
	bundleMode: "normal" | "remixed";
	hideCompleted: "true" | "false";
	hideSpoilers: "true" | "false";
	layoutStyle: "grid" | "card" | "list";
};

export const settings = persistentMap<Settings>("settings:", {
	bundleMode: "normal",
	hideCompleted: "false",
	hideSpoilers: "false",
	layoutStyle: "list",
});
