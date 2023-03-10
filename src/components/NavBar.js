import styled from "styled-components";
import {StyledNavBar} from "./styles/StyledNavBar.styled";
import {NavigationLinks} from "./styles/NavigationLinks.styled";
import logo from "../assets/logo";

function NavBar(){
    const NavLinksItems = ['How we work' , 'Pricing/Services' , 'Contact' , 'About Us'] 
return(
    <StyledNavBar>
        {NavLinksItems.map((item , index) => {
           return <NavigationLinks key={index}>{item}</NavigationLinks>
        })}
    </StyledNavBar>
);
}



export default NavBar;