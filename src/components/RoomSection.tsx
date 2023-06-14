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
			<div class="mx-auto w-full max-w-4xl">
				<Heading size="md">{props.room.name}</Heading>
			</div>
			<div class="flex flex-wrap items-start justify-center gap-4 gap-y-10 py-4">
				<For each={getBundlesInRoom(props.room)}>
					{(bundle) => <Bundle bundle={bundle} />}
				</For>
			</div>
		</div>
	);
}
