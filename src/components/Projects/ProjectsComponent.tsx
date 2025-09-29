"use client";

import { useState } from "react";
import { IProject } from "@/types/project.type";
import ProjectCard from "./ProjectCard";

interface ProjectsComponentProps {
    projects: IProject[];
}

const categories = ["All", "Full Stack", "MERN", "FrontEnd","Backend", "JavaScript", "HTML-CSS"];

const ProjectsComponent = ({ projects }: ProjectsComponentProps) => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // console.log(projects);
    
    // const fakeProjects = projects.flatMap((t) => Array(10).fill(t));
    // console.log('fake ',fakeProjects);

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects?.filter(
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
            <div className="flex flex-wrap gap-2 lg:gap-3 justify-center">
                {categories?.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setActiveCategory(category);
                            setCurrentPage(1);
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
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 pt-10"
            >
                {paginatedProjects.length > 0 ? (
                    paginatedProjects.map((project, idx) => (
                        <ProjectCard key={project.id + idx} project={project} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full h-screen">
                        No projects found in this category.
                    </p>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center gap-3">
                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-[#2563EB] text-white rounded disabled:opacity-50"
                >
                    Prev
                </button>
                <span className="px-2 py-1">
                    {currentPage} / {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 bg-[#2563EB] text-white  rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProjectsComponent;
