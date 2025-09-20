"use client";

import { useState } from "react";
import { TProject } from "@/types/project.type";
import ProjectCard from "./ProjectCard";

interface ProjectsComponentProps {
    projects: TProject[];
}

const categories = ["All", "Full Stack", "Mern","FrontEnd", "JavaScript", "HTML/CSS"];

const ProjectsComponent = ({ projects }: ProjectsComponentProps) => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const fakeProjects = projects.flatMap((t) => Array(30).fill(t));

    const filteredProjects =
        activeCategory === "All"
            ? fakeProjects
            : fakeProjects.filter(
                (project) =>
                    project.category?.toLowerCase() === activeCategory.toLowerCase()
            );

    // pagination slice
    const start = (currentPage - 1) * itemsPerPage;
    const paginatedProjects = filteredProjects.slice(
        start,
        start + itemsPerPage
    );

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

    return (
        <div className="space-y-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setActiveCategory(category);
                            setCurrentPage(1); // reset on filter change
                        }}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeCategory === category
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-200 hover:bg-gray-300"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                {paginatedProjects.length > 0 ? (
                    paginatedProjects.map((project, idx) => (
                        <ProjectCard key={project.id + idx} project={project} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        No projects found in this category.
                    </p>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center gap-3">
                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Prev
                </button>
                <span className="px-2 py-1">
                    {currentPage} / {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProjectsComponent;
