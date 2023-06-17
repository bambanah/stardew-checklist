import RoomSection from "@/components/RoomSection";
import { ROOMS } from "@/constants/rooms";
import Layout from "@/layouts/Layout";
import { RoomName } from "@/types";
import { For } from "solid-js";

export default function Home() {
	return (
		<Layout>
			<div class="flex flex-col gap-4 md:gap-4">
				<For each={Object.entries(ROOMS)}>
					{([id, room]) => (
						<RoomSection room={{ ...room, id: id as RoomName }} />
					)}
				</For>
			</div>
		</Layout>
	);
}
