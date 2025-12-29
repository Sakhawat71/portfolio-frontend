"use client"

import "./skills.css";
import Image from 'next/image';
import lineImage from '@/assets/ext/line.png'
import Aspirations from '../Aspirations/Aspirations';
import SkillsBox from "./SkillsBox";
import { useEffect, useState } from "react";
import { getSkills } from "@/services/fetchSkills";
import { skillFilter } from "@/utils/skillFilter";

const Skills = () => {

    const [skills, setSkills] = useState([]);
    useEffect(() => {
        const fetchSkills = async () => {
            const data = await getSkills();
            // console.log(data);
            setSkills(data.data)
        };
        fetchSkills();
    }, [])

    const Languages = skillFilter(skills, 'Programming Language');
    const Frontend = skillFilter(skills, 'Frontend');
    const backend = skillFilter(skills, 'Backend');
    const tools = skillFilter(skills, 'Tools & Others');
    const dataScience = skillFilter(skills, 'Data Science');
    // const cloud = skillFilter(skills, 'DevOps & Cloud');

    // console.log(Languages);

    return (
        <div className=' gradient-bg h-full my-20 mx-auto w-4/6 font-montserrat'>
            <Aspirations />
            <Image
                src={lineImage}
                alt='line'
                width={150}
                height={50}
                className='my-20 mx-auto'
            />


            {/* SKILLS SECTION */}

            <div className=' border-black border-[5px] w-72 mx-auto text-center'>
                <h2 className='font-bold text-xl tracking-[6px] p-3'>SKILLS</h2>
            </div>

            <h1 className='font-bold text-xl tracking-widest mt-20'>Programming Languages</h1>

            {/* Programming Language section */}
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  text-center gap-10 my-10'>
                <SkillsBox skills={Languages} />
            </div>

            <h1 className='font-bold text-xl tracking-widest mt-20'>Front-End</h1>

            {/* front end section */}
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  text-center gap-10 my-10'>
                <SkillsBox skills={Frontend} />
            </div>


            <h1 className='font-bold text-xl tracking-widest mt-20'>Back End</h1>

            {/* back end section */}
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  text-center gap-10 my-10'>
                <SkillsBox skills={backend} />
            </div>

            <h1 className='font-bold text-xl tracking-widest mt-20'>Tools & Others</h1>

            {/* Tools section */}
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  text-center gap-10 my-10'>
                <SkillsBox skills={tools} />
            </div>

            <h1 className='font-bold text-xl tracking-widest mt-20'>Data Science</h1>
            {/* Data Science section */}
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  text-center  gap-10 my-10'>
                <SkillsBox skills={dataScience} />
            </div>

            <h1 className='font-bold text-xl tracking-widest mt-20'>DevOps & Cloud</h1>
            {/* Hosting & Serverless Platforms section */}
            {/* <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  text-center  gap-10 my-10'>
                <SkillsBox skills={cloud} />
            </div> */}
        </div>
    );
};

export default Skills;