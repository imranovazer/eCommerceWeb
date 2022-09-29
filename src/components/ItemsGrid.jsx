import axios from "axios";
import React from "react";
import CartIcon from "../icons/CartIcon.png"

import { commerce } from "../ecommerce";
export default function ItemsGrid()
{
   
    const [ActiveCat,SetActiveCat]=React.useState("1") ;
    const [Products,setProducts] =React.useState() ;
    console.log(Products) ;
    
    
    
    function clickHandler(event)
    {
        SetActiveCat(event.target.id) ;
    }
    
    const fetchingData = async() =>
    {
        const {data} =await commerce.products.list() ;
        setProducts(data) ;
    }
    React.useEffect(()=>{
        fetchingData() ;
    },[])
    
    
    return(
        <div className="ItemsGrid">
            <div className="SortSettings">
                <ul>
                    
                    <li>
                        
                        <div  className={ActiveCat==="1"?"CheckBox Active":"CheckBox"} id="1" onClick={clickHandler}></div> ALL
                    </li>
                     <li>
                        <div className={ActiveCat==="2"?"CheckBox  Active":"CheckBox"} id="2" onClick={clickHandler}></div>ACCESORIES
                    </li>
                    <li>
                        <div className={ActiveCat==="3"?"CheckBox  Active":"CheckBox"} id="3" onClick={clickHandler}></div>ELECTRONICS
                    </li>
                     <li>
                        <div className={ActiveCat==="4"?"CheckBox  Active":"CheckBox"}id="4" onClick={clickHandler}></div>SHOES
                    </li>

                </ul>
            </div>
            <div className="Devider">
                <div className="Line"></div>
            </div>

            <div className="ProductsGrid">
                {
                    Products && Products.map(item=>(
                    <div className="Product" key={item.id}>
                        <div className="ProdImg">
                            <img src={item.image.url} alt="" />
                            <div className="ProdHover">
                                <div className="addToCart">
                                    
                                    <img src={CartIcon} alt="add to cart" />
                                </div>
                                <div className="more">
                                    <div> More...</div>
                            
                                </div>
                            </div>

                        </div>
                        <div className="Info">
                            <div className="prodName" >
                                {item.name}
                            </div>
                            <div className="prodPrice">
                                {item.price.formatted_with_code
}
                                	
                            </div>

                        </div>
                        
                        

                    </div>
                ))}
            </div>
        </div>
    ) ;
}