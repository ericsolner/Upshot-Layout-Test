import React, { Component } from 'react';
//import {Route, Switch } from 'react-router-dom';
import Products from './pages/productCont/products/';
import About from './pages/about';

class Main extends Component {

  componentWillAppear(){} 

  render() {
    return (
      <main>
      <About/>      
      <Products/>
      </main>
    );
  }
}

export default Main;
