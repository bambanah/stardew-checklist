import {
	bundleStore,
	getItemSeasons,
	isBundleComplete,
} from "@/store/item-store";
import { settingsStore } from "@/store/settings-store";
import type { Bundle, BundleName } from "@/types";
import classNames from "classnames";
import { FaSolidCircleCheck } from "solid-icons/fa";
import { For, Show } from "solid-js";
import BundleItem from "./BundleItem";
import BundleNameContainer from "./atoms/BundleNameContainer";
import Display from "./atoms/Display";
import ProgressBar from "./atoms/ProgressBar";

interface Props {
	bundle: Bundle & { id: BundleName };
}

export default function Bundle(props: Props) {
	const [settings] = settingsStore;
	const [bundleState] = bundleStore;

	const itemsStoredInBundle = () => bundleState[props.bundle.id]?.length ?? 0;

	const filteredItems = () =>
		props.bundle.items.filter(
			(item) =>
				!settings.filterSeason ||
				(!settings.filterSeasonExclusive &&
					getItemSeasons(item).length === 0) ||
				getItemSeasons(item).includes(settings.filterSeason)
		);

	return (
		<div
			class={classNames([
				"bundle-items-container p box-content flex w-full flex-col gap-2 p-1 transition-[border,background-color,box-shadow] sm:w-[23rem]",
				isBundleComplete(props.bundle.id) ? "shadow-none" : "shadow-lg",
			])}
		>
			<BundleNameContainer>
				<Display size="sm">
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
			</BundleNameContainer>

			<div
				class={classNames([
					"transition-[max-height,opacity]",
					isBundleComplete(props.bundle.id) ? "opacity-25" : "",
				])}
			>
				<ProgressBar
					value={itemsStoredInBundle()}
					max={props.bundle.items_required}
				/>
			</div>
			<div class="flex flex-wrap justify-center gap-1">
				<Show
					when={filteredItems().length > 0}
					fallback={
						<div class="flex h-[89px] items-center justify-center font-display text-stone-500">
							Nothing in {settings.filterSeason}...
						</div>
					}
				>
					<For each={filteredItems()}>
						{(item) => <BundleItem item={item} bundleName={props.bundle.id} />}
					</For>
				</Show>
			</div>
		</div>
	);
}
