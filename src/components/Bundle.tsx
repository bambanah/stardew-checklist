import { bundleStore, isBundleComplete } from "@/store/item-store";
import type { Bundle, BundleName } from "@/types";
import classNames from "classnames";
import { FaSolidCircleCheck } from "solid-icons/fa";
import { For } from "solid-js";
import BundleItem from "./BundleItem";
import Display from "./atoms/Display";
import ProgressBar from "./atoms/ProgressBar";
import BundleNameContainer from "./atoms/BundleNameContainer";

interface Props {
	bundle: Bundle & { id: BundleName };
}

export default function Bundle(props: Props) {
	const [bundleState] = bundleStore;

	const itemsStoredInBundle = () => bundleState[props.bundle.id]?.length ?? 0;

	return (
		<div
			class={classNames([
				"bundle-items-container p box-content flex w-full flex-col gap-2 pt-1 transition-[border,background-color,box-shadow] sm:w-[23rem]",
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

			<ProgressBar
				class={classNames([
					"rounded",
					isBundleComplete(props.bundle.id) && "opacity-0",
				])}
				value={itemsStoredInBundle()}
				max={props.bundle.items_required}
			/>
			<div class="flex flex-wrap gap-1">
				<For each={props.bundle.items}>
					{(item) => <BundleItem item={item} bundleName={props.bundle.id} />}
				</For>
			</div>
		</div>
	);
}
