import styled , { css } from "styled-components";
import {Container} from "./components/styles/Container.styled"
import NavBar from "./components/NavBar"
import PictureContainer from "./components/PictureContainer";
import "./reset.module.css"
function App() {

  return (
    <Container>
     <NavBar></NavBar>
     <PictureContainer></PictureContainer>
    </Container>
  );
}

export default App;
