import React, { Component } from "react";
import { Link } from "@reach/router";

import "./QuienesSomos.css";

class QuienesSomos extends Component {
  render() {
    return (
      <>
        <div className="QuienesSomos-container">
          <p>Quiénes Somos</p>
          <div className="QuienesSomos-imgContainer">
            <img
              src="https://storage.googleapis.com/eoftours/placeholderQuienesSomos.jpeg"
              alt="Israel Streets"
              className="QuienesSomos-img"
            ></img>
            <p className="QuienesSomos-imgTitle">placeholderImage</p>
            {/* <p className="QuienesSomos-imgTitle">Nosotros</p> */}
          </div>
          <p className="QuienesSomos-title">Quiénes somos</p>
          <p>
            EXPRESIONES DE FE, es el nombre de esta compañía que iluminada bajo la fuerza del
            Espíritu Santo, ha facilitado que muchos puedan ir aquellos lugares santos donde pueden
            expresar su Fe, en peregrinación terrena, simbolo de la futura peregrinación hacia la
            Jerusalén celestial.
          </p>
          <p>
            Las huellas expresan el fin de esta vocación, procurar que todos peregrinen en este
            mundo y al mismo tiempo dejen huellas de amor a todos aquellos que en el peregrinar de
            la vida, Dios pone en su camino.
          </p>
          <p>
            El símbolo de la Paloma que desde el origen de estas peregrinaciones ha sido parte del
            emblema, el cual significa el Espíritu Santo que mueve e ilumina esta vocación de hacer
            que muchos se encuentren con Dios, en cada uno de los lugares visitados, anima y da
            impulso a la peregrinación.
          </p>
          <p>
            Los rayos de colores simbolizan los diferentes dones, carismas y expresiones de Fe, que
            gracias a las miciones del Espíritu Santo, todos recibimos y podemos dar, tienden a
            formar un círculo que significa el mundo y con él toda su grandeza y diversidad, que nos
            llama a acercarnos a las diferentes culturas y creencias con un profundo respeto
            cristiano.
          </p>
        </div>
      </>
    );
  }
}

export default QuienesSomos;
