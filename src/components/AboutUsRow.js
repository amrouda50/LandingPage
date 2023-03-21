import { AboutUsPictureContainer } from "./styles/AboutUs.styled.js";
import TextContainerContent from "./TextContainerContent";




function AboutUsRow({children , isReversed}){
return(
    <div style={{display:"flex"}}>
    <AboutUsPictureContainer isReversed={isReversed}/>
    <TextContainerContent sectionTitle={children} paddingRight={"5rem"}maxWidth={"40%"} paddingTop={"3.125rem"}/>
    </div>
);
}

export default AboutUsRow;