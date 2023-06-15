import { Season } from "@/types";
import { JSXElement } from "solid-js";

interface Props {
	season: Season;
}

const SeasonIcon = (props: Props) => {
	const className = "w-6";

	const seasonIcons: Record<Season, JSXElement> = {
		spring: (
			<img
				src="/images/spring_season_icon.png"
				class={className}
				title="Spring"
			/>
		),
		summer: (
			<img
				src="/images/summer_season_icon.png"
				class={className}
				title="Summer"
			/>
		),
		fall: (
			<img src="/images/fall_season_icon.png" class={className} title="Fall" />
		),
		winter: (
			<img
				src="/images/winter_season_icon.png"
				class={className}
				title="Winter"
			/>
		),
	};
	return <span>{seasonIcons[props.season]}</span>;
};

export default SeasonIcon;
