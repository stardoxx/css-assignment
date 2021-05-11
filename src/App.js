import React, {useState} from "react";
import {PRODUCTS} from "./data/products";
import {CATEGORIES} from "./data/categories";

import ProductImage from './components/ProductImage';
import LikeOverImage from './components/LikeOverImage';
import DesignerDetail from './components/DesignerDetail';
import ProductDescription from './components/ProductDescription';


function App() {
  
  
  
  function createCard(product,index){
    // console.log(index);
    let sampleClass = "content-info";
    if(index%2 !== 0){
      sampleClass += " content-info-right";
    }
    return(
      <div key = {index} className = "item-card">
       
       
        <ProductImage 
        key = {index}  
        src = {product.featured_image.src}
        alt = {product.name}
        />
       
        <LikeOverImage/>

        <div className = {sampleClass}>
          
          <DesignerDetail
            key  = {index}
            name = {product.brand_info.name}
          />
        <ProductDescription 
        key = {index}
        name = {product.name}
        retail_price_iso = {product.retail_price.iso}
        retail_price_value = {product.retail_price.value}
        base_price_iso = {product.base_price.iso}
        base_price_value = {product.base_price.value}
          />
        </div>
      </div>
    )
  };

//  const Cats = [{"id" : "0000", "name": "All"}, ...CATEGORIES];

  const [categories, setCategory ] = useState([{"id" : "0000", "name": "All"}, ...CATEGORIES]);
  const [currentTab, setCurrentTab] = useState("0000");
//  function setCategory(prev)



  // function handleChange(e){
  //   e.preventDefault();
  //   const change = e.target.value;
  //   setCategory()
  // }


  return (
    <div className="App">
     <div className = "top" >
       <div className = "bag">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
        </svg>
       </div>
     <div className = "top-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
          </svg>
     </div>
    <div>
    
    </div>
     </div>
     <h1 className = "header">Accessories</h1>
     <div className = "category-container" >
     
      {categories.map( category => (
        <p className ={category.id === currentTab ? "header-buttons header-selected" : "header-buttons" }  key = {category.id} onClick = {()=> setCurrentTab(category.id)} >{category.name}</p>
      ))}
     </div>
     <div className = "items">
       {PRODUCTS.map(createCard)}
     </div>
     <div className = "filter-sort">
       <div className = "filter">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter-left" viewBox="0 0 16 16">
         <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
      </svg> filter |
       </div>
       <div className = "sort">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
          <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
        </svg>
            sort
       </div>
     </div>

    </div>
  );
}

export default App;
