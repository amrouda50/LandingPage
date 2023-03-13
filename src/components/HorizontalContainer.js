import PictureContainerContent from "./PictureContainerContent";
import { HorizontalContainerStyle } from "./styles/HorizontalContainer.styled";
import TextContainerContent from "./TextContainerContent";



function HorizontalContainer(){
    
    return(
       <HorizontalContainerStyle>
            <TextContainerContent marginTop={'39px'}/>
            <PictureContainerContent size={"big"}/>
        </HorizontalContainerStyle> 
    );
}



export default HorizontalContainer;