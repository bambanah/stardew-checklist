import type { Room } from "@/types";

export const ROOMS = {
	crafts_room: {
		name: "Crafts Room",
		reward: "Bridge Repair",
		bundles: [
			"spring_foraging",
			"summer_foraging",
			"fall_foraging",
			"winter_foraging",
			"construction",
			"exotic_foraging",
		],
		remixed_bundles: [
			"spring_foraging",
			"summer_foraging",
			"fall_foraging",
			"winter_foraging",
			["construction", "sticky"],
			["exotic_foraging", "wild_medicine"],
		],
	},
	pantry: {
		name: "Pantry",
		reward: "Greenhouse",
		bundles: [
			"spring_crops",
			"summer_crops",
			"fall_crops",
			"quality_crops",
			"animal",
			"artisan",
		],
		remixed_bundles: [
			"spring_crops",
			"summer_crops",
			"fall_crops",
			["quality_crops", "rare_crops"],
			["animal", "fish_farmers", "garden"],
			["artisan", "brewers"],
		],
	},
	fish_tank: {
		name: "Fish Tank",
		reward: "Glittering Boulder Removed",
		bundles: [
			"river_fish",
			"lake_fish",
			"ocean_fish",
			"night_fishing",
			"crab_pot",
			"specialty_fish",
		],
		remixed_bundles: [
			"river_fish",
			"lake_fish",
			"ocean_fish",
			"night_fishing",
			"crab_pot",
			["specialty_fish", "quality_fish", "master_fishers"],
		],
	},
	boiler_room: {
		name: "Boiler Room",
		reward: "Minecarts Required",
		bundles: ["blacksmiths", "geologists", "adventurers"],
		remixed_bundles: {
			total: 3,
			bundles: [
				"blacksmiths",
				"geologists",
				"adventurers",
				"treasure_hunters",
				"engineers",
			],
		},
	},
	bulletin_board: {
		name: "Bulletin Board",
		reward: "Friendship",
		bundles: ["chefs", "dye", "field_research", "fodder", "enchanters"],
		remixed_bundles: {
			total: 5,
			bundles: [
				"chefs",
				"dye",
				"field_research",
				"fodder",
				"enchanters",
				"childrens",
				"foragers",
				"home_cooks",
			],
		},
	},
	vault: {
		name: "Vault",
		reward: "Bus Repair",
		bundles: ["2500", "5000", "10000", "25000"],
	},
} as const satisfies { [key: string]: Room };
