import React, { Component, useState } from "react";
import { Link } from "@reach/router";

import "./Footer.css";
import ConectateButton from "./ConectateButton";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="Footer-container">
          <div className="Footer-column">
            <h3 className="Footer-peregrinaciones">PEREGRINACIONES</h3>
            <div className="Footer-subcolumn">
              <h2>
                <a className="Footer-peregrinaciones" href="#Tierrasanta">
                  Tierra Santa
                </a>
              </h2>
              <h2>
                <a className="Footer-peregrinaciones" href="#Italia">
                  Italia
                </a>
              </h2>
              <h2>
                <a className="Footer-peregrinaciones" href="#Jordania">
                  Jordania
                </a>
              </h2>
              <h2>
                <a className="Footer-peregrinaciones" href="#Egipto">
                  Egipto
                </a>
              </h2>
              <h2>
                <a className="Footer-peregrinaciones" href="#Viajesmarianos">
                  Viajes Marianos
                </a>
              </h2>
            </div>
          </div>
          <div className="Footer-column">
            <h3 className="Footer-informacion">INFORMACION</h3>
            <div className="Footer-subcolumn">
              <h2 className="Footer-informacion">Seguro de viaje</h2>
              <h2>
                <Link to="/preguntasFrecuentes" className="Footer-informacion">
                  Preguntas Frecuentes
                </Link>
              </h2>
              <h2>
                <Link to="/garantiaDeReembolso" className="Footer-informacion">
                  Garantía de reembolso
                </Link>
              </h2>
              <h2>
                <Link to="/politicasDeCancelacion" className="Footer-informacion">
                  Políticas de cancelación
                </Link>
              </h2>
              <h2>
                <a
                  className="Footer-informacion"
                  href="http://eoftours.com/%20politicas-de-privacidad%20/"
                >
                  Políticas de privacidad
                </a>
              </h2>
              <h2>
                <a
                  className="Footer-informacion"
                  href="http://eoftours.com/%20Terminos-y-Condiciones%20/"
                >
                  Términos y condiciones
                </a>
              </h2>
              <h2>
                <a className="Footer-informacion" href="http://eoftours.com/%20Medios-de-pago%20/">
                  Medios de pago
                </a>
              </h2>
              <h2>
                <a className="Footer-informacion" href="http://eoftours.com/pago-y-confirmacion/">
                  Pago y Confirmación
                </a>
              </h2>
            </div>
          </div>
          <div className="Footer-column">
            <h3 className="Footer-aCercaDe">A CERCA DE </h3>
            <div className="Footer-subcolumn">
              <h2 className="Footer-aCercaDe">Nosotros</h2>
            </div>
          </div>
          <div className="Footer-column">
            <div className="Footer-subcolumn">
              <ConectateButton />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
