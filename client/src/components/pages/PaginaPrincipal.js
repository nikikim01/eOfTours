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
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/esterno1024x630.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/esterno300x184.jpeg",
  },
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
        <ImageGallery items={images} />
        <h1 className="PaginaPrincipal-imageText">
          PEREGRINACIONES Y VIAJES PARA QUE TE CONECTES CON DIOS
        </h1>
        <div className="PaginaPrincipal-conectateButton">
          <ConectateButton />
        </div>
      </>
    );
  }
}

export default PaginaPrincipal;
