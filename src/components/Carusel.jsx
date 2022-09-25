import React from "react";
import { sales } from "../data";
export default function Carusel()
{
    const [ActiveProd, setActiveProd]=React.useState(0) ;
    console.log(ActiveProd) ;
    function  handleClick(id)
    {
        setActiveProd(id)
    }
    
    return(
        <div className="SalesCarusel">
            <div className="Products">
                {
                sales.map(item=>{
                    if(item.id==="0")
                    {
                        return (
                        <div key={item.id} className="Product" id={`Product${item.id}`} style={{marginLeft : `-${ActiveProd*100}%`}}>
                            <img src={item.src} alt="" />
                            <div className="Discription"> 
                                {item.discription}
                            </div>
                        </div>)
                    }
                    else
                    {
                        return (
                            <div key={item.id} className="Product" id={`Product${item.id}`}>
                                <img src={item.src} alt="" />
                                <div className="Discription"> 
                                    {item.discription}
                                </div>
                            </div>
                        )
                    }

                    
                })
            }
            </div>
            <div className="CaruselButtons">
                {sales.map(item=>(
                    <div className={item.id===ActiveProd.toString()?" CaruselButt Active":"CaruselButt"}  key={item.id} onClick={()=>handleClick(item.id)} id={`butt${item.id}`}>
                        
                    </div> 
                ))
                }
            </div>

        </div>
    ) ;
}