import {SectionText, TextContainer} from "./styles/HorizontalContainer.styled"
import { useContext } from "react";
import LanguageContext from "./context/translation";


function TextContainerContent({sectionTitle,isReversed,textTitle,paddingTop,maxWidth}){
    const t = useContext(LanguageContext);
    return(
        <TextContainer style={{maxWidth:maxWidth}} paddingTop={"2rem"}>
                {sectionTitle}
                {textTitle}
                <SectionText 
                style={{padding:isReversed?paddingTop+" 0 0 5rem":paddingTop+" 5rem 0 0"}}
                >
                    {t('Introduction.Body')}
                </SectionText>
        </TextContainer>
    );

}



export default TextContainerContent;