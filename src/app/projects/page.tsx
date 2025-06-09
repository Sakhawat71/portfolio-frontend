import { getProjects } from "@/utils/actions/fetchProject";

const ProjectsPage = async () => {
    const { data: projects } = await getProjects();
    
    if (!projects || projects.length === 0) {
        return <p className="text-center text-gray-500 mt-10">No projects found.</p>;
    }

    return (
        <div className="bg-[#D6D6D6] min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
            </div>
        </div>
    );
};

export default ProjectsPage;
