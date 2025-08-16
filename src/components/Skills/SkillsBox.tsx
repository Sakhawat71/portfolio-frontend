"use client"

import * as motion from "motion/react-client";
import { getSkills } from "@/services/fetchSkills";
import Image from "next/image";
import { useEffect, useState } from "react";


const SkillsBox = () => {

    const [skills, setSkills] = useState([]);
    useEffect(() => {
        const fetchSkills = async () => {
            const data = await getSkills();
            setSkills(data.data)
        };
        fetchSkills();
    }, [])


    const frontend = skills.filter((sk) => sk.type === "Frontend");
    console.log(frontend);


    console.log(skills);

    return (
        skills.map(skill => <>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className=' flex flex-col justify-center items-center space-y-3'
            >
                <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={60}
                    height={60}
                />
                <p>{skill.name}</p>
            </motion.div>
        </>)
    );
};

export default SkillsBox;