import { fetchBlogById } from "@/utils/actions/fetchBlogs";
import { IBlog } from "@/types/blog.type";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogDetails from "@/components/Blog/BlogDetails";

interface BlogPageProps {
    params: { id: string };
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const blog = await fetchBlogById(params.id);
    if (!blog || !blog.data) return { title: "Blog Not Found" };
    return {
        title: blog.data.title,
        description: blog.data.contentHtml?.substring(0, 150),
    };
}

const BlogDetailsPage = async ({ params }: any) => {
    const { id } = params;
    const blog = await fetchBlogById(id);
    if (!blog || !blog.data) return notFound();
    const blogData: IBlog = blog.data;

    return (
        <div className="max-w-5xl mx-auto py-10 px-4 mt-10">
            <BlogDetails blog={blogData} />
        </div>
    );
};

export default BlogDetailsPage;