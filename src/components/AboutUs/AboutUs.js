import { useContext } from "react";
import AboutUsRow from "./AboutUsRow";
import LanguageContext from "../context/translation";
import SectionTitle from "../SectionTitle";
import {ReactComponent as UsPicture} from "../../assets/SectionThree/us-picture.svg";
import {ReactComponent as HousePicture} from "../../assets/SectionThree/house-picture.svg";
import { AboutUsContainer } from "../styles/AboutUs.styled";
import Team from "./Team";
function AboutUs(){
    const t = useContext(LanguageContext);
return(
    <AboutUsContainer>      
       <AboutUsRow Image={<UsPicture />}  isReversed={false}>
            <SectionTitle header={t('SectionThree.Title')} number={3}/>
       </AboutUsRow>
       <AboutUsRow Image={<HousePicture/>} isReversed={true}/>
        <Team>
            
        </Team>   
       
    </AboutUsContainer>
);

}

export default AboutUs;