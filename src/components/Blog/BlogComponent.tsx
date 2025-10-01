import { IBlog } from "@/types/blog.type"
import { BlogCard } from "./BlogCard"

export default function BlogLandingPage({ blogs }: { blogs: IBlog[] }) {
    if (!blogs || blogs.length === 0) return <p>No blogs found</p>

    // Featured blogs: first 4
    const featured = blogs.slice(0, 4)
    const rest = blogs.slice(4)

    return (
        <div className="mx-28 px-4 py-8">

            <h1 className="text-3xl md:text-4xl font-bold mb-8">Latest</h1>

            {/* Featured Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {featured[0] && (
                    <div className="md:col-span-2 lg:col-span-3">
                        <BlogCard blog={featured[0]} variant="featured" />
                    </div>
                )}
                {featured.slice(1, 4).map(blog => (
                    <BlogCard key={blog.id} blog={blog} variant="small" />
                ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-8">All BLogs</h1>
            {/* Rest blogs normal grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    )
}




// "use client"

// import { IBlog } from '@/types/blog.type';
// import React from 'react';
// import { BlogCard } from './BlogCard';

// const BlogComponent = ({ blogs }: { blogs: IBlog[] }) => {
//     // console.log(blogs);
//     return (
//         <div className='md:mx-20 lg:mx-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
//             {blogs?.map((blog) => (
//                 <BlogCard key={blog.id} blog={blog} />
//             ))}
//         </div>
//     );
// };

// export default BlogComponent;