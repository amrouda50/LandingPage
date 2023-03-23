import styled from "styled-components";
import { PictureContainer } from "./HorizontalContainer.styled";


export const AboutUsPictureContainer = styled(PictureContainer)`
width:28.125rem;
height:26.875rem;
order:${(prop) => prop.isReversed?'':'1'};
`