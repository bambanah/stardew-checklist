import { getBundlesInRoom, isRoomComplete } from "@/store/item-store";
import type { Room, RoomName } from "@/types";
import classNames from "classnames";
import { BiSolidBadgeCheck } from "solid-icons/bi";
import { FaSolidChevronDown } from "solid-icons/fa";
import { For, createSignal } from "solid-js";
import Bundle from "./Bundle";
import Display from "./atoms/Display";

interface Props {
	room: Room & { id: RoomName };
}

export default function RoomSection(props: Props) {
	const [isCollapsed, setIsCollapsed] = createSignal(false);

	return (
		<div
			class={classNames([
				"stardew-border flex flex-col bg-amber-50 p-2 md:p-4",
			])}
		>
			<button
				class="mx-auto flex w-full max-w-lg items-center gap-2 lg:max-w-4xl"
				onClick={() => setIsCollapsed(!isCollapsed())}
			>
				<FaSolidChevronDown
					size="24"
					class={classNames([
						"transition-transform",
						isCollapsed() && "-rotate-90",
					])}
				/>
				<Display>{props.room.name}</Display>
				{isRoomComplete(props.room.id) && (
					<BiSolidBadgeCheck
						size="28"
						class="fill-green-700 dark:fill-green-400"
					/>
				)}
			</button>
			<div
				class={classNames([
					"box-border flex flex-wrap items-start justify-center gap-4 overflow-hidden transition-[max-height,padding,opacity] md:gap-y-10",
					isCollapsed()
						? "max-h-0 p-0 opacity-0"
						: "max-h-[1000rem] pt-4 opacity-100",
				])}
			>
				<For each={getBundlesInRoom(props.room)}>
					{(bundle) => <Bundle bundle={bundle} />}
				</For>
			</div>
		</div>
	);
}
