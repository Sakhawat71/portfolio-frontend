import BlogDetails from "@/components/Blog/BlogDetails";
import { fetchBlogById } from "@/utils/actions/fetchBlogs";
import { IBlog } from "@/types/blog.type";
import React from "react";

interface PageProps {
    params: {
        id: string;
    };
}

const BlogDetailsPage = async ({ params }: PageProps) => {

    // const { id } = params; 
    const { id } = await Promise.resolve(params);


    const blog = await fetchBlogById(id);

    if (!blog || !blog.data) {
        return (
            <div className="text-center text-red-500 text-xl mt-10">
                Blog not found!
            </div>
        );
    }

    const blogData: IBlog = blog.data;

    return (
        <div className="max-w-5xl mx-auto py-10 px-4 mt-10">
            <BlogDetails blog={blogData} />
        </div>
    );
};

export default BlogDetailsPage;