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
display:grid;
grid-gap:4.375rem;
grid-template-columns:1fr 1fr;
justify-items:center;
margin-top:6.25rem;
`
export const PricingText = styled.span`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
padding:15px;
font-size: 24px;
line-height: 29px;
width: 149px;
height: 42px;
color: #FFFFFF;
`;
export const Line = styled.span`
width: 97px;
height: 0px;
display:inline-block;
vertical-align:middle;
border: 1.5px solid ${({color}) => {
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

