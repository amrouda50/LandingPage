import { Line, PricingText } from "./styles/PricingAndServices.styled";


function PricingsRow({rentalPlace,index, category}){

    return(
        <div key={index}>
                    <Line color={category[0].lineColor}/> 
                    <PricingText>{rentalPlace.capacity}{rentalPlace.capacityUnit}</PricingText>
                    <Line color={category[0].lineColor}/> 
                    <PricingText>{rentalPlace.price}{rentalPlace.currency}</PricingText>
        </div>
    );
}

export default PricingsRow;