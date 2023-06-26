import { Season } from "@/types";
import classNames from "classnames";
import { JSXElement } from "solid-js";

interface Props {
	season: Season;
	class?: string;
}

const SeasonIcon = (props: Props) => {
	const seasonIcons: Record<Season, JSXElement> = {
		spring: (
			<img
				src="/images/spring_season_icon.png"
				class={classNames(["w-8 sm:w-6", props.class])}
				title="Spring"
			/>
		),
		summer: (
			<img
				src="/images/summer_season_icon.png"
				class={classNames(["w-8 sm:w-6", props.class])}
				title="Summer"
			/>
		),
		fall: (
			<img
				src="/images/fall_season_icon.png"
				class={classNames(["w-8 sm:w-6", props.class])}
				title="Fall"
			/>
		),
		winter: (
			<img
				src="/images/winter_season_icon.png"
				class={classNames(["w-8 sm:w-6", props.class])}
				title="Winter"
			/>
		),
	};
	return <span>{seasonIcons[props.season]}</span>;
};

export default SeasonIcon;
