import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

import "./PaginaPrincipal.css";
import "../../utilities.css";

const images = [
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/alley1024x683.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/alley1024x683.jpeg",
  },
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original:
      "https://storage.googleapis.com/eoftours/Basilica-de-la-Anunciacion-en-Nazaret-300x225.jpeg",
    thumbnail:
      "https://storage.googleapis.com/eoftours/Basilica-de-la-Anunciacion-en-Nazaret-300x225.jpeg",
  },
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/boat300x200.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/boat300x200.jpeg",
  },
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/church_peopl300x200.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/church_peopl300x200.jpeg",
  },
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/congregation300x200.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/congregation300x200.jpeg",
  },
  {
    // TODO: NEED HIGHER QUALITY PHOTO
    original: "https://storage.googleapis.com/eoftours/israelCrosses225x300.jpeg",
    thumbnail: "https://storage.googleapis.com/eoftours/israelCrosses225x300.jpeg",
  },
];

class PaginaPrincipal extends Component {
  render() {
    return (
      <>
        <ImageGallery items={images} />
      </>
    );
  }
}

export default PaginaPrincipal;
