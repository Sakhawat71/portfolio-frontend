import BlogDetails from "@/components/Blog/BlogDetails";
import { fetchBlogById } from "@/utils/actions/fetchBlogs";
import { IBlog } from "@/types/blog.type";
import React from "react";

type BlogDetailsPageProps = {
    params: { id: string };
};

const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
    const { id } = params;
    const blog = await fetchBlogById(id);
    const blogData: IBlog = blog?.data;

    if (!blogData) {
        return (
            <div className="text-center text-red-500 text-xl mt-10">Blog not found!</div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto py-10 px-4 mt-10">
            <BlogDetails blog={blogData} />
        </div>
    );
};

export default BlogDetailsPage;
