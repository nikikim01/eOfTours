import React, { Component } from "react";
import "./ConectateButton.css";

class ConectateButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        className="ConectateButton-button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "whatsapp://send?text=hello&phone=18055093354";
        }}
      >
        CONÉCTATE
      </button>
    );
  }
}
export default ConectateButton;
