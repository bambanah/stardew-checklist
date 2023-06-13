import { For } from "solid-js";
import RoomSection from "@/components/RoomSection";
import { ROOMS } from "@/constants/rooms";
import Layout from "@/layouts/Layout";

export default function Home() {
	return (
		<Layout>
			<div class="divide-y">
				<For each={Object.values(ROOMS)}>
					{(room) => <RoomSection room={room} />}
				</For>
			</div>
		</Layout>
	);
}
