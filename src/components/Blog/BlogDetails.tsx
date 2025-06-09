"use client";
import { IBlog } from "@/types/blog.type";
import { format } from "date-fns";

type BlogDetailsProps = {
    blog: IBlog;
};

const BlogDetails = ({ blog }: BlogDetailsProps) => {

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="text-sm text-gray-500">
                By Sakhawat H. •{" "}
                {format(new Date(blog.publishedAt || blog.createdAt), "MMMM dd, yyyy")}
            </p>

            <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
            />
        </div>
    );
};

export default BlogDetails;
