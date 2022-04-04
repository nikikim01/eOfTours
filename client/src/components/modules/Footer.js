import React, { Component, useState } from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <h3 className="Footer-informacion">INFORMACIÓN</h3>
            <div className="Footer-subcolumn">
              <h2>
                <Link to="/preguntasFrecuentes" className="Footer-informacion">
                  Preguntas Frecuentes
                </Link>
              </h2>
              <h2>
                <Link to="/terminosYCondiciones" className="Footer-informacion">
                  Términos y condiciones
                </Link>
              </h2>
              {/* <h2 className="Footer-informacion">
                <Link to="/informacion#seguro-de-viaje" className="Footer-informacion">
                  Seguro de viaje
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
                <Link to="/politicasDePrivacidad" className="Footer-informacion">
                  Políticas de privacidad
                </Link>
              </h2> */}

              <h2>
                <a
                  className="Footer-informacion"
                  href="http://eoftours.herokuapp.com/informacion#medios-de-pago"
                >
                  Medios de pago
                </a>
              </h2>
              {/* <h2>
                <a
                  className="Footer-informacion"
                  href="http://eoftours.herokuapp.com/informacion#pago-y-confirmacion"
                >
                  Pago y Confirmación
                </a>
              </h2> */}
            </div>
          </div>
          <div className="Footer-column">
            <h3 className="Footer-aCercaDe">A CERCA DE </h3>
            <div className="Footer-subcolumn">
              <h2 className="Footer-aCercaDe">
                <Link to="/quienesSomos" className="Footer-aCercaDe">
                  Nosotros
                </Link>
              </h2>
            </div>
          </div>
          <div className="Footer-column">
            <div className="Footer-subcolumn">
              <div className="Footer-socialMedia">
                <i className="fa-brands fa-facebook-square fa-6x"></i>
                <i class="fa-brands fa-twitter-square fa-6x"></i>
                <i class="fa-brands fa-instagram-square fa-6x"></i>
              </div>
              <ConectateButton />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
