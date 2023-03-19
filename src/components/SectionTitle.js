
import { SectionHeader } from './styles/General.styled';
import { Circle } from './styles/General.styled';

function SectionTitle({header,number}){
    return(
    <div>
    <Circle>#</Circle>
    <SectionHeader>{number}<br/>{header}</SectionHeader>
    </div>
    );
}



export default SectionTitle;