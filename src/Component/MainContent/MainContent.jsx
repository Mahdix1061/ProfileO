import HomePage from "./HomePage/Main.HomePage";
import SideInfo from "./SideInfo";
import MainAboutMe from "./AboutMe/Main.AboutMe";
import MainNemoneKar from "./NemoneKar/main.NemoneKar";
import MainExperience from "./Experience/Main.Experience";
import MainExInfo from "./ExInfo/Main.ExInfo";
import MainErtebatBaMan from "./ErtebatBaMan/Main.ErtebatBaMan";
import Footer from "../Footer/Footer";


const MainContent = () => {
    return(
        <>
            <HomePage/>
            <SideInfo/>
            <MainAboutMe/>
            <MainNemoneKar/>
            <MainExperience/>
            <MainExInfo/>
            <MainErtebatBaMan/>
            <Footer/>
        </>
    )
}
export default MainContent;