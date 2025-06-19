import Image from 'next/image';
import React from 'react';
import scImage from "@/assets/aspirations/sc.png";
import devImg from "@/assets/aspirations/dev.png";
import learnImg from "@/assets/aspirations/learn.png";
import lineImage from '@/assets/ext/line.png'

const Aspirations = () => {



    return (
        <div>
            {/* Aspirations */}
            <div className='mt-10 border-black border-[5px] w-72 mx-auto text-center'>
                <h2 className='font-bold text-xl tracking-[6px] p-3 uppercase'>Aspirations</h2>
            </div>

            <Image
                src={lineImage}
                alt='line'
                width={150}
                height={50}
                className='my-20 mx-auto'
            />

            <div className='lg:grid lg:grid-cols-2 text-center my-20'>

                {/* Advanced Development */}
                <div className='flex flex-col md:flex-row items-center'>
                    <Image
                        src={devImg}
                        alt='DEVELOPMENT'
                        width={100}
                        height={100}
                    />
                    <div className='text-center'>
                        <h2 className='font-bold tracking-widest text-xl text-center md:text-start'>ADVANCED DEVELOPMENT</h2>
                        <p className='text-center md:text-start md:pl-5 pt-3'>
                            I'm focused on building scalable applications, contributing to open-source, and exploring system architecture and DevOps.
                        </p>
                    </div>
                </div>

                {/* Cyber Security */}
                <div className='flex flex-col md:flex-row items-center mt-10 lg:mt-0'>
                    <Image
                        src={scImage}
                        alt='cyber_security'
                        width={100}
                        height={100}
                    />
                    <div>
                        <h2 className='uppercase font-bold tracking-widest text-xl text-center md:text-start'>CYBER SECURITY</h2>
                        <p className='text-center md:text-start md:pl-5 pt-3'>
                            Interested in strengthening my backend and infrastructure security knowledge to ensure data integrity and app resilience.
                        </p>
                    </div>
                </div>

                {/* Continuous Learning */}
                <div className='mt-10 lg:mt-16 col-span-2 text-center flex justify-center'>
                    <div className='flex flex-col md:flex-row items-center lg:w-1/2'>
                        <Image
                            src={learnImg}
                            alt='Learning'
                            width={100}
                            height={100}
                        />
                        <div>
                            <h2 className='uppercase font-bold tracking-widest text-xl text-center md:text-start'>CONTINUOUS LEARNING</h2>
                            <p className='text-center md:text-start md:pl-5 pt-3'>
                                Embracing continuous learning through advanced topics like system design, cloud architecture, and exploring AI integration in web applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aspirations;