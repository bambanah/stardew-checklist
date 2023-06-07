import { persistentAtom } from "@nanostores/persistent";
import { atom, computed } from "nanostores";

export const storedItems = persistentAtom<Set<string>>(
	"storedItems",
	new Set<string>(),
	{
		encode: JSON.stringify,
		decode: JSON.parse,
	}
);

export const isItemStored = (itemId: string) => storedItems.get().has(itemId);
