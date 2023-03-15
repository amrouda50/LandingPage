import SectionTitle from "./SectionTitle";
import { HowWeWorkContainer } from "./styles/HowWeWork.styled";
import { Content } from './styles/General.styled';
import { useTranslation } from "react-i18next";
import TextedPictureContainer from "./TextedPictureContainer";
function HowWeWork(){
    const {t , i18n} = useTranslation();
    i18n.changeLanguage("hu");
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