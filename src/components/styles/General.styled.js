import styled from "styled-components";
import {ReactComponent as Arrow} from "../../assets/SectionTwo/Arrow.svg";

export const Circle = styled.span`
color:#000000;
background-color:#FFFFFF;
border-radius:50%;
height: 38px;
width: 38px;
display: inline-block;
text-align: center;
font-weight:600;
font-size:xx-large;
`


export const Content = styled.div`
display:inline-block;
margin-top:58px;
`;

export const ArrowStyled = styled(Arrow)`
justify-self:left;
align-self:center;
path:hover{
    fill: #E7305B;
    cursor: pointer;
}
`
export const ReverseArrowStyled = styled(ArrowStyled)`
transform:matrix(-1, 0, 0, 1, 0, 0);
justify-self:right;
`
export const SectionHeader = styled.h2`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 30px;
padding:10px;
line-height: 48px;
color: #FFFFFF;
display:inline;
`

export const ContactUsButton = styled.button`
display:block;
width: 20.063rem;
height: 3.875rem;
background: linear-gradient(0deg, #E7305B, #E7305B), #202A4D;
border-radius: 26px;
margin:3rem auto;
text-align:center;
cursor:pointer;
&:active{
    background-color: #3e8e41;
    transform: translateY(3px);
}
`

export const EmployeeName = styled(SectionHeader)`
font-weight: 700;
font-size: 36px;
padding:0px;
`

export const EmployeeJob = styled(EmployeeName)`
font-size: 18px;
color:rgba(95, 91, 91, 1);
`
