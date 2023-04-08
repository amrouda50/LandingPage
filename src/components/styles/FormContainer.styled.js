import styled from "styled-components";




export const FormContainer = styled.div`
width: 1265px;
height: 815px;
margin:7.938rem auto;
background:#1F1A33;
border: 1px solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 53px;
box-sizing:"border-box";
`;

export const InformationBox = styled.div`
margin-top:3rem;
`

export const InformationField = styled.input`
width: ${(prop) => prop.width};
height:${(prop) => prop.height};
background: #202A4D;
border-radius: 16px;
`