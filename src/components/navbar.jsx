import React from "react";
import { Link } from "react-router-dom";


export default function Navbar()
{

    return(

        <div className="NavBar">
            <Link to="/">
            <span className="Logo">BuyIt</span>
            </Link>
            
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

                     <Link to="Login">
                        <span class="material-symbols-outlined"> person</span>
                    </Link>
                
                
            </div>
            

        </div>
    )
}