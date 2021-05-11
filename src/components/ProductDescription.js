import React from 'react'

export default function ProductDescription(props) {
    return (
        <div className = "brandName">
        <span className = 'description'>
        {props.name}
        </span>
         <div className = "price">
           {props.retail_price_iso+" "+ props.retail_price_value} <span className = "baseValue">
             <del>{props.base_price_iso+" "+props.base_price_value}</del></span>
            <span className = "discount">(0% off)</span>
          </div>
      </div>
    )
}
