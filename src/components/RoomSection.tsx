import { getBundlesInRoom } from "@/store/item-store";
import type { Room } from "@/types";
import Heading from "./atoms/Heading";
import Bundle from "./Bundle";

interface Props {
	room: Room;
}

export default function RoomSection(props: Props) {
	const roomBundles = getBundlesInRoom(props.room);

	return (
		<div>
			<Heading size="md">{props.room.name}</Heading>
			<div class="flex gap-4 flex-wrap justify-evenly">
				{roomBundles.map((bundle) => (
					<Bundle bundle={bundle} />
				))}
			</div>
		</div>
	);
}
