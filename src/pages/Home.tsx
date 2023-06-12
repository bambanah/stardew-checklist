import RoomSection from "@/components/RoomSection";
import { ROOMS } from "@/constants/rooms";
import Layout from "@/layouts/Layout";

export default function Home() {
	return (
		<Layout>
			{Object.values(ROOMS).map((room) => (
				<RoomSection room={room} />
			))}
		</Layout>
	);
}
