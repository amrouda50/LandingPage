import { Line } from "./styles/PricingAndServices.styled";
import { useContext } from "react";
import LanguageContext from "./context/translation";
import { SectionHeader } from "./styles/General.styled";
import PricingsRow from "./PricingsRow";

function CategoryPricing({category , lineColor}){
    const listCategory = category.filter((value , index)=> index === 0?false:true);
    const t = useContext(LanguageContext);
    console.log(listCategory);
    return(
        <div style={{display:"grid"}}>           
        <SectionHeader style={{justifySelf:"center"}}>{t('SectionTwo.Pricing.'+ category[0].categoryName)}</SectionHeader> 
        <div style={{display:"grid",gridRowGap:"2.5rem",marginTop:"2.188rem"}}>                 
            {listCategory.map((rentalPlace , index) => {
               return <PricingsRow index={index} rentalPlace={rentalPlace} category={category}/>
            })}
            
        </div>
                      
        </div>
    );
    
}

export default CategoryPricing;