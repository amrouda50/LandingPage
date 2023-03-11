import { useState } from "react";
import { PictureContainer } from "./styles/PictureContained.styled";


function createStyle(size) {
    if(size === "big") {
        return {width: "682px" , height: "499px"};
    }else if(size === "normal"){
        return {width: "586px" , height: "429px"};
    }
    return {};
}

function PictureContainerContent({size}) {
    return (
    <div>
        <PictureContainer style={createStyle(size)}/>
    </div>
    );
}



export default PictureContainerContent;