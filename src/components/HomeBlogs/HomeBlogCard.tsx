"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

type BlogCardProps = {
    title: string
    date: string
    tags: string[]
    excerpt: string
    image: string
    link: string
}

export function HomeBlogCard({ title, date, tags, excerpt, image, link }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50 dark:from-zinc-900 dark:to-zinc-950 border-0">
                {/* Blog Image */}
                <div className="w-full h-48 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Blog Content */}
                <CardContent className="p-5 space-y-3">
                    <h3 className="text-lg font-semibold line-clamp-2 hover:text-purple-600 transition-colors">
                        {title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <Badge key={i} className="bg-purple-100 text-purple-700">{tag}</Badge>
                        ))}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                        {excerpt}
                    </p>
                </CardContent>

                {/* Footer with button */}
                <CardFooter className="p-5 pt-0">
                    <Button asChild variant="outline" size="sm" className="group">
                        <a href={link} target="_blank">
                            Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
