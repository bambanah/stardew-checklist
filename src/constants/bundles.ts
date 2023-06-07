import type { Bundle } from "@/types";

// If bundle has a different reward when remixed:
// reward: ["Normal", "Remixed"]
export const BUNDLES = {
	spring_foraging: {
		name: "Spring Foraging Bundle",
		reward: "Spring Seeds (30)",
		items: ["wild_horseradish", "daffodil", "leek", "dandelion"],
		items_remixed: [
			"wild_horseradish",
			"daffodil",
			"leek",
			"dandelion",
			"spring_onion",
		],
		items_required: 4,
	},
	summer_foraging: {
		name: "Summer Foraging Bundle",
		reward: "Summer Seeds (30)",
		items: ["grape", "spice_berry", "sweet_pea"],
		items_required: 3,
	},
	fall_foraging: {
		name: "Fall Foraging Bundle",
		reward: "Fall Seeds (30)",
		items: ["common_mushroom", "wild_plum", "hazelnut", "blackberry"],
		items_required: 4,
	},
	winter_foraging: {
		name: "Winter Foraging Bundle",
		reward: "Winter Seeds (30)",
		items: ["winter_root", "crystal_fruit", "snow_yam", "crocus"],
		items_remixed: [
			"winter_root",
			"crystal_fruit",
			"snow_yam",
			"crocus",
			"holly",
		],
		items_required: 4,
	},
	construction: {
		name: "Construction Bundle",
		reward: "Charcoal Kiln",
		items: [
			{ item: "wood", quantity: 99 },
			{ item: "wood", quantity: 99 },
			{ item: "stone", quantity: 99 },
			{ item: "hardwood", quantity: 10 },
		],
		items_required: 4,
	},
	sticky: {
		name: "Sticky Bundle",
		reward: "Charcoal Kiln",
		items: [],
		items_remixed: [{ item: "sap", quantity: 500 }],
		items_required: 1,
	},
	exotic_foraging: {
		name: "Exotic Foraging Bundle",
		reward: "Autumn's Bounty (5)",
		items: [
			"coconut",
			"cactus_fruit",
			"cave_carrot",
			"red_mushroom",
			"purple_mushroom",
			"maple_syrup",
			"oak_resin",
			"pine_tar",
			"morel",
		],
		items_required: 5,
	},
	wild_medicine: {
		name: "Wild Medicine Bundle",
		reward: "Cookout Kit (2)",
		items: [],
		items_remixed: [
			{ item: "purple_mushroom", quantity: 5 },
			{ item: "fiddlehead_fern", quantity: 5 },
			{ item: "white_algae", quantity: 5 },
			{ item: "hops", quantity: 5 },
		],
		items_required: 3,
	},
	spring_crops: {
		name: "Spring Crops Bundle",
		reward: "Speed-Gro (20)",
		items: ["parsnip", "green_bean", "cauliflower", "potato"],
		items_required: 4,
	},
	summer_crops: {
		name: "Summer Crops Bundle",
		reward: "Quality Sprinkler",
		items: ["tomato", "hot_pepper", "blueberry", "melon"],
		items_required: 4,
	},
	fall_crops: {
		name: "Fall Crops Bundle",
		reward: "Bee House",
		items: ["corn", "eggplant", "pumpkin", "yam"],
		items_required: 4,
	},
	quality_crops: {
		name: "Quality Crops Bundle",
		reward: "Preserves Jar",
		items: [
			{ item: "parsnip", quantity: 5, quality: "gold" },
			{ item: "melon", quantity: 5, quality: "gold" },
			{ item: "pumpkin", quantity: 5, quality: "gold" },
			{ item: "corn", quantity: 5, quality: "gold" },
		],
		items_remixed: [
			{ item: "parsnip", quantity: 5, quality: "gold" },
			{ item: "green_bean", quantity: 5, quality: "gold" },
			{ item: "potato", quantity: 5, quality: "gold" },
			{ item: "cauliflower", quantity: 5, quality: "gold" },
			{ item: "melon", quantity: 5, quality: "gold" },
			{ item: "blueberry", quantity: 5, quality: "gold" },
			{ item: "hot_pepper", quantity: 5, quality: "gold" },
			{ item: "pumpkin", quantity: 5, quality: "gold" },
			{ item: "yam", quantity: 5, quality: "gold" },
			{ item: "eggplant", quantity: 5, quality: "gold" },
			{ item: "corn", quantity: 5, quality: "gold" },
		],
		items_required: 3,
	},
	rare_crops: {
		name: "Rare Crops Bundle",
		reward: "Preserves Jar",
		items: [],
		items_remixed: ["ancient_fruit", "sweet_gem_berry"],
		items_required: 1,
	},
	animal: {
		name: "Animal Bundle",
		reward: "Cheese Press",
		items: [
			"large_milk",
			"large_egg_brown",
			"large_egg_white",
			"large_goat_milk",
			"wool",
			"duck_egg",
		],
		items_required: 5,
	},
	fish_farmers: {
		name: "Fish Farmer's Bundle",
		reward: "Worm Bin",
		items: [],
		items_remixed: [
			{ item: "roe", quantity: 15 },
			{ item: "aged_roe", quantity: 15 },
			"squid_ink",
		],
		items_required: 2,
	},
	garden: {
		name: "Garden Bundle",
		reward: "Quality Sprinkler",
		items: [],
		items_remixed: [
			"tulip",
			"blue_jazz",
			"summer_spangle",
			"sunflower",
			"fairy_rose",
		],
		items_required: 4,
	},
	artisan: {
		name: "Artisan Bundle",
		reward: "Keg",
		items: [
			"truffle_oil",
			"cloth",
			"goat_cheese",
			"cheese",
			"honey",
			"jelly",
			"apple",
			"apricot",
			"orange",
			"peach",
			"pomegranate",
			"cherry",
		],
		items_required: 6,
	},
	brewers: {
		name: "Brewer's Bundle",
		reward: "Keg",
		items: [],
		items_remixed: ["mead", "pale_ale", "wine", "juice", "green_tea"],
		items_required: 4,
	},
	river_fish: {
		name: "River Fish Bundle",
		reward: "Bait (30)",
		items: ["sunfish", "catfish", "shad", "tiger_trout"],
		items_required: 4,
	},
	lake_fish: {
		name: "Lake Fish Bundle",
		reward: "Dressed Spinner",
		items: ["largemouth_bass", "carp", "bullhead", "sturgeon"],
		items_required: 4,
	},
	ocean_fish: {
		name: "Ocean Fish Bundle",
		reward: "Warp Totem: Beach (5)",
		items: ["sardine", "tuna", "red_snapper", "tilapia"],
		items_required: 4,
	},
	night_fishing: {
		name: "Night Fishing Bundle",
		reward: "Small Glow Ring",
		items: ["walleye", "bream", "eel"],
		items_required: 3,
	},
	crab_pot: {
		name: "Crab Pot Bundle",
		reward: "Crab Pot (3)",
		items: [
			"lobster",
			"crayfish",
			"crab",
			"cockle",
			"mussel",
			"shrimp",
			"snail",
			"periwinkle",
			"oyster",
			"clam",
		],
		items_required: 5,
	},
	specialty_fish: {
		name: "Specialty Fish Bundle",
		reward: ["Dish O' The Sea (5)", "Dish O' The Sea"],
		items: ["pufferfish", "ghostfish", "sandfish", "woodskip"],
		items_required: 4,
	},
	quality_fish: {
		name: "Quality Fish Bundle",
		reward: "Dish O' The Sea",
		items: [],
		items_remixed: [
			{ item: "largemouth_bass", quality: "gold" },
			{ item: "shad", quality: "gold" },
			{ item: "tuna", quality: "gold" },
			{ item: "walleye", quality: "gold" },
		],
		items_required: 4,
	},
	master_fishers: {
		name: "Master Fisher's Bundle",
		reward: "Dish O' The Sea",
		items: [],
		items_remixed: ["lava_eel", "scorpion_carp", "octopus", "blobfish"],
		items_required: 2,
	},
	blacksmiths: {
		name: "Blacksmith's Bundle",
		reward: "Furnace",
		items: ["copper_bar", "iron_bar", "gold_bar"],
		items_required: 3,
	},
	geologists: {
		name: "Geologist's Bundle",
		reward: "Omni Geode (5)",
		items: ["quartz", "earth_crystal", "frozen_tear", "fire_quartz"],
		items_required: 4,
	},
	adventurers: {
		name: "Adventurers's Bundle",
		reward: "Small Magnet Ring",
		items: [
			{ item: "slime", quantity: 99 },
			{ item: "bat_wing", quantity: 10 },
			"solar_essence",
			"void_essence",
		],
		items_remixed: [
			{ item: "slime", quantity: 99 },
			{ item: "bat_wing", quantity: 10 },
			"solar_essence",
			"void_essence",
			{ item: "bone_fragment", quantity: 10 },
		],
		items_required: 2,
	},
	treasure_hunters: {
		name: "Treasure Hunter's Bundle",
		reward: "Lucky Lunch",
		items: [],
		items_remixed: [
			"amethyst",
			"aquamarine",
			"diamond",
			"emerald",
			"ruby",
			"topaz",
		],
		items_required: 5,
	},
	engineers: {
		name: "Engineer's Bundle",
		reward: "Furnace",
		items: [],
		items_remixed: [
			"iridium_ore",
			"battery_pack",
			{ item: "refined_quartz", quantity: 5 },
		],
		items_required: 3,
	},
	chefs: {
		name: "Chef's Bundle",
		reward: "Pink Cake (3)",
		items: [
			"maple_syrup",
			"fiddlehead_fern",
			"truffle",
			"poppy",
			"maki_roll",
			"fried_egg",
		],
		items_required: 6,
	},
	dye: {
		name: "Dye Bundle",
		reward: "Seed Maker",
		items: [
			"red_mushroom",
			"sea_urchin",
			"sunflower",
			"duck_feather",
			"aquamarine",
			"red_cabbage",
		],
		items_remixed: [
			"red_mushroom",
			"beet",
			"sea_urchin",
			"amaranth",
			"sunflower",
			"starfruit",
			"duck_feather",
			"cactus_fruit",
			"aquamarine",
			"blueberry",
			"red_cabbage",
			"iridium_bar",
		],
		items_required: 6,
	},
	field_research: {
		name: "Field Research Bundle",
		reward: "Recycling Machine",
		items: ["purple_mushroom", "nautilus_shell", "chub", "frozen_geode"],
		items_required: 4,
	},
	fodder: {
		name: "Fodder Bundle",
		reward: "Heater",
		items: [
			{ item: "wheat", quantity: 10 },
			{ item: "hay", quantity: 10 },
			{ item: "apple", quantity: 3 },
		],
		items_required: 3,
	},
	enchanters: {
		name: "Enchanter's Bundle",
		reward: "Gold Bar (5)",
		items: ["oak_resin", "wine", "rabbits_foot", "pomegranate"],
		items_required: 4,
	},
	childrens: {
		name: "Children's Bundle",
		reward: "Battery Pack (3)",
		items: [],
		items_remixed: [
			{ item: "salmonberry", quantity: 10 },
			"cookie",
			"ancient_doll",
			"ice_cream",
		],
		items_required: 3,
	},
	foragers: {
		name: "Forager's Bundle",
		reward: "Tapper (3)",
		items: [],
		items_remixed: [
			{ item: "salmonberry", quantity: 50 },
			{ item: "blackberry", quantity: 50 },
			{ item: "wild_plum", quantity: 20 },
		],
		items_required: 2,
	},
	home_cooks: {
		name: "Home Cook's Bundle",
		reward: "Complete Breakfast (5)",
		items: [],
		items_remixed: [
			{ item: "egg", quantity: 10 },
			{ item: "milk", quantity: 10 },
			{ item: "wheat_flour", quantity: 100 },
		],
		items_required: 3,
	},
	"2500": {
		name: "2,500 Bundle",
		reward: "Chocolate Cake (3)",
		items: ["2500_gold"],
		items_required: 1,
	},
	"5000": {
		name: "5,500 Bundle",
		reward: "Quality Fertilizer (30)",
		items: ["5000_gold"],
		items_required: 1,
	},
	"10000": {
		name: "10,000 Bundle",
		reward: "Lightning Rod",
		items: ["10000_gold"],
		items_required: 1,
	},
	"25000": {
		name: "25,000 Bundle",
		reward: "Crystalarium",
		items: ["25000_gold"],
		items_required: 1,
	},
	missing: {
		name: "The Missing Bundle",
		reward: "Movie Theater",
		items: [
			{ item: "wine", quality: "silver" },
			"dinosaur_mayonnaise",
			"prismatic_shard",
			{ item: "ancient_fruit", quality: "gold" },
			{ item: "void_salmon", quality: "gold" },
			"caviar",
		],
		items_required: 5,
	},
} as const satisfies {
	[key: string]: Bundle;
};
