import styled from "styled-components";
import { PictureContainer } from "./HorizontalContainer.styled";


export const AboutUsPictureContainer = styled(PictureContainer)`
width:35.625rem;
height:26.813rem;
display:flex;
justify-content:center;
align-items:center;
order:${(prop) => prop.isReversed?'':'1'};
`

export const AboutUsContainer = styled.div`
margin-top:17.188rem;
`
export const EmployeeContainer = styled(AboutUsPictureContainer)`
width:29.625rem;
height:33.625rem;
background-color:#202A4D;
`
export const TeamGridContainer = styled.div`
margin-top:6.875rem;
display:grid;
grid-template-columns:1fr 1fr;
grid-row-gap:6.25rem;
justify-items:center;
grid-column-gap:11.25rem;
`


export const EmplyeesContainer = styled.div`
position:relative;
`