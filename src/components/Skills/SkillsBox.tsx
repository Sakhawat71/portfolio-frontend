"use client"

import * as motion from "motion/react-client";
import Image from "next/image";
import { ISkill } from "@/types/skill.type";
import finding from '@/assets/loading/finding.gif';

interface SkillsBoxProps {
    skills: ISkill[]
}

const SkillsBox = ({ skills }: SkillsBoxProps) => {

    if (skills.length === 0) {
        return <div className="flex justify-center items-center h-20">
            <Image
                src={finding}
                alt='finding'
                width={150}
                height={50}
                className='mx-auto'
            />
        </div>
    };


    return (
        skills?.map((skill: ISkill) => <>
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