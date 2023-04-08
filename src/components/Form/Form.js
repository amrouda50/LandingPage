import { FormContainer } from "../styles/FormContainer.styled"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { InformationBox } from "../styles/FormContainer.styled";
import InputElement from "./InputElement";
import { ContactUsButton } from "../styles/General.styled";
function Form() {
    const inlineInputFields = [
        { name: "Email", width: "36.25rem", height: "3.875rem" },
        { name: "Message", width: "36.25rem", height: "9.375rem" },
    ]
    const flexInputFields = [
        { name: "First name", width: "16.313rem", height: "3.875rem" },
        { name: "Last name", width: "16.313rem", height: "3.875rem" },
    ]

    return (
        <FormContainer>
            <div style={{ padding: "7rem", display: "flex", justifyContent: "space-between" }}>
                <Logo width="200" height="84" />
                <InformationBox>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        {flexInputFields.map((input, index) =>
                            <InputElement key={index} name={input.name} width={input.width} height={input.height} />)}
                    </div>
                    {inlineInputFields.map((input, index) =>
                        <InputElement key={index} name={input.name} width={input.width} height={input.height} />
                    )}
                   <ContactUsButton>
                        <span>
                            Contact us
                        </span>
                    </ContactUsButton>
                </InformationBox>
                 
            </div>
        </FormContainer>
    );

}


export default Form;