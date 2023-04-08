import { FormContainer } from "../styles/FormContainer.styled"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { InformationBox } from "../styles/FormContainer.styled";
import InputElement from "./InputElement";
import { ContactUsButton } from "../styles/General.styled";
import { ReactComponent as Instagram } from "../../assets/Form/Instagram.svg"
import { ReactComponent as Facebook } from "../../assets/Form/Facebook.svg"
import { ReactComponent as LinkedIn } from "../../assets/Form/LinkedIn.svg"
import { ReactComponent as Message } from "../../assets/Form/Message.svg"
import { ReactComponent as Location } from "../../assets/Form/Location.svg"
import { ReactComponent as ContactCenter } from "../../assets/Form/ContactCenter.svg"

function Form() {
    const inlineInputFields = [
        { name: "Email", width: "36.25rem", height: "3.875rem" },
        { name: "Message", width: "36.25rem", height: "9.375rem" },
    ]
    const flexInputFields = [
        { name: "First name", width: "16.313rem", height: "3.875rem" },
        { name: "Last name", width: "16.313rem", height: "3.875rem" },
    ]
    const socialMediaLogos = [Instagram, Facebook, LinkedIn];
    const infoLogos = [
        {Svg:Message,text:"info@budarent.com"},
        {Svg:Location,text:"Budapest, Horváth Mihály tér 19, 1082"},
        {Svg:ContactCenter,text:"+36301295437"},
    ];
    return (
        <FormContainer>
            <div style={{ padding: "7rem", display: "flex", justifyContent: "space-between" }}>
                <div>
                    <Logo width="200" height="84" />
                    <div style={{ display: "grid", margin: "6.25rem 0", rowGap: "3rem" }}>
                        {infoLogos.map((obj) => {
                            return (
                                <div style={{position:"relative"}}>
                                    <obj.Svg width={"39px"} height={"39px"} />
                                    <span style={{position:"absolute",top:"30%",left:"20%"}}>{obj.text}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "2.688rem" }}>
                        {socialMediaLogos.map((Svg) => <Svg height={"4.875rem"} width={"4.875rem"} />)}
                    </div>
                </div>
                <InformationBox>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        {flexInputFields.map((input, index) =>
                            <InputElement key={index} name={input.name} width={input.width} height={input.height} />)}
                    </div>
                    {inlineInputFields.map((input, index) =>
                        <InputElement key={index} name={input.name} width={input.width} height={input.height} />
                    )}
                    <ContactUsButton>
                        <span style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: "24px" }}>
                            Contact us
                        </span>
                    </ContactUsButton>
                </InformationBox>

            </div>
        </FormContainer>
    );

}


export default Form;