import {SectionText, TextContainer} from "./styles/HorizontalContainer.styled"
import { useTranslation } from "react-i18next";


function TextContainerContent({marginTop}){
    const {t , i18n} = useTranslation();
    i18n.changeLanguage("hu");
    return(
        <TextContainer marginTop={marginTop}>
            <h1>Find your perfect place with
                <span style={{color:"#9BDEAC"}}> Buda</span>
                <span style={{color:"#E7305B"}}>Rent</span>
            </h1>
                <SectionText>
                    {t('Introduction')}
                </SectionText>
        </TextContainer>
    );

}



export default TextContainerContent;