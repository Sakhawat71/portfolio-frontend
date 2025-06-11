"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <CardHeader className="p-0">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="rounded-t-2xl h-48 object-cover w-full"
                />
            </CardHeader>

            <CardContent className="space-y-3 p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center px-4 pb-4">
                <Link href={project.liveUrl} target="_blank">
                    <Button variant="link" className="text-blue-600 gap-1 text-sm">
                        <ExternalLink className="h-4 w-4" /> Live
                    </Button>
                </Link>
                <Link href={project.githubUrl} target="_blank">
                    <Button variant="link" className="text-gray-700 gap-1 text-sm">
                        <Github className="h-4 w-4" /> Code
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
