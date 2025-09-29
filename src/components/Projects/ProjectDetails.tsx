"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IProject } from "@/types/project.type";
import { Github, ExternalLink, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectDetails = ({ project }: { project: IProject }) => {
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
                <span className="text-lg text-gray-500 dark:text-gray-400">
                    Loading project details...
                </span>
            </div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12"
        >
            {/* Project Header */}
            <div>
                <div className="relative rounded-xl overflow-hidden shadow-lg mb-8 group">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={600}
                        priority
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                            {project.title}
                        </h1>
                        {project.category && (
                            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                                {project.category}
                            </Badge>
                        )}
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mt-2">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
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
                                className="gap-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                <Github size={18} />
                                Frontend Code
                            </Button>
                        </Link>
                        {project.backGitUrl && (
                            <Link href={project.backGitUrl} target="_blank">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="gap-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    <Server size={18} />
                                    Backend Code
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="md:col-span-2 space-y-8">
                    {/* Tech Stack */}
                    <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                            Technologies Used
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
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

                    {/* Highlights / Features */}
                    {project.highlights && project.highlights.length > 0 && (
                        <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                                Key Highlights
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                {project.highlights.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                            Project Details
                        </h2>
                        <div className="space-y-4 text-gray-800 dark:text-gray-200">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Timeline
                                </h3>
                                <p>
                                    {formatDate(project.startDate)} -{" "}
                                    {formatDate(project.endDate)}
                                </p>
                            </div>

                            {project.isTeam && (
                                <>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Team Size
                                        </h3>
                                        <p>{project.teamSize} members</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            My Role
                                        </h3>
                                        <p>{project.roleInTeam}</p>
                                    </div>
                                </>
                            )}

                            {project.createdAt && (
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Added to Portfolio
                                    </h3>
                                    <p>
                                        {new Date(project.createdAt).toLocaleDateString(
                                            "en-US",
                                            {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            }
                                        )}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;