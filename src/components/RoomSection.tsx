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
		<div class="py-8">
			<div class="w-full max-w-6xl mx-auto">
				<Heading size="md">{props.room.name}</Heading>
			</div>
			<div class="flex gap-4 gap-y-10 flex-wrap justify-center items-start py-4">
				<For each={getBundlesInRoom(props.room)}>
					{(bundle) => <Bundle bundle={bundle} />}
				</For>
			</div>
		</div>
	);
}
