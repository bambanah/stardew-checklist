import { persistentMap } from "@nanostores/persistent";

export type Settings = {
	hideCompleted: "true" | "false";
	hideSpoilers: "true" | "false";
	layoutStyle: "grid" | "card" | "list";
};

export const settings = persistentMap<Settings>("settings:", {
	hideCompleted: "false",
	hideSpoilers: "false",
	layoutStyle: "list",
});
