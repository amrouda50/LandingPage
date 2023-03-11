import styled , { css } from "styled-components";
import {Container} from "./components/styles/Container.styled"
import NavBar from "./components/NavBar"
import PictureContainer from "./components/PictureContainerContent";
import "./reset.module.css"
import HorizontalContainer from "./components/HorizontalContainer";
function App() {

  return (
    <Container>
     <NavBar></NavBar>
     <HorizontalContainer></HorizontalContainer>
    </Container>
  );
}

export default App;
