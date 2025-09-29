import { notFound } from "next/navigation";
import { IProject } from "@/types/project.type";
import ProjectDetails from "@/components/Projects/ProjectDetails";
import { getProjectById } from "@/services/fetchProject";

type ProjectProps = {
    params: Promise<{ id: string }>;
};

const ProjectDetailsPage = async ({ params }: ProjectProps) => {

    const resolvedParams = await params;
    const { id } = resolvedParams;
    const projectData = await getProjectById(id);
    // console.log(id, projectData);
    const project: IProject = projectData?.data;
    console.log(project);
    if (!project) return notFound();

    return (
        <div className="mt-10">
            <ProjectDetails
                project={project}
            />
        </div>
    );
};

export default ProjectDetailsPage;

