import { TProject } from "@/types/project.type";
import ProjectCard from "./ProjectCard";



interface ProjectsComponentProps {
    projects: TProject[];
}

const ProjectsComponent = ({ projects }: ProjectsComponentProps) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 bg-[#D6D6D6]'>
            {
                projects?.map((project) =>
                    <ProjectCard key={project.id} project={project} />
                )
            }
        </div>
    );
};

export default ProjectsComponent;