import React from 'react';
import ProductDesigner from './ProductDesigner';
import ProductImage from './ProductImage';
import ProductName from './ProductName'


export default function Card(props) {
    return (
        <div>
            <ProductImage img = {props.brandImg}/>
            <ProductDesigner info = {props.brandInfo} />
            <ProductName name = {props.productName} />
        </div>
    )
}
