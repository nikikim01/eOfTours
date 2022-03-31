import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import "./PaginaPrincipal.css";

export default class extends React.Component {
  render() {
    return (
      <div className="PaginaPrincipal-carouselContainer">
        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={40} totalSlides={3}>
          <Slider>
            <Slide className="PaginaPrincipal-slide" index={0}>
              <div className="PaginaPrincipal-sliderImg">
                <img src="https://storage.googleapis.com/eoftours/Basilica-de-la-Anunciacion-en-Nazaret-300x225.jpeg"></img>
              </div>
            </Slide>
            <Slide className="PaginaPrincipal-slide" index={1}>
              <div className="PaginaPrincipal-sliderImg">
                <img src="https://storage.googleapis.com/eoftours/israelCrosses225x300.jpeg"></img>
              </div>
            </Slide>
            <Slide className="PaginaPrincipal-slide" index={2}>
              <div className="PaginaPrincipal-sliderImg">
                <img src="https://storage.googleapis.com/eoftours/congregation300x200.jpeg"></img>
              </div>
            </Slide>
          </Slider>
          <div className="PaginaPrincipal-navButtons">
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    );
  }
}
