import React from "react";
import {addToChart,deleteFromChart} from '../actions'
import { Connect,connect } from "react-redux";
import '../styles/chart.css'

const Chart = (props)=>
{
    return (
        <div className="Chart">
            <div className="chart_products">
                {
                     props.products.map(e=>
                        {
                            return( <div className="product">
                                    <div className="image">
                                        <img src={e.image}  />
                                    </div>
                                    <div className="productName">
                                        {e.name}
                                    </div>
                                    <div className="number">
                                        Amount : 
                                        <button onClick={()=>props.deleteFromChart(e.id)}>-</button>
                                         {e.number}
                                         <button onClick={()=>props.addToChart({
                                            id: e.id ,
                                            image : e.image.url,
                                            name : e.name ,
                                            number : 1  ,
                                            price:e.price.raw
                                })}>+</button>
                                    </div>
                                    <div className="price">
                                        Total: {e.number*1*e.price}azn
                                    </div>
                            </div>)
                        })
                }
                
            </div>
        </div>
    )
}

const stateToProps = (state) =>
{
    return {
        products : state.chartElements
    }
}

export default connect(stateToProps,{addToChart,deleteFromChart})(Chart) ; 