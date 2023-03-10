import styled from "styled-components";
import {NavLinksContainer} from "./styles/NavLinksContainer.styled";
import {NavigationLink} from "./styles/NavigationLink.styled";
import { ReactComponent as Logo } from "../assets/logo.svg"
function NavBar(){
    const NavLinksItems = ['How we work' , 'Pricing/Services' , 'Contact' , 'About Us'] 
return(
    <div style={{position:"relative"}}>
        <Logo width="200" height="84"></Logo>
        <NavLinksContainer>
        {NavLinksItems.map((item , index) => {
           return <NavigationLink key={index}>{item}</NavigationLink>
        })}
    </NavLinksContainer>
    </div>
);
}



export default NavBar;