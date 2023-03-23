import styled from "styled-components";
import { PictureContainer } from "./HorizontalContainer.styled";


export const AboutUsPictureContainer = styled(PictureContainer)`
width:35.625rem;
height:26.813rem;
margin-left:auto;
display:flex;
justify-content:center;
align-items:center;
order:${(prop) => prop.isReversed?'':'1'};
`

export const AboutUsContainer = styled.div`
margin-top:17.188rem;
position:relative;
`
export const EmployeeContainer = styled(AboutUsPictureContainer)`
background- color:#202A4D;
width:29.625rem;
height:33.625rem;
`