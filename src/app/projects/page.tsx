import ProjectsComponent from "@/components/Projects/ProjectsComponent";
import { getProjects } from "@/services/fetchProject";

const ProjectsPage = async () => {
    const { data: projects } = await getProjects();
    // const  projects = []
    // console.log(projects);

    if (!projects || projects.length === 0) {
        return <p className="text-black flex items-center justify-center h-screen">No projects found.</p>;
    };

    return (
        <div className="bg-gradient-to-b from-slate-100 to-slate-50 min-h-screen p-6 pt-20">

            <div className="mb-10 font-raleway">
                <h1 className="text-2xl md:text-3xl lg:text-[50px] font-bold text-center mt-5 text-gray-700 font-montserrat">
                    My Projects Showcase
                </h1>
                <p className="text-center text-base lg:text-xl font-medium text-gray-600 my-8 lg:w-2/4 mx-auto">
                    Projects I built to sharpen my skills and solve real problems. Full-stack apps combining performance, clean code, and usability.
                </p>

                <div className="mx-auto flex flex-wrap items-center justify-center gap-5">
                    <div className=" flex items-center justify-center gap-2"> <div className="w-2 h-2 rounded-full bg-green-600"></div> Full-Stack Development</div>
                    <div className="flex items-center justify-center gap-2"> <div className="w-2 h-2 rounded-full bg-blue-600"></div> Backend Focus</div>
                    <div className="flex items-center justify-center gap-2"> <div className="w-2 h-2 rounded-full bg-purple-700"></div> Optimized Code</div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="mx-3 md:mx-5 lg:mx-20">
                <ProjectsComponent projects={projects} />
            </div>
        </div>
    );
};

export default ProjectsPage;