import styles from './App.css';
import React,{useState} from "react";
import {PRODUCTS} from "./data/products";
import {CATEGORIES} from "./data/categories";

function App() {
  const [categories, setcategories] = useState(CATEGORIES);
  const [products, setProducts] = useState(PRODUCTS);
  
  

  return (
    <div className="App">
     <h1>hi</h1>
     <div className = "top-scroll">
     <ul>
      {categories.map( category => (
        <li key = {category.id} >{category.name}</li>
      ))}
     </ul>
     </div>

    </div>
  );
}

export default App;
