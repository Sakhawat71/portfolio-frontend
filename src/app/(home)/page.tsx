import Banner from "@/components/Banner/Banner";
import Skills from "@/components/Skills/Skills";
import Footer from "@/components/shared/Footer";


const HomePage = () => {

    return (
        <div className="bg-[#D7D7D7]">
            <Banner />
            <Skills />
            
            <Footer />
        </div>
    );
};

export default HomePage;