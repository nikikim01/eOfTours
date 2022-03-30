import React, { Component } from "react";
import "./PaginaPrincipal.css";
import ConectateButton from "../modules/ConectateButton.js";

class PaginaPrincipal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <ConectateButton />
        <p>pagina principal</p>
      </>
    );
  }
}

export default PaginaPrincipal;
