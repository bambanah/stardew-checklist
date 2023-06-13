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
		$storedItems().filter(
			(storedItem) =>
				storedItem.bundle === props.bundle.id &&
				props.bundle.items.includes(storedItem.item)
		);
	const isBundleComplete = () =>
		itemsStoredInBundle().length >= props.bundle.items_required;

	return (
		<div class="flex gap-2 flex-col flex-0 shadow-md w-full md:w-[20rem] p-2 border">
			<p class="flex justify-between items-center fill-green-500">
				<Heading size="sm" class="">
					{props.bundle.name}
				</Heading>
				{isBundleComplete() && <FaSolidCircleCheck size="20" />}
			</p>
			<progress
				max={props.bundle.items_required}
				value={itemsStoredInBundle().length}
			/>

			<div class="flex flex-col gap-2">
				{props.bundle.items.map((item) => (
					<BundleItem item={item} bundleName={props.bundle.id} />
				))}
			</div>
		</div>
	);
}
