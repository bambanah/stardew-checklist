import { ITEMS } from "@/constants/items";
import { storedItems, storeItem, unstoreItem } from "@/store/item-store";
import type { BundleItem, BundleName } from "@/types";
import { useStore } from "@nanostores/solid";
import classNames from "classnames";
import {
	FaRegularCircle,
	FaRegularCircleCheck,
	FaRegularCircleQuestion,
} from "solid-icons/fa";
import SourceTooltip from "./atoms/SourceTooltip";
import SeasonDisplay from "./SeasonDisplay";

interface Props {
	bundleName: BundleName;
	item: BundleItem;
}

export default function BundleItem(props: Props) {
	const $storedItems = useStore(storedItems);

	let tooltipRef: HTMLDivElement | undefined;

	const itemId = () =>
		typeof props.item === "string" ? props.item : props.item.item;
	const quantity = () =>
		typeof props.item === "string" ? 1 : props.item.quantity ?? 1;
	const itemDetails = () => ITEMS[itemId()];

	const isStored = () => !!$storedItems()[props.bundleName]?.items[itemId()];

	const showTooltip = (show = false) => {
		if (tooltipRef) tooltipRef.style.display = show ? "block" : "none";
	};

	return (
		<>
			<button
				onClick={() =>
					isStored()
						? unstoreItem(props.bundleName, itemId())
						: storeItem(props.bundleName, itemId())
				}
				class={classNames([
					"flex relative items-center justify-between gap-2 border-2 p-2 w-full rounded transition-colors",
					isStored() ? "border-green-700" : "",
				])}
			>
				<div class="flex items-center gap-2">
					{isStored() ? <FaRegularCircleCheck /> : <FaRegularCircle />}
					<span class="font-medium">
						{itemDetails().name} {quantity() > 1 && `(${quantity()})`}
					</span>
				</div>

				<span class="flex items-center gap-2">
					{itemDetails().seasons.length < 4 && (
						<SeasonDisplay seasons={itemDetails().seasons} />
					)}
					<FaRegularCircleQuestion
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => showTooltip(false)}
					/>
				</span>

				<SourceTooltip ref={tooltipRef} source={itemDetails().source} />
			</button>
		</>
	);
}
