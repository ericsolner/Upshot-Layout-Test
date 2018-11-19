import React, { Component } from "react";
import TopNav from '../TopNav'

class Header extends Component {

 render() {
  return (
    <div className="Header">
     <div className="Nav">
      <div className="logoCont">
       <img alt="logo" className="logo" src="../../../../assets/img/logo.png" />
       </div>
       <TopNav /> 
       </div> 
       <h1> THIS IS A HEADLINE.</h1>
       </div>
    );
}
}


export default Header;