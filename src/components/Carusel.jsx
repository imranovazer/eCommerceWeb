import React from "react";
import { sales } from "../data";
export default function Carusel()
{
    const [ActiveProd, setActiveProd]=React.useState(0) ;
    
    function  handleClick(id)
    {
        setActiveProd(parseInt(id)) ;
    }
    function ArrowClick(event)
    {
        switch (event.target.className) {
            case "Arrow left":
                setActiveProd(prevState=>(prevState===0)?sales.length-1:prevState-1)
                break;
            case "Arrow right":
                setActiveProd(prevState=>(prevState===sales.length-1)?0:prevState+1)

                break ;

            default:
                break;
        }

    }
    function autoChange()
    {
        setActiveProd(prevState=>(prevState===sales.length-1)?0:prevState+1)
    }
    React.useEffect(() => {
        const interval = setInterval(() => {
            autoChange()
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    return(
        <div className="SalesCarusel">
            <div className="Arrow left" onClick={ArrowClick}>&#x2039;</div>
            <div className="Arrow right" onClick={ArrowClick}>&#x203A;</div>
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