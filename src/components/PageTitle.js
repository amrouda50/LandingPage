import { useContext } from "react";
import LanguageContext from "./context/translation";




function PageTitle(){
    const t = useContext(LanguageContext);
    return(
        <h1>{t('Introduction.Title')}
            <span style={{color:"#9BDEAC"}}> Buda</span>
            <span style={{color:"#E7305B"}}>Rent</span>
        </h1>
    );
}

export default PageTitle;