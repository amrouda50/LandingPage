import { AboutUsPictureContainer } from "../styles/AboutUs.styled.js";
import TextContainerContent from "../TextContainerContent";



function AboutUsRow({children , Image, isReversed}){
    
return(
    <div style={{display:"flex" , justifyContent:"center"}}>
    <AboutUsPictureContainer  isReversed={isReversed} >
      <div >
        {Image}
      </div>
    </AboutUsPictureContainer>
    
   
    <TextContainerContent 
    isReversed={isReversed}
    sectionTitle={children}
    maxWidth={"50%"}
    paddingTop={"3.125rem"}/>
    </div>
);
}

export default AboutUsRow;