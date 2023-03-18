import { useState } from "react";
import { PictureContainer } from "./styles/HorizontalContainer.styled";
import {ReactComponent as Parliament} from "../assets/BudapestParlament.svg"
import {ReactComponent as ForRent} from "../assets/forRent.svg"
import {ReactComponent as LivingRoom} from "../assets/LivingRoom.svg"
import {ReactComponent as GirlDog} from "../assets/GirlDog.svg"




function PictureContainerContent({size}) {
    const images = [Parliament , ForRent , LivingRoom , GirlDog];
    return (
    <div>       
        <PictureContainer size={size}>
            <div style={{margin:"36px 70px"}}>
                {images.map((Image , key) => {
                    return <Image key={key}/>
                })}
            </div>
         </PictureContainer>
    </div>
    );
}



export default PictureContainerContent;