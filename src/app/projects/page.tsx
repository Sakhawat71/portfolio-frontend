import ProjectsComponent from "@/components/Projects/ProjectsComponent";
import { getProjects } from "@/services/fetchProject";
import { Badge } from "@/components/ui/badge";

const ProjectsPage = async () => {
    const { data: projects } = await getProjects();

    if (!projects || projects.length === 0) {
        return <p className="text-center text-gray-500 mt-10">No projects found.</p>;
    }

    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen p-6 pt-20">
            {/* Title */}
            <h1 className="text-4xl font-extrabold text-center mb-3 mt-6">
                🚀 My Projects
            </h1>
            <p className="text-center text-gray-600 mb-10">
                A showcase of my best work, built with modern web technologies.
            </p>

            {/* Filters (optional, demo only) */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                <Badge className="cursor-pointer">All</Badge>
                <Badge className="cursor-pointer bg-blue-500 text-white hover:bg-blue-600">
                    Team Projects
                </Badge>
                <Badge className="cursor-pointer bg-green-500 text-white hover:bg-green-600">
                    Solo Projects
                </Badge>
            </div>

            {/* Projects Grid */}
            <div className="mx-3 md:mx-5 lg:mx-10">
                <ProjectsComponent projects={projects} />
            </div>
        </div>
    );
};

export default ProjectsPage;