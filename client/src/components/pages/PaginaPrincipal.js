import React, { Component } from "react";
import ConectateButton from "../modules/ConectateButton.js";
import ImageGallery from "react-image-gallery";

import "./PaginaPrincipal.css";
import "../../utilities.css";

const images = [
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/pyramids1024x384.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/pyramids300x113.jpeg",
  },
  // {
  //   // TODO: NEED HIGHER QUALITY PHOTO
  //   original: "https://storage.googleapis.com/eoftours/esterno1024x630.jpeg",
  //   thumbnail: "https://storage.googleapis.com/eoftours/esterno300x184.jpeg",
  // },
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/main1-1024x683.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/main1-460x307.jpeg",
  },
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/alley1024x683.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/alley300x200.jpeg",
  },
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/MARICELA-768x1024.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/MARICELA-225x300.jpeg",
  },
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original:
      "https://storage.googleapis.com/eoftours/Basilica-de-la-Anunciacion-en-Nazaret638x479.jpeg",
    thumbnail:
      "https://storage.googleapis.com/eoftours/Basilica-de-la-Anunciacion-en-Nazaret-300x225.jpeg",
  },
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/boat1024x681.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/boat300x200.jpeg",
  },
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/church_people1024x681.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/church_people300x200.jpeg",
  },
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/congregation1024x681.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/congregation300x200.jpeg",
  },
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/crosses1440x1920.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/israelCrosses225x300.jpeg",
  },
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/candles511x768.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/candles200x300.jpeg",
  },
];

class PaginaPrincipal extends Component {
  render() {
    return (
      <>
        <div>
          <ImageGallery items={images} />
          <h1 className="PaginaPrincipal-imageText">
            PEREGRINACIONES Y VIAJES PARA QUE TE CONECTES CON DIOS
          </h1>
          <div className="PaginaPrincipal-conectateButtonImage">
            <ConectateButton />
          </div>
        </div>
        <div className="PaginaPrincipal-dottedDivider"></div>
        <h1 className="PaginaPrincipal-subheader">Lo Que Vas A Vivir...</h1>
        <h3 className="PaginaPrincipal-subsubheader">Peregrinaciones y Viajes</h3>
        <div className="PaginaPrincipal-dottedDivider"></div>
        <div className="PaginaPrincipal-porQueExpresionesDeFeContainer">
          <h1 className="PaginaPrincipal-header">??Por qu??? EXPRESIONES DE FE</h1>
          <div className="PaginaPrincipal-expresionesDeFeContainer">
            <div className="PaginaPrincipal-containerColumn">
              <div className="PaginaPrincipal-containerRow">
                <div className="PaginaPrincipal-iconHeaderContainer">
                  <i class="fa-solid fa-business-time fa-2x PaginaPrincipal-faMargin"></i>
                  <h2 className="PaginaPrincipal-expresionesDeFeHeader">Experiencia</h2>
                  <i class="fa-solid fa-business-time fa-2x PaginaPrincipal-faMargin"></i>
                </div>
                <p>
                  Te brindamos la mejor experiencia de peregrinaciones, para unirte y que te sientas
                  como en casa en estos lugares preciados.
                </p>
              </div>
              <div className="PaginaPrincipal-containerRow">
                <div className="PaginaPrincipal-iconHeaderContainer">
                  <i class="fa-solid fa-plane-departure fa-2x PaginaPrincipal-faMargin"></i>
                  <h2 className="PaginaPrincipal-expresionesDeFeHeader">Alojamiento de vuelo</h2>
                  <i class="fa-solid fa-plane-departure fa-2x PaginaPrincipal-faMargin"></i>
                </div>
                <p>
                  Te ofrecemos vuelos c??modos y de primera calidad y con los trayectos mas cortos,
                  adem??s siempre teniendo como prioridad los protocolos de bioseguridad para una
                  mejor tranquilidad en tu vuelo ??definitivamente vivir??s una experiencia de altura!
                </p>
              </div>
              <div className="PaginaPrincipal-containerRow">
                <div className="PaginaPrincipal-iconHeaderContainer">
                  <i class="fa-solid fa-face-laugh-beam fa-2x PaginaPrincipal-faMargin"></i>
                  <h2 className="PaginaPrincipal-expresionesDeFeHeader">
                    Clientes que desean volver
                  </h2>
                  <i class="fa-solid fa-face-laugh-beam fa-2x PaginaPrincipal-faMargin"></i>
                </div>
                <p>
                  En Expresiones de F??, cada persona es tratada como parte de nuestra familia y como
                  una joya preciosa. Esperamos te unas con nosotros para alguna de nuestras
                  peregrinaciones.
                </p>
              </div>
            </div>
            <div className="PaginaPrincipal-containerColumn">
              <div className="PaginaPrincipal-containerRow">
                <div className="PaginaPrincipal-iconHeaderContainer">
                  <i class="fa-solid fa-clipboard-list fa-2x PaginaPrincipal-faMargin"></i>
                  <h2 className="PaginaPrincipal-expresionesDeFeHeader">Itinerarios a la mano</h2>
                  <i class="fa-solid fa-clipboard-list fa-2x PaginaPrincipal-faMargin"></i>
                </div>
                <p>
                  Cada mes del a??o tenemos una peregrinaci??n diferente. Es decir que podr??s elegir
                  la que buscas.
                </p>
              </div>
              <div className="PaginaPrincipal-containerRow">
                <div className="PaginaPrincipal-iconHeaderContainer">
                  <i class="fa-solid fa-bed fa-2x PaginaPrincipal-faMargin"></i>
                  <h2 className="PaginaPrincipal-expresionesDeFeHeader">Hoteles c??modos</h2>
                  <i class="fa-solid fa-bed fa-2x PaginaPrincipal-faMargin"></i>
                </div>
                <p>
                  Los mejores hoteles limpios y c??modos que puedes encontrar con el alojamiento que
                  te merece. Todos los hoteles han sido verificados con todos los protocolos de
                  bioseguridad para garantizarte seguridad y tranquilidad en tu estad??a.
                </p>
              </div>
              <div className="PaginaPrincipal-containerRow">
                <div className="PaginaPrincipal-iconHeaderContainer">
                  <i class="fa-solid fa-circle-info fa-2x PaginaPrincipal-faMargin"></i>
                  <h2 className="PaginaPrincipal-expresionesDeFeHeader">Informaci??n actualizada</h2>
                  <i class="fa-solid fa-circle-info fa-2x PaginaPrincipal-faMargin"></i>
                </div>
                <p>
                  Los detalles e informaci??n de nuestro servicios y peregrinaciones, los puedes
                  encontrar en nuestro sitio web ?? contactarte directamente a nuestro link de
                  whatsaapp donde siempre estaremos dispuestos a ayudarte.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="PaginaPrincipal-conectateButtonAfterEOF">
          <ConectateButton />
        </div>
        <div className="PaginaPrincipal-dottedDivider"></div>
        <h1 className="PaginaPrincipal-header">Lugares para descansar</h1>
        <div className="PaginaPrincipal-lugaresParaDescansarContainer">
          <div className="PaginaPrincipal-lugaresParaDescansarRow">
            <div className="PaginaPrincipal-lugaresParaDescansarText">
              <i class="fa-solid fa-hotel fa-2x PaginaPrincipal-faMargin PaginaPrincipal-blue"></i>
              <h2>Hospedaje en el Hotel de 5, 4 Estrellas, limpios y c??modos.</h2>
              <i class="fa-solid fa-hotel fa-2x PaginaPrincipal-faMargin PaginaPrincipal-blue"></i>
            </div>
            <div className="PaginaPrincipal-lugaresParaDescansarText">
              {" "}
              <i class="fa-solid fa-place-of-worship fa-2x PaginaPrincipal-faMargin PaginaPrincipal-blue"></i>
              <h2>Hospedaje en Monasterios y conventos</h2>
              <i class="fa-solid fa-place-of-worship fa-2x PaginaPrincipal-faMargin PaginaPrincipal-blue"></i>
            </div>
          </div>
          <div className="PaginaPrincipal-lugaresParaDescansarRow">
            <img
              className="PaginaPrincipal-mediumImage"
              src="https://storage.googleapis.com/eoftours/prima-kings-hotel500x300.jpeg"
            />
            <img
              className="PaginaPrincipal-mediumImage"
              src="https://storage.googleapis.com/eoftours/esterno1024x630.jpeg"
            />
          </div>
          {/* <div className="PaginaPrincipal-containerColumn">
            <img
              className="PaginaPrincipal-mediumImage"
              src="https://storage.googleapis.com/eoftours/prima-kings-hotel500x300.jpeg"
            />
          </div>
          <div className="PaginaPrincipal-containerColumn">
            <i class="fa-solid fa-place-of-worship fa-2x PaginaPrincipal-faMargin"></i>
            <h2>Hospedaje en Monasterios y conventos</h2>
            
          </div> */}
        </div>
        <div className="PaginaPrincipal-conectateButtonAfterEOF">
          <ConectateButton />
        </div>
        <div className="PaginaPrincipal-dottedDivider"></div>
      </>
    );
  }
}

export default PaginaPrincipal;
