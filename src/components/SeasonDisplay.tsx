import { For } from "solid-js";
import { Season } from "@/types";
import SeasonIcon from "./atoms/SeasonIcon";

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
