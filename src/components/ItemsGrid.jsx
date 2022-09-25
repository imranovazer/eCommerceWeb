import React from "react";

export default function ItemsGrid()
{
    return(
        <div className="ItemsGrid">
            <div className="SortSettings">
                <ul>
                    <li>
                        ALL
                    </li>
                     <li>
                        ACCESORIES
                    </li>
                    <li>
                        ELECTRONICS
                    </li>
                     <li>
                        SHOES
                    </li>

                </ul>
            </div>
            <div className="ProductsGrid">
                
            </div>
        </div>
    ) ;
}