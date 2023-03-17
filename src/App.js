import {Container} from "./components/styles/Container.styled"
import NavBar from "./components/NavBar"
import "./reset.module.css"
import HorizontalContainer from "./components/HorizontalContainer";
import HowWeWork from "./components/HowWeWork";
import PricingAndServices from "./components/PricingAndServices";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";




function App(){
  

  return (
    <Container>
     <NavBar/>
     <HorizontalContainer/>
     <HowWeWork/>
     <PricingAndServices/>
    </Container>
  );
}

export default App;
