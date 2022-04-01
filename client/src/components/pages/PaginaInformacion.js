import React, { Component } from "react";
import smoothscroll from "smoothscroll-polyfill";

import "./PaginaInformacion.css";

// kick off the polyfill!
smoothscroll.polyfill();

class PaginaInformacion extends Component {
  render() {
    return (
      <>
        <nav className="scroll-nav">
          <div className="scroll-navContainer">
            <a className="scroll-a" href="#seguro-de-viaje">
              Seguro de viaje
            </a>
            <a className="scroll-a" href="#terminos-y-condiciones">
              Términos y condiciones
            </a>
            <a className="scroll-a" href="#pago-y-confirmacion">
              Pago y Confirmación
            </a>
          </div>
        </nav>
        <div className="scroll-container">
          <div className="scroll-page" id="seguro-de-viaje">
            Seguro de viaje yada yada yada scoobydoobadooh Seguro de viaje yada yada yada
            scoobydoobadooh Seguro de viaje yada yada yada scoobydoobadooh Seguro de viaje yada yada
            yada scoobydoobadooh Seguro de viaje yada yada yada scoobydoobadooh Seguro de viaje yada
            yada yada scoobydoobadooh Seguro de viaje yada yada yada scoobydoobadooh
          </div>
          <div className="scroll-spacer"></div>
          <div className="scroll-page" id="terminos-y-condiciones">
            Términos y condiciones and so and so and this and that
          </div>
          <div className="scroll-spacer"></div>

          <div className="scroll-page" id="pago-y-confirmacion">
            Pago y Confirmación yep all confirmed
          </div>
        </div>
      </>
    );
  }
}

export default PaginaInformacion;
