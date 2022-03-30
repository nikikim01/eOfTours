import React, { Component } from "react";

class PaginaPrincipal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <button
          className="PaginaPrincipal-button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "whatsapp://send?text=hello&phone=18055093354";
          }}
        >
          CONÉCTATE
        </button>
        <p>pagina principal</p>
      </>
    );
  }
}

export default PaginaPrincipal;
