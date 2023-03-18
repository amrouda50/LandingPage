import {Container} from "./components/styles/Container.styled"
import NavBar from "./components/NavBar"
import "./reset.module.css"
import HorizontalContainer from "./components/HorizontalContainer";
import HowWeWork from "./components/HowWeWork";
import PricingAndServices from "./components/PricingAndServices";
import { useTranslation } from "react-i18next";
import LanguageContext from "./components/context/translation";
import { useEffect } from "react";




function App() {
  const {t , i18n} = useTranslation();
  useEffect(() => {
    i18n.changeLanguage('en');
  },[]);
  return (
    <LanguageContext.Provider value={t}>
    <Container>
     <NavBar/>
     <HorizontalContainer/>
     <HowWeWork/>
     <PricingAndServices/>
    </Container>
    </LanguageContext.Provider>
  );
}

export default App;
