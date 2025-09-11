'use client'

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { IBlog } from "@/types/blog.type"
import { Badge } from "../ui/badge"

export const BlogCard = ({ blog }: { blog: IBlog }) => {

    function extractFirstImageUrlFromHtml(html: string): string | null {
        const match = html.match(/<img[^>]+src="([^">]+)"/);
        return match ? match[1] : null;
    };
    const blogImage = extractFirstImageUrlFromHtml(blog.contentHtml);
    const altImage = 'https://res.cloudinary.com/delntxu0e/image/upload/w_800,h_600,c_limit/v1749505084/blog-default_d9ebqm.avif'
    // console.log(blogImage);

    return (
        <Card className="bg-slate-100 w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
            {/* Cover Image */}
            <div className="relative w-full h-48">
                <Image
                    src={blogImage ?? altImage}
                    alt={blog.title}
                    fill
                    className="object-cover"
                />
            </div>

            <CardHeader>
                <h2 className="text-xl font-semibold line-clamp-2">{blog.title}</h2>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-2">
                {blog.tags.map(tag => (
                    <Badge key={tag} variant="outline">
                        {tag}
                    </Badge>
                ))}
            </CardContent>

            <CardFooter className="flex justify-between items-center text-sm text-muted-foreground px-4 pb-4">
                <span>
                    {blog.publishedAt ? format(new Date(blog.publishedAt), "dd MMM yyyy") : "Draft"}
                </span>
                <Link href={`/blog/${blog.id}`} className="text-primary hover:underline">
                    Read more →
                </Link>
            </CardFooter>
        </Card>
    )
}
