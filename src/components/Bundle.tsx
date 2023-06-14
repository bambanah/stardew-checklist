import { For } from "solid-js";
import Heading from "@/components/atoms/Heading";
import { storedItems } from "@/store/item-store";
import type { Bundle, BundleName } from "@/types";
import { useStore } from "@nanostores/solid";
import BundleItem from "./BundleItem";
import { FaSolidCircleCheck } from "solid-icons/fa";

interface Props {
	bundle: Bundle & { id: BundleName };
}

export default function Bundle(props: Props) {
	const $storedItems = useStore(storedItems);

	const itemsStoredInBundle = () =>
		Object.values($storedItems()[props.bundle.id]?.items ?? {}).reduce(
			(prev, curr) => curr + prev,
			0
		);
	const isBundleComplete = () =>
		itemsStoredInBundle() >= props.bundle.items_required;

	return (
		<div class="flex-0 flex w-full flex-col gap-4 border p-2 shadow-md md:w-[22rem]">
			<p class="flex items-center justify-between fill-green-500">
				<Heading size="sm">
					{props.bundle.name} ({itemsStoredInBundle().toString()}/
					{props.bundle.items_required.toString()})
				</Heading>
				{isBundleComplete() && <FaSolidCircleCheck size="20" />}
			</p>
			<progress
				class="rounded-sm fill-slate-700"
				value={itemsStoredInBundle()}
				max={props.bundle.items_required}
			/>

			<div class="flex flex-col gap-2">
				<For each={props.bundle.items}>
					{(item) => (
						<BundleItem
							item={item}
							bundleName={props.bundle.id}
							isBundleComplete={isBundleComplete}
						/>
					)}
				</For>
			</div>
		</div>
	);
}
