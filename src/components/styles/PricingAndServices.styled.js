import { TextedContainer } from "./TextedContainer.styled";
import styled from "styled-components";



export const SlidedPicContainer = styled(TextedContainer)`
width: 666px;
height: 745px;

`

export const ServicesContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
`

export const PricingContainer = styled.div`

`

export const Line = styled.span`
width: 97px;
height: 0px;
display:inline-block;
border: 3px solid ${({color}) => {
    if(color === 'red'){
        return "#E7305B";
    }
    else if(color === 'grey'){
        return "#BF9F7E"
    }
   else if(color === 'green'){
    return "#9BDEAC";
   }
   else{
    return "";
   }
    
}};
`

