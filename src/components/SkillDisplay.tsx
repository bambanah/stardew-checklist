import { Skill } from "@/types";
import { For } from "solid-js";
import SkillIcon from "./atoms/SkillIcon";

interface Props {
	skills: readonly Skill[];
}

const SkillDisplay = (props: Props) => {
	return (
		<div class="flex items-center gap-1">
			<For each={props.skills}>{(skill) => <SkillIcon skill={skill} />}</For>
		</div>
	);
};

export default SkillDisplay;
