import { getItemsInBundle } from "@/store/item-store";
import type { Bundle, BundleName } from "@/types";
import Heading from "@/components/atoms/Heading";
import BundleItem from "./BundleItem";

interface Props {
	bundle: Bundle & { id: BundleName };
}

export default function Bundle(props: Props) {
	const items = getItemsInBundle(props.bundle);

	return (
		<div class="flex-1 shadow-md min-w-[15rem] p-2 border">
			<Heading size="sm">{props.bundle.name}</Heading>

			<div class="flex flex-col gap-2">
				{items.map((item) => (
					<BundleItem item={item} bundleName={props.bundle.id} />
				))}
			</div>
		</div>
	);
}
