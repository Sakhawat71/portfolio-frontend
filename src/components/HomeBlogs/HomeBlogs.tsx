import { HomeBlogCard } from "./HomeBlogCard";

const HomeBlogs = () => {

    return (
        <section className="py-16">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    📚 Latest Blogs
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Sharing what I learn and build
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                <HomeBlogCard
                    title="Mastering Prisma with PostgreSQL"
                    date="Aug 20, 2025"
                    tags={["Backend", "Database"]}
                    excerpt="Learn how to design scalable schemas, optimize queries, and use Prisma with PostgreSQL effectively."
                    image="/images/blog1.png"
                    link="/blogs/prisma-postgres"
                />
                <HomeBlogCard
                    title="Docker for Fullstack Developers"
                    date="Aug 12, 2025"
                    tags={["DevOps", "Docker"]}
                    excerpt="A beginner-friendly guide to containerizing fullstack apps with Docker & Compose."
                    image="/images/blog2.png"
                    link="/blogs/docker-fullstack"
                />
                <HomeBlogCard
                    title="Next.js App Router: Best Practices"
                    date="Aug 5, 2025"
                    tags={["Next.js", "Frontend"]}
                    excerpt="Deep dive into the App Router, layouts, and SSR/SSG strategies for scalable apps."
                    image="/images/blog3.png"
                    link="/blogs/nextjs-app-router"
                />
            </div>
        </section>

    );
};

export default HomeBlogs;