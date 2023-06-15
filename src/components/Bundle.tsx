import { isBundleComplete, bundleStore } from "@/store/item-store";
import type { Bundle, BundleName } from "@/types";
import { FaSolidCircleCheck } from "solid-icons/fa";
import { For } from "solid-js";
import BundleItem from "./BundleItem";
import ProgressBar from "./atoms/ProgressBar";
import Display from "./atoms/Display";
import classNames from "classnames";

interface Props {
	bundle: Bundle & { id: BundleName };
}

export default function Bundle(props: Props) {
	const [bundleState] = bundleStore;

	const itemsStoredInBundle = () => bundleState[props.bundle.id]?.length ?? 0;

	return (
		<div
			class={classNames([
				"flex w-full break-inside-avoid-column flex-col gap-1 border-2 p-2 pt-1 transition-[border,background-color,box-shadow]  sm:w-[16rem]",
				isBundleComplete(props.bundle.id)
					? "border-amber-200 bg-none shadow-none"
					: "border-amber-400 bg-stardew-yellow-600 shadow-lg",
			])}
		>
			<p class="flex items-center justify-between">
				<Display size="xs">
					{props.bundle.name.replace(" Bundle", "")} (
					{itemsStoredInBundle().toString()}/
					{props.bundle.items_required.toString()})
				</Display>
				{isBundleComplete(props.bundle.id) && (
					<FaSolidCircleCheck
						size="20"
						class="fill-green-700 dark:fill-green-400"
					/>
				)}
			</p>
			<ProgressBar
				class="rounded"
				value={itemsStoredInBundle()}
				max={props.bundle.items_required}
			/>
			<For each={props.bundle.items}>
				{(item) => <BundleItem item={item} bundleName={props.bundle.id} />}
			</For>
		</div>
	);
}
