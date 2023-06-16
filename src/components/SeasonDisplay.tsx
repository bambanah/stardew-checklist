import { Season } from "@/types";
import { For, lazy } from "solid-js";
const SeasonIcon = lazy(() => import("./atoms/SeasonIcon"));

interface Props {
	seasons: readonly Season[];
}

const SeasonDisplay = (props: Props) => {
	return (
		<div class="flex items-center gap-1">
			<For each={props.seasons}>
				{(season) => <SeasonIcon season={season} />}
			</For>
		</div>
	);
};

export default SeasonDisplay;
