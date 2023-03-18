import {SectionText, TextContainer} from "./styles/HorizontalContainer.styled"
import { useContext } from "react";
import LanguageContext from "./context/translation";


function TextContainerContent({marginTop}){
    const t = useContext(LanguageContext);
    return(
        <TextContainer marginTop={marginTop}>
            <h1>{t('Introduction.Title')}
                <span style={{color:"#9BDEAC"}}> Buda</span>
                <span style={{color:"#E7305B"}}>Rent</span>
            </h1>
                <SectionText>
                    {t('Introduction.Body')}
                </SectionText>
        </TextContainer>
    );

}



export default TextContainerContent;