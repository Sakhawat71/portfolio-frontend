import Banner from "@/components/Banner/Banner";
import HomeBlogs from "@/components/HomeBlogs/HomeBlogs";
import TopProjects from "@/components/HomeProjects/TopProjects";
import Skills from "@/components/Skills/Skills";

const HomePage = () => {

    return (
        <div className="bg-[#D7D7D7]">
            <Banner />
            <Skills />
            <TopProjects />
            <HomeBlogs />
        </div>
    );
};

export default HomePage;