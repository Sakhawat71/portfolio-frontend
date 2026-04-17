import ProjectsComponent from "@/components/Projects/ProjectsComponent";
import { getProjects } from "@/services/fetchProject";
import projectJsonData from "../../data/projects.json";

const ProjectsPage = async () => {
    let projects = [];

    try {
        const response = await getProjects();

        if (response?.data && response.data.length > 0) {
            projects = response.data;
        } else {
            // fallback if empty
            projects = projectJsonData;
        }
    } catch (error) {
        console.error("API failed, using local JSON:", error);

        // fallback if API crashes
        projects = projectJsonData;
    };

    return (
        <div className="bg-gradient-to-b from-[#EFEEEA] to-slate-400 min-h-screen p-6 pt-20">

            <div className="mb-10 font-raleway">
                <h1 className="text-2xl md:text-3xl lg:text-[50px] font-bold text-center mt-5 text-gray-700 font-montserrat">
                    My Projects Showcase
                </h1>

                <p className="text-center text-base lg:text-xl font-medium text-gray-600 my-8 lg:w-2/4 mx-auto">
                    Projects I built to sharpen my skills and solve real problems.
                </p>
            </div>

            <div className="mx-3 md:mx-5 lg:mx-20">
                <ProjectsComponent projects={projects} />
            </div>
        </div>
    );
};

export default ProjectsPage;



//     const { data: projects } = await getProjects();
//     // const  projects = []
//     // console.log(projects);

//     if (!projects || projects.length === 0) {
//         return <p className="text-black flex items-center justify-center h-screen">No projects found.</p>;
//     };

//     return ()