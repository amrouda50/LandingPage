import { AboutUsPictureContainer } from "./styles/AboutUs.styled.js";
import TextContainerContent from "./TextContainerContent";




function AboutUsRow({children , isReversed}){
return(
    <div style={{display:"flex" , justifyContent:"center"}}>
    <AboutUsPictureContainer isReversed={isReversed}/>
    <TextContainerContent isReversed={isReversed} sectionTitle={children} maxWidth={"40%"} paddingTop={"3.125rem"}/>
    </div>
);
}

export default AboutUsRow;