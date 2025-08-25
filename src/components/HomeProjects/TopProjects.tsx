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
                images={["/images/tutor1.png", "/images/tutor2.png", "/images/tutor3.png"]}
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
                images={["/images/portfolio1.png"]}
                githubFrontend="https://github.com/..."
                live="https://portfolio.com"
                reverse={true}
            />
        </div>
    );
};

export default TopProjects;