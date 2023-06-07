export const SKILLS = [
	"farming",
	"mining",
	"foraging",
	"fishing",
	"combat",
] as const;
export type Skill = (typeof SKILLS)[number];
