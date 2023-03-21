import { useContext } from "react";
import SectionTitle from "./SectionTitle";
import LanguageContext from "./context/translation";
import { AboutUsPictureContainer } from "./styles/AboutUs.styled.js";
import TextContainerContent from "./TextContainerContent";


function AboutUs(){
    const t = useContext(LanguageContext);
return(
    <div style={{marginTop:"17.188rem",position:"relative"}}>
    <SectionTitle header={t('SectionThree.Title')} number={3}/>
    <AboutUsPictureContainer/>
    <TextContainerContent maxWidth={"40%"} marginTop={"50px"}/>
    <></>
    </div>
);

}

export default AboutUs;