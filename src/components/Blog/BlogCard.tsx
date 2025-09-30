import { IBlog } from "@/types/blog.type";
import { extractFirstImageUrlFromHtml, extractFirstParagraphFromHtml } from "@/utils/extractFirstImage";
import Image from "next/image";
import Link from "next/link";

export const BlogCard = (
    { blog, variant = "default" }
        : { blog: IBlog, variant?: "default" | "featured" | "small" }
) => {
    const blogImage = extractFirstImageUrlFromHtml(blog.contentHtml);
    const altImage = 'https://res.cloudinary.com/delntxu0e/image/upload/w_800,h_600,c_limit/v1749505084/blog-default_d9ebqm.avif'
    const imageUrl = blogImage ?? altImage;

    const firstText = extractFirstParagraphFromHtml(blog.contentHtml)


    if (variant === "featured") {
        return (
            <div className="bg-slate-100 rounded-xl overflow-hidden shadow-lg p-6 flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/2 h-64">
                    <Image
                        src={imageUrl}
                        alt={blog.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col justify-between md:w-1/2">
                    <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                    <p className="text-muted-foreground line-clamp-3">{firstText}</p>
                    <Link href={`/blog/${blog.id}`} className="text-primary mt-4 hover:underline">Read more →</Link>
                </div>
            </div>
        )
    }

    if (variant === "small") {
        return (
            <div className="bg-slate-100 rounded-xl overflow-hidden shadow-md">
                <div className="relative w-full h-40">
                    <Image
                        src={imageUrl}
                        alt={blog.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold line-clamp-2">{blog.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{firstText}</p>
                </div>
            </div>
        )
    }

    // Default (grid cards)
    return (
        <div className="bg-slate-100 rounded-xl shadow-md">
            <div className="relative w-full h-48">
                <Image
                    src={imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold">{blog.title}</h3>
            </div>
        </div>
    )
}




// 'use client'

// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
// import Link from "next/link"
// import Image from "next/image"
// import { format } from "date-fns"
// import { IBlog } from "@/types/blog.type"
// import { Badge } from "../ui/badge"

// export const BlogCard = ({ blog }: { blog: IBlog }) => {

//     function extractFirstImageUrlFromHtml(html: string): string | null {
//         const match = html.match(/<img[^>]+src="([^">]+)"/);
//         return match ? match[1] : null;
//     };
//     const blogImage = extractFirstImageUrlFromHtml(blog.contentHtml);
//     const altImage = 'https://res.cloudinary.com/delntxu0e/image/upload/w_800,h_600,c_limit/v1749505084/blog-default_d9ebqm.avif'

//     return (
//         <Card className="bg-slate-100  rounded-2xl overflow-hidden shadow-lg flex flex-col">
//             {/* Cover Image */}
//             <div className="relative w-full h-48">
//                 <Image
//                     src={blogImage ?? altImage}
//                     alt={blog.title}
//                     fill
//                     className="object-cover"
//                 />
//             </div>

//             <CardHeader>
//                 <h2 className="text-lg font-normal line-clamp-2">{blog.title}</h2>
//             </CardHeader>

//             <CardContent className="flex flex-wrap gap-2">
//                 {blog.tags.map(tag => (
//                     <Badge key={tag} variant="outline">
//                         {tag}
//                     </Badge>
//                 ))}
//             </CardContent>

//             {/* Push footer to bottom */}
//             <CardFooter className="mt-auto flex justify-between items-center text-sm text-muted-foreground px-4 pb-4">
//                 <span>
//                     {blog.publishedAt ? format(new Date(blog.publishedAt), "dd MMM yyyy") : "Draft"}
//                 </span>
//                 <Link href={`/blog/${blog.id}`} className="text-primary hover:underline">
//                     Read more →
//                 </Link>
//             </CardFooter>
//         </Card>
//     );
// };
