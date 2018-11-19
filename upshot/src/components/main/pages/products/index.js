import React, { Component } from "react";
import Product from "./product";
import ProductsData from "../../../../assets/data/products.json";

class Products extends Component {

 render() {
  return (
    <section className="page products">
      <div className="product-wrapper">
        {ProductsData.map((product, index)=>{
          return <Product key={index} data={product}/>
        })}
      </div>
    </section>
  )
 }
}

export default Products;