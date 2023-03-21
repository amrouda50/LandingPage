import styled from "styled-components";
import { PictureContainer } from "./HorizontalContainer.styled";


export const AboutUsPictureContainer = styled(PictureContainer)`
width:586px;
height:429px;
order:${(prop) => prop.isReversed?'':'1'};
`