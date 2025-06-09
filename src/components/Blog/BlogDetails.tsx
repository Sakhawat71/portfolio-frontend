"use client";
import { IBlog } from "@/types/blog.type";
import { format } from "date-fns";

type BlogDetailsProps = {
    blog: IBlog;
};

const BlogDetails = ({ blog }: BlogDetailsProps) => {

    return (
        <div className="space-y-6">
            <h1 className="text-xl font-bold">{blog.title}</h1>
            <p className="text-sm text-gray-500">
                By Sakhawat H. •{" "}
                {format(new Date(blog.publishedAt || blog.createdAt), "MMMM dd, yyyy")}
            </p>

            <article
                className="prose prose-lg max-w-none prose-headings:font-semibold prose-img:rounded-lg prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic"
                dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
            />

        </div>
    );
};

export default BlogDetails;
