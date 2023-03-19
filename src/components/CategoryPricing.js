import { Line } from "./styles/PricingAndServices.styled";
import { useContext } from "react";
import LanguageContext from "./context/translation";
import { SectionHeader } from "./styles/General.styled";

function CategoryPricing({category , lineColor}){
    const listCategory = category.filter((value , index)=> index === 0?false:true);
    const t = useContext(LanguageContext);
    console.log(listCategory);
    return(
        <div>           
        <SectionHeader>{t('SectionTwo.Pricing.'+ category[0].categoryName)}</SectionHeader> 
        <div style={{display:"grid",gridRowGap:"2.5rem",marginTop:"35px"}}>                 
            {listCategory.map((rentalPlace , index) => {
                return(
                    <div  key={index}>
                    <Line color={category[0].lineColor}/> 
                     <span>{rentalPlace.capacity}{rentalPlace.capacityUnit}</span>
                    <Line color={category[0].lineColor}/> 
                    <span>{rentalPlace.price} {rentalPlace.currency}</span>
                    </div>
                );
            })}
            
        </div>
                      
        </div>
    );
    
}

export default CategoryPricing;