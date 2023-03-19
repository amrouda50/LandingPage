import styled from "styled-components";




export const HorizontalContainerStyle = styled.div`
display:flex;
justify-content:capacity-between;
`;

export const PictureContainer = styled.div`
background: #1F1A33;
border-radius: 53px;
height:${(props)=>  props.size === 'big' ? "499px" : "429px"};
width:${(props)=>  props.size === 'big' ? "682px" : "586px"};
display:"grid";
grid-template-columns:"1fr 1fr";
`;

export const TextContainer = styled.div`
margin-top:${(prop)=> prop.marginTop}
`
export const SectionText = styled.section`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: #FFFFFF;
`;



