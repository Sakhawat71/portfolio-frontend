import Image from "next/image";
import { ProjectSection } from "./ProjectSection";
import lineImage from '@/assets/ext/line.png'
import { Button } from "../ui/button";
import Link from "next/link";


const TopProjects = () => {

    return (
        <div>
            <div>
                <Image
                    src={lineImage}
                    alt='line'
                    width={150}
                    height={50}
                    className='my-20 mx-auto'
                />

                <div className='my-20 flex items-center'>
                    <div className=' border-black border-[5px] w-72 mx-auto text-center '>
                        <h2 className='text-black font-bold text-xl tracking-[6px] p-3 uppercase '>PROJECRTS</h2>
                    </div>
                </div>
            </div>


            <div className="text-center mb-10">
                <h2 className="text-4xl">My Work</h2>
                <p>A collection of projects I've worked on.</p>
            </div>

            {/* 1st */}
            <ProjectSection
                name="TutorLink"
                type="Team"
                role="Backend Developer"
                features={[
                    "Tutor search with filters",
                    "Booking & Payment system",
                    "Real-time notifications",
                ]}
                work="Designed database schema, built backend API with Prisma & PostgreSQL, integrated SurjoPay payments."
                images={[
                    `https://i.ibb.co.com/Tq8Q0jXj/review-hub-s3h-vercel-app-1.png`,
                    `https://i.ibb.co.com/0jTHWNgD/review-hub-s3h-vercel-app-2.png`,
                    `https://i.ibb.co.com/PvmTzzQw/review-hub-s3h-vercel-app-3.png`
                ]}
                githubFrontend="https://github.com/..."
                githubBackend="https://github.com/..."
                live="https://tutorlink.com"
            />

            {/* 2nd */}
            <ProjectSection
                name="Portfolio"
                type="Solo"
                role="Fullstack"
                features={[
                    "Interactive animations",
                    "Responsive design",
                    "Project showcase with carousel",
                ]}
                work="Built with Next.js, Tailwind, shadcn/ui, and Framer Motion."
                images={[`https://i.ibb.co.com/PvmTzzQw/review-hub-s3h-vercel-app-3.png`]}
                githubFrontend="https://github.com/..."
                live="https://portfolio.com"
                reverse={true}
            />

            {/* 3rd  */}
            <ProjectSection
                name="TutorLink"
                type="Team"
                role="Backend Developer"
                features={[
                    "Tutor search with filters",
                    "Booking & Payment system",
                    "Real-time notifications",
                ]}
                work="Designed database schema, built backend API with Prisma & PostgreSQL, integrated SurjoPay payments."
                images={[
                    `https://i.ibb.co.com/Tq8Q0jXj/review-hub-s3h-vercel-app-1.png`,
                    `https://i.ibb.co.com/0jTHWNgD/review-hub-s3h-vercel-app-2.png`,
                    `https://i.ibb.co.com/PvmTzzQw/review-hub-s3h-vercel-app-3.png`
                ]}
                githubFrontend="https://github.com/..."
                githubBackend="https://github.com/..."
                live="https://tutorlink.com"
            />

            <div>

                <Link href={"/projects"}>
                    <Button className="mx-auto my-10 block" variant={"outline"}>See All Projects</Button>
                </Link>

                <Image
                    src={lineImage}
                    alt='line'
                    width={150}
                    height={50}
                    className='my-20 mx-auto'
                />
            </div>
        </div>
    );
};

export default TopProjects;