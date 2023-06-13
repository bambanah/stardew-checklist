import { For } from "solid-js";
import { getBundlesInRoom } from "@/store/item-store";
import type { Room } from "@/types";
import Heading from "./atoms/Heading";
import Bundle from "./Bundle";

interface Props {
	room: Room;
}

export default function RoomSection(props: Props) {
	return (
		<div>
			<Heading size="md">{props.room.name}</Heading>
			<div class="flex gap-2 flex-wrap justify-evenly py-4">
				<For each={getBundlesInRoom(props.room)}>
					{(bundle) => <Bundle bundle={bundle} />}
				</For>
			</div>
		</div>
	);
}
