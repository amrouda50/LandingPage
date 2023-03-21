import PictureContainerContent from "./PictureContainerContent";
import { HorizontalContainerStyle } from "./styles/HorizontalContainer.styled";
import TextContainerContent from "./TextContainerContent";



function HorizontalContainer({textTitle,textMarginTop}){
    
    return(
       <HorizontalContainerStyle> 
            <TextContainerContent textTitle={textTitle} marginTop={textMarginTop}/>
            <PictureContainerContent />
        </HorizontalContainerStyle> 
    );
}



export default HorizontalContainer;