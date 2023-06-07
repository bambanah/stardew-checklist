import type { Season } from "./seasons";
import type { Skill } from "./skills";

type Items = {
	[key: string]: {
		name: string;
		seasons: readonly Season[];
		skills: readonly Skill[];
		source: string;
	};
};
export const ITEMS = {
	wild_horseradish: {
		name: "Wild Horseradish",
		seasons: ["spring"],
		skills: ["foraging"],
		source: "Foraging during Spring.",
	},
	daffodil: {
		name: "Daffodil",
		seasons: ["spring"],
		skills: ["foraging"],
		source:
			"Foraging during Spring. Buy from Pierre's Shop at the Flower Dance.",
	},
	leek: {
		name: "Leek",
		seasons: ["spring"],
		skills: ["foraging"],
		source: "Foraging during Spring.",
	},
	dandelion: {
		name: "Dandelion",
		seasons: ["spring"],
		skills: ["foraging"],
		source:
			"Foraging during Spring. Buy from Pierre's Shop at the Flower Dance.",
	},
	spring_onion: {
		name: "Spring Onion",
		seasons: ["spring"],
		skills: ["foraging"],
		source: "Foraging during Spring.",
	},
	grape: {
		name: "Grape",
		seasons: ["summer", "fall"],
		skills: ["foraging", "farming"],
		source: "Foraging during Summer.",
	},
	spice_berry: {
		name: "Spice Berry",
		seasons: ["summer"],
		skills: ["foraging"],
		source: "Foraging during Summer.",
	},
	sweet_pea: {
		name: "Sweet Pea",
		seasons: ["summer"],
		skills: ["foraging"],
		source: "Foraging during Summer.",
	},
	common_mushroom: {
		name: "Common Mushroom",
		seasons: ["fall"],
		skills: ["foraging"],
		source: "Foraging during Fall Or if you have the mushroom in your cave.",
	},
	wild_plum: {
		name: "Wild Plum",
		seasons: ["fall"],
		skills: ["foraging"],
		source: "Foraging during Fall.",
	},
	hazelnut: {
		name: "Hazelnut",
		seasons: ["fall"],
		skills: ["foraging"],
		source: "Foraging during Fall.",
	},
	blackberry: {
		name: "Blackberry",
		seasons: ["fall"],
		skills: ["foraging"],
		source: "Foraging during Fall.",
	},
	winter_root: {
		name: "Winter Root",
		seasons: ["winter", "spring", "summer", "fall"],
		skills: ["foraging", "combat"],
		source:
			"Foraging during Winter or dropped by slimes on 41-79 Mines levels.",
	},
	crystal_fruit: {
		name: "Crystal Fruit",
		seasons: ["winter", "spring", "summer", "fall"],
		skills: ["foraging", "combat"],
		source:
			"Foraging during Winter or dropped by coal sprites on 41-79 Mines levels.",
	},
	snow_yam: {
		name: "Snow Yam",
		seasons: ["winter"],
		skills: ["foraging"],
		source: "Foraging during Winter (Using a Hoe outside the farm).",
	},
	crocus: {
		name: "Crocus",
		seasons: ["winter"],
		skills: ["foraging"],
		source: "Foraging during Winter.",
	},
	holly: {
		name: "Holly",
		seasons: ["winter"],
		skills: ["foraging"],
		source: "Foraging during Winter.",
	},
	wood: {
		name: "Wood",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["foraging"],
		source: "Chopping trees or logs using an axe.",
	},
	stone: {
		name: "Stone",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source: "Smashing stones with a pickaxe.",
	},
	hardwood: {
		name: "Hardwood",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["foraging", "mining"],
		source:
			"Chopping large stumps with an upgraded axe. Also in crates in the Mines",
	},
	sap: {
		name: "Sap",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["foraging"],
		source: "Chopping Trees, drop from Slimes.",
	},
	coconut: {
		name: "Coconut",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["foraging"],
		source: "Found in the desert.",
	},
	cactus_fruit: {
		name: "Cactus Fruit",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["foraging"],
		source: "Found in the desert.",
	},
	cave_carrot: {
		name: "Cave Carrot",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source:
			"In boxes inside the mines or using the hoe on soil spots in the Mines.",
	},
	red_mushroom: {
		name: "Red Mushroom",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["foraging", "mining"],
		source:
			"Can be found in the mines or in the farm cave if you selected the mushroom perk.",
	},
	purple_mushroom: {
		name: "Purple Mushroom",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["foraging", "mining"],
		source:
			"Can be found in the mines or in the farm cave if you selected the mushroom perk.",
	},
	white_algae: {
		name: "White Algae",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing", "combat"],
		source:
			"Can be found in the mines or in the farm cave if you selected the mushroom perk.",
	},
	hops: {
		name: "Hops",
		seasons: ["summer"],
		skills: ["farming"],
		source:
			"Can be found in the mines or in the farm cave if you selected the mushroom perk.",
	},
	maple_syrup: {
		name: "Maple Syrup",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["foraging"],
		source: "Harvested from maple trees using a Tapper.",
	},
	oak_resin: {
		name: "Oak Resin",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["foraging"],
		source: "Harvested from oak trees using a Tapper.",
	},
	pine_tar: {
		name: "Pine Tar",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["foraging"],
		source: "Harvested from pine trees using a Tapper.",
	},
	morel: {
		name: "Morel",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["foraging"],
		source: "In the farm cave if you selected the mushroom perk",
	},
	parsnip: {
		name: "Parsnip",
		seasons: ["spring"],
		skills: ["farming"],
		source: "Crops during Spring.",
	},
	green_bean: {
		name: "Green Bean",
		seasons: ["spring"],
		skills: ["farming"],
		source: "Crops during Spring.",
	},
	cauliflower: {
		name: "Cauliflower",
		seasons: ["spring"],
		skills: ["farming"],
		source: "Crops during Spring.",
	},
	potato: {
		name: "Potato",
		seasons: ["spring"],
		skills: ["farming"],
		source: "Crops during Spring.",
	},
	tomato: {
		name: "Tomato",
		seasons: ["summer"],
		skills: ["farming"],
		source: "Crops during Summer.",
	},
	hot_pepper: {
		name: "Hot Pepper",
		seasons: ["summer"],
		skills: ["farming"],
		source: "Crops during Summer.",
	},
	blueberry: {
		name: "Blueberry",
		seasons: ["summer"],
		skills: ["farming"],
		source: "Crops during Summer.",
	},
	melon: {
		name: "Melon",
		seasons: ["summer"],
		skills: ["farming"],
		source: "Crops during Summer.",
	},
	corn: {
		name: "Corn",
		seasons: ["summer", "fall"],
		skills: ["farming"],
		source: "Crops during Summer and Fall.",
	},
	eggplant: {
		name: "Eggplant",
		seasons: ["fall"],
		skills: ["farming"],
		source: "Crops during Fall.",
	},
	pumpkin: {
		name: "Pumpkin",
		seasons: ["fall"],
		skills: ["farming"],
		source: "Crops during Fall.",
	},
	yam: {
		name: "Yam",
		seasons: ["fall"],
		skills: ["farming"],
		source: "Crops during Fall.",
	},
	ancient_fruit: {
		name: "Ancient Fruit",
		seasons: ["spring", "summer", "fall"],
		skills: ["farming"],
		source:
			"Crops during Spring, Summer, and Fall. Seed obtained from Ancient Seed artifact.",
	},
	sweet_gem_berry: {
		name: "Sweet Gem Berry",
		seasons: ["fall"],
		skills: ["farming"],
		source: "Crops during Fall. Can be purchased from the Traveling Cart.",
	},
	large_milk: {
		name: "Large Milk",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Cows",
	},
	large_egg_brown: {
		name: "Large Egg (Brown)",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Chickens",
	},
	large_egg_white: {
		name: "Large Egg (White)",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Chickens",
	},
	large_goat_milk: {
		name: "Large Goat Milk",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Goats",
	},
	wool: {
		name: "Wool",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Sheep, Rabbits",
	},
	duck_egg: {
		name: "Duck Egg",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Ducks",
	},
	roe: {
		name: "Roe",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Fish Pond product from many Fish.",
	},
	aged_roe: {
		name: "Roe",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Preserves Jar product from Roe",
	},
	caviar: {
		name: "Roe",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Preserves Jar product from Sturgeon Roe",
	},
	squid_ink: {
		name: "Squid Ink",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source:
			"Fish Pond product from Squid and Midnight Squid. Drop from Squid Kid.",
	},
	tulip: {
		name: "Tulip",
		seasons: ["spring"],
		skills: ["farming"],
		source: "Spring Crops",
	},
	blue_jazz: {
		name: "Blue Jazz",
		seasons: ["spring"],
		skills: ["farming"],
		source: "Spring Crops",
	},
	summer_spangle: {
		name: "Summer Spangle",
		seasons: ["summer"],
		skills: ["farming"],
		source: "Summer Crops",
	},
	fairy_rose: {
		name: "Fairy Rose",
		seasons: ["fall"],
		skills: ["farming"],
		source: "Fall Crops",
	},
	truffle_oil: {
		name: "Truffle Oil",
		seasons: ["spring", "summer", "fall"],
		skills: ["farming"],
		source: "Made from Truffles. Requires Oil Maker",
	},
	cloth: {
		name: "Cloth",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming", "foraging"],
		source:
			"Made from Wool. Requires Loom. Can also be rarely obtained by Recycling Soggy Newspaper.",
	},
	goat_cheese: {
		name: "Goat Cheese",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Made from Goat Milk. Requires Cheese Press.",
	},
	cheese: {
		name: "Cheese",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Made from Cow Milk. Requires Cheese Press",
	},
	honey: {
		name: "Honey",
		seasons: ["spring", "summer", "fall"],
		skills: ["farming"],
		source: "Produced by Bees. Requires Beehive.",
	},
	jelly: {
		name: "Jelly",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming", "foraging"],
		source: "Made from any Fruit. Requires Preserves Jar.",
	},
	mead: {
		name: "Mead",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Keg product from Honey.",
	},
	pale_ale: {
		name: "Pale Ale",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Keg product from Hops.",
	},
	juice: {
		name: "Juice",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Keg product from Vegetables.",
	},
	green_tea: {
		name: "Green Tea",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Keg product from Tea Leaves.",
	},
	apple: {
		name: "Apple",
		seasons: ["fall"],
		skills: ["farming"],
		source: "Gathered from Apple Trees during Fall.",
	},
	apricot: {
		name: "Apricot",
		seasons: ["spring"],
		skills: ["farming"],
		source: "Gathered from Apricot Trees during Spring.",
	},
	orange: {
		name: "Orange",
		seasons: ["summer", "spring", "fall", "winter"],
		skills: ["farming", "foraging"],
		source:
			"Gathered from Orange Trees during Summer or found in farm cave if fruit perk selected.",
	},
	peach: {
		name: "Peach",
		seasons: ["summer"],
		skills: ["farming"],
		source: "Gathered from Peach Trees during Summer.",
	},
	pomegranate: {
		name: "Pomegranate",
		seasons: ["fall"],
		skills: ["farming"],
		source: "Gathered from Pomegranate Trees during Fall.",
	},
	cherry: {
		name: "Cherry",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming", "foraging"],
		source:
			"Gathered from Cherry Trees during Spring or found in farm cave if fruit perk selected.",
	},
	sunfish: {
		name: "Sunfish",
		seasons: ["spring", "summer"],
		skills: ["fishing"],
		source: "Found in Rivers, Daytime, Spring, and Summer.",
	},
	catfish: {
		name: "Catfish",
		seasons: ["spring", "fall"],
		skills: ["fishing"],
		source: "Found in Rivers, Anytime, Spring and Fall. Only when raining.",
	},
	shad: {
		name: "Shad",
		seasons: ["spring", "summer", "fall"],
		skills: ["fishing"],
		source:
			"Found in Rivers, Daytime, Spring, Summer, and Fall. Only when raining.",
	},
	tiger_trout: {
		name: "Tiger Trout",
		seasons: ["fall", "winter"],
		skills: ["fishing"],
		source: "Found in Rivers, Daytime (Early afternoon), Fall and Winter.",
	},
	largemouth_bass: {
		name: "Largemouth Bass",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source: "Found in Lakes, Daytime, All Seasons.",
	},
	carp: {
		name: "Carp",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source: "Found in Lakes, Anytime, All Seasons.",
	},
	bullhead: {
		name: "Bullhead",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source: "Found in Lakes, Anytime, All Seasons.",
	},
	sturgeon: {
		name: "Sturgeon",
		seasons: ["summer", "winter"],
		skills: ["fishing"],
		source: "Found in Lakes, Daytime, Summer and Winter.",
	},
	sardine: {
		name: "Sardine",
		seasons: ["spring", "fall", "winter"],
		skills: ["fishing"],
		source: "Found in the Ocean, Daytime, Spring, Fall, and Winter.",
	},
	tuna: {
		name: "Tuna",
		seasons: ["summer", "winter"],
		skills: ["fishing"],
		source: "Found in the Ocean, Daytime, Summer and Winter.",
	},
	red_snapper: {
		name: "Red Snapper",
		seasons: ["summer", "fall"],
		skills: ["fishing"],
		source: "Found in the Ocean, Daytime, Summer and Fall. Only when raining.",
	},
	tilapia: {
		name: "Tilapia",
		seasons: ["summer", "fall"],
		skills: ["fishing"],
		source: "Found in the Ocean, Daytime, Summer and Fall.",
	},
	walleye: {
		name: "Walleye",
		seasons: ["fall", "winter"],
		skills: ["fishing"],
		source: "Found in Rivers, Nighttime, Fall and Winter. Only when raining.",
	},
	bream: {
		name: "Bream",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source: "Found in Rivers, Nighttime, All Seasons.",
	},
	eel: {
		name: "Eel",
		seasons: ["spring", "fall"],
		skills: ["fishing"],
		source: "Found in the Ocean, Nighttime, Spring or Fall. Only when raining.",
	},
	lobster: {
		name: "Lobster",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source: "Gathered from Crab Pots.",
	},
	crayfish: {
		name: "Crayfish",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source: "Gathered from Crab Pot in rivers during any season.",
	},
	crab: {
		name: "Crab",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing", "combat"],
		source:
			"Gathered from Crab Pots. Also drops from killing hermit crabs in The Mines.",
	},
	cockle: {
		name: "Cockle",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing", "foraging"],
		source: "Gathered from Crab Pots. Can be foraged from areas with sand.",
	},
	mussel: {
		name: "Mussel",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing", "foraging"],
		source: "Gathered from Crab Pots. Can be foraged from areas with sand.",
	},
	shrimp: {
		name: "Shrimp",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source: "Gathered from Crab Pots.",
	},
	snail: {
		name: "Snail",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source: "Gathered from Crab Pots.",
	},
	periwinkle: {
		name: "Periwinkle",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source: "Gathered from Crab Pots.",
	},
	oyster: {
		name: "Oyster",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing", "foraging"],
		source: "Gathered from Crab Pots. Can be foraged from areas with sand.",
	},
	clam: {
		name: "Clam",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing", "foraging"],
		source: "Gathered from Crab Pots. Can be foraged from areas with sand.",
	},
	pufferfish: {
		name: "Pufferfish",
		seasons: ["summer"],
		skills: ["fishing"],
		source:
			"Found in the Ocean, Early Afternoon, Summer. May also be purchased from the Traveling Cart.",
	},
	ghostfish: {
		name: "Ghostfish",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing", "combat"],
		source:
			"Found in ponds in The Mines, Anytime, All Seasons. May also be dropped by Ghosts.",
	},
	sandfish: {
		name: "Sandfish",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing", "combat"],
		source:
			"Found in the pond at Calico Desert. May also be purchased from the Traveling Cart.",
	},
	woodskip: {
		name: "Woodskip",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source:
			"Found in the Secret Woods, Anytime, All Seasons. May also be purchased from the Traveling Cart.",
	},
	lava_eel: {
		name: "Lava Eel",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source: "The Mines on the 100th floor, all seasons",
	},
	scorpion_carp: {
		name: "Scorpion Carp",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source: "The Desert during all seasons",
	},
	octopus: {
		name: "Octopus",
		seasons: ["summer"],
		skills: ["fishing"],
		source:
			"Ocean during summer, rarely in Garbage Cans, submarine ride at the Night Market",
	},
	blobfish: {
		name: "Blobfish",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source: "Submarine ride at the Night Market",
	},
	void_salmon: {
		name: "Void Salmon",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source: "Witch's Swamp",
	},
	copper_bar: {
		name: "Copper Bar",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source: "Smelting copper ore in the furnace.",
	},
	iron_bar: {
		name: "Iron Bar",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source: "Smelting iron ore in the furnace.",
	},
	gold_bar: {
		name: "Gold Bar",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source: "Smelting gold ore in the furnace.",
	},
	quartz: {
		name: "Quartz",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source: "Found on all levels of The Mines and in geodes.",
	},
	earth_crystal: {
		name: "Earth Crystal",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source: "Found on levels 1 - 39 of The Mines and in geodes.",
	},
	frozen_tear: {
		name: "Frozen Tear",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source: "Found on levels 40 - 79 of The Mines and in geodes.",
	},
	fire_quartz: {
		name: "Fire Quartz",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source: "Found on levels 80 - 120 of The Mines and in magma geodes.",
	},
	slime: {
		name: "Slime",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["combat"],
		source: "Dropped by Slimes in The Mines.",
	},
	bat_wing: {
		name: "Bat Wing",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["combat"],
		source: "Dropped by Bats in The Mines.",
	},
	solar_essence: {
		name: "Solar Essence",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["combat"],
		source: "Dropped by Ghosts in The Mines.",
	},
	void_essence: {
		name: "Void Essence",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["combat"],
		source: "Dropped by Shadow Brutes in The Mines.",
	},
	bone_fragment: {
		name: "Bone Fragment",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["combat"],
		source:
			"Dropped by Skeletons in The Mines, crates and barrels in Skull Cavern, Arfifact Spots",
	},
	amethyst: {
		name: "Amethyst",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining", "fishing"],
		source: "Found in The Mines; Panning; Fishing Treasure Chests",
	},
	diamond: {
		name: "Diamond",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining", "fishing"],
		source: "Found in The Mines; Panning; Fishing Treasure Chests",
	},
	emerald: {
		name: "Emerald",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining", "fishing"],
		source: "Found in The Mines; Panning; Fishing Treasure Chests",
	},
	ruby: {
		name: "Ruby",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining", "fishing"],
		source: "Found in The Mines; Panning; Fishing Treasure Chests",
	},
	topaz: {
		name: "Topaz",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining", "fishing"],
		source: "Found in The Mines; Panning; Fishing Treasure Chests",
	},
	iridium_ore: {
		name: "Iridium Ore",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source: "The Mines, Quarry, Skull Cavern, Magma Geode, Omni Geode",
	},
	battery_pack: {
		name: "Battery Pack",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: [],
		source: "Lightning Rod, purchase from Traveling Cart",
	},
	refined_quartz: {
		name: "Refined Quartz",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source:
			"Smelting Quartz or Fire Quartz in furnace; Broken Glasses or Broken CD in Recyling Machine",
	},
	fiddlehead_fern: {
		name: "Fiddlehead Fern",
		seasons: ["summer"],
		skills: ["foraging"],
		source: "Found in the Secret Woods during Summer.",
	},
	truffle: {
		name: "Truffle",
		seasons: ["spring", "summer", "fall"],
		skills: ["farming"],
		source: "Found by pigs while grazing outdoors.",
	},
	poppy: {
		name: "Poppy",
		seasons: ["summer"],
		skills: ["farming"],
		source: "Crops during Summer.",
	},
	maki_roll: {
		name: "Maki Roll",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source:
			"Acquired by Cooking. Recipe available from the cooking channel on Summer 21 during odd years.",
	},
	fried_egg: {
		name: "Fried Egg",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Acquired by Cooking.",
	},
	sea_urchin: {
		name: "Sea Urchin",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["foraging"],
		source:
			"Can be foraged on the far right side of the beach, accessible after using 300 wood to fix the bridge.",
	},
	sunflower: {
		name: "Sunflower",
		seasons: ["summer", "fall"],
		skills: ["farming"],
		source: "Crops during Summer and Fall.",
	},
	duck_feather: {
		name: "Duck Feather",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source:
			"Produced by ducks in the coop (similar to how chickens and ducks lay eggs)",
	},
	aquamarine: {
		name: "Aquamarine",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source: "Can be found in stones and boxes in The Mines.",
	},
	red_cabbage: {
		name: "Red Cabbage",
		seasons: ["summer"],
		skills: ["farming"],
		source:
			"Crops during the Summer. Seeds can be purchased from Pierre's Year 2 and onward. Can be purchased from the Traveling Cart",
	},
	nautilus_shell: {
		name: "Nautilus Shell",
		seasons: ["winter"],
		skills: ["foraging"],
		source: "Found by foraging from the beach in the Winter.",
	},
	chub: {
		name: "Chub",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["fishing"],
		source: "Can be found in the mountain lake and river during all seasons.",
	},
	frozen_geode: {
		name: "Frozen Geode",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source: "Found on levels 40-79 of The Mines.",
	},
	wheat: {
		name: "Wheat",
		seasons: ["summer", "fall"],
		skills: ["farming"],
		source: "Crops during Summer and Fall.",
	},
	hay: {
		name: "Hay",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source:
			"Purchase at Marnie's Ranch or Desert Trader, or harvest from Grass or Wheat using a scythe.",
	},
	wine: {
		name: "Wine",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming", "foraging"],
		source: "Fruit in a keg.",
	},
	rabbits_foot: {
		name: "Rabbit's Foot",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming", "combat"],
		source: "Dropped by Rabbits, or Serpent in Skull Cavern (0.8%).",
	},
	beet: {
		name: "Beet",
		seasons: ["fall"],
		skills: ["farming"],
		source: "Fall Crops, seeds purchased at Oasis",
	},
	amaranth: {
		name: "Amaranth",
		seasons: ["fall"],
		skills: ["farming"],
		source: "Fall Crops",
	},
	starfruit: {
		name: "Starfruit",
		seasons: ["summer"],
		skills: ["farming"],
		source: "Summer Crops, seeds purchased at Oasis",
	},
	iridium_bar: {
		name: "Iridium Bar",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source: "Iridium Ore smelted in a Furnace",
	},
	prismatic_shard: {
		name: "Prismatic Shard",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["mining"],
		source:
			"Mystic Stones (25%) in The Mines; Iridium Node (4%) in Skull Cavern; Fishing Treasure Chests",
	},
	salmonberry: {
		name: "Salmonberry",
		seasons: ["spring"],
		skills: ["foraging"],
		source: "Foraging during spring",
	},
	cookie: {
		name: "Cookie",
		seasons: [],
		skills: [],
		source: "Cooking recipe",
	},
	ancient_doll: {
		name: "Ancient Doll",
		seasons: [],
		skills: ["foraging", "combat"],
		source:
			"Artifact dug up from Mountain, Bus Stop, Forest, or Town; Fishing Treasure Chests",
	},
	ice_cream: {
		name: "Ice Cream",
		seasons: ["summer"],
		skills: [],
		source:
			"Cooking recipe; purchase from Ice Cream Stand during Summer, or from Oasis on Sundays",
	},
	egg: {
		name: "Egg (Any)",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Drop from Chickens",
	},
	milk: {
		name: "Milk (Any)",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Cows, Goats",
	},
	dinosaur_mayonnaise: {
		name: "Dinosaur Mayonnaise",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Dinosaur Egg in Mayonnaise Machine",
	},
	wheat_flour: {
		name: "Wheat Flour",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming"],
		source: "Mill product from Wheat, purchased from Pierre's",
	},
	"2500_gold": {
		name: "2,500 Gold",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming", "mining", "foraging", "fishing", "combat"],
		source: "Collect 2,500 Gold and turn in.",
	},
	"5000_gold": {
		name: "5,000 Gold",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming", "mining", "foraging", "fishing", "combat"],
		source: "Collect 5,000 Gold and turn in.",
	},
	"10000_gold": {
		name: "10,000 Gold",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming", "mining", "foraging", "fishing", "combat"],
		source: "Collect 10,000 Gold and turn in.",
	},
	"25000_gold": {
		name: "25,000 Gold",
		seasons: ["spring", "summer", "fall", "winter"],
		skills: ["farming", "mining", "foraging", "fishing", "combat"],
		source: "Collect 25,000 Gold and turn in.",
	},
} as const satisfies Items;

export type Item = keyof typeof ITEMS;
export type Quality = "regular" | "silver" | "gold" | "iridium";
