
import { TextedContainer } from "./styles/TextedContainer.styled";
import {ReactComponent as CheckWebsite} from "../assets/SectionOne/CheckWebsite.svg";
import {ReactComponent as ContactUs} from "../assets/SectionOne/ContactUs.svg";
import {ReactComponent as PickChoice} from "../assets/SectionOne/PickChoice.svg";
import {ReactComponent as Contract} from "../assets/SectionOne/Contract.svg";
import { StepsText } from "./styles/TextedContainer.styled";

function TextedPictureContainer(){
    const steps = [
        {text:"Check our website" , Image:CheckWebsite , margin:"131px 30px"},
        {text:"Pick your choice" , Image:PickChoice , margin:"125px 106px"},
        {text:"Contact us" , Image:ContactUs , margin:"131px 66px"},
        {text:"Sign your contract!" , Image:Contract , margin:"131px 100px"},
    ];
    return(
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr" , gridColumnGap:"121px"}}>
        {steps.map((step)=> {
            return( 
            
            <TextedContainer>
                <StepsText >{step.text}</StepsText>
                <step.Image style={{margin:step.margin}}/>
            </TextedContainer>
          );
        })}
       
    </div>
    );
}

export default TextedPictureContainer;