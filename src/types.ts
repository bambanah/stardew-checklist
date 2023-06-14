import type { ITEMS } from "@/constants/items";
import type { BUNDLES } from "@/constants/bundles";
import type { ROOMS } from "./constants/rooms";
import type { SEASONS } from "./constants/seasons";
import type { SKILLS } from "./constants/skills";

export type ItemName = keyof typeof ITEMS;
export type BundleName = keyof typeof BUNDLES;
export type RoomName = keyof typeof ROOMS;

export type Season = (typeof SEASONS)[number];
export type Skill = (typeof SKILLS)[number];

export type Quality = "regular" | "silver" | "gold" | "iridium";

export type BundleItem =
	| ItemName
	| {
			item: ItemName;
			id?: string;
			quantity?: number;
			quality?: Quality;
	  };
export type Bundle = {
	name: string;
	reward: string | readonly [string, string];
	items_required: number;
	items: readonly BundleItem[];
	items_remixed?: readonly BundleItem[];
};

export type Item = {
	name: string;
	seasons: readonly Season[];
	skills: readonly Skill[];
	source: string;
};

type RoomBundles = readonly (BundleName | readonly BundleName[])[];
export type Room = {
	name: string;
	reward: string;
	bundles: readonly BundleName[];
	remixed_bundles?:
		| RoomBundles
		| {
				total: number;
				bundles: RoomBundles;
		  };
};
