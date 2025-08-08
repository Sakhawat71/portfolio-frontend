import ProjectsComponent from "@/components/Projects/ProjectsComponent";
import { getProjects } from "@/services/fetchProject";

const ProjectsPage = async () => {
    const { data: projects } = await getProjects();
    // console.log(projects);

    if (!projects || projects.length === 0) {
        return <p className="text-center text-gray-500 mt-10">No projects found.</p>;
    }

    return (
        <div className="bg-[#D6D6D6] min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-8 mt-8">My Projects</h1>

            <div className="mx-3 md:mx-5 lg:mx-10">
                <ProjectsComponent projects={projects} />
            </div>
        </div>
    );
};

export default ProjectsPage;
