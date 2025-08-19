"use client"

import "./skills.css";
import Image from 'next/image';
import git from "@/assets/skills/git.png";
import vscode from "@/assets/skills/vs-code.png";
import figma from "@/assets/skills/figma.png";
import vercel from "@/assets/skills/vercel.png";
import firebase from "@/assets/skills/firebase.png";
import netlify from "@/assets/skills/netlify.png";
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
            setSkills(data.data)
        };
        fetchSkills();
    }, [])
    
    const Frontend =  skillFilter(skills,'Frontend');
    const backend =  skillFilter(skills,'Backend');
    
    console.log(backend);
    // console.log(skills);


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

            <h1 className='font-bold text-xl tracking-widest mt-20'>Front-End</h1>

            {/* front end section */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  text-center gap-10 my-10'>
                <SkillsBox skills={Frontend} />
            </div>


            <h1 className='font-bold text-xl tracking-widest mt-20'>Back End</h1>

            {/* back end section */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  text-center gap-10 my-10'>               
                <SkillsBox skills={backend} />
            </div>

            <h1 className='font-bold text-xl tracking-widest mt-20'>Tools</h1>

            {/* Tools section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  gap-10 my-10'>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={git}
                        alt='github'
                        width={80}
                        height={80}
                    />
                    <p>GitHub</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={vscode}
                        alt='vscode'
                        width={80}
                        height={80}
                    />
                    <p>VS CODE</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={figma}
                        alt='figma'
                        width={80}
                        height={80}
                    />
                    <p>FIGMA</p>
                </div>

            </div>


            {/* <h1 className='font-bold text-xl tracking-widest mt-20'>Hosting & Server</h1> */}

            {/* Hosting & Serverless Platforms section */}
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  gap-10 my-10'>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={firebase}
                        alt='firebase'
                        width={80}
                        height={80}
                    />
                    <p>FIREBASE</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={vercel}
                        alt='vercel'
                        width={80}
                        height={80}
                    />
                    <p>VERCEL</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={netlify}
                        alt='netlify'
                        width={80}
                        height={80}
                    />
                    <p>Netlify</p>
                </div>

            </div> */}


        </div>
    );
};

export default Skills;