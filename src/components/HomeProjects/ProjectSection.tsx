"use client"

import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { TProjectProps } from "@/types/project.type";


export function ProjectSection({
    name,
    type,
    role,
    features,
    techStack,
    work,
    images,
    githubBackend,
    githubFrontend,
    live,
    reverse,
}: TProjectProps) {

    // console.log(images);

    return (
        <div className={`grid lg:grid-cols-2 gap-10 items-center rounded-2xl ${reverse ? "md:[&>*:first-child]:order-last" : ""} bg-slate-50`}>

            {/* Carousel Side */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="h-full p-4"
            >
                <Carousel
                    className="w-[90%] md:w-full max-w-lg mx-auto"
                    opts={{ loop: true, align: 'start' }}
                    plugins={[
                        Autoplay({
                            delay: 3500,
                            stopOnInteraction: false,
                            stopOnMouseEnter: true
                        })
                    ]}
                >
                    <CarouselContent>
                        {images.map((img: string, i) => (
                            <CarouselItem key={i}>
                                <Card className="">
                                    <CardContent className="flex items-center justify-center p-2">
                                        <Image
                                            src={img}
                                            alt={`${name} screenshot`}
                                            width={600}
                                            height={350}
                                            // fill
                                            className="rounded-xl shadow-lg object-cover w-full h-full"
                                        />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </motion.div>

            {/* Info Side */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className=" space-y-4 h-full p-6"
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
                <div className="flex flex-wrap gap-2 mt-3">
                    {techStack.map((tech) => (
                        <Badge key={tech} className="bg-gray-100 text-gray-800 text-xs cursor-pointer px-2">
                            {tech}
                        </Badge>
                    ))}
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
    );
};