import { Season } from "@/types";
import { JSXElement } from "solid-js";

interface Props {
	season: Season;
}

const SeasonIcon = (props: Props) => {
	const seasonIcons: Record<Season, JSXElement> = {
		spring: <img src="/spring.png" class="w-6" />,
		summer: <img src="/summer.png" class="w-6" />,
		fall: <img src="/fall.png" class="w-6" />,
		winter: <img src="/winter.png" class="w-6" />,
	};
	return <span>{seasonIcons[props.season]}</span>;
};

export default SeasonIcon;
