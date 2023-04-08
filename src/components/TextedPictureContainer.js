
import { TextedContainer } from "./styles/TextedContainer.styled";
import {ReactComponent as CheckWebsite} from "../assets/SectionOne/CheckWebsite.svg";
import {ReactComponent as ContactUs} from "../assets/SectionOne/ContactUs.svg";
import {ReactComponent as PickChoice} from "../assets/SectionOne/PickChoice.svg";
import {ReactComponent as Contract} from "../assets/SectionOne/Contract.svg";
import { StepsText } from "./styles/TextedContainer.styled";
import LanguageContext from "./context/translation";
import { useContext } from "react";

function TextedPictureContainer(){
    const t = useContext(LanguageContext);
    // why margin? better to use padding same for every component
    // why are these svgs? (they are not. png should be handled differently than svg)
    const steps = [
        {text:t('SectionOne.Steps.CheckWebsite'), Image:CheckWebsite , margin:"131px 30px"},
        {text:t('SectionOne.Steps.PickChoice') , Image:PickChoice , margin:"125px 106px"},
        {text:t('SectionOne.Steps.ContactUs') , Image:ContactUs , margin:"131px 66px"},
        {text:t('SectionOne.Steps.SignContract') , Image:Contract , margin:"131px 100px"},
    ];
    return(
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr" , gridColumnGap:"50px" , justifyItems:"center"}}>
        {steps.map((step,index)=> {
            return( 
            
            <TextedContainer key={index}>
                <StepsText >{step.text}</StepsText>
                <step.Image style={{margin:step.margin}}/>
            </TextedContainer>
          );
        })}
       
    </div>
    );
}

export default TextedPictureContainer;