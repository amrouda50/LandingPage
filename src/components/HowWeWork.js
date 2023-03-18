import SectionTitle from "./SectionTitle";
import { HowWeWorkContainer } from "./styles/HowWeWork.styled";
import { Content } from './styles/General.styled';
import { useTranslation } from "react-i18next";
import TextedPictureContainer from "./TextedPictureContainer";
import { useContext } from "react";
import LanguageContext from "./context/translation";
function HowWeWork(){
    const t = useContext(LanguageContext);
    return(
        <HowWeWorkContainer>
            <Content>
              <SectionTitle header={t('SectionOneHeader')} number={1}/>
              <TextedPictureContainer/>
            </Content>
  
        </HowWeWorkContainer>
    );
}


export default HowWeWork;