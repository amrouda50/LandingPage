
import { useEffect } from "react";
import { EmployeeDetailsContainer, EmployeePicture } from "../styles/AboutUs.styled";
import { EmployeeJob, EmployeeName } from "../styles/General.styled";



function EmployeeMemberContent({name,job,image}){

return(
    <EmployeeDetailsContainer>
        <EmployeePicture alt="EmployeePicture"  src={image}/>
        <EmployeeName>{name}</EmployeeName>
        <EmployeeJob>{job}</EmployeeJob>          
    </EmployeeDetailsContainer>
);
}



export default EmployeeMemberContent;