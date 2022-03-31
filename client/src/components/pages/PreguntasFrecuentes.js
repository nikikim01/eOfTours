import React, { Component, useState } from "react";
import { Link } from "@reach/router";
import Faq from "react-faq-component";

import "./PreguntasFrecuentes.css";

const data = {
  title: "FAQ (preguntas frequentes)",
  rows: [
    {
      title: "¿Qué es una peregrinación?",
      content: "asdfasdf asdf asdf lorem ipsum dolor sit amet",
    },
    {
      title: "¿Qué saber antes de ir?",
      content: "asdfasdf asdf asdf lorem ipsum dolor sit amet",
    },
    {
      title: "Ventajas de reservar con EOFTOUR",
      content: "asdfasdf asdf asdf lorem ipsum dolor sit amet",
    },
    {
      title: "¿Necesito visa?",
      content: "asdfasdf asdf asdf lorem ipsum dolor sit amet",
    },
    {
      title: "¿Qué moneda se utiliza?",
      content: "asdfasdf asdf asdf lorem ipsum dolor sit amet",
    },
    {
      title: "¿Necesito vacunas?",
      content: "asdfasdf asdf asdf lorem ipsum dolor sit amet",
    },
    {
      title: "¿Necesito aparatos eléctricos?",
      content: "asdfasdf asdf asdf lorem ipsum dolor sit amet",
    },
    {
      title: "¿Cómo saber la hora del destino?",
      content: "asdfasdf asdf asdf lorem ipsum dolor sit amet",
    },
    {
      title: "¿Cómo puedo guardar mi equipaje?",
      content: "asdfasdf asdf asdf lorem ipsum dolor sit amet",
    },
    {
      title: "¿Cómo me comunico a casa desde el destino?",
      content: "asdfasdf asdf asdf lorem ipsum dolor sit amet",
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "#365ee4",
  rowTitleColor: "black",
  rowContentColor: "#365ee4",
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

class PreguntasFrecuentes extends Component {
  render() {
    return (
      <>
        <div className="PreguntasFrecuentes-text">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </>
    );
  }
}

export default PreguntasFrecuentes;
