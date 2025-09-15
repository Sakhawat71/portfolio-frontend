"use client"

import * as motion from "motion/react-client";
import Image from "next/image";
import { ISkill } from "@/types/skill.type";

interface SkillsBoxProps {
    skills: ISkill[]
}

const SkillsBox = ({ skills }: SkillsBoxProps) => {

    return (
        skills.map((skill: ISkill) => <>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className='flex flex-col justify-center items-center space-y-3'
            >
                <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={50}
                    height={50}
                />
                <p className="text-sm md:text-base">{skill.name}</p>
            </motion.div>
        </>)
    );
};

export default SkillsBox;