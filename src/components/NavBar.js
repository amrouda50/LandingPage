import { useContext } from "react";
import LanguageContext from "./context/translation";
import {NavLinksContainer} from "./styles/NavLinksContainer.styled";
import {NavigationLink} from "./styles/NavigationLink.styled";
 import { ReactComponent as Logo } from "../assets/logo.svg"
function NavBar(){
    const t = useContext(LanguageContext);
    const NavLinksItems = [
        t('NavBar.HowWeWork'),
        t('NavBar.PricingAndServices'),
        t('NavBar.Contact'),
        t('NavBar.AboutUs')
    ] 
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