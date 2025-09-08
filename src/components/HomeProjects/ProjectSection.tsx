"use client"

import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { TProjectProps } from "@/types/project.type"


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
}: TProjectProps) {

    // console.log(images);

    return (
        <div className={`grid md:grid-cols-2 gap-10 items-center rounded-2xl ${reverse ? "md:[&>*:first-child]:order-last" : ""} border-black border-2 bg-slate-50`}>

            {/* Carousel Side */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-black border-2"
            >
                <Carousel className="w-[90%] md:w-full max-w-lg mx-auto">
                    <CarouselContent>
                        {images.map((img: string, i) => (
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
                    
                    {/* <CarouselPrevious /> */}
                    {/* <CarouselNext /> */}
                </Carousel>
            </motion.div>

            {/* Info Side */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-x-2 border-black space-y-4 h-full p-6"
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
    );
};