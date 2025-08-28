"use client"

import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

type ProjectProps = {
    name: string
    type: "Team" | "Solo"
    role: string
    features: string[]
    work: string
    images: string[]
    githubBackend?: string
    githubFrontend?: string
    live: string
    reverse?: boolean
}

export function ProjectSection({
    name,
    type,
    role,
    features,
    work,
    images,
    githubBackend,
    githubFrontend,
    live,
    reverse,
}: ProjectProps) {

    // console.log(images);

    return (
        <section className=" py-16 mx-20">
            <div className={`grid md:grid-cols-2 gap-10 items-center ${reverse ? "md:[&>*:first-child]:order-last" : ""}`}>

                {/* Carousel Side */}
                <motion.div
                    // initial={{ opacity: 0, x: reverse ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    // transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    // className="w-full"
                >
                    <Carousel className="w-full max-w-lg mx-auto">
                        <CarouselContent>
                            {images.map((img : string, i) => (
                                <CarouselItem key={i}>
                                    <Card>
                                        <CardContent className="flex  items-center justify-center p-2">
                                            <Image
                                                src={img}
                                                alt={`${name} screenshot`}
                                                width={350}
                                                height={200}
                                                className="rounded-xl shadow-lg object-cover w-full h-full"
                                            />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </motion.div>

                {/* Info Side */}
                <motion.div
                    // initial={{ opacity: 0, x: reverse ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    // transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>
                    <div className="flex gap-2">
                        <Badge>{type}</Badge>
                        <Badge variant="outline">{role}</Badge>
                    </div>
                    <div>
                        <h3 className="font-semibold">Features:</h3>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            {features.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold">My Work:</h3>
                        <p className="text-sm text-muted-foreground">{work}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                        {githubFrontend && (
                            <Button asChild variant="outline" size="sm">
                                <a href={githubFrontend} target="_blank"><Github className="w-4 h-4 mr-2" />Frontend</a>
                            </Button>
                        )}
                        {githubBackend && (
                            <Button asChild variant="outline" size="sm">
                                <a href={githubBackend} target="_blank"><Github className="w-4 h-4 mr-2" />Backend</a>
                            </Button>
                        )}
                        <Button asChild size="sm">
                            <a href={live} target="_blank"><ExternalLink className="w-4 h-4 mr-2" />Live</a>
                        </Button>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
