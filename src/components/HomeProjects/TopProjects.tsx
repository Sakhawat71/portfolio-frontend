import Image from "next/image";
import { ProjectSection } from "./ProjectSection";
import lineImage from '@/assets/ext/line.png'


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

            <div>
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