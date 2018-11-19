import { Col, Grid, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import ProductContainer from '../../productCont';
import BottomNav from '../bottomNav/';

class Products extends Component {
  render() {
    return (
      <div className="Products">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={3}>
              <BottomNav />
            </Col>
            <Col xs={12} md={9}>
              <ProductContainer />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Products;
