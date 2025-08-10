import { TProject } from "@/types/project.type";
import ProjectCard from "./ProjectCard";



interface ProjectsComponentProps {
    projects: TProject[];
}

const ProjectsComponent = ({ projects }: ProjectsComponentProps) => {
    const fakeProject = projects.flatMap(t => Array(10).fill(t));
    // console.log(fakeProject);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 bg-[#D6D6D6]'>
            {
                fakeProject?.map((project) =>
                    <ProjectCard key={project.id} project={project} />
                )
            }
        </div>
    );
};

export default ProjectsComponent;