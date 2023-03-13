import styled , { css } from "styled-components";
import {Container} from "./components/styles/Container.styled"
import NavBar from "./components/NavBar"
import PictureContainer from "./components/PictureContainerContent";
import "./reset.module.css"
import HorizontalContainer from "./components/HorizontalContainer";
import HowWeWork from "./components/HowWeWork";
function App() {

  return (
    <Container>
     <NavBar/>
     <HorizontalContainer/>
     <HowWeWork/>
    </Container>
  );
}

export default App;
