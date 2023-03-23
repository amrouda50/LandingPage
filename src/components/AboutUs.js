import { useContext } from "react";
import AboutUsRow from "./AboutUsRow";
import LanguageContext from "./context/translation";
import SectionTitle from "./SectionTitle";
import {ReactComponent as UsPicture} from "../assets/SectionThree/us-picture.svg";
import {ReactComponent as HousePicture} from "../assets/SectionThree/house-picture.svg";

function AboutUs(){
    const t = useContext(LanguageContext);
return(
    <div  style={{marginTop:"17.188rem",position:"relative"}}>      
       <AboutUsRow Image={<UsPicture />}  isReversed={false}>
       <SectionTitle header={t('SectionThree.Title')} number={3}/>
       </AboutUsRow>
       <AboutUsRow Image={<HousePicture/>} isReversed={true}/>
   
    <div>Omar</div>
    </div>
);

}

export default AboutUs;