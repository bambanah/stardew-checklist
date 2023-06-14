import { Season } from "@/types";
import { JSXElement } from "solid-js";

interface Props {
	season: Season;
}

const SeasonIcon = (props: Props) => {
	const className = "w-6";

	const seasonIcons: Record<Season, JSXElement> = {
		spring: <img src="/spring.png" class={className} title="Spring" />,
		summer: <img src="/summer.png" class={className} title="Summer" />,
		fall: <img src="/fall.png" class={className} title="Fall" />,
		winter: <img src="/winter.png" class={className} title="Winter" />,
	};
	return <span>{seasonIcons[props.season]}</span>;
};

export default SeasonIcon;
