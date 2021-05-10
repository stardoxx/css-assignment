import './App.css';
import React from "react";
import {PRODUCTS} from "./data/products";
import {CATEGORIES} from "./data/categories";
//import Card from './components/Card';


function App() {
  
  // function createCard(product){
  //  return(
  //    <Card
  //    key = {product.id}
  //    productName = {product.name}
  //    brandInfo = {product.brand_info}
  //    brandImg = {product.feature_image}
  //    />
  //  );
  // }
  
  function BrandName(product){
    return(
      <div>
       
        <div className = "brandImg">
          <img src = {product.featured_image.src} width = {product.featured_image.width}
           height = {product.featured_image.height} alt = {product.name} />
        </div>
        <div>
        <div className = "brandName">
        {product.name}
           <div className = "price">
             {product.retail_price.iso+" "+product.retail_price.value} <span className = "baseValue">
               <del>{product.base_price.iso+" "+product.base_price.value}</del></span>
              (0%)
            </div>
        </div>
        </div>
      </div>
    )
  };





  return (
    <div className="App">
     
     <h1 className = "header">hi</h1>
     <div className = "category-container" >
     
      {CATEGORIES.map( category => (
        <p key = {category.id} >{category.name}</p>
      ))}
     </div>
     <div>
       {PRODUCTS.map(BrandName)}
     </div>
     

    </div>
  );
}

export default App;
