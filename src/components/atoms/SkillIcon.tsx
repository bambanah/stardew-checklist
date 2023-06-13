import { Skill } from "@/types";
import { JSXElement } from "solid-js";

interface Props {
	skill: Skill;
}

const SeasonIcon = (props: Props) => {
	const skillIcons: Record<Skill, JSXElement> = {
		combat: <img src="/combat.png" class="w-6" title="Combat" />,
		farming: <img src="/farming.png" class="w-6" title="Farming" />,
		fishing: <img src="/fishing.png" class="w-6" title="Fishing" />,
		foraging: <img src="/foraging.png" class="w-6" title="Foraging" />,
		mining: <img src="/mining.png" class="w-6" title="Mining" />,
	};
	return <span>{skillIcons[props.skill]}</span>;
};

export default SeasonIcon;
