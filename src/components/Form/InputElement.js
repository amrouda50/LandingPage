
import { InformationField } from "../styles/FormContainer.styled";





function InputElement({name,width,height}){

    return(
        <div>
            <span style={{margin:"0.80rem",display:"block"}}>{name}</span>
            <InformationField width={width} height={height}/>  
        </div>

        );
    }


export default InputElement;