import React from "react";
import Carusel from "./Carusel";
import ItemsGrid from "./ItemsGrid";

export default function MainContent()
{
    return(
    
        <div className="MainContent">
            <Carusel/>
            <ItemsGrid/>
        </div>
    
    ) ;
}