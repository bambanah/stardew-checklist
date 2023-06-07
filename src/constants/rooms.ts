import { BUNDLES } from "./bundles";

export const ROOMS = {
	crafts_room: {
		name: "Crafts Room",
		reward: "Bridge Repair",
		bundles: [
			BUNDLES["spring_foraging"],
			BUNDLES["summer_foraging"],
			BUNDLES["fall_foraging"],
			BUNDLES["winter_foraging"],
			BUNDLES["construction"],
			BUNDLES["exotic_foraging"],
		],
		remixed_bundles: [
			BUNDLES["spring_foraging"],
			BUNDLES["summer_foraging"],
			BUNDLES["fall_foraging"],
			BUNDLES["winter_foraging"],
			[BUNDLES["construction"], BUNDLES["sticky"]],
			[BUNDLES["exotic_foraging"], BUNDLES["wild_medicine"]],
		],
	},
	pantry: {
		name: "Pantry",
		reward: "Greenhouse",
		bundles: [
			BUNDLES["spring_crops"],
			BUNDLES["summer_crops"],
			BUNDLES["fall_crops"],
			BUNDLES["quality_crops"],
			BUNDLES["animal"],
			BUNDLES["artisan"],
		],
		remixed_bundles: [
			BUNDLES["spring_crops"],
			BUNDLES["summer_crops"],
			BUNDLES["fall_crops"],
			[BUNDLES["quality_crops"], BUNDLES["rare_crops"]],
			[BUNDLES["animal"], BUNDLES["fish_farmers"], BUNDLES["garden"]],
			[BUNDLES["artisan"], BUNDLES["brewers"]],
		],
	},
	fish_tank: {
		name: "Fish Tank",
		reward: "Glittering Boulder Removed",
		bundles: [
			BUNDLES["river_fish"],
			BUNDLES["lake_fish"],
			BUNDLES["ocean_fish"],
			BUNDLES["night_fishing"],
			BUNDLES["crab_pot"],
			BUNDLES["specialty_fish"],
		],
		remixed_bundles: [
			BUNDLES["river_fish"],
			BUNDLES["lake_fish"],
			BUNDLES["ocean_fish"],
			BUNDLES["night_fishing"],
			BUNDLES["crab_pot"],
			[
				BUNDLES["specialty_fish"],
				BUNDLES["quality_fish"],
				BUNDLES["master_fishers"],
			],
		],
	},
	boiler_room: {
		name: "Boiler Room",
		reward: "Minecarts Required",
		bundles: [
			BUNDLES["blacksmiths"],
			BUNDLES["geologists"],
			BUNDLES["adventurers"],
		],
		remixed_bundles: {
			total: 3,
			bundles: [
				BUNDLES["blacksmiths"],
				BUNDLES["geologists"],
				BUNDLES["adventurers"],
				BUNDLES["treasure_hunters"],
				BUNDLES["engineers"],
			],
		},
	},
	bulletin_board: {
		name: "Bulletin Board",
		reward: "Friendship",
		bundles: [
			BUNDLES["chefs"],
			BUNDLES["dye"],
			BUNDLES["field_research"],
			BUNDLES["fodder"],
			BUNDLES["enchanters"],
		],
		remixed_bundles: {
			total: 5,
			bundles: [
				BUNDLES["chefs"],
				BUNDLES["dye"],
				BUNDLES["field_research"],
				BUNDLES["fodder"],
				BUNDLES["enchanters"],
				BUNDLES["childrens"],
				BUNDLES["foragers"],
				BUNDLES["home_cooks"],
			],
		},
	},
	vault: {
		name: "Vault",
		reward: "Bus Repair",
		bundles: [
			BUNDLES["2500"],
			BUNDLES["5000"],
			BUNDLES["10000"],
			BUNDLES["25000"],
		],
	},
} as const;
