"use client";
import { IBlog } from "@/types/blog.type";
import { format } from "date-fns";
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";

type BlogDetailsProps = {
    blog: IBlog;
};

const BlogDetails = ({ blog }: BlogDetailsProps) => {
    const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/blog/${blog.id}` : '';

    const handleShare = (platform: string) => {
        const shareText = `Check out this blog: ${blog.title}`;
        let url = '';

        switch (platform) {
            case 'twitter':
                url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
                break;
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
                break;
            case 'linkedin':
                url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(blog.title)}`;
                break;
            case 'copy':
                navigator.clipboard.writeText(shareUrl);
                toast.success('Link copied to clipboard!');
                return;
        }

        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="max-w-3xl mx-auto px-4 space-y-6">
            {/* Header Section with Share Buttons */}
            <div className="space-y-3 border-b pb-6">
                <div className="flex justify-between items-start gap-4">
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight flex-1">
                        {blog.title}
                    </h1>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleShare('copy')}
                            className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                            aria-label="Copy link"
                        >
                            <LinkIcon size={18} />
                        </button>
                        <button
                            onClick={() => handleShare('twitter')}
                            className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
                            aria-label="Share on Twitter"
                        >
                            <Twitter size={18} />
                        </button>
                        <button
                            onClick={() => handleShare('facebook')}
                            className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                            aria-label="Share on Facebook"
                        >
                            <Facebook size={18} />
                        </button>
                        <button
                            onClick={() => handleShare('linkedin')}
                            className="p-2 text-gray-500 hover:text-blue-700 transition-colors"
                            aria-label="Share on LinkedIn"
                        >
                            <Linkedin size={18} />
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">Sakhawat H.</span>
                        <span className="text-gray-400">•</span>
                        <time dateTime={new Date(blog.publishedAt || blog.createdAt).toISOString()}>
                            {format(new Date(blog.publishedAt || blog.createdAt), "MMMM dd, yyyy")}
                        </time>
                    </div>
                </div>
            </div>

            {/* Content Section (unchanged) */}
            <article
                className="prose prose-lg dark:prose-invert max-w-none 
            prose-p:my-4 /* This ensures consistent paragraph spacing */
            prose-headings:font-semibold 
            prose-img:rounded-lg 
            prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic"
                dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
            />
        </div>
    );
};

export default BlogDetails;