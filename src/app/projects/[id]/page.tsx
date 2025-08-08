import { notFound } from "next/navigation";
import { IProject } from "@/types/project.type";
import ProjectDetails from "@/components/Projects/ProjectDetails";
import { getProjectById } from "@/services/fetchProject";

type Props = {
    params: {
        id: string;
    };
};

const ProjectDetailsPage = async ( params : any ) => {
    const { id } = params;
    const projectData = await getProjectById(id);
    const project: IProject = projectData?.data;
    if (!project) return notFound();

    return (
        <div>
            <ProjectDetails
                project={project}
            />
        </div>
    );
};

export default ProjectDetailsPage;

