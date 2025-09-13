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
            <h1 className="text-[60px] font-bold text-center mb-3 mt-6">
                My Projects Showcase
            </h1>
            <p className="text-center text-xl font-medium text-gray-600 mb-4 w-2/4 mx-auto">
                Projects I built to sharpen my skills and solve real problems. Full-stack apps combining performance, clean code, and usability.
            </p>

            <div className="mx-auto flex items-center justify-center gap-5 mb-10">
                <div className="flex items-center justify-center gap-2"> <div className="w-2 h-2 rounded-full bg-green-600"></div> Full-Stack Development</div>
                <div className="flex items-center justify-center gap-2"> <div className="w-2 h-2 rounded-full bg-blue-600"></div> Backend Focus</div>
                <div className="flex items-center justify-center gap-2"> <div className="w-2 h-2 rounded-full bg-purple-700"></div> Optimized Code</div>
            </div>

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