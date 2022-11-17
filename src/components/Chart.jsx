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
                            </div>)
                        })
                }
                <div className="product"></div>
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