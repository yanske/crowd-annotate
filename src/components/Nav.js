import React, { Component } from 'react';
import hamburger from '../images/menu.svg';
import '../style/Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <h1 className="title">CrowdAnnotate</h1>
        <img className="menu" src={hamburger} alt="Hamburger Menu"/>
      </nav>
    );
  }
}

export default Nav;