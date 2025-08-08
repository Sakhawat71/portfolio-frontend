import BlogComponent from "@/components/Blog/BlogComponent";
import { fetchBlogs } from "@/services/fetchBlogs";

const BlogsPage = async () => {
    const blogs = await fetchBlogs();
    // console.log(blogs);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Blogs</h1>

            {blogs.length === 0 ? (
                <p className="text-center text-gray-500">No blogs found.</p>
            ) : (
                <BlogComponent blogs={blogs?.data} />
            )}
        </div>
    );
};

export default BlogsPage;
