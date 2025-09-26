"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IProject } from "@/types/project.type";


const ProjectCard = (
    { project }: { project: IProject }
) => {

    return (
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-[#FFF2EF] hover:scale-[1.02]">
            {/* <Link href={`/projects/${project.id}`} className="block"> */}
                {/* Image */}
                <CardHeader className="p-0 relative">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="rounded-t-2xl h-52 object-cover w-full"
                    />
                    <span className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        {project.isTeam ? `Team (${project.teamSize})` : "Solo"}
                    </span>
                </CardHeader>

                {/* Content */}
                <CardContent className="space-y-3 p-5">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                        <Link href={project.liveUrl} target="_blank">
                            <Button variant="link" className="gap-1 text-sm">
                                <ExternalLink className="h-4 w-4" /> Live
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-3">
                        {project?.description?.slice(0,45)} ....
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mt-3">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} className="bg-gray-100 text-gray-700 text-xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    {/* Role + Duration */}
                    {project.roleInTeam && (
                        <p className="text-xs text-gray-500">
                            Role: {project.roleInTeam} | {project.startDate} - {project.endDate}
                        </p>
                    )}
                </CardContent>
            {/* </Link> */}

            {/* Footer */}
            <CardFooter className="flex justify-between items-center px-4 pb-4">
                <Link href={project.liveUrl} target="_blank">
                    <Button variant="outline" className="gap-1 text-sm">
                        <ExternalLink className="h-4 w-4" /> Live
                    </Button>
                </Link>
                <Link href={project.githubUrl} target="_blank">
                    <Button variant="outline" className="gap-1 text-sm">
                        {/* <Github className="h-4 w-4" /> */}
                         Details
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
