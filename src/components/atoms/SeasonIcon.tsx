import { Season } from "@/types";
import { JSXElement } from "solid-js";

interface Props {
	season: Season;
}

const SeasonIcon = (props: Props) => {
	const seasonIcons: Record<Season, JSXElement> = {
		spring: <img src="/spring.png" class="w-6" title="Spring" />,
		summer: <img src="/summer.png" class="w-6" title="Summer" />,
		fall: <img src="/fall.png" class="w-6" title="Fall" />,
		winter: <img src="/winter.png" class="w-6" title="Winter" />,
	};
	return <span>{seasonIcons[props.season]}</span>;
};

export default SeasonIcon;
