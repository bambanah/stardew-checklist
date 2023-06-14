import { For } from "solid-js";
import Heading from "@/components/atoms/Heading";
import { storedItems } from "@/store/item-store";
import type { Bundle, BundleName } from "@/types";
import { useStore } from "@nanostores/solid";
import BundleItem from "./BundleItem";
import { FaSolidCircleCheck } from "solid-icons/fa";
import classNames from "classnames";

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
		<div class="flex-0 flex w-full flex-col gap-1 rounded border shadow-md dark:border-none dark:bg-neutral-700 md:w-[16rem]">
			<div class="h-1 w-full overflow-hidden rounded-t bg-neutral-200 dark:bg-neutral-500">
				<div
					class={classNames([
						"h-1 transition-all",
						isBundleComplete() ? "bg-green-500" : "bg-blue-500",
					])}
					style={{
						width: `${
							(itemsStoredInBundle() / props.bundle.items_required) * 100
						}%`,
					}}
				/>
			</div>

			<div class="flex flex-col gap-1 px-2 pb-2">
				<p class="flex items-center justify-between fill-green-500">
					<Heading size="xs">
						{props.bundle.name.replace(" Bundle", "")} (
						{itemsStoredInBundle().toString()}/
						{props.bundle.items_required.toString()})
					</Heading>
					{isBundleComplete() && <FaSolidCircleCheck size="20" />}
				</p>
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
