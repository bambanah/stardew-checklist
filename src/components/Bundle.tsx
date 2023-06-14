import Heading from "@/components/atoms/Heading";
import { isBundleComplete, storedItems } from "@/store/item-store";
import type { Bundle, BundleName } from "@/types";
import { useStore } from "@nanostores/solid";
import { FaSolidCircleCheck } from "solid-icons/fa";
import { For } from "solid-js";
import BundleItem from "./BundleItem";
import ProgressBar from "./atoms/ProgressBar";

interface Props {
	bundle: Bundle & { id: BundleName };
}

export default function Bundle(props: Props) {
	const $storedItems = useStore(storedItems);

	const itemsStoredInBundle = () =>
		$storedItems()[props.bundle.id]?.length ?? 0;

	return (
		<div class="flex-0 flex w-full flex-col gap-1 rounded border shadow-md dark:border-none dark:bg-slate-800 md:w-[16rem]">
			<ProgressBar
				class="rounded-t"
				value={itemsStoredInBundle()}
				max={props.bundle.items_required}
			/>

			<div class="flex flex-col px-2 pb-2">
				<p class="flex items-center justify-between">
					<Heading size="xs">
						{props.bundle.name.replace(" Bundle", "")} (
						{itemsStoredInBundle().toString()}/
						{props.bundle.items_required.toString()})
					</Heading>
					{isBundleComplete(props.bundle.id) && (
						<FaSolidCircleCheck
							size="20"
							class="fill-green-700 dark:fill-green-400"
						/>
					)}
				</p>
				<For each={props.bundle.items}>
					{(item) => <BundleItem item={item} bundleName={props.bundle.id} />}
				</For>
			</div>
		</div>
	);
}
