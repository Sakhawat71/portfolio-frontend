"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IProject } from "@/types/project.type";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getProjectById } from "@/utils/actions/fetchProject";
// { project }: { project: IProject }

interface ProjectDetailsProps {
    id: string;
}

const ProjectDetails = ({ project }: { project: IProject }) => {
    // const [project, setProject] = useState<IProject | null>(null);

    // useEffect(() => {
    //     const fetchProject = async () => {
    //         const projectData = await getProjectById(id);
    //         setProject(projectData?.data ?? null);
    //     };
    //     fetchProject();
    // }, [id]);

    // Format date display
    const formatDate = (dateString: string | null) => {
        if (!dateString) return "Present";
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
        });
    };

    if (!project) {
        return (
            <div className="flex justify-center items-center min-h-[300px]">
                <span className="text-lg text-gray-500 dark:text-gray-400">Loading project details...</span>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto px-4 sm:px-6 py-12"
        >
            {/* Project Header */}
            <div className="mb-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg mb-8 group"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </motion.div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                            {project.title}
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Link href={project.liveUrl} target="_blank">
                            <Button
                                size="lg"
                                className="gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all"
                            >
                                <ExternalLink size={18} />
                                Live Demo
                            </Button>
                        </Link>
                        <Link href={project.githubUrl} target="_blank">
                            <Button
                                variant="outline"
                                size="lg"
                                className="gap-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                            >
                                <Github size={18} />
                                Source Code
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column - Tech Stack */}
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                            Technologies Used
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech: any) => (
                                <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="text-sm py-1.5 px-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Add more sections here if needed */}
                </div>

                {/* Right Column - Project Metadata */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                            Project Details
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                                    Timeline
                                </h3>
                                <p className="text-gray-800 dark:text-gray-200">
                                    {formatDate(project.startDate)} - {formatDate(project.endDate)}
                                </p>
                            </div>

                            {project.isTeam && (
                                <>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                                            Team Size
                                        </h3>
                                        <p className="text-gray-800 dark:text-gray-200">
                                            {project.teamSize} members
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                                            My Role
                                        </h3>
                                        <p className="text-gray-800 dark:text-gray-200">
                                            {project.roleInTeam}
                                        </p>
                                    </div>
                                </>
                            )}

                            <div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                                    Added to Portfolio
                                </h3>
                                <p className="text-gray-800 dark:text-gray-200">
                                    {new Date(project.createdAt).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;