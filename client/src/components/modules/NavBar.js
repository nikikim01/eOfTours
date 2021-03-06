import React, { Component, useState } from "react";
import { Link } from "@reach/router";

import "./NavBar.css";

// The Navigation Bar at the top of all pages - takes no props

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    return (
      <>
        <nav className="NavBar-container">
          <Link to="/" className="NavBar-link">
            <img
              src="https://storage.googleapis.com/eoftours/EOFTOURSLOGOrectangle.jpg"
              className="NavBar-logo"
            ></img>
          </Link>
          <div className="NavBar-subPages">
            <Link to="/quienesSomos" className="NavBar-link">
              <div className="NavBar-text">QUIÉNES SOMOS</div>
            </Link>
            <Link to="/informacion" className="NavBar-link">
              <div className="NavBar-text">INFORMACIÓN</div>
            </Link>
            <Link to="/peregrinaciones" className="NavBar-link">
              <div className="NavBar-text">PEREGRINACIONES</div>
            </Link>
            <div className="NavBar-text">
              <a href="tel:+1-805-509-3354" className="NavBar-link">
                LLAMADA +1 (805) 509-3354
              </a>
            </div>
            <div className="NavBar-text">
              <a className="NavBar-link" href="whatsapp://send?text=hello&phone=18055093354">
                CONÉCTATE
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
