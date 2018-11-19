import React, { Component } from "react";
import { Col } from 'react-bootstrap';
import ProductsData from "../../../../assets/data/products.json";
import Product from "./product";

class ProductContainer extends Component {
  render() {
    return (
      <div className="ProductContainer">
        {
          ProductsData.map((product, index) =>
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <Product
                product={product}
                index={index}
              />
            </Col>
          )
        }
      </div>
    );
  }
}
export default ProductContainer;