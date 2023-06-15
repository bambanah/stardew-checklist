import { ITEMS } from "@/constants/items";
import {
	bundleStore,
	isBundleComplete,
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
import SeasonDisplay from "./SeasonDisplay";
import SourceTooltip from "./atoms/SourceTooltip";

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

	const isStored = () =>
		bundleStore[0][props.bundleName]?.includes(itemStoreId());

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
					"relative flex w-full items-center justify-between gap-2 rounded border border-amber-200 p-2 transition-[color,fill] duration-75 hover:bg-amber-200 md:p-1",

					(isBundleComplete(props.bundleName) || isStored()) &&
						"fill-zinc-500 text-zinc-500",
				])}
			>
				<div class="flex flex-grow items-center gap-2">
					{isStored() ? (
						<FaSolidCircleCheck class="fill-green-700" />
					) : (
						<FaRegularCircle />
					)}
					<span
						class={classNames([
							"text-left font-stardew font-bold",
							isStored() && "line-through",
						])}
					>
						{itemDetails().name} {quantity() > 1 && `(${quantity()})`}
					</span>
				</div>

				{![0, 4].includes(itemDetails().seasons.length) && (
					<SeasonDisplay seasons={itemDetails().seasons} />
				)}
				{itemDetails().source && (
					<>
						<FaRegularCircleQuestion
							onMouseEnter={() => showTooltip(true)}
							onMouseLeave={() => showTooltip(false)}
							onFocusIn={() => showTooltip(true)}
							onFocusOut={() => showTooltip(false)}
						/>
						<SourceTooltip ref={tooltipRef} source={itemDetails().source} />
					</>
				)}
			</button>
		</>
	);
}
