import SectionTitle from "./SectionTitle";
import { HowWeWorkContainer } from "./styles/HowWeWork.styled";
import { Content } from './styles/HowWeWork.styled';
import { useTranslation } from "react-i18next";
function HowWeWork(){
    const {t , i18n} = useTranslation();
    i18n.changeLanguage("hu");
    return(
        <HowWeWorkContainer>
            <Content>
              <SectionTitle header={t('SectionOneHeader')} number={1}/>
            </Content>
  
        </HowWeWorkContainer>
    );
}


export default HowWeWork;