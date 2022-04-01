import React, { Component } from "react";
import smoothscroll from "smoothscroll-polyfill";

import "./PaginaInformacion.css";

// kick off the polyfill!
smoothscroll.polyfill();

class PaginaInformacion extends Component {
  render() {
    return (
      <>
        <nav className="PaginaInformacion-nav">
          <div className="PaginaInformacion-navContainer">
            <a className="PaginaInformacion-a" href="#seguro-de-viaje">
              Seguro de viaje
            </a>
            <a className="PaginaInformacion-a" href="#terminos-y-condiciones">
              Términos y condiciones
            </a>
            <a className="PaginaInformacion-a" href="#pago-y-confirmacion">
              Pago y Confirmación
            </a>
            <a className="PaginaInformacion-a" href="#medios-de-pago">
              Medios de Pago
            </a>
          </div>
        </nav>
        <div className="PaginaInformacion-container">
          <div className="PaginaInformacion-title" id="seguro-de-viaje">
            Seguro de Viaje
          </div>
          <div className="PaginaInformacion-page">
            Seguro de viaje yada yada yada scoobydoobydooh
          </div>
          <div className="PaginaInformacion-title" id="terminos-y-condiciones">
            Términos Y Condiciones
          </div>
          <div className="PaginaInformacion-page">
            Términos y condiciones and so and so and this and that Términos y condiciones and so and
            so and this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that Términos y condiciones and so and so and
            this and that Términos y condiciones and so and so and this and that Términos y
            condiciones and so and so and this and that
          </div>
          <div className="PaginaInformacion-title" id="pago-y-confirmacion">
            Pago Y Confirimación
          </div>
          <div className="PaginaInformacion-page">Pago y Confirmación yep all confirmed</div>
          <div className="PaginaInformacion-title" id="medios-de-pago">
            Medios de Pago
          </div>
          <div className="PaginaInformacion-page">
            Medios de Pago information goes here yada yada what do I put
          </div>
        </div>
      </>
    );
  }
}

export default PaginaInformacion;
