import React, { Component } from "react";
import "./ConectateButton.css";

class ConectateButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <button
          className="ConectateButton-button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://wa.link/or025c";
          }}
        >
          CONÉCTATE
        </button>
      </>
    );
  }
}
export default ConectateButton;
