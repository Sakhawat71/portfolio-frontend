import BlogComponent from "@/components/Blog/BlogComponent";
import { fetchBlogs } from "@/services/fetchBlogs";

const BlogsPage = async () => {
    const blogs = await fetchBlogs();
    console.log(blogs);

    return (
        <div className="mx-auto bg-gradient-to-b from-[#EFEEEA] to-slate-400 min-h-screen p-6 pt-20">
            
            <div className="mb-10 font-raleway">
                <h1 className="text-2xl md:text-3xl lg:text-[50px] font-bold text-center mt-5 text-gray-700 font-montserrat">
                    My Blog Corner
                </h1>
                <p className="text-center text-base lg:text-xl font-medium text-gray-600 my-8 lg:w-2/4 mx-auto">
                    A space where I share my thoughts on technology, books, novels, geopolitics, and everything that inspires me.
                </p>

                <div className="mx-auto flex flex-wrap items-center justify-center gap-5">
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div> Tech & Programming
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div> Books & Novels
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-700"></div> Geopolitics
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600"></div> Personal Insights
                    </div>
                </div>
            </div>


            <div className="mt-20">
                {blogs.data.length === 0 ? (
                    <p className="text-center text-gray-500">No blogs found.</p>
                ) : (
                    <BlogComponent blogs={blogs?.data} />
                )}
            </div>
        </div>
    );
};

export default BlogsPage;
