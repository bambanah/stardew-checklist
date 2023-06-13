import { ITEMS } from "@/constants/items";
import { storedItems, storeItem, unstoreItem } from "@/store/item-store";
import type { BundleItem, BundleName } from "@/types";
import { useStore } from "@nanostores/solid";
import classNames from "classnames";
import { FaRegularCircle, FaRegularCircleCheck } from "solid-icons/fa";
import SeasonDisplay from "./SeasonDisplay";

interface Props {
	bundleName: BundleName;
	item: BundleItem;
}

export default function BundleItem(props: Props) {
	const $storedItems = useStore(storedItems);

	const itemId = () =>
		typeof props.item === "string" ? props.item : props.item.item;
	const quantity = () =>
		typeof props.item === "string" ? 1 : props.item.quantity ?? 1;
	const itemDetails = () => ITEMS[itemId()];

	const isStored = () => !!$storedItems()[props.bundleName]?.items[itemId()];

	return (
		<button
			onClick={() =>
				isStored()
					? unstoreItem(props.bundleName, itemId())
					: storeItem(props.bundleName, itemId())
			}
			class={classNames([
				"flex items-center justify-between gap-2 border-2 p-2 w-full rounded transition-colors",
				isStored()
					? "border-green-700 hover:bg-neutral-100"
					: "hover:bg-neutral-100",
			])}
		>
			<div class="flex items-center gap-2">
				{isStored() ? <FaRegularCircleCheck /> : <FaRegularCircle />}
				<span class="font-medium">
					{itemDetails().name} {quantity() > 1 && `(${quantity()})`}
				</span>
			</div>
			{itemDetails().seasons.length < 4 && (
				<span>
					<SeasonDisplay seasons={itemDetails().seasons} />
				</span>
			)}
		</button>
	);
}
