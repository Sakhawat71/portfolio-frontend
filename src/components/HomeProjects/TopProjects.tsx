import { ProjectSection } from "./ProjectSection";

const TopProjects = () => {

    return (
        <div>
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
                    "https://i.ibb.co.com/Tq8Q0jXj/review-hub-s3h-vercel-app-1.png",
                    "https://i.ibb.co.com/0jTHWNgD/review-hub-s3h-vercel-app-2.png",
                    "https://i.ibb.co.com/PvmTzzQw/review-hub-s3h-vercel-app-3.png"
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
                images={["https://i.ibb.co.com/PvmTzzQw/review-hub-s3h-vercel-app-3.png"]}
                githubFrontend="https://github.com/..."
                live="https://portfolio.com"
                reverse={true}
            />
        </div>
    );
};

export default TopProjects;