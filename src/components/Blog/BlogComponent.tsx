"use client"

import { IBlog } from '@/types/blog.type';
import React from 'react';
import { BlogCard } from './BlogCard';

const BlogComponent = ({ blogs }: { blogs: IBlog[] }) => {
    // console.log(blogs);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8'>
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default BlogComponent;