import { getProjectById } from "@/utils/actions/fetchProject";
import { notFound } from "next/navigation";
import { IProject } from "@/types/project.type";
import ProjectDetails from "@/components/Projects/ProjectDetails";

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

// // This must match the dynamic route [id]
// export const generateStaticParams = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`);
//     const json = await res.json();

//     return json.data?.map((project: { id: string }) => ({
//         id: project.id,
//     }));
// };
