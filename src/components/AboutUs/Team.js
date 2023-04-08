import { EmployeeContainer, TeamGridContainer } from "../styles/AboutUs.styled";
import { ArrowStyled } from "../styles/General.styled";
import { ReverseArrowStyled } from "../styles/General.styled";
import { EmplyeesContainer } from "../styles/AboutUs.styled";
function Team(){
return(
    <div>
    <EmplyeesContainer>
    <ArrowStyled style={{position:"absolute",top:"46%",right:"99%",height:"70px",width:"70px"}} />
    <TeamGridContainer>  
        <EmployeeContainer> dasdasdasdas</EmployeeContainer>
        <EmployeeContainer> dasdasdasdas</EmployeeContainer>
        <EmployeeContainer> dasdasdasdas</EmployeeContainer>
        <EmployeeContainer> dasdasdasdas</EmployeeContainer>
    </TeamGridContainer>
    <ReverseArrowStyled style={{position:"absolute",top:"46%",left:"99%",height:"70px",width:"70px"}} />
    </EmplyeesContainer>
    </div>
);

}

 
export default Team;