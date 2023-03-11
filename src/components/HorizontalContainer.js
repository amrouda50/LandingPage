import PictureContainerContent from "./PictureContainerContent";
import { HorizontalContainerStyle } from "./styles/HorizontalContainer.styled";
import TextContainerContent from "./TextContainerContent";



function HorizontalContainer(){

    return(
       <HorizontalContainerStyle>
            <TextContainerContent/>
            <PictureContainerContent size={"normal"}/>
        </HorizontalContainerStyle> 
    );
}



export default HorizontalContainer;