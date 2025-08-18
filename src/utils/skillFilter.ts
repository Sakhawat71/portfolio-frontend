import { ISkill } from "@/types/skill.type";

export const skillFilter = (
    skills: ISkill[],
    typeOfSkills: string
) => {
    return skills.filter((skill: ISkill) => skill.type === typeOfSkills);
};