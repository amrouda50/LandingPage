import { useContext } from "react";
import AboutUsRow from "./AboutUsRow";
import LanguageContext from "./context/translation";
import SectionTitle from "./SectionTitle";

function AboutUs(){
    const t = useContext(LanguageContext);
return(
    <div  style={{marginTop:"17.188rem",position:"relative"}}>      
    {/* {rows.map((value , index)=> */}
       <AboutUsRow  isReversed={false}>
       <SectionTitle header={t('SectionThree.Title')} number={3}/>
       </AboutUsRow>
       <AboutUsRow  isReversed={true}/>
   
    <div>Omar</div>
    </div>
);

}

export default AboutUs;