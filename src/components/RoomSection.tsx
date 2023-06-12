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
		<div class="">
			<Heading size="md">{props.room.name}</Heading>
			{roomBundles.map((bundle) => (
				<Bundle bundle={bundle} />
			))}
		</div>
	);
}
