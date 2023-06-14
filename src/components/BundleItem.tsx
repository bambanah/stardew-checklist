import { ITEMS } from "@/constants/items";
import {
	isBundleComplete,
	isItemStored,
	storeItem,
	unstoreItem,
} from "@/store/item-store";
import type { BundleItem, BundleName } from "@/types";
import classNames from "classnames";
import {
	FaRegularCircle,
	FaRegularCircleQuestion,
	FaSolidCircleCheck,
} from "solid-icons/fa";
import SourceTooltip from "./atoms/SourceTooltip";
import SeasonDisplay from "./SeasonDisplay";

interface Props {
	bundleName: BundleName;
	item: BundleItem;
}

export default function BundleItem(props: Props) {
	let tooltipRef: HTMLDivElement | undefined;

	const itemId = () =>
		typeof props.item === "string" ? props.item : props.item.item;
	const itemStoreId = () =>
		typeof props.item === "string" ? props.item : props.item.id ?? itemId();
	const quantity = () =>
		typeof props.item === "string" ? 1 : props.item.quantity ?? 1;

	const itemDetails = () => ITEMS[itemId()];

	const isStored = () => isItemStored(props.bundleName, itemStoreId());

	const showTooltip = (show = false) => {
		if (tooltipRef) tooltipRef.style.display = show ? "block" : "none";
	};

	return (
		<>
			<button
				onClick={() =>
					isStored()
						? unstoreItem(props.bundleName, itemStoreId())
						: storeItem(props.bundleName, itemStoreId())
				}
				class={classNames([
					"relative flex w-full items-center justify-between gap-2 rounded border-2 p-2 transition-[color,fill] duration-75 hover:bg-slate-600 dark:border dark:border-slate-500 md:p-1",
					isStored() ? "" : "",
					(isBundleComplete(props.bundleName) || isStored()) &&
						"fill-slate-500 text-slate-500 dark:fill-slate-500 dark:text-slate-500",
				])}
			>
				<div class="flex flex-grow items-center gap-2">
					{isStored() ? (
						<FaSolidCircleCheck class="fill-green-700 dark:fill-green-400" />
					) : (
						<FaRegularCircle />
					)}
					<span class="text-xl font-medium">
						{itemDetails().name} {quantity() > 1 && `(${quantity()})`}
					</span>
				</div>

				{itemDetails().seasons.length < 4 && (
					<SeasonDisplay seasons={itemDetails().seasons} />
				)}
				{itemDetails().source && (
					<>
						<FaRegularCircleQuestion
							onMouseEnter={() => showTooltip(true)}
							onMouseLeave={() => showTooltip(false)}
						/>
						<SourceTooltip ref={tooltipRef} source={itemDetails().source} />
					</>
				)}
			</button>
		</>
	);
}
