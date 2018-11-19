import React, { Component } from "react";


class Product extends Component {

 render() {
  return (
    <div className="product">
        <div className="product-wrap">
          <img src={require(`../../../../../assets/img/${this.props.data.image}`)}/>
        <h3>{this.props.data.title}</h3>
        <h3>{this.props.data.description}</h3>
        </div>
    </div>
  )
 }
}

export default Product;