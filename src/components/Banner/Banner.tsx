import Image from 'next/image';
import Link from 'next/link';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Typewriter from './Typewriter';

const Banner = () => {
    return (
        <div className="flex h-screen lg:max-h-[100vh] mx-auto justify-center overflow-hidden bg-[#D7D7D7]">
            {/* Left Content Section */}
            <div className="lg:w-5/12 w-full bg-[#D7D7D7] flex flex-col justify-center lg:items-start p-10 md:p-16 space-y-12 lg:pl-28 md:items-center text-center lg:text-start">
                <div className='font-light space-y-3'>
                    <h4 className="text-xl md:text-3xl font-semibold text-gray-600">Hi, I am</h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-black uppercase">Sakhawat H.</h2>
                    <div className="md:text-xl font-extrabold text-gray-600">
                        <Typewriter />
                    </div>
                </div>


                {/* Social Links */}
                <div className='flex space-x-6 justify-center'>
                    <Link
                        href="https://x.com/Sakhawat_71"
                        target="_blank"
                        aria-label="Twitter profile"
                        className="hover:opacity-80 transition-opacity"
                    >
                        <FaTwitter className='text-2xl w-9 h-9' />
                    </Link>
                    <Link
                        href="https://github.com/Sakhawat71"
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="hover:opacity-80 transition-opacity"
                    >
                        <FaGithub className='text-2xl w-9 h-9' />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/s3h"
                        target='_blank'
                        aria-label="LinkedIn profile"
                        className="hover:opacity-80 transition-opacity"
                    >
                        <FaLinkedin className='text-2xl w-9 h-9' />
                    </Link>
                </div>

                {/* Download CV Button */}
                <div className="flex justify-center lg:justify-start">
                    <Link
                        href="/Sakhawat Full Stack resume.pdf"
                        download
                        className="flex items-center space-x-2 border-2 border-black text-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition-all duration-300"
                    >
                        <FaDownload className="text-xl" />
                        <span>Download CV</span>
                    </Link>
                </div>
            </div>

            {/* Right Image Section */}
            <div className="lg:w-7/12 hidden lg:flex justify-center items-center relative">
                <div className="absolute -skew-x-[10deg] translate-x-20 w-full h-full bg-black" />

                <div className='relative z-10 h-full w-full flex items-end justify-center'>
                    <div className="relative h-[90%] w-auto aspect-[3/4]">
                        <Image
                            src="/assets/profileImg.png"
                            alt="Sakhawat Hossain - Full Stack Developer"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain object-bottom"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;