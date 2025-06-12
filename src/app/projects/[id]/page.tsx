import { getProjectById } from "@/utils/actions/fetchProject";
import { notFound } from "next/navigation";
import { IProject } from "@/types/project.type";
import ProjectDetails from "@/components/Projects/ProjectDetails";

type ProjectDetailsPageProps = {
    params: Promise<{ id: string }>;
};

const ProjectDetailsPage = async ({ params }: ProjectDetailsPageProps) => {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const projectData = await getProjectById(id);
    const project: IProject = projectData?.data;


    if (!project) return notFound();

    return (
        <div>
            <ProjectDetails project={project} />
        </div>
    );
};

export default ProjectDetailsPage;