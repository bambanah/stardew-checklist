import { isBundleComplete, storedItems } from "@/store/item-store";
import type { Bundle, BundleName } from "@/types";
import { useStore } from "@nanostores/solid";
import { FaSolidCircleCheck } from "solid-icons/fa";
import { For } from "solid-js";
import BundleItem from "./BundleItem";
import ProgressBar from "./atoms/ProgressBar";
import Display from "./atoms/Display";

interface Props {
	bundle: Bundle & { id: BundleName };
}

export default function Bundle(props: Props) {
	const $storedItems = useStore(storedItems);

	const itemsStoredInBundle = () =>
		$storedItems()[props.bundle.id]?.length ?? 0;

	return (
		<div class="flex w-full break-inside-avoid-column flex-col gap-1 rounded border-2 border-amber-400 bg-stardew-yellow-600 p-2 pt-1 shadow-lg sm:w-[16rem]">
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
