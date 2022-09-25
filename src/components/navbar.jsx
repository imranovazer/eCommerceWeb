import React from "react";
import { Link } from "react-router-dom";


export default function Navbar()
{

    return(

        <div className="NavBar">
            <span className="Logo">BuyIt</span>
            <div className="Navigation">
                <Link to="/">
                    Home
                </Link>
                <Link>
                    Categories
                </Link>
                <Link >
                    Pages
                </Link>
                
            </div>
            <div className="buttons">
                <span class="material-symbols-outlined">shopping_cart </span>
                <span class="material-symbols-outlined"> person</span>
            </div>
            

        </div>
    )
}