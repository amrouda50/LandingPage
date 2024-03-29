import { EmployeeContainer, TeamGridContainer } from "../styles/AboutUs.styled";
import { ArrowStyled } from "../styles/General.styled";
import { ReverseArrowStyled } from "../styles/General.styled";
import { EmplyeesContainer } from "../styles/AboutUs.styled";
import EmployeeMemberContent from "./EmployeeMemberContent";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";




function Team() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [currentMembers, setCurrentMembers] = useState([]);
    const [upperBound, setUpperBound] = useState(4);
    const rightClick = () =>{
        console.log(upperBound);
        if(teamMembers.length <= upperBound){
            return
        }
            setUpperBound(upperBound+4);
    }
    const leftClick = () =>{
        console.log(upperBound);
        if(upperBound-4 <= 0){
            return
        }
        setUpperBound(upperBound-4);
    }
    const getMembers = async () => {
        return await axios.get('http://localhost:3001/Team')
            .then((values) => {
                setTeamMembers(values.data)
            });
    }
    useEffect(() => {
        getMembers();
    },[])
    useEffect(() => {
        setCurrentMembers(teamMembers.map((value, index) => index < upperBound && index >= upperBound - 4 ? value : null)
            .filter((value) => value === null ? false : true))
    }, [teamMembers, upperBound])
    return (
        <div>
            <EmplyeesContainer>
                <ArrowStyled onClick={leftClick} style={{ position: "absolute", top: "46%", right: "99%", height: "70px", width: "70px" }} />
                    <TeamGridContainer>
                        {currentMembers.map((member, index) =>
                            <EmployeeContainer key={index}>
                                <EmployeeMemberContent name={member.name} job={member.job} image={member.image}/>
                            </EmployeeContainer>
                        )}
                    </TeamGridContainer>
                <ReverseArrowStyled onClick={rightClick} style={{ position: "absolute", top: "46%", left: "99%", height: "70px", width: "70px" }} />
            </EmplyeesContainer>
        </div>
    );

}


export default Team;