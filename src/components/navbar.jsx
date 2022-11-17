import React from "react";
import { Link } from "react-router-dom";
import { connect, Connect } from "react-redux";
const url =require("url") ;




const  Navbar=(props) =>
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
                    <Link to="Chart">
                        <span class="material-symbols-outlined">
                        
                        shopping_cart 
                        {props.numberOfElementsInChart>0 && <div className="ElementsNumber">
                            {props.numberOfElementsInChart  }
                        </div>}
                    </span>
                    </Link>
                    

                     <Link to="Login">
                        <span class="material-symbols-outlined"> person</span>
                    </Link>
                
                
            </div>
            

        </div>
    )
}
const  stateToProps = (state) =>
{
    return {
        numberOfElementsInChart : state.numOfElementsInChart
    }
}

export default connect(stateToProps)( Navbar) ;