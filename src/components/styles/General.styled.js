import styled from "styled-components";
import {ReactComponent as Arrow} from "../../assets/SectionTwo/Arrow.svg";

export const Circle = styled.span`
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
