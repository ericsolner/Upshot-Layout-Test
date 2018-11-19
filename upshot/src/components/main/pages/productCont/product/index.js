import React, { Component } from "react";
import { Button } from 'react-bootstrap';

const isMobile = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    const btn = document.getElementById(`buyBtn${event.target.id.slice(-1)}`);

    btn.classList.add('buyBtnClick');
  }

  componentDidMount() {
    if (isMobile) {
      document.addEventListener('touchstart', event => {
        this.handleButtonClick(event);
      });
    }
  }

  componentWillUnmount() {
    document.removeEventHandler('touchStart');
  }

  render() {
    return (
      <div className="ProductCard" id={this.props.index}>
        <div className="productImageCont">
          <img className="productImage" alt="img" src={require(`../../../../../assets/img/${this.props.product.image}`)}/>
        </div>
        <h3 className="productTitle">{this.props.product.title}</h3>
        <p className="productDesc">{this.props.product.description}</p>
        <div className="buyBtn" id={`buyBtn${this.props.index}`}>
          <h3 className="btnText" id={`btnText${this.props.index}`}>BUY NOW</h3>
        </div>
      </div>
    );
  }
}

export default ProductCard;