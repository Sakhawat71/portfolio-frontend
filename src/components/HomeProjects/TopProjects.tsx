import Image from "next/image";
import { ProjectSection } from "./ProjectSection";
import lineImage from '@/assets/ext/line.png'
import { Button } from "../ui/button";
import Link from "next/link";


const TopProjects = () => {

    return (
        <section className="">
            {/* project line */}
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

            <section className="space-y-10 mx-10 lg:mx-20 ">
                {/* 1st */}
                <ProjectSection
                    name="ReviewHub"
                    type="Team"
                    role="Backend Developer"
                    features={[
                        "Tutor search with filters",
                        "Booking & Payment system",
                        "Real-time notifications",
                    ]}
                    work="Designed database schema, built backend API with Prisma & PostgreSQL, integrated SurjoPay payments."
                    images={[
                        '/assets/homeProjects/review-hub-s3h.vercel.app_1.png',
                        '/assets/homeProjects//review-hub-s3h.vercel.app_4.png',
                        '/assets/homeProjects/review-hub-s3h.vercel.app_3.png',
                    ]}
                    githubFrontend="https://github.com/Sakhawat71/ReviewHub-Client"
                    githubBackend="https://github.com/Sakhawat71/ReviewHub-Server"
                    live="https://review-hub-s3h.vercel.app/"
                />

                {/* 2nd */}
                <ProjectSection
                    name="TutorLink"
                    type="Solo"
                    role="Fullstack"
                    features={[
                        "Interactive animations",
                        "Responsive design",
                        "Project showcase with carousel",
                    ]}
                    work="Built with Next.js, Tailwind, shadcn/ui, and Framer Motion."
                    images={[
                        '/assets/homeProjects/tutorlink-s3h.vercel_1.png',
                        '/assets/homeProjects/tutorlink-s3h.vercel_2.png',
                        '/assets/homeProjects/tutorlink-s3h.vercel_3.png',
                    ]}
                    githubFrontend="https://github.com/Sakhawat71/tutorlink-frontend"
                    githubBackend="https://github.com/Sakhawat71/tutorlink-psql"
                    live="https://tutorlink-s3h.vercel.app/"
                    reverse={true}
                />

                {/* 3rd  */}
                <ProjectSection
                    name="BookNest"
                    type="Solo"
                    role="Full Stack"
                    features={[
                        "Tutor search with filters",
                        "Booking & Payment system",
                        "Real-time notifications",
                    ]}
                    work="Designed database schema, built backend API with Prisma & PostgreSQL, integrated SurjoPay payments."
                    images={[
                        '/assets/homeProjects/book-shop-1.png',
                        '/assets/homeProjects/book-shop-2.png',
                        '/assets/homeProjects/book-shop-3.png',
                        '/assets/homeProjects/book-shop-4.png',
                        '/assets/homeProjects/book-shop-5.png',
                        '/assets/homeProjects/book-shop-6.png',
                        '/assets/homeProjects/book-shop-7.png',
                        '/assets/homeProjects/book-shop-8.png',
                    ]}
                    githubFrontend="https://github.com/Sakhawat71/book-shop-client"
                    githubBackend="https://github.com/Sakhawat71/book-shop-server"
                    live="https://book-shop-client-71.vercel.app/"
                />
            </section>


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
        </section>
    );
};

export default TopProjects;