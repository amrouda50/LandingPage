import {SectionText, TextContainer} from "./styles/HorizontalContainer.styled"

function TextContainerContent({marginTop}){
    return(
        <TextContainer marginTop={marginTop}>
            <h1>Find your perfect place with
                <span style={{color:"#9BDEAC"}}> Buda</span>
                <span style={{color:"#E7305B"}}>Rent</span>
            </h1>
                <SectionText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  
                </SectionText>
        </TextContainer>
    );

}



export default TextContainerContent;