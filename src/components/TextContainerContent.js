import {SectionText, TextContainer} from "./styles/HorizontalContainer.styled"
import { useContext } from "react";
import LanguageContext from "./context/translation";


function TextContainerContent({sectionTitle,paddingRight,textTitle,paddingTop,maxWidth}){
    const t = useContext(LanguageContext);
    return(
        <TextContainer style={{maxWidth:maxWidth}} paddingTop={"2rem"}>
                {sectionTitle}
                {textTitle}
                <SectionText style={{paddingRight:paddingRight,paddingTop:paddingTop}}>
                    {t('Introduction.Body')}
                </SectionText>
        </TextContainer>
    );

}



export default TextContainerContent;