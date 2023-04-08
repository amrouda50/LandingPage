import { EmployeeContainer, TeamGridContainer } from "../styles/AboutUs.styled";
import { ArrowStyled } from "../styles/General.styled";
import { ReverseArrowStyled } from "../styles/General.styled";
import { EmplyeesContainer } from "../styles/AboutUs.styled";
import EmployeeMemberContent from "./EmployeeMemberContent";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";



function Team(){
    const [teamMembers,setTeamMembers] = useState([]);
    const getMembers = async () => {
        return await axios.get('http://localhost:3001/Team')
        .then((values) =>{setTeamMembers(values.data)});
   }
    useEffect(() => {
      getMembers();
    },[])
return(
    <div>
    <EmplyeesContainer>
    <ArrowStyled style={{position:"absolute",top:"46%",right:"99%",height:"70px",width:"70px"}} />
    <TeamGridContainer>  
        <EmployeeContainer> <EmployeeMemberContent></EmployeeMemberContent></EmployeeContainer>
        <EmployeeContainer> <EmployeeMemberContent></EmployeeMemberContent></EmployeeContainer>
        <EmployeeContainer> <EmployeeMemberContent></EmployeeMemberContent></EmployeeContainer>
        <EmployeeContainer> <EmployeeMemberContent></EmployeeMemberContent></EmployeeContainer>
    </TeamGridContainer>
    <ReverseArrowStyled style={{position:"absolute",top:"46%",left:"99%",height:"70px",width:"70px"}} />
    </EmplyeesContainer>
    </div>
);

}

 
export default Team;