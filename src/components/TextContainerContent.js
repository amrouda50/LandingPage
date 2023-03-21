import {SectionText, TextContainer} from "./styles/HorizontalContainer.styled"
import { useContext } from "react";
import LanguageContext from "./context/translation";


function TextContainerContent({textTitle,marginTop,maxWidth}){
    const t = useContext(LanguageContext);
    return(
        <TextContainer style={{maxWidth:maxWidth}} marginTop={marginTop}>
                {textTitle}
                <SectionText>
                    {t('Introduction.Body')}
                </SectionText>
        </TextContainer>
    );

}



export default TextContainerContent;