import { IBlog } from "@/types/blog.type";
import {
    extractFirstImageUrlFromHtml,
    extractFirstParagraphFromHtml
} from "@/utils/extractFirstImage";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

export const BlogCard = (
    { blog, variant = "default" }
        : { blog: IBlog, variant?: "default" | "featured" | "small" }
) => {
    const blogImage = extractFirstImageUrlFromHtml(blog.contentHtml);
    const altImage = 'https://res.cloudinary.com/delntxu0e/image/upload/w_800,h_600,c_limit/v1749505084/blog-default_d9ebqm.avif'
    const imageUrl = blogImage ?? altImage;

    const firstText = extractFirstParagraphFromHtml(blog.contentHtml)
    // console.log(firstText);

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
                    <CardContent className="flex flex-wrap gap-2">
                        {blog.tags.map(tag => (
                            <Badge key={tag} variant="outline">
                                {tag}
                            </Badge>
                        ))}
                    </CardContent>
                    <p className="text-muted-foreground line-clamp-3">{firstText}</p>
                    <Link href={`/blog/${blog.id}`} className="text-primary mt-4 hover:underline hover:text-blue-700">Read more →</Link>
                </div>
            </div>
        )
    };

    // small card
    if (variant === "small") {
        return (
            <Card className="bg-slate-100 rounded-xl overflow-hidden shadow-md flex flex-col">
                {/* Image Section */}
                <CardHeader className="relative w-full h-40">
                    <Image
                        src={imageUrl}
                        alt={blog.title}
                        fill
                        className="object-cover"
                    />
                </CardHeader>

                {/* Content + Footer should fill space */}
                <div className="flex flex-col flex-1">
                    <CardContent className="p-4 flex flex-col flex-1">
                        <h3 className="text-lg font-normal line-clamp-2">{blog.title}</h3>

                        <div className="flex flex-wrap gap-2 mt-2">
                            {blog.tags.map(tag => (
                                <p key={tag} className="font-bold text-xs text-[#B84848]">
                                    #{tag}
                                </p>
                            ))}
                        </div>

                        <p className="text-sm py-3 text-muted-foreground line-clamp-2">
                            {firstText}
                        </p>
                    </CardContent>

                    {/* Footer sticks to bottom */}
                    <CardFooter className="mt-auto flex justify-end px-4 pb-4">
                        <Link
                            href={`/blog/${blog.id}`}
                            className="text-primary hover:underline hover:text-blue-700"
                        >
                            Read more →
                        </Link>
                    </CardFooter>
                </div>
            </Card>
        );
    };



    // Default (grid cards)
    return (
        <Card className="bg-slate-100 rounded-xl shadow-md flex flex-col">
            <CardHeader className="relative w-full h-48">
                <Image
                    src={imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover"
                />
            </CardHeader>

            <CardContent className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold">{blog.title}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                    {blog.tags.map(tag => (
                        <Badge key={tag} variant="outline">
                            {tag}
                        </Badge>
                    ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 mt-3">{firstText}</p>
            </CardContent>

            <CardFooter className="mt-auto flex justify-end px-4 pb-4">
                <Link
                    href={`/blog/${blog.id}`}
                    className="text-primary hover:underline hover:text-blue-700"
                >
                    Read more →
                </Link>
            </CardFooter>
        </Card>
    )
};




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
