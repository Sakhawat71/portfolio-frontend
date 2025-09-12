// "use client"

import { fetchBlogs } from "@/services/fetchBlogs";
import { BlogCard } from "../Blog/BlogCard";
import { IBlog } from "@/types/blog.type";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import lineImage from '@/assets/ext/line.png';

const HomeBlogs = async () => {

    const blogs = await fetchBlogs();
    // console.log(blogs.data);

    return (
        <section className="pb-20">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold bg-clip-text">
                    📚 Latest Blogs
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Sharing what I learn and build
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto pb-10 px-10 lg:px-5">
                {blogs?.data?.slice(0, 3).map((blog: IBlog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>

            <div>
                <Link href={"/blog"}>
                    <Button className="mx-auto my-10 block" variant={"outline"}>See All Blogs</Button>
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

export default HomeBlogs;